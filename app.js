/* ============================================================
   FFXIV DUTY BRIEFINGS — APP CODE
   This file builds every page you see. It is split into sections:
     1. Settings and lookup lists
     2. Small helper functions
     3. Search history (kept only on this phone)
     4. Search
     5. Pages: home, filter options, duty list, duty briefing
     6. Navigation (which page to show, back button, scroll position)
     7. Offline support and start-up

   How pages work: the part of the web address after "#" says which page
   to show, for example:
     #/                      home page
     #/?q=tower              home page showing search results for "tower"
     #/browse/type           the options for "Duty Type"
     #/list/type/Dungeon     every dungeon
     #/duty/12               the briefing for duty number 12
     #/duty/12/1/extreme     ...scrolled to its 2nd boss, showing Extreme
   Using the address like this means the phone's Back gesture just works.
   ============================================================ */
'use strict';

/* ---------- 1. SETTINGS AND LOOKUP LISTS ---------- */

// Every duty, loaded by data.js before this file runs.
const DATA = window.FF || [];

// Search history is saved in the phone's own storage under this name.
const HISTORY_KEY = 'ffdb-search-history';
const HISTORY_LIMIT = 10;

// How many results to show in each search section before "Show more".
const RESULTS_STEP = 15;

// Searches shorter than this aren't run, because one letter matches almost everything.
const MIN_SEARCH_LENGTH = 2;

const EXPANSIONS = ['Dawntrail', 'Endwalker', 'Shadowbringers', 'Stormblood', 'Heavensward', 'A Realm Reborn'];
const DUTY_TYPES = ['Dungeon', 'Trial', 'Raid', 'Alliance Raid', 'Variant & Criterion', 'Ultimate', 'Exploration'];
const ROULETTES = ['Leveling', 'High-level Dungeons', 'Level Cap Dungeons', 'Expert', 'Main Scenario',
  'Trials', 'Normal Raids', 'Alliance Raids', 'Guildhests'];
const LIMITED_JOBS = ['Blue Mage', 'Beastmaster'];

// Difficulty keys used in data.js, with the names shown on screen, in display order.
const DIFFICULTIES = [
  ['normal', 'Normal'], ['hard', 'Hard'], ['extreme', 'Extreme'], ['savage', 'Savage'],
  ['unreal', 'Unreal'], ['ultimate', 'Ultimate'], ['chaotic', 'Chaotic'],
  ['variant', 'Variant'], ['advanced', 'Advanced'], ['criterion', 'Criterion']
];
const DIFF_KEYS = DIFFICULTIES.map(function (d) { return d[0]; });

// Headings used when duties are grouped by type.
const TYPE_HEADINGS = {
  'Raid': 'Raids (Normal & Savage)',
  'Variant & Criterion': 'Variant & Criterion',
  'Exploration': 'Exploration zones',
  'Limited Job': 'Limited job content'
};

// Mechanic tags shown on each boss card. Each tag is added when its pattern
// appears in the boss's text; tapping a tag searches for it.
const TAGS = [
  ['tankbuster', /tank ?buster|\bbuster/i], ['raidwide', /raidwide|raid-wide|party-wide/i],
  ['stack', /\bstack(s)?\b(?! of)|stack marker|line stack|shared/i], ['spread', /spread/i],
  ['tower', /tower/i], ['knockback', /knock ?back|knocked/i],
  ['gaze', /gaze|look away|petrif|line-of-sight/i], ['adds', /\badds?\b/i], ['enrage', /enrage/i],
  ['tether', /tether/i], ['cleave', /cleave/i], ['donut', /donut/i], ['cone', /\bcones?\b|conal/i],
  ['proximity', /proximity/i], ['cleanse', /cleanse|esuna|doom/i],
  ['interrupt', /interrupt|interject|silence|stun them/i], ['dot', /bleed|\bdot\b|poison|dropsy/i],
  ['ring out', /fall off|knocked off|death wall|lethal edge|instantly lethal|pushed off|off the arena/i],
  ['movement check', /keep moving|stop moving|stand still|acceleration bomb|stay perfectly still|don't move/i],
  ['puddles', /puddle/i], ['exaflare', /exaflare/i]
];

// Small line-drawing icons (SVG) used on the home page buttons and search box.
const ICONS = {
  type: '<svg viewBox="0 0 24 24"><path d="M4 21V9l8-6 8 6v12"/><path d="M9 21v-6h6v6"/></svg>',
  rl: '<svg viewBox="0 0 24 24"><path d="M20 12a8 8 0 0 1-14 5.3"/><path d="M4 12a8 8 0 0 1 14-5.3"/><path d="M18 3v4h-4M6 21v-4h4"/></svg>',
  exp: '<svg viewBox="0 0 24 24"><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 21V5M8 7h7"/></svg>',
  lj: '<svg viewBox="0 0 24 24"><path d="M3 6c3 1 6 1 9-1 3 2 6 2 9 1 0 7-3 12-9 13C6 18 3 13 3 6z"/><path d="M8 11h2M14 11h2"/></svg>',
  search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5 21 21"/></svg>',
  clock: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>'
};

// The four ways to browse, shown as buttons on the home page.
//   title:   button text        hint:    small text under it
//   options: choices on its page groupBy: how its duty list is grouped
//   matches: answers "does this duty belong under this choice?"
const FILTERS = {
  type: {
    title: 'Duty Type', hint: 'Dungeons, trials, raids and more', options: DUTY_TYPES, groupBy: 'exp',
    matches: function (duty, value) { return duty.type === value; }
  },
  rl: {
    title: 'Duty Roulette', hint: 'What each roulette can give you', options: ROULETTES, groupBy: 'exp',
    matches: function (duty, value) { return (duty.rl || []).indexOf(value) >= 0; }
  },
  exp: {
    title: 'Expansion', hint: 'A Realm Reborn to Dawntrail', options: EXPANSIONS, groupBy: 'type',
    matches: function (duty, value) { return duty.exp === value; }
  },
  lj: {
    title: 'Limited Job', hint: 'Blue Mage and Beastmaster content', options: LIMITED_JOBS, groupBy: 'exp',
    matches: function (duty, value) { return duty.lj === value; }
  }
};
const FILTER_ORDER = ['type', 'rl', 'exp', 'lj'];

/* ---------- 2. SMALL HELPER FUNCTIONS ---------- */

/** Creates a page element (e.g. a 'div'), optionally with a CSS class and text inside it. */
function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

/** Simplifies text for comparing: lower case, accents and apostrophes removed, single spaces.
    So "Valigarmanda's" and "valigarmandas" count as the same when searching. */
function normalise(text) {
  return (text || '')
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/\s+/g, ' ');
}

/** Splits what was typed into separate words, e.g. "acceleration bomb" → ["acceleration", "bomb"]. */
function searchTerms(query) {
  return normalise(query.trim()).split(' ').filter(Boolean);
}

/** Makes characters like "?" or "(" safe to use inside a search pattern. */
function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** Returns the text with every search word wrapped in a <mark> so it shows highlighted. */
function highlighted(text, terms) {
  const fragment = document.createDocumentFragment();
  if (!terms.length) {
    fragment.append(text);
    return fragment;
  }
  const pattern = new RegExp('(' + terms.map(escapeRegExp).join('|') + ')', 'gi');
  // Splitting on a pattern in brackets keeps the matched words at the odd positions.
  text.split(pattern).forEach(function (part, i) {
    if (i % 2 === 1) fragment.append(el('mark', null, part));
    else if (part) fragment.append(part);
  });
  return fragment;
}

/** Splits an ability line "Name|What happens" into { name, text }. Lines with no "|" have no name. */
function splitAbility(line) {
  const bar = line.indexOf('|');
  return bar >= 0 ? { name: line.slice(0, bar), text: line.slice(bar + 1) } : { name: '', text: line };
}

/** Lists the difficulties one boss has, in the standard order (Normal first). */
function bossDifficulties(boss) {
  return DIFF_KEYS.filter(function (key) { return boss.d[key]; });
}

/** Lists every difficulty found across all of a duty's bosses, worked out once and remembered. */
function dutyDifficulties(duty) {
  if (!duty._diffs) {
    duty._diffs = DIFF_KEYS.filter(function (key) {
      return duty.bosses.some(function (boss) { return boss.d[key]; });
    });
  }
  return duty._diffs;
}

/** The on-screen name of a difficulty, using the duty's own custom name if data.js gives one. */
function diffLabel(duty, key) {
  if (duty.dlabel && duty.dlabel[key]) return duty.dlabel[key];
  const found = DIFFICULTIES.find(function (d) { return d[0] === key; });
  return found ? found[1] : key;
}

/** Makes a small coloured label for a difficulty, e.g. a red "Extreme". */
function diffPill(duty, key) {
  return el('span', 'pill diff d-' + key, diffLabel(duty, key));
}

/** Returns "1 duty" or "5 duties": the number with the right word. */
function plural(count, one, many) {
  return count + ' ' + (count === 1 ? one : many);
}

/** Works out which mechanic tags (tower, gaze...) apply to a boss by scanning all its text. */
function bossTags(boss) {
  const allText = [boss.key || ''].concat(
    bossDifficulties(boss).map(function (key) { return boss.d[key].join(' '); })
  ).join(' ');
  return TAGS.filter(function (tag) { return tag[1].test(allText); }).map(function (tag) { return tag[0]; });
}

/** Sorts duties by level, keeping data order for duties of the same level. */
function byLevel(a, b) {
  return (a.lv - b.lv) || (a.id - b.id);
}

/* ---------- 3. SEARCH HISTORY (KEPT ONLY ON THIS PHONE) ----------
   Uses localStorage: a small storage area inside the app on this phone.
   Nothing is ever sent anywhere. Every use is wrapped in try/catch because
   storage can be switched off or full, and the app must still work then. */

/** Reads the saved search history, newest first. Returns an empty list if there is none. */
function loadHistory() {
  try {
    const saved = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
    if (!Array.isArray(saved)) return [];
    return saved.filter(function (item) { return typeof item === 'string'; }).slice(0, HISTORY_LIMIT);
  } catch (error) {
    return [];
  }
}

/** Adds a search to the top of the history, removes any older copy of it, and keeps only the newest 10. */
function addToHistory(query) {
  const clean = query.trim();
  if (clean.length < MIN_SEARCH_LENGTH) return;
  const list = loadHistory().filter(function (item) { return item.toLowerCase() !== clean.toLowerCase(); });
  list.unshift(clean);
  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(list.slice(0, HISTORY_LIMIT)));
  } catch (error) { /* storage unavailable: history just isn't saved */ }
}

/** Deletes the whole search history from the phone. */
function clearHistory() {
  try {
    localStorage.removeItem(HISTORY_KEY);
  } catch (error) { /* nothing to clear */ }
}

/* ---------- 4. SEARCH ---------- */

// What has been typed in the search box. Kept while you move between pages,
// so coming back to the home page shows the same results.
let currentQuery = '';

// The list of everything searchable. Built once (see buildSearchIndex) and reused.
let searchIndex = null;

/** Builds one big list of every duty, boss and ability with simplified text to search in.
    Doing this once up front keeps each keystroke fast on the phone. */
function buildSearchIndex() {
  const index = { duties: [], bosses: [], abilities: [] };
  DATA.forEach(function (duty) {
    index.duties.push({ duty: duty, key: normalise(duty.inst + ' ' + (duty.lj || '')) });
    duty.bosses.forEach(function (boss, bossIndex) {
      index.bosses.push({ duty: duty, boss: boss, bossIndex: bossIndex, key: normalise(boss.n + ' ' + (boss.sub || '')) });
      bossDifficulties(boss).forEach(function (diff) {
        boss.d[diff].forEach(function (line) {
          const ability = splitAbility(line);
          index.abilities.push({
            duty: duty, boss: boss, bossIndex: bossIndex, diff: diff,
            name: ability.name, text: ability.text,
            nameKey: normalise(ability.name), textKey: normalise(ability.text)
          });
        });
      });
    });
  });
  return index;
}

/** Returns the search index, building it first if this is the first search. */
function getSearchIndex() {
  if (!searchIndex) searchIndex = buildSearchIndex();
  return searchIndex;
}

/** Scores how well some text matches the search (lower is better), or -1 for no match.
    0 = starts with what you typed, 1 = contains it exactly, 2 = contains every word somewhere. */
function matchScore(key, terms, phrase) {
  if (!key) return -1;
  for (let i = 0; i < terms.length; i++) {
    if (key.indexOf(terms[i]) < 0) return -1;
  }
  if (key.indexOf(phrase) === 0) return 0;
  if (key.indexOf(phrase) > 0) return 1;
  return 2;
}

/** Keeps the items that match, best matches first. getKey says which text of an item to check. */
function rankMatches(items, terms, phrase, getKey, getName) {
  const scored = [];
  items.forEach(function (item) {
    const score = matchScore(getKey(item), terms, phrase);
    if (score >= 0) scored.push({ item: item, score: score });
  });
  scored.sort(function (a, b) {
    return (a.score - b.score) || getName(a.item).localeCompare(getName(b.item));
  });
  return scored.map(function (s) { return s.item; });
}

/** Runs a search and returns four lists: matching duties, bosses, ability names,
    and abilities that only mention the words in their description. */
function runSearch(query) {
  const terms = searchTerms(query);
  const phrase = terms.join(' ');
  const index = getSearchIndex();
  const named = index.abilities.filter(function (a) { return a.name; });
  const abilities = rankMatches(named, terms, phrase,
    function (a) { return a.nameKey; }, function (a) { return a.name; });
  const nameHits = new Set(abilities);
  return {
    terms: terms,
    duties: rankMatches(index.duties, terms, phrase,
      function (d) { return d.key; }, function (d) { return d.duty.inst; }),
    bosses: rankMatches(index.bosses, terms, phrase,
      function (b) { return b.key; }, function (b) { return b.boss.n; }),
    abilities: abilities,
    mentions: rankMatches(index.abilities.filter(function (a) { return !nameHits.has(a); }), terms, phrase,
      function (a) { return a.textKey; }, function (a) { return a.boss.n; })
  };
}

/** The web address of a duty's briefing page, optionally pointing at one boss and difficulty. */
function dutyLink(duty, bossIndex, diff) {
  let link = '#/duty/' + duty.id;
  if (bossIndex != null) link += '/' + bossIndex + (diff ? '/' + diff : '');
  return link;
}

/** Builds one tappable search-result row. */
function resultRow(href, title, sub, terms, extra) {
  const row = el('a', 'row');
  row.href = href;
  const titleEl = el('span', 'row-title');
  titleEl.append(highlighted(title, terms));
  row.append(titleEl);
  if (extra) row.append(extra);
  if (sub) {
    const subEl = el('span', 'row-sub clamp');
    if (typeof sub === 'string') subEl.append(highlighted(sub, terms));
    else subEl.append(sub);
    row.append(subEl);
  }
  return row;
}

/** Draws one section of results (e.g. "Bosses") with a "Show more" button if there are lots. */
function renderResultSection(container, heading, items, makeRow) {
  if (!items.length) return;
  container.append(el('h2', 'section-h', heading + ' (' + items.length + ')'));
  const list = el('div', 'list');
  container.append(list);
  let shown = 0;
  const moreBtn = el('button', 'more-btn');
  moreBtn.type = 'button';

  // Adds the next batch of rows, and hides the button once everything is shown.
  function showMore() {
    items.slice(shown, shown + RESULTS_STEP).forEach(function (item) { list.append(makeRow(item)); });
    shown = Math.min(shown + RESULTS_STEP, items.length);
    moreBtn.textContent = 'Show ' + Math.min(RESULTS_STEP, items.length - shown) + ' more';
    moreBtn.hidden = shown >= items.length;
  }
  moreBtn.addEventListener('click', showMore);
  container.append(moreBtn);
  showMore();
}

/** Fills the results area of the home page with everything matching the query. */
function renderResults(container, query) {
  container.textContent = '';
  if (query.trim().length < MIN_SEARCH_LENGTH) {
    container.append(el('p', 'empty', 'Keep typing to search…'));
    return;
  }
  const found = runSearch(query);
  const terms = found.terms;

  renderResultSection(container, 'Duties', found.duties, function (d) {
    const duty = d.duty;
    return resultRow(dutyLink(duty), duty.inst,
      duty.exp + ' · ' + (duty.lj || duty.type) + ' · Lv ' + duty.lv, terms);
  });
  renderResultSection(container, 'Bosses', found.bosses, function (b) {
    return resultRow(dutyLink(b.duty, b.bossIndex), b.boss.n,
      (b.boss.sub ? b.boss.sub + ' · ' : '') + b.duty.inst, terms);
  });
  renderResultSection(container, 'Abilities', found.abilities, function (a) {
    const sub = el('span');
    sub.append(a.boss.n + ' · ' + a.duty.inst + ' — ');
    sub.append(highlighted(a.text, terms));
    return resultRow(dutyLink(a.duty, a.bossIndex, a.diff), a.name, sub, terms, diffPill(a.duty, a.diff));
  });
  renderResultSection(container, 'Mentioned in descriptions', found.mentions, function (a) {
    const sub = el('span');
    sub.append(highlighted(a.text, terms));
    return resultRow(dutyLink(a.duty, a.bossIndex, a.diff),
      (a.name ? a.name + ' · ' : '') + a.boss.n, sub, terms, diffPill(a.duty, a.diff));
  });

  if (!container.childElementCount) {
    container.append(el('p', 'empty', 'Nothing matches “' + query.trim() + '”. Try fewer or shorter words.'));
  }
}

/* ---------- 5. PAGES ---------- */

const view = document.getElementById('view');

// Set to true when the top-bar search button is tapped, so the home page focuses the search box.
let focusSearchOnHome = false;

/** Sets the title in the top bar and shows the back and search buttons on every page except home. */
function setTopBar(title, isHome) {
  document.getElementById('page-title').textContent = title;
  document.title = isHome ? 'Duty Briefings' : title + ' · Duty Briefings';
  document.getElementById('back-btn').hidden = isHome;
  document.getElementById('search-btn').hidden = isHome;
}

/** HOME PAGE: the search box, its history button, and the four "browse by" buttons. */
function renderHome(params) {
  setTopBar('Duty Briefings', true);
  currentQuery = params.get('q') || '';

  // --- search box ---
  const form = el('form', 'search');
  form.setAttribute('role', 'search');
  form.insertAdjacentHTML('afterbegin', ICONS.search);
  const input = el('input');
  input.type = 'search';
  input.placeholder = 'Search duties, bosses, abilities';
  input.setAttribute('aria-label', 'Search duties, bosses and abilities');
  input.setAttribute('enterkeyhint', 'search');
  input.autocomplete = 'off';
  input.setAttribute('autocapitalize', 'off');
  input.spellcheck = false;
  input.value = currentQuery;

  const clearBtn = el('button', 'icon-btn');
  clearBtn.type = 'button';
  clearBtn.setAttribute('aria-label', 'Clear search');
  clearBtn.innerHTML = ICONS.close;

  const histBtn = el('button', 'icon-btn hist-btn');
  histBtn.type = 'button';
  histBtn.setAttribute('aria-label', 'Recent searches');
  histBtn.setAttribute('aria-expanded', 'false');
  histBtn.innerHTML = ICONS.clock;

  const histPanel = el('div', 'hist-panel');
  histPanel.hidden = true;
  form.append(input, clearBtn, histBtn, histPanel);

  // --- the menu buttons and the results area (only one is shown at a time) ---
  const menu = el('div', 'menu-grid');
  FILTER_ORDER.forEach(function (key) {
    const filter = FILTERS[key];
    const btn = el('a', 'menu-btn');
    btn.href = '#/browse/' + key;
    const icon = el('span', 'menu-icon');
    icon.innerHTML = ICONS[key];
    const text = el('span', 'menu-text');
    text.append(el('b', null, filter.title), el('span', null, filter.hint));
    btn.append(icon, text, el('span', 'chev-right'));
    menu.append(btn);
  });
  const lead = el('p', 'lead', 'Search, or choose how to browse:');
  const results = el('div', 'list');
  const bossCount = DATA.reduce(function (sum, duty) { return sum + duty.bosses.length; }, 0);
  const footnote = el('p', 'footnote', DATA.length + ' duties · ' + bossCount +
    ' bosses · Patch 7.56 · works offline');

  view.append(form, lead, menu, results, footnote);

  // Shows the menu when the search box is empty, and the results when something is typed.
  function showMenuOrResults() {
    const searching = currentQuery.trim().length > 0;
    menu.hidden = searching;
    lead.hidden = searching;
    footnote.hidden = searching;
    results.hidden = !searching;
    clearBtn.hidden = !searching;
    if (searching) renderResults(results, currentQuery);
  }

  // Updates the web address with the search, without adding a Back step for every letter typed.
  function rememberQueryInAddress() {
    const hash = currentQuery ? '#/?q=' + encodeURIComponent(currentQuery) : '#/';
    history.replaceState(history.state, '', hash);
    lastHash = hash;
  }

  // Runs the search a moment after typing stops, rather than on every single key press.
  let typingTimer = null;
  input.addEventListener('input', function () {
    currentQuery = input.value;
    clearTimeout(typingTimer);
    typingTimer = setTimeout(function () {
      rememberQueryInAddress();
      showMenuOrResults();
    }, 150);
  });

  // Pressing Search/Enter on the keyboard saves the search to history and hides the keyboard.
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    clearTimeout(typingTimer);
    currentQuery = input.value;
    addToHistory(currentQuery);
    rememberQueryInAddress();
    showMenuOrResults();
    input.blur();
  });

  // The X button empties the search box and brings the menu back.
  clearBtn.addEventListener('click', function () {
    input.value = '';
    currentQuery = '';
    rememberQueryInAddress();
    showMenuOrResults();
    input.focus();
  });

  // Tapping a result also saves the search, so searches you actually used are remembered.
  results.addEventListener('click', function (event) {
    if (event.target.closest('a.row')) addToHistory(currentQuery);
  });

  // Fills the history panel with the last 10 searches and a "Clear history" button.
  function drawHistory() {
    histPanel.textContent = '';
    const items = loadHistory();
    histPanel.append(el('h2', null, 'Recent searches'));
    if (!items.length) {
      histPanel.append(el('p', 'hist-empty', 'No searches yet. Searches you make are kept on this phone only.'));
      return;
    }
    items.forEach(function (item) {
      const btn = el('button', 'hist-item');
      btn.type = 'button';
      btn.innerHTML = ICONS.clock;
      btn.append(el('span', null, item));
      btn.addEventListener('click', function () {
        input.value = item;
        currentQuery = item;
        addToHistory(item);
        closeHistory();
        rememberQueryInAddress();
        showMenuOrResults();
      });
      histPanel.append(btn);
    });
    const clear = el('button', 'hist-clear', 'Clear history');
    clear.type = 'button';
    clear.addEventListener('click', function () {
      clearHistory();
      drawHistory();
      input.focus();
    });
    histPanel.append(clear);
  }

  // Opens the history panel.
  function openHistory() {
    drawHistory();
    histPanel.hidden = false;
    histBtn.setAttribute('aria-expanded', 'true');
  }

  // Closes the history panel.
  function closeHistory() {
    histPanel.hidden = true;
    histBtn.setAttribute('aria-expanded', 'false');
  }

  // The clock button opens or closes the history panel.
  histBtn.addEventListener('click', function () {
    if (histPanel.hidden) openHistory();
    else closeHistory();
  });

  // Closes the history panel once you tap somewhere outside the search area.
  // The short wait lets the phone finish moving focus before we check where it went.
  form.addEventListener('focusout', function () {
    setTimeout(function () {
      if (!form.contains(document.activeElement)) closeHistory();
    }, 0);
  });

  showMenuOrResults();
  if (focusSearchOnHome) {
    focusSearchOnHome = false;
    input.focus();
  }
}

/** FILTER OPTIONS PAGE: e.g. tapping "Duty Type" lists Dungeon, Trial, Raid... with how many duties each has. */
function renderBrowse(key) {
  const filter = FILTERS[key];
  if (!filter) return renderNotFound();
  setTopBar(filter.title, false);
  const list = el('div', 'list');
  filter.options.forEach(function (option) {
    const count = DATA.filter(function (duty) { return filter.matches(duty, option); }).length;
    if (!count) return; // skip choices with nothing in them yet
    const row = el('a', 'row');
    row.href = '#/list/' + key + '/' + encodeURIComponent(option);
    row.append(el('span', 'row-title', key === 'type' ? (TYPE_HEADINGS[option] || option + 's') : option),
      el('span', 'row-count', plural(count, 'duty', 'duties')));
    list.append(row);
  });
  view.append(list);
}

// Remembers which groups you opened or closed on each list page, so Back puts them as they were.
const openGroupsMemory = {};

/** DUTY LIST PAGE: every duty for one choice (e.g. all Dungeons), grouped into collapsible sections. */
function renderList(key, value) {
  const filter = FILTERS[key];
  if (!filter) return renderNotFound();
  const duties = DATA.filter(function (duty) { return filter.matches(duty, value); }).sort(byLevel);
  setTopBar(key === 'type' ? (TYPE_HEADINGS[value] || value + 's') : value, false);
  if (!duties.length) {
    view.append(el('p', 'empty', 'No duties here yet.'));
    return;
  }

  // Group by expansion, or by duty type when browsing an expansion.
  const groupOrder = filter.groupBy === 'type' ? DUTY_TYPES.concat(['Limited Job']) : EXPANSIONS;
  const pageKey = key + '/' + value;
  const remembered = openGroupsMemory[pageKey] || {};
  openGroupsMemory[pageKey] = remembered;
  let groupNumber = 0;

  groupOrder.forEach(function (groupName) {
    const inGroup = duties.filter(function (duty) { return duty[filter.groupBy] === groupName; });
    if (!inGroup.length) return;
    groupNumber++;
    const details = el('details', 'group');
    // First group starts open; after that, whatever you last chose is kept.
    details.open = groupName in remembered ? remembered[groupName] : groupNumber === 1;
    const summary = el('summary');
    const heading = filter.groupBy === 'type' ? (TYPE_HEADINGS[groupName] || groupName + 's') : groupName;
    summary.append(el('span', 'chev'), el('h2', null, heading), el('span', 'muted', plural(inGroup.length, 'duty', 'duties')));
    details.append(summary);
    details.addEventListener('toggle', function () { remembered[groupName] = details.open; });

    const list = el('div', 'list');
    inGroup.forEach(function (duty) { list.append(dutyRow(duty)); });
    details.append(list);
    view.append(details);
  });
}

/** Builds one tappable row in a duty list: name, level, difficulties and boss names. */
function dutyRow(duty) {
  const row = el('a', 'row');
  row.href = dutyLink(duty);
  const pills = el('span', 'pills');
  dutyDifficulties(duty).forEach(function (key) { pills.append(diffPill(duty, key)); });
  pills.append(el('span', 'pill', 'Lv ' + duty.lv));
  row.append(el('span', 'row-title', duty.inst), pills,
    el('span', 'row-sub', duty.bosses.map(function (boss) { return boss.n; }).join(' · ')));
  return row;
}

/** DUTY BRIEFING PAGE: the duty's details, a difficulty switcher, and one card per boss. */
function renderDuty(id, bossIndex, diff) {
  const duty = DATA[id];
  if (!duty) return renderNotFound();
  setTopBar(duty.inst, false);
  const terms = searchTerms(currentQuery);
  const diffs = dutyDifficulties(duty);
  let chosenDiff = diffs.indexOf(diff) >= 0 ? diff : '';

  // --- heading and details ---
  const head = el('section', 'duty-head');
  head.append(el('h2', null, duty.inst));
  const pills = el('div', 'pills');
  pills.append(el('span', 'pill', duty.exp), el('span', 'pill', duty.lj ? 'Limited job: ' + duty.lj : duty.type),
    el('span', 'pill', 'Lv ' + duty.lv));
  if (duty.patch) pills.append(el('span', 'pill', 'Patch ' + duty.patch));
  head.append(pills);
  const info = [duty.il, duty.rl && duty.rl.length ? 'Roulette: ' + duty.rl.join(', ') : 'Not in a roulette']
    .filter(Boolean).join(' · ');
  head.append(el('p', 'duty-info', info));
  if (duty.note) head.append(el('p', 'duty-info', duty.note));
  view.append(head);

  // --- difficulty switcher (only when there's more than one difficulty) ---
  const diffButtons = [];
  if (diffs.length > 1) {
    const row = el('div', 'chip-row');
    row.setAttribute('aria-label', 'Show difficulty');
    [''].concat(diffs).forEach(function (key) {
      const chip = el('button', 'chip' + (key ? ' diff d-' + key : ''), key ? diffLabel(duty, key) : 'All');
      chip.type = 'button';
      chip.dataset.diff = key;
      chip.addEventListener('click', function () { chooseDifficulty(key); });
      diffButtons.push(chip);
      row.append(chip);
    });
    view.append(row);
  }

  // --- "jump to" buttons for duties with several bosses ---
  const jumpButtons = [];
  if (duty.bosses.length > 1) {
    const row = el('div', 'chip-row');
    row.append(el('span', 'jump-label', 'Jump to'));
    duty.bosses.forEach(function (boss, i) {
      const chip = el('button', 'chip', boss.n);
      chip.type = 'button';
      chip.addEventListener('click', function () {
        document.getElementById('boss-' + i).scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      jumpButtons.push(chip);
      row.append(chip);
    });
    view.append(row);
  }

  // --- boss cards ---
  const cards = duty.bosses.map(function (boss, i) {
    const card = bossCard(duty, boss, i, terms);
    view.append(card);
    return card;
  });

  // Shows only the chosen difficulty (or all), hides bosses that don't have it,
  // and updates the web address so Back returns to the same choice.
  function chooseDifficulty(key) {
    chosenDiff = key;
    diffButtons.forEach(function (chip) { chip.setAttribute('aria-pressed', String(chip.dataset.diff === key)); });
    cards.forEach(function (card, i) {
      let any = false;
      card.querySelectorAll('.blk').forEach(function (blk) {
        const show = !key || blk.dataset.diff === key;
        blk.hidden = !show;
        if (show) any = true;
      });
      card.hidden = !any;
      if (jumpButtons[i]) jumpButtons[i].hidden = !any;
    });
    const hash = dutyLink(duty, key ? (bossIndex || 0) : bossIndex, key);
    history.replaceState(history.state, '', hash);
    lastHash = hash;
  }
  chooseDifficulty(chosenDiff);
}

/** Builds one boss card: name, "key" reminder, a block of abilities per difficulty, and mechanic tags.
    Any search words are highlighted so you can spot why it matched. */
function bossCard(duty, boss, index, terms) {
  const card = el('article', 'boss');
  card.id = 'boss-' + index;
  const title = el('h3');
  title.append(highlighted(boss.n, terms));
  card.append(title);
  if (boss.sub) card.append(el('span', 'sub', boss.sub));
  if (boss.key) {
    const key = el('div', 'key');
    key.append(el('b', null, 'Key'), el('span', null, boss.key));
    card.append(key);
  }

  bossDifficulties(boss).forEach(function (diff) {
    const blk = el('section', 'blk d-' + diff);
    blk.dataset.diff = diff;
    blk.append(el('h4', null, diffLabel(duty, diff)));
    const ul = el('ul');
    boss.d[diff].forEach(function (line) {
      const ability = splitAbility(line);
      const li = el('li');
      if (ability.name) {
        const name = el('span', 'ab');
        name.append(highlighted(ability.name, terms));
        li.append(name, ': ');
      }
      li.append(highlighted(ability.text, terms));
      // Shade lines that contain every search word, so they stand out.
      if (terms.length && terms.every(function (t) { return normalise(line).indexOf(t) >= 0; })) li.classList.add('hit');
      ul.append(li);
    });
    blk.append(ul);
    card.append(blk);
  });

  const tags = bossTags(boss);
  if (tags.length) {
    const tagRow = el('div', 'tags');
    tags.forEach(function (tag) {
      const btn = el('button', 'tag', tag);
      btn.type = 'button';
      // Tapping a tag searches for it on the home page.
      btn.addEventListener('click', function () {
        addToHistory(tag);
        location.hash = '#/?q=' + encodeURIComponent(tag);
      });
      tagRow.append(btn);
    });
    card.append(tagRow);
  }
  return card;
}

/** Shown if the web address doesn't match any page (e.g. an old bookmark). */
function renderNotFound() {
  setTopBar('Not found', false);
  view.append(el('p', 'empty', 'That page doesn’t exist. Tap the back arrow to return.'));
}

/* ---------- 6. NAVIGATION ---------- */

// Scroll position of each page, so going Back returns you to the same spot.
const scrollMemory = {};
let lastHash = null;

// How many in-app pages deep you are. 0 means home or the page the app opened on.
// Stored with each history step so Back and Forward know it too.
let depth = 0;

/** Reads the web address and draws the matching page. Runs at start-up and every time the address changes. */
function route() {
  // Remember how far down the page we were before leaving it.
  if (lastHash !== null) scrollMemory[lastHash] = window.scrollY;

  // Work out how deep we are: a known history step carries its depth; a new step is one deeper.
  if (history.state && typeof history.state.depth === 'number') {
    depth = history.state.depth;
  } else {
    depth = lastHash === null ? 0 : depth + 1;
    history.replaceState({ depth: depth }, '');
  }

  // Split "#/duty/12/1/extreme?q=x" into parts ["duty","12","1","extreme"] and the ?q= search.
  const raw = location.hash.replace(/^#\/?/, '');
  const queryAt = raw.indexOf('?');
  const path = queryAt >= 0 ? raw.slice(0, queryAt) : raw;
  const params = new URLSearchParams(queryAt >= 0 ? raw.slice(queryAt + 1) : '');
  const parts = path.split('/').filter(Boolean).map(decodeURIComponent);

  view.textContent = '';
  if (parts[0] === 'browse') renderBrowse(parts[1]);
  else if (parts[0] === 'list') renderList(parts[1], parts[2]);
  else if (parts[0] === 'duty') renderDuty(Number(parts[1]), parts[2] != null ? Number(parts[2]) : null, parts[3] || '');
  else renderHome(params);

  // Scroll: a boss link jumps to that boss; otherwise return to the remembered spot, or the top.
  lastHash = location.hash || '#/';
  if (parts[0] === 'duty' && parts[2] != null && !(lastHash in scrollMemory)) {
    const card = document.getElementById('boss-' + parts[2]);
    if (card) card.scrollIntoView({ block: 'start' });
  } else {
    window.scrollTo(0, scrollMemory[lastHash] || 0);
  }
}

/** The top-bar back arrow: steps back like the phone's Back gesture, or goes home if there's nowhere to go back to. */
function goBack() {
  if (depth > 0) history.back();
  else location.hash = '#/';
}

/** The top-bar search button: goes to the home page and puts the cursor in the search box. */
function goToSearch() {
  focusSearchOnHome = true;
  if (location.hash === '' || location.hash === '#/' || location.hash.indexOf('#/?') === 0) route();
  else location.hash = currentQuery ? '#/?q=' + encodeURIComponent(currentQuery) : '#/';
}

/* ---------- 7. OFFLINE SUPPORT AND START-UP ---------- */

/** Registers the service worker (sw.js), which saves the app on the phone so it opens without internet.
    If a newer version is found later, a "tap to reload" message appears. */
function registerServiceWorker() {
  // Service workers only run from a proper web address, not from a file opened directly.
  if (!('serviceWorker' in navigator) || location.protocol === 'file:') return;
  const hadController = !!navigator.serviceWorker.controller;
  navigator.serviceWorker.register('sw.js').catch(function () { /* offline support unavailable */ });
  navigator.serviceWorker.addEventListener('controllerchange', function () {
    // The very first install also triggers this, so only show the message for real updates.
    if (hadController) document.getElementById('update-toast').hidden = false;
  });
}

/** Sets everything up when the app opens. */
function start() {
  // Give every duty a number, used in web addresses like #/duty/12.
  DATA.forEach(function (duty, i) { duty.id = i; });
  // The app handles scroll positions itself (see route).
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

  document.getElementById('back-btn').addEventListener('click', goBack);
  document.getElementById('search-btn').addEventListener('click', goToSearch);
  document.getElementById('update-toast').addEventListener('click', function () { location.reload(); });
  window.addEventListener('hashchange', route);

  route();
  registerServiceWorker();

  // Build the search list while the phone is idle, so the first search is instant.
  const whenIdle = window.requestIdleCallback || function (fn) { setTimeout(fn, 300); };
  whenIdle(getSearchIndex);
}

start();

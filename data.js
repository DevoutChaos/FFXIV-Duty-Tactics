/* ============================================================
   DUTY DATA
   Copied from the "FFXIV Duty Briefings" page (Patch 7.56, Oct 2026).
   Each object is one duty. Fields:
     exp    expansion name           type   Dungeon | Trial | Raid | Alliance Raid |
                                            Variant & Criterion | Ultimate | Exploration | Limited Job
     inst   duty name                lv     level (number)
     il     item-level note          rl     list of duty roulettes it appears in
     patch  patch it arrived         note   optional duty-wide note
     lj     limited job (only for Limited Job content)
     dlabel optional custom names for difficulties
     bosses [{ n: boss name, sub: subtitle, key: "remember this" line,
               d: { normal: ["Ability|what happens", ...], extreme: [...], ... } }]
   To update the app with new duties, replace everything below
   and change CACHE_VERSION in sw.js (see README).
   ============================================================ */
window.FF = (window.FF || []).concat([
/* ───────── DAWNTRAIL DUNGEONS ───────── */
{exp:"Dawntrail",type:"Dungeon",inst:"Ihuykatumu",lv:91,il:"Drops i650",rl:["Leveling"],patch:"7.0",bosses:[
 {n:"Prime Punutiy",key:"Resurface spits lines, circles and cones in order and ends with a donut: finish in its safe centre.",d:{normal:[
  "Punutiy Press|Raidwide magic damage. Heal through it.",
  "Hydrowave|Cone on a random player. The target faces it away from the group.",
  "Resurface|The boss sinks at the edge, then spits line, circle and cone AoEs in sequence (each adds a vulnerability stack) and finishes with a donut. Dodge each one and end in the donut's centre.",
  "Song of the Punutiy|Untargetable adds tether non-tanks with large circles while the tank gets a conal tether from the boss. Tethered players move away from their circle. Kill the adds once they become targetable.",
  "Shore Shaker|Expanding rings from the boss. Step through each gap as the ring passes."]}},
 {n:"Drowsie",key:"Remember where seeds are sown: vines and Wallop lines erupt from them.",d:{normal:[
  "Uppercut|Physical tankbuster.",
  "Sow / Drowsy Dance|Seeds planted across the arena grow into vines with a circle AoE and a directional line (Wallop). Keep clear of seeds and out of the indicated lines. Vines grow over time.",
  "Sneeze|Wide frontal cone. Get to the boss's flank or rear.",
  "Spit|Mimiclot adds spawn. Tank gathers them, everyone cleaves them down.",
  "Flagrant Spread|Marked circles on random players. Spread so they don't overlap."]}},
 {n:"Apollyon",key:"Kill the sandworm adds quickly: each one it eats powers up Blade and High Wind.",d:{normal:[
  "Razor Zephyr|Line AoE toward a random player. Step out of the line.",
  "Blade|Physical tankbuster. After the boss feasts it becomes a wind DoT circle plus a donut, so non-tanks stay clear.",
  "High Wind|Raidwide. The boss eats surviving adds to empower its abilities.",
  "Blades of Famine|Large line AoEs from the edge it jumped to (Swarming Locust, three times). Move to the safe side.",
  "Levinsickle|Ground circles leave lightning pools that fire two sets of cones. Avoid pools and cones.",
  "Thunder III|Marked AoE on everyone. Spread.",
  "Windwhistle|A tornado crosses the arena firing lines. Touching it knocks you back and adds vulnerability. Avoid it."]}}
]},
{exp:"Dawntrail",type:"Dungeon",inst:"Worqor Zormor",lv:93,il:"Drops i660",rl:["Leveling"],patch:"7.0",bosses:[
 {n:"Ryoqor Terteh",key:"Cold Feat freezes two adds, so the second safe spot resolves first.",d:{normal:[
  "Frosting Fracas|Raidwide.",
  "Fluffle Up|Untargetable adds: Rorrloh Teh cleaves the quarter in front of it, Qorrloh Teh drops a circle over a quarter. Stand in the uncovered quarter.",
  "Cold Feat|Freezes two adds so their casts resolve out of order. Start in the second safe spot and move to the first.",
  "Snowscoop|Snowballs at the edge fire successive line AoEs. Dodge between them.",
  "Sparkling Sprinkling|Marked AoE on all players. Spread."]}},
 {n:"Kahderyor",key:"The crystals left by Crystalline Crush decide whether Wind Shot (donuts) or Earthen Shot (circles) is safe.",d:{normal:[
  "Wind Unbound|Raidwide.",
  "Crystalline Crush|Party tower. Everyone stacks inside. Leaves crystals on the floor.",
  "Wind Shot / Earthen Shot|Marked AoE on every player plus donuts (Wind) or circles (Earthen) on the crystals. Spread while avoiding the crystal shapes.",
  "Seed Crystals|Marked AoEs that summon Crystalline Debris adds. Kill them to clear the debuff.",
  "Sharpened Sights|Gaze rings travel in toward the boss. Look away as they resolve.",
  "Stalagmite Circle / Cyclonic Ring|Point-blank AoE and donut. Out for the circle, in for the donut."]}},
 {n:"Gurfurlur, Dawn's Elector",key:"Intercept the Arcane Stomp orbs before they reach the boss.",d:{normal:[
  "Heaving Haymaker|Raidwide.",
  "Stonework|Tablets appear. Water knocks back from its side, earth makes expanding squares plus spreads, wind knocks back from the centre and adds tornadoes. Read the tablet type each time.",
  "Sledgehammer|Multi-hit line stack. Line up together behind the target.",
  "Arcane Stomp|Orbs drift toward the boss. Touch one to take its damage-up stack instead of the boss.",
  "Enduring Glory|Heavy raidwide. Mitigate."]}}
]},
{exp:"Dawntrail",type:"Dungeon",inst:"The Skydeep Cenote",lv:95,il:"Drops i666",rl:["Leveling"],patch:"7.0",bosses:[
 {n:"Feather Ray",key:"After Rolling Current, re-read where the bubbles landed before moving.",d:{normal:[
  "Immersion|Raidwide.",
  "Worrisome Wave|Frontal cone.",
  "Hydro Ring|Donut that reshapes the arena. Move into the new space.",
  "Blowing Bubbles / Bubble Bomb|Bubbles drift outward or detonate. Each touch adds a damage-taken stack. Keep clear.",
  "Rolling Current|Pushes every bubble across the arena.",
  "Troublesome Tail|Debuff that copies the boss's next ability onto you. Keep space from others."]}},
 {n:"Firearms",key:"Line AoEs bounce off mirrors, and any orb a line touches explodes hugely.",d:{normal:[
  "Dynamic Dominance|Raidwide.",
  "Mirror Maneuver / Thunderlight Burst|The boss jumps to an edge and fires a line into a mirror. Trace the reflected path and stay away from orbs on it.",
  "Ancient Artillery|Expanding squares along a line. Dodge.",
  "Pummel|Physical tankbuster.",
  "Emergent Artillery|Delayed marked AoE on everyone. Move off your spot."]}},
 {n:"Maulskull",key:"The glowing fist shows which half Stonecarver hits.",d:{normal:[
  "Stonecarver|Fists light up twice, then cleave the marked half. Stand in the other half.",
  "Skullcrush / Ringing Blows|Knockback from the front, with marked AoEs or a Stonecarver after. Take the knockback diagonally, then spread or move to the safe half.",
  "Maulwork|Large circles, then lines toward the indicators.",
  "Deep Thunder|Multi-hit party tower. Everyone stacks in it.",
  "Wrought Fire|Magic tankbuster with splash. Tank stands away from the party.",
  "Colossal Impact|Back-half knockback with spreads or a stack, then the other. Resolve whichever comes first.",
  "Ashlayer|Raidwide."]}}
]},
{exp:"Dawntrail",type:"Dungeon",inst:"Vanguard",lv:97,il:"Drops i672",rl:["Leveling"],patch:"7.0",bosses:[
 {n:"Vanguard Commander R8",key:"Enhanced Mobility: start opposite the dash, then step into the space it just passed.",d:{normal:[
  "Electrowave|Raidwide.",
  "Enhanced Mobility|Dashes across while the wingblade cleaves half the arena. Stand opposite, then move into the dash path.",
  "Dispatch: Commence firing|Adds at the front fire lines. Dodge.",
  "Dispatch: Aerial bombardment|Floating adds drop expanding circles. Keep moving out of them.",
  "Dispatch: Electrope testing|Marked AoEs on everyone plus lines from all sides. Spread into the gaps."]}},
 {n:"Protector",key:"Motion Sensor is an Acceleration Bomb: be standing still when it expires.",d:{normal:[
  "Electrowave|Raidwide.",
  "Rapid Thunder|Magic tankbuster.",
  "Search and Destroy|Turrets fire lines and circles. Keep dodging.",
  "Fulminous Fence / Battery Circuit|Walls appear, then the boss spins a cone and drops circles under, in front and behind. Rotate with it around the walls.",
  "Motion Sensor|Acceleration Bomb on everyone plus sequential lines. Dodge, then stop moving and acting before it expires.",
  "Tracking Bolt|Large marked AoE on everyone. Spread."]}},
 {n:"Zander the Snakeskinner",key:"Soulbane Saber: leave the line, then leave the half that explodes.",d:{normal:[
  "Electrothermia / Screech|Raidwides.",
  "Soulbane Saber|Line AoE where he faces, then half the arena explodes. Slitherbane versions add a front or back cleave.",
  "Saber Rush|Physical tankbuster (phase 1).",
  "Syntheslean|Cone on a random player (phase 2).",
  "Syntheslither|He moves east or west and cleaves along a sword path. Stand opposite the first cleave.",
  "Shade Shot|Magic tankbuster (phase 2)."]}}
]},
{exp:"Dawntrail",type:"Dungeon",inst:"Origenics",lv:99,il:"Drops i678",rl:["Leveling"],patch:"7.0",bosses:[
 {n:"Herpekaris",key:"Venomspill: go to the side where the hand isn't raised.",d:{normal:[
  "Strident Shriek|Raidwide.",
  "Vasoconstrictor / Venomspill|Two poison puddles in front. The boss punches one and it explodes on that side. Go to the other side.",
  "Writhing Riot|Left, right and back cleaves in random order. Dodge each as it resolves.",
  "Collective Agony|Line stack.",
  "Convulsive Crush|Physical tankbuster."]}},
 {n:"Deceiver",key:"Some androids and turrets are fakes. Only dodge the real ones.",d:{normal:[
  "Electrowave|Raidwide.",
  "Bionic Thrash|Cones from the extended arms aimed at players.",
  "Initialize Androids|Androids at the front fire lines, then must be killed. Fakes don't fire.",
  "Initialize Turrets|Side turrets fire lines in order. Track the real ones.",
  "Surge|Jumps to the front and knocks everyone back in a line, plus marked AoEs. Stand where a real turret's line won't catch you so you aren't pushed off."]}},
 {n:"Ambrose the Undeparted",key:"Extrasensory Field pushes per quadrant: stand so the push keeps you on the platform.",d:{normal:[
  "Psychic Wave|Raidwide.",
  "Overwhelming Charge|Cleave where the boss faces.",
  "Psychokinesis|Side cages fire lines and release adds. Kill the adds, avoid the lines. A later version sends a sword across, leaving lines.",
  "Extrasensory Field|Quadrant knockbacks in the arrow direction.",
  "Psychokinetic Charge|Field and Charge together. Handle both.",
  "Voltaic Slash|Physical tankbuster."]}}
]},
{exp:"Dawntrail",type:"Dungeon",inst:"Alexandria",lv:100,il:"Drops i690",rl:["Level Cap Dungeons"],patch:"7.0",bosses:[
 {n:"Antivirus X",key:"Interferons fire in spawn order: plus adds make plus shapes, circle adds make donuts.",d:{normal:[
  "Immune Response|Front cone plus side cleaves. Watch the facing.",
  "Foreign Entity Removal|Interferons spawn around the boss. Resolve each shape in spawn order.",
  "Quarantine|Magic tankbuster on the tank plus a stack for everyone else. Tank stands apart, the rest stack."]}},
 {n:"Amalgam",key:"Disassembly: survive the raidwide, then get out of the diagonal lightning half.",d:{normal:[
  "Electrowave|Raidwide.",
  "Disassembly|Raidwide, then lightning cleaves half the arena diagonally. Later casts add spreads and portal lines: dodge the ground lightning first, then spread.",
  "Centralized / Split Current|Line through the hitbox, or cleaves on its sides.",
  "Amalgamight|Physical tankbuster.",
  "Superbolt|Stack.",
  "Ternary Charge|Expanding rings from the boss. Step through."]}},
 {n:"Eliminator",key:"Kill the six Lightning Generators before Charge reaches 100, or Holo Ark wipes the party.",d:{normal:[
  "Disruption|Raidwide.",
  "Partition / Reconfigured Partition|Cleaves the sword's half. Reconfigured swaps sides and cleaves again.",
  "Subroutine|A hand fires a line or donut on a random player. Spread.",
  "Overexposure|Line stack.",
  "Final Attack Sequence|Boss goes untargetable. Kill all six adds before Holo Ark.",
  "Elimination|Knockback with lines on everyone, or heavy damage with arena lines that explode shortly after."]}}
]},
{exp:"Dawntrail",type:"Dungeon",inst:"The Strayborough Deadwalk",lv:100,il:"Drops i690",rl:["Level Cap Dungeons"],patch:"7.0",bosses:[
 {n:"His Royal Headness Leonogg I",key:"Never touch the puppets: they bind you and drop a head on you.",d:{normal:[
  "Malicious Mist|Raidwide.",
  "Falling Nightmare|Heads drop on each player. Getting hit applies Benoggined (no actions for 10s). Move off your spot.",
  "Team Spirit / Spirited Charge|Puppets march across one half, then the other. Their hitbox is larger than it looks.",
  "Evil Scheme|Rings expand from the centre.",
  "Looming Nightmare|Two players get chasing AoEs. Lead them away from the group.",
  "Scream|Three sets of opposing cones. Stand in the third set's area, then dodge into the first."]}},
 {n:"Jack-in-the-Pot",key:"Toiling Teapots: start on the third set and move onto the first once it clears.",d:{normal:[
  "Tea Awhirl|Tethered teacups spin and explode where they stop. Follow and step away when they stop.",
  "Toiling Teapots|Teapots show the order poison puddles expand. Start on set 3, move to set 1.",
  "Last Drop|Magic tankbuster."]}},
 {n:"Traumerei",key:"Fleshbuster kills the living and Ghostduster kills spirits. Use the panels to switch state.",d:{normal:[
  "Bitter Regret|Centre glow means a middle line; side glows mean side lines.",
  "Poltergeist|Plus-shaped AoE that leaves a wall only spirits can pass.",
  "Memorial March|Ghosts tether to players (or fire lines from the front). Switch state to stretch and break the tether.",
  "Ghostduster / Fleshbuster|Instant death to spirits / living. Be the other state when it lands.",
  "Malicious Mist|Raidwide with a bleed.",
  "Ghostcrusher|Magic line stack."]}}
]},
{exp:"Dawntrail",type:"Dungeon",inst:"Tender Valley",lv:100,il:"Drops i690",rl:["Level Cap Dungeons"],patch:"7.0",bosses:[
 {n:"Barreltender",key:"Flowered cacti make large AoEs, plain cacti small ones. Find the gap they leave.",d:{normal:[
  "Barbed Bellow|Raidwide.",
  "Heavyweight Needles|Expanding cones. Stand in the middle of the larger gaps.",
  "Tender Drop|Cacti spawn: flowered = large circle, unflowered = small circle.",
  "Barrel Breaker|Knockback from the centre.",
  "Succulent Stomp|Stack.",
  "Prickly Left / Right|Side cleave that widens. Only the far opposite side is safe.",
  "Tender Drop (buster)|Physical tankbuster."]}},
 {n:"Anthracite",key:"Grey bombs explode in circles. Yellow bombs drop into holes and fire from pipes (circle hole → east pipes, square hole → west pipes).",d:{normal:[
  "Anthrabomb|Find the grey bombs first, then the row the pipe line will miss.",
  "Carbonaceous Combustion|Raidwide.",
  "Carniflagration|Three bomb sets, then marked spreads on everyone.",
  "Burning Coals|Stack.",
  "Chimney Smack|Magic tankbuster."]}},
 {n:"Greatest Serpent of Tural",key:"Greatest Labyrinth: work backwards from the blue circle to find the one path that reaches it.",d:{normal:[
  "Dubious Tulidisaster|Raidwide.",
  "Bouncy Council|Adds show a line (fires both ways) or a spinning circle (circle AoE).",
  "Screes of Fury|Magic tankbuster.",
  "Greatest Labyrinth|Everyone is cursed. Follow the arrow tiles to the blue circle to remove it.",
  "Moist Summoning|Three jumping stacks, each leaving a DoT puddle. Stack, then step off the puddle.",
  "Greatest Flood|Knockback from a corner. Use anti-knockback or aim away from puddles.",
  "Great Torrent|Ground AoEs circle the arena. Dodge into the first, then spread for marked AoEs."]}}
]},
{exp:"Dawntrail",type:"Dungeon",inst:"Yuweyawata Field Station",lv:100,il:"Drops i705",rl:["Level Cap Dungeons"],patch:"7.1",bosses:[
 {n:"Lindblum Zaghnal",key:"Caber Toss: the charged pillar fires line sets in order, then gets thrown south and keeps firing.",d:{normal:[
  "Electrical Overload|Raidwide.",
  "Gore / Caber Toss|Boss charges a pillar that fires successive lines. Step into each safe lane in turn.",
  "Lightning Storm|Marked AoE on everyone. Spread.",
  "Raw Electrope adds|Pulse raidwide damage and leave Sparking Fissures. Kill them quickly."]}},
 {n:"Overseer Kanilokka",key:"Lost Hope reverses your movement. Walk the path to the edge slowly.",d:{normal:[
  "Dark Souls|Magic tankbuster.",
  "Free Spirits|Curved lines in quick succession.",
  "Phantom Flood|Donut. Stand in the centre.",
  "Dark II|Two sets of cones.",
  "Telltale Tears|Marked AoEs on sets of players. Stack or spread per marker.",
  "Lost Hope|Temporary Misdirection plus a proximity AoE. Follow the paths to the edge."]}},
 {n:"Lunipyati",key:"Crater Carve destroys the middle. Go to the outer ring.",d:{normal:[
  "Leporine Loaf|Raidwide that walls the arena; AoEs then move in their arrow directions.",
  "Crater Carve|Huge centre circle. Go out.",
  "Beastly Roar|Proximity AoE, then circles travel around the ring.",
  "Jagged Edge|Spread.",
  "Turali Stone IV|Stack.",
  "Sonic Howl|Raidwide.",
  "Slabber|Magic tankbuster."]}}
]},
{exp:"Dawntrail",type:"Dungeon",inst:"The Underkeep",lv:100,il:"Drops i725",rl:["Level Cap Dungeons"],patch:"7.2",bosses:[
 {n:"Gargant",key:"Aerial Ambush: watch which pole it climbs. The line charge comes from there.",d:{normal:[
  "Chilling Chirp|Raidwide. Later casts add ground AoEs and spreads.",
  "Almighty Racket|Frontal in a set direction.",
  "Aerial Ambush|Moves under the sand to a pole, then charges a line across the arena.",
  "Earthsong|Two sets of exploding orbs. Use the gaps.",
  "Trap Jaws|Physical tankbuster."]}},
 {n:"Soldier S0",key:"Sector Bisector: clones vanish in order and the last one cleaves the side its sword glows.",d:{normal:[
  "Field of Scorn|Raidwide.",
  "Thunderous Slash|Tankbuster.",
  "Sector Bisector|Track the last clone; stand opposite its glowing sword.",
  "Ordered Fire|Adds fire lines across the arena.",
  "Static Force|Cones follow players. Keep them pointed away from the group.",
  "Electric Excess|Spread."]}},
 {n:"Valia Pira",key:"Coordinate March: a purple sphere that hits a pink orb makes a cross AoE.",d:{normal:[
  "Entropic Sphere|Raidwide.",
  "Coordinate March / Bloodmarch|Bloodmarch marks the tile where a pink orb appears. Trace each purple sphere's path to see which orbs it will hit.",
  "Turrets|Fire a line right after spawning. Move immediately.",
  "Electric Field|Cones on the ground and on players expand after a delay. Spread to the large safe spots.",
  "Neutralize Front Lines|Frontal plus spreads.",
  "Deterrent Pulse|Line stack on a healer."]}}
]},
{exp:"Dawntrail",type:"Dungeon",inst:"The Meso Terminal",lv:100,il:"Drops i735",rl:["Level Cap Dungeons"],patch:"7.3",bosses:[
 {n:"Chirurgeon General",key:"Sensory Deprivation scrambles countdowns. Read the visual tells instead.",d:{normal:[
  "Medicine Field|Raidwide plus a bleed wall.",
  "Pungent Aerosol|Knockback from one of two markers. The one that appears with the Sterile Sphere AoEs is real.",
  "Sterile Sphere|Two large and two small circles.",
  "Biochemical Front|Turns and cleaves half the arena.",
  "Concentrated Dose|Magic tankbuster plus a heavy 15s poison."]}},
 {n:"The Hooded Headsmen",key:"Each player is caged with one Headsman. Kill your own before you can help others.",d:{normal:[
  "Lawless Pursuit / Shackles of Fate|Pulls everyone into a cell with their own Headsman.",
  "Head-splitting Roar|Raidwide.",
  "Dismemberment|Blades around your cell fire lines in their pointed directions.",
  "Peal of Judgment|Four lightning walls sweep across the cell.",
  "Relentless Torment|Three-hit tankbuster from the tank's Headsman.",
  "Death Penalty|Cleansable Doom from the healer's Headsman. Esuna it."]}},
 {n:"Immortal Remains",key:"Turmoil has no castbar. Move when the text says it is gathering energy.",d:{normal:[
  "Recollection|Raidwide.",
  "Memento|Arena state changes: normal (edge adds fire lines), burning (clumped or single memories), electrified (memories run and leave a giant line).",
  "Memory of the Storm|Line stack.",
  "Turmoil|Slams one half of the arena. Go to the other.",
  "Impression|Knockback from the centre. Mind the edges.",
  "Memory of the Pyre|Magic tankbuster."]}}
]},
{exp:"Dawntrail",type:"Dungeon",inst:"Mistwake",lv:100,il:"Drops i755",rl:["Expert"],patch:"7.4",bosses:[
 {n:"Treno Catoblepas",key:"Bedeviling Light: hide behind an intact rock pillar, and don't let Thunder II break yours first.",d:{normal:[
  "Earthquake|Physical raidwide.",
  "Thunder II|Ground AoEs and spreads. Any rock they hit breaks.",
  "Bedeviling Light|Line-of-sight attack. Stand behind a pillar.",
  "Thunder III|Magic tankbuster.",
  "Ray of Lightning|Healer stack.",
  "Petribreath|Untelegraphed frontal cone. Stay on the flanks or behind."]}},
 {n:"Amdusias",key:"Galloping Thunder dashes detonate any poison orb they touch.",d:{normal:[
  "Thunderclap Concerto|Electric balls fill the arena. Find the empty area.",
  "Bio II|Poison orbs that explode on contact with the boss.",
  "Galloping Thunder|Several dashes. Avoid the dash lines and the orbs in their path.",
  "Thunder IV|Raidwide.",
  "Shockbolt|Magic tankbuster.",
  "Thunder|Spread.",
  "Thunder III|Multi-hit healer stack."]}},
 {n:"Thundergust Griffin",key:"Fulgurous Fall: knockback away from the middle line, then a perpendicular dash that drops more orbs.",d:{normal:[
  "Thunderspark|Raidwide.",
  "High Volts|Spreads, and ground AoEs that spawn orbs.",
  "Thundering Roar|Orbs fire lines in their arrow directions.",
  "Fulgurous Fall|Edge dash and knockback, then a second dash.",
  "Storm Surge|Line AoE plus a rotating tornado outside the arena."]}}
]},
{exp:"Dawntrail",type:"Dungeon",inst:"The Clyteum",lv:100,il:"Drops i765",rl:["Expert"],patch:"7.5",bosses:[
 {n:"Eye of the Scorpion",key:"Motion Tracker: if the scanner tags you, stop moving and acting until it clears.",d:{normal:[
  "Eyes on Me|Raidwide.",
  "Petrifying Beam|Huge cone that shifts slightly before locking in.",
  "Motion Scanner|Sweeping AoE. Tagged players are knocked up if they move or act.",
  "Penetrator Missile|Healer stack."]}},
 {n:"Chort",key:"Mortifying Flesh: track its facing for the dash, then the roll path.",d:{normal:[
  "Ripples of Gloom|Raidwide.",
  "Mortifying Flesh|Spins, faces a direction, dashes, rolls around the arena and dashes again.",
  "Bodyweight Exorcism|Knockback from the centre; another version spawns four group towers to soak.",
  "Basic Vomit|Cone in the facing direction.",
  "Evil Emission|Spread.",
  "Profane Pressure|Healer stack."]}},
 {n:"Malphas",key:"String Up turns anyone standing still into a puppet. Keep moving.",d:{normal:[
  "Rubbish Disposal|Raidwide.",
  "Void Dark|Cone in the facing direction.",
  "Scrap Meddle / Puppet Strings|Small puppets make circles, large puppets make cones through the middle. Puppet Mastery spins them first.",
  "Gluttonous Wire|Healer stack.",
  "String Up|Keep moving until it resolves.",
  "Shadow Play|AoE tankbuster.",
  "Wrathful Wire|Spread."]}}
]}
]);
window.FF = (window.FF || []).concat([
/* ───────── DAWNTRAIL TRIALS ───────── */
{exp:"Dawntrail",type:"Trial",inst:"Worqor Lar Dor",lv:93,il:"Extreme: i690 to queue",rl:["Trials"],patch:"7.0",bosses:[
 {n:"Valigarmanda",key:"Skyruin flips the arena between lightning (levitate to dodge breath, but never near feathers) and ice (keep moving).",d:{
 normal:[
  "Tempestuous Wind / Slithering Strike|Donut in the centre, or point-blank from the arm slam. Read which and step out.",
  "Wide-open Beak|Wide frontal cone.",
  "Skyruin|Heavy raidwide that turns the arena to lightning or ice, with a matching DoT.",
  "Ruinfall|Shared tank tower in the centre. Players at the front are knocked back while AoEs hit the back.",
  "Lightning arena|Levitate to dodge Thunderous Breath. Hail of Feathers drops feathers, and Blighted Bolt explodes feathers and levitating players, so land away from feathers.",
  "Ice arena|Rumbling Avalanche lines from the rear. Freezing Dust freezes anyone standing still. Arcane Ice lines in eight directions.",
  "Ruin Foretold (adds)|Boss untargetable. Kill three Thunderous Beacons before Ruinous Power reaches 100. Stack inside for Calamitous Cry.",
  "Tulidisaster|Three heavy raidwides, then Perpetual Conflagration (damage taken up plus DoT) for the rest of the fight."],
 extreme:[
  "Spikesicle|Curved lines sweep from one side and leave exploding ice. Start at the edge where they begin, move in behind them, then step off the explosions.",
  "Volcanic Drop|One volcano bubbles. Go to the other side and dodge small ground AoEs.",
  "Triscourge + Calamity debuffs|Raidwide plus timed debuffs. Keep moving for Calamity's Chill; leave fire puddles for Calamity's Inferno.",
  "Cataclysm combos|Paired attacks with a safe-spot tell. Read the cast and stack with your partner.",
  "Mountain Fire|Tank soaks a tower; a fire wave then spares only a cone behind it. Invulns must outlast the DoT.",
  "Adds phase|Split into light parties, kill side Beacons first from inside, avoid Calamitous Cry cones.",
  "Northern Cross / Chilling Cataclysm|Ice phase: line from the arrow direction, arcane spheres mark the safe waymark. Keep moving for Freezing Dust and free frozen players.",
  "Levitation panels|Lightning phase: levitate for Calamity's Frost and Thunderous Breath, stay grounded for Calamity's Fulgur. Check which debuff ends first.",
  "Hail of Feathers / Ruinfall|Destroy at least one feather before they explode; mitigate the tower and handle the knockback.",
  "Enrage|Wrath Unfurled → Mountain Fire → Tulidisaster."]}}
]},
{exp:"Dawntrail",type:"Trial",inst:"Everkeep",lv:99,il:"Extreme: i690 to queue",rl:["Trials"],patch:"7.0",bosses:[
 {n:"Zoraal Ja",key:"Dawn of an Age: the 4×4 platform. Swords on the outer platforms Sync their pattern onto yours.",d:{
 normal:[
  "Double-edged Swords|Cleaves one half, then the other. Combined with Vorpal Trail, move out as swords meet in the middle, back in as they fan out.",
  "Patricidal Pique|Magic tankbuster.",
  "Calamity's Edge|Raidwide plus ground circles that explode point-blank.",
  "Vorpal Trail|Swords fan inward from the edge, meet in the middle, then fan back out. Move through the gaps.",
  "Soul Overflow|Raidwide that gives the boss a damage-up stack. Marks the phase change.",
  "Dawn of an Age|Massive raidwide; arena becomes a central platform with four outer platforms. You can fall off.",
  "Smiting Circuit|Blades inside his hitbox = point-blank; outside = donut.",
  "Vollok / Sync|Swords on outer platforms hit the main platform in the same pattern. Transpose to find safe squares.",
  "Gateway / Blade Sync / Forged Track|Blades travel through blue lines into other rows or columns. Trace where each ends up.",
  "Bitter Reaping / Half Full / Duty's Edge|Busters on both tanks; half-arena cleave on the raised blade side; multi-hit line stack."],
 extreme:[
  "Multidirectional Divide|X-shaped lines that widen. Stand where gaps are widest.",
  "Backward / Forward Half|Backward leaves the back quadrant on the non-glowing side; Forward leaves the front quadrant on the glowing side.",
  "Regicidal Rage|Two tethers with heavy AoE. Tanks take them and spread apart; party stacks behind the boss.",
  "Dawn of an Age|Mitigate, then stay on your assigned square of the 16-square platform.",
  "Vollok + Sync + Half Full|Find squares safe on both platforms and on the safe side of the cleave.",
  "Greater Gateway / Blade Warp|Red lines widen a sword to three rows/columns, green lines knock back one row (use anti-knockback), blue lines do nothing.",
  "Chasm of Vollok|Yellow markers drop a sword on your square with magic vulnerability. Spread to assigned squares.",
  "Projection of Turmoil|Stack line moves north to south and explodes on debuffed players. One debuffed player at a time steps in while the group moves with it.",
  "Bitter Whirlwind|Three-hit tankbuster with vulnerability. Swap after hit one and back, or invuln all three.",
  "Burning Chains / Drum of Vollok / Aero III|Supports tethered to DPS run apart; two-player stack with knock-up for others; tornadoes knock players to the other platform."]}}
]},
{exp:"Dawntrail",type:"Trial",inst:"The Interphos / Sphene's Burden",lv:100,il:"Extreme (7.1): i725 weapon",rl:["Trials"],patch:"7.0",bosses:[
 {n:"Sphene",sub:"Normal: The Interphos · Extreme: The Minstrel's Ballad: Sphene's Burden",key:"Virtual Shift reshapes the arena (wind, earth, ice) and changes how every follow-up works. Read the new shape first.",d:{
 normal:[
  "Legitimate Force|Hits half the arena twice; the same half can be hit twice.",
  "Aethertithe|DoT plus a cone that sucks in and kills on the left, right or middle. Stay close to the boss to dodge easily.",
  "Coronation|Drones lay chasing AoEs on players in turn, or mark two players as front and back of a moving line.",
  "Prosecution of War|Magic tankbuster.",
  "Virtual Shift|Heavy raidwide; arena becomes an hourglass or two platforms.",
  "Downburst / Powerful Gust|Knockbacks from an edge or side (donut follows Downburst). Use anti-knockback.",
  "Castellation|A wall with holes sweeps the platforms. Stand in a hole at the right height.",
  "Absolute Authority (50%)|Healers get a gaze (look away), others must stop for Authority's Hold, DPS get Flares (outside) then an Abandonment stack (groups of 2+)."],
 extreme:[
  "Aethertithe|Grid floor; a cone suck-in kills a third of it, then healer line stacks. Light parties, tanks closest to the boss.",
  "Virtual Shift: Wind|Arena becomes an X; healer stacks leave lethal puddles. LP1 drops halfway NW–centre, LP2 opposite.",
  "Legitimate Force|Double half-room cleave plus DPS↔support tethers. Break tethers by splitting NE/SW, dodge into the side that glowed second.",
  "Prosecution of War|Two-hit buster with vulnerability. Invuln or swap.",
  "Divide and Conquer|Line cleaves on everyone, then again on the same spots. Spread around the hitbox and dodge between old lines.",
  "Virtual Shift: Earth|Two rectangular platforms with gravity wells. Float on a well before crossing or you fall.",
  "Gravitational Empire / Meteors|Tethers, circles and tower soaks; drop meteors in corners and hide behind them for Weighty Blow.",
  "Coronation|Laser tethers between pairs plus big circles. Take the matching corner or mid-wall and don't cross tethers.",
  "Absolute Authority|Flares and a stack, four circle baits along the north wall, then a north-to-south knockback (Arm's Length/Surecast).",
  "Virtual Shift: Ice|Keep moving for Laws of Ice; bridges hold one player at a time; stretch icicle tethers and dodge their lines."]}}
]},
{exp:"Dawntrail",type:"Trial",inst:"Recollection",lv:100,il:"Extreme: i730 to queue",rl:["Trials"],patch:"7.2",bosses:[
 {n:"Zelenia",key:"Roseblood Bloom tiles copy any AoE that touches them, including linked tiles. Stay off roses.",d:{
 normal:[
  "Alexandrian Thunder IV|Point-blank and donut rings resolve in spawn order.",
  "Shock|Countdown AoE on each player that leaves a puddle. Spread.",
  "Power Break|Cleaves one side. Go opposite.",
  "Holy Hazard|Two pairs of opposite 120° cleaves in spawn order.",
  "Specter of the Lost|Physical conal buster on both tanks.",
  "Thunder Slash|Slow sequential cones with Thunder IV. Do the in/out first.",
  "Roseblood Bloom|Arena splits into slices with rose tiles and a bleed centre. AoEs touching a rose explode it and its linked tiles.",
  "Roseblood Drop / Valorous Ascension|An orb turns a tile into a rose; thorn lines sweep from the edges with two physical raidwides. Stock Break is a four-hit healer stack."],
 extreme:[
  "Shock|One group spreads on waymarks, the other takes donuts that leave fire and soaks intercardinal towers.",
  "Specter of the Lost|Two non-tanks tethered to conal busters. Tanks take the tethers and mitigate.",
  "Escelon's Fall|Four cleaves hit the closest or farthest players, three times. Groups swap close/far each hit.",
  "Stock Break|Four-hit healer stack.",
  "Blessed Barricade (adds)|Four Roseblood Drop adds; kill before Aether hits 100 or the party wipes. Split into two groups.",
  "Towers / Power Break|Three players per tower; tethered players aim the half-room cleave outward.",
  "Blooms 1–4|Rotating cones off rose tiles, spreads; pick the side with two safe tiles; build roses so no towers connect; keep tethers short.",
  "Blooms 5–6|Valorous Ascension lines and raidwides, then place Emblazon buds to open a safe path to the unsafe tower. Alternative: Emblazon on inner tiles plus heavy mitigation/tank LB."]}}
]},
{exp:"Dawntrail",type:"Trial",inst:"The Ageless Necropolis / Necron's Embrace",lv:100,il:"Extreme: i740 to queue",rl:["Trials"],patch:"7.3",bosses:[
 {n:"Necron",sub:"Normal: The Ageless Necropolis · Extreme: The Minstrel's Ballad: Necron's Embrace",key:"Soul Reaping stores a shape (donut, circle, cleave, line) and Aetherblight casts it later. Remember the order.",d:{
 normal:[
  "Fear of Death|Raidwide plus puddles that grow arms firing lines.",
  "Cold Grip|One arm glows; the boss slams the sides, then the glowing side. Go opposite.",
  "Memento Mori|Central line leaving a puddle that spawns more arms.",
  "Blue Shockwave|Large conal magic buster. Tank faces it into a corner away from the party.",
  "Soul Reaping / Aetherblight|Stores a donut or circle, cast later.",
  "Grand Cross / Neutron Ring|Arena shrinks; proximity lines at intercardinals; heavy raidwide restores it.",
  "Adds / Abyss|Kill Icy Hands before Rising Fear hits 100, or everyone falls into the Abyss with an uncleansable 40s Doom: kill three hands, take the jump pad back up to be cleansed.",
  "Specter of Death / Relentless Reaping / Mass Macabre|Arms sweep leaving one safe lane; four stored shapes are shuffled (follow the numbered order); four-player portals sealed one at a time."],
 extreme:[
  "Blue Shockwave|Two-hit conal buster with magic vulnerability. Invuln or swap during the cast.",
  "Fear of Death|Eight puddles; each player baits an assigned arm just outside its puddle. Tanks/melee north, healers/ranged south.",
  "Cold Grip|Stay central for the side cleaves, then go opposite the glowing arm.",
  "Memento Mori + Smite of Gloom|Light side gets one hand line, dark side four. Tanks take the dark side; nobody overlaps Smite markers.",
  "Twofold / Fourfold Blight|After a stored shape: healer stacks (light parties) or four-player role stacks (partners).",
  "Grand Cross|Stack middle for baits, fan to intercardinals, swap tower roles per set, heal up for Neutron Star.",
  "Adds + Abyss|Point Muted Struggle away; in the abyss tanks interrupt, healers handle Necrotic Pulse and Chilling Grasp, DPS kill the add closest to enrage.",
  "Relentless Reaping / Seasons|Call the four-shape order in chat (e.g. 1 out, 2 in), then partner or light-party stack per Season.",
  "Circle of Lives|Five planets expand and fire donuts. Hop planet to planet in sequence.",
  "Mass Macabre|Portals need 4, 3 or 2 players. Pre-position by role and wait for the vulnerability to drop before the next portal."]}}
]},
{exp:"Dawntrail",type:"Trial",inst:"Hell on Rails",lv:100,il:"Normal: i745 · Extreme: i760 to queue",rl:["Trials"],patch:"7.4",bosses:[
 {n:"Doomtrain",key:"Each car changes the rules. Use boxes and elevation to dodge, and teleport to the back after Derail.",d:{
 normal:[
  "Lightning Burst|Magic AoE on both tanks.",
  "Lightning Express|Lightning lines down all four columns with knockback. Match your height to the safe rune; car 3 has raised platforms.",
  "Windpipe|Pulls players forward, then hits the front two rows.",
  "Unlimited Express|Physical raidwide that knocks everyone to the next car.",
  "Turret Crossing|Side turrets fire lines. Put a box between you and the turret.",
  "Head-On Emission|Hits either the floor or the air (cast message). Use the teleporter to change height.",
  "Runaway Train (adds)|Separate arena; a rotating train busters alternating tanks with a big cone. Kill the Aether add before the gauge fills.",
  "Arcane Revelation / Derailment Siege|Rotating lightning circle explodes when the arms clap (only front, opposite corners or back are hit). Then a multi-hit party tower at the front, Derail, and teleport to the next car."],
 extreme:[
  "Dead Man's Overdraught|8 orbs = spread, 4 = role-shared stack. Resolves after the next Express or Windpipe.",
  "Dead Man's Express / Windpipe|Knockback lines or draw-in. Hide behind a box or lightning field, or use anti-knockback.",
  "Turret Crossing|Only boxes block the lasers (lightning fields don't).",
  "Lightning Burst|Magic damage on marked targets. On car 2 the group stacks to dodge the laser while marked players step out.",
  "Runaway Train|Two smoke puffs = stack, three = spread. Marked players stand either side of the grounded train so cones point away.",
  "Derailment Siege|Stack tower; tanks save invulns for the later Sieges.",
  "Third Rail|Invisible AoEs under everyone on the snap. Stack, then move when it snaps.",
  "Head-on Emission|Ground or air by pose. Teleport to the safe height.",
  "Arcane Revelation|Two groups (melee/ranged) with stack debuffs; move to the safe spot as the arms crackle.",
  "Psychokinesis|Removes boxes and places big AoEs with physical vulnerability. Follow assigned spread spots and move only when told."]}}
]},
{exp:"Dawntrail",type:"Trial",inst:"The Unmaking",lv:100,il:"Normal: i755 · Extreme: i770",rl:["Trials"],patch:"7.5",bosses:[
 {n:"Enuo",key:"Watch the void portal tethers: whichever end channels gets the circle AoE.",d:{
 normal:[
  "Meteorain / Almagest|Raidwides. Almagest adds void portals on its first cast.",
  "Naught Grows / Naught Wakes|Enuo tethers a portal and fires a circle at it; Wakes moves the portal. In P2 a portal can channel back, putting the circle under the boss.",
  "Gaze of the Void|Orbs from the north rotate and fire fast cones in spawn order. Start behind the first cone and step in after it fires.",
  "Deep Freeze|Proximity markers on both tanks. Keep away from them.",
  "Naught Hunts|Two orbs chase two players and leave circles. Targets don't cross the middle; others avoid the trails.",
  "Shrouded Holy / Dimension Zero|Healer stack; multi-hit line stack.",
  "Vacuum|Curved lines spawn void balls. One side always has three long curves, leaving a small safe pocket near the boss on that side.",
  "All For Naught (adds)|Pitch-black arena. Kill Uncast Shadows (lines) and Looming Shadows (tank tethers), destroy the Beacon in the Dark, then stand behind Zero for the ultimate."],
 extreme:[
  "Naught Grows|Orbs on healers: one big orb = full stack, two small = light-party stacks; tanks closest. For the donut version move toward the black hole.",
  "Meltdown|Chains of Condemnation: stay perfectly still, then sprint to clock spots. Dense Emptiness = light parties, Airy Emptiness = pairs.",
  "Gaze of the Void|The first two orbs set a new north. Tanks soak the two large orbs; pairs soak yellow tethers then blue/purple.",
  "Vacuum|Go directly opposite the shortest line and hug the hitbox.",
  "Deep Freeze|Tank flares north, party south. Keep moving until the freeze debuff ends.",
  "All for Naught towers|Eight towers, pairs take north/south ones; nobody crosses east↔west.",
  "Looming Shadow|Knockback (anti-knockback or ride it), avoid the blue circle, burn the add.",
  "Voidal Turbulence|Four cones and four towers. If DPS have cones, supports soak, and vice versa.",
  "Adds duties|Tanks interrupt Drain Touch, healers cleanse Curse of the Flesh, DPS face the middle for Demon Eye.",
  "Lightless World / Double Naught Grows / Naught Hunts|Heavy multi-hit raidwide; one donut + one point-blank, stack tight with tanks closest; chased players drop AoEs clockwise from the black hole."]}}
]},
{exp:"Dawntrail",type:"Trial",inst:"The Windward Wilds",lv:100,il:"Normal: i725 · Extreme: i740",rl:[],patch:"7.35",note:"Monster Hunter Wilds collaboration. Mega Potions are available inside.",bosses:[
 {n:"Guardian Arkveld",key:"Red cracks after Siegeflight = middle safe, white cracks = sides safe.",d:{
 normal:[
  "Roar|Raidwide after the boss braces back.",
  "Chainblade Blow|Raised arm cleaves that half, then a large ground explosion. Go to the other side.",
  "Wyvern's Siegeflight|Dash leaving lines. Red cracks: middle safe. White cracks: sides safe.",
  "Rush|Three charges; each endpoint explodes in rings. Walk into a charged spot and dodge the rings.",
  "Chainblade Charge|Physical stack.",
  "Towers|Six towers (two big ones need mitigation). Bait the ground AoEs outside first; leftover spikes explode if hit.",
  "Wild Energy|Spreads with magic vulnerability (all eight in phase two).",
  "Forged Fury / Wyvern's Weal|Ultimate raidwide that leaves a permanent damage-taken DoT; then a rotating laser. Start behind it and spread."],
 extreme:[
  "Chainblade Blow / Wyvern Ouroblade|Half-room cleave on the raised arm side; Ouroblade often comes with Wild Energy.",
  "Wyvern's Siegeflight|Red cracks = middle, white = sides.",
  "Wild Energy|Spreads: four of one role, then four of another.",
  "Towers|Six towers, tanks take the two large ones. Bait ground AoEs first, avoid spikes.",
  "Forged Fury|Huge raidwide plus damage-up DoT; starts phase two.",
  "Clamorous Chase|Numbered 1–8; the boss dashes to each in order and cleaves. Stand 90° apart at the edge so cleaves go outside.",
  "Wyvern's Weal|Marked player baits a rotating laser that detonates spikes. Bait on the side with the larger tank spike.",
  "Wrathful Rattle / Steeltail Thrust|Repeating lines from the edges; a wind-up knockback that stuns anyone behind. Stand in front."]}}
]}
]);
window.FF = (window.FF || []).concat([
/* ───────── DAWNTRAIL RAIDS (AAC) ───────── */
{exp:"Dawntrail",type:"Raid",inst:"AAC Light-heavyweight (M1–M4)",lv:100,il:"Normal: i685 · Savage: i700–710",rl:["Normal Raids"],patch:"7.0",bosses:[
 {n:"Black Cat",sub:"M1",key:"Mouser breaks any square hit twice. Stand on squares hit once at most.",d:{
 normal:[
  "Bloody Scratch|Raidwide.",
  "One-two Paw|Claws glow, then cleave left and right in glow order.",
  "Black Cat Crossing|Cones from blades on the arena. Stand in the marked safe spot.",
  "Mouser|Squares are hit; a square hit twice breaks. Avoid cracked squares.",
  "Elevate and Eviscerate|Knocks a player up and back. Make sure the landing square is intact.",
  "Shockwave|Centre knockback onto a safe outer square.",
  "Predaceous Pounce|Paw-track dashes with lines and circles. Go to the outer safe spots.",
  "Grimalkin Gale / Overshadow|Spreads; line stack (stay clear of the knocked-back target). Phase two adds a Copycat clone that repeats mechanics from the edge."],
 savage:[
  "Quadruple Crossing|Four closest players bait twin cones, then they repeat. One role baits first, then the other swaps in.",
  "Biscuit Maker|Double-hit physical buster with vulnerability. Invuln or swap.",
  "Nine Lives / Soulshade|Boss stores One-two Paw and a clone performs it later. Remember the first safe side.",
  "Double / Quadruple Swipe|Stored stack: healers (light parties) or four of a role (partners).",
  "Mouser|2×4 grid breaks in sequence; only two patterns exist. Start inner SW, move SE when hit, then NE.",
  "Elevate and Eviscerate|Stand in a tile corner facing the opposite corner so you land on the same tile. Melee inner, ranged outer.",
  "Shockwave + Grimalkin Gale|Supports north, DPS south for the knockback, then spread.",
  "Nailchipper / Splintering Nails|Marked role takes AoEs while the other baits cones; thin cones on one tank, healer and DPS (line up tanks left, healers middle, DPS right).",
  "Raining Cats|Tethers plus close/far stacks. Tether group NE/NW, stack group SE/SW; rotate tethers in a set order.",
  "Enrage|~10:05 final Mouser breaks the whole arena (~125.5k raid DPS)."]}},
 {n:"Honey B. Lovely",sub:"M2",key:"Three hearts = Fatal Attraction (4s stun). Every avoidable hit and tower adds one.",d:{
 normal:[
  "Call Me Honey|Raidwide.",
  "Tempting Twist / Honey Beeline|Donut; front-and-back line. Stand in the safe pocket or at her side.",
  "Honeyed Breeze|Conal buster on both tanks.",
  "Honey B. Live|Raidwide that starts the heart gauge.",
  "Love Me Tender|Spreads, later ground AoEs (+1 heart per hit).",
  "Fracture|Towers. One player per tower (+1 heart).",
  "Loveseeker / Blow Kiss|Point-blank that throws hearts outward; cone at a random player (get behind her).",
  "Honey B. Finale|Raidwide that ends the heart phase."],
 savage:[
  "Drop / Splash of Venom|Stored poison after the next Beeline or Twist: Drop = role-shared stacks, Splash = spread. Remember which.",
  "Honey Beeline / Tempting Twist|Line through the boss or donut, with blobs spawning. Move in for Beeline, out to intercardinals for Twist.",
  "Centerstage / Outerstage Combo|Three quick AoEs, each a heart if hit.",
  "Love Me Tender / Fracture|Towers give hearts; missed towers raise everyone's gauge. Low-heart players soak.",
  "Stinging Slash / Killer Sting|Conal buster on both tanks; shared heavy hit on the main tank.",
  "Heartsick|Stack on a low-heart player splitting four hearts. Four low-heart players stack.",
  "Alarm Pheromones|Groupbee lines that knock back and reduce damage. Dodge individually or rotate.",
  "Poison 'n' Pop / Rotten Honey|Debuffs explode for hearts; Alpha/Beta debuffs explode on contact with another player. Two shortest go middle with 6s+ left, four times.",
  "Enrage|Sheer Heart Attack ~10:06 (~137k raid DPS)."]}},
 {n:"Brute Bomber",sub:"M3",key:"Fuses: short-fuse bombs explode first. Stand on long fuses, then move into the spent explosions.",d:{
 normal:[
  "Brutal Impact|Four-hit physical raidwide.",
  "Knuckle Sandwich|Shared physical buster.",
  "Brutal Lariat|Raised fist dashes across, cleaving that side. Go opposite.",
  "Murderous Mist|270° frontal poison cleave. Stand behind and cleanse.",
  "Barbarous Barrage|Four knockback towers. Soak from the inside or use anti-knockback.",
  "Fuses of Fury|Short-fuse bombs go first. Stand on long fuses, then step into the cleared spots.",
  "Doping Draught|Phase two: enhanced versions. Lariat Combo = two lariats in a row; check his facing after the first.",
  "Infernal Spin / Brutal Burn|Rotate with the boss through rings; stack then six-hit Brutal Impact."],
 savage:[
  "Quadruple / Octuple Lariat|First is always point-blank, later can be donuts. Partner stack (Quadruple) or clock spots (Octuple).",
  "Quadraboom / Octoboom Dive|Proximity or edge knockback (watch his hands). Partners or spread.",
  "Barbarous Barrage|Knocked back through 4-, 2- and 8-player towers. Orbs show tower size.",
  "Tag Team / Chain Deathmatch|Clones' Lariat Combo; take only your chained clone's first lariat.",
  "Final Fusedown|Short-fuse role spreads in the safe quadrant; long-fuse role stays central then moves out.",
  "Fusefield / Bombarian Flame|Detonate fuses one player at a time from inside the field, shortest debuff first; wait out the vulnerability between.",
  "Knuckle Sandwich|Shared buster; coordinate invulns.",
  "Fuse or Foe / Infernal Spin|Start behind the spin, rotate, cross the middle for the last cone.",
  "Enrage|Special Bombarian Special ~11:15 (~143.8k raid DPS)."]}},
 {n:"Wicked Thunder",sub:"M4",key:"Blast counts: Threefold/Fourfold front (diamond) or back (circle). Track stay vs move for every hit.",d:{
 normal:[
  "Wrath of Zeus|Raidwide.",
  "Sidewise Spark|Lightning arm cleaves that side.",
  "Shadow's Sabbath|Clone performs a mechanic (often Sidewise Spark), then a tankbuster.",
  "Stampeding Thunder|Five hits that break three columns. Only the far left or right column is safe.",
  "Threefold / Fourfold Blast|Front (orange diamond) or back (blue circle) hits; the prefix gives the count.",
  "Wicked Bolt|Five-hit stack.",
  "Bewitching Flight|Wing lines leave lightning that explodes wider later. Move with the group.",
  "Soaring Soulpress / Wicked Hypercannon|Jump stack; ten-hit stack repeated through the final phase."],
 savage:[
  "Wrath of Zeus|~160k raidwide. Keep her in her starting spot.",
  "Bewitching Flight|Wing and cube lines leave lightning; work out whether inside or outside lines are safe.",
  "Electrifying / Narrowing / Widening Witch Hunt|Role-targeted debuffs and close/far baits; alternating donut/point-blank on two targets.",
  "Electrope Edge|Count Witchgleam hits per player; it sets debuff length for Lightning Cage.",
  "Ion Cluster|Positron/Negatron: be hit by the opposite charge. Sprint for Stampeding Thunder.",
  "Electrope Transplant|Stand south at max melee to be knocked onto the second platform.",
  "Cross Tail Switch|Nine hits of ~120k. Full mitigation or tank LB3.",
  "Twilight / Midnight / Sunrise Sabbath|Clone patterns decide safe quadrants and stack vs spread; short debuffs bait cannons, long soak towers.",
  "Chain Lightning / Sword Quiver|Note the safe rod for each set; slash lines then a Laceration stack, three times.",
  "Enrage|~13:30 (~141k raid DPS plus transition downtime)."]}}
]},
{exp:"Dawntrail",type:"Raid",inst:"AAC Cruiserweight (M1–M4)",lv:100,il:"Normal: i715 · Savage: i730–740",rl:["Normal Raids"],patch:"7.2",bosses:[
 {n:"Dancing Green",sub:"M1",key:"Disco Infernal: be inside a spotlight when your burn debuff expires.",d:{
 normal:[
  "Do the Hustle / X-snap Twist|Cleaves the pointed half; X-snap cleaves one side several times, then the other once.",
  "Deep Cut|Conal magic buster on both tanks.",
  "Funky Floor|Checkerboard tiles alternate. Stand on safe tiles as the pattern swaps.",
  "Full Beat|Healer stack.",
  "Disco Infernal|Raidwide with burn debuffs and moving spotlights. Be in a spotlight when yours expires.",
  "Ride the Waves|Three-line waves sweep from the north. Stand in the safe lanes.",
  "Ensemble Assemble / Arcady Night Fever|Eight dancers point; Green follows with half-room cleaves. A clean run fills Grooviness for a damage buff and LB.",
  "Frogtourage / Eighth Beats|Dancers leave ground AoEs, then spreads."],
 savage:[
  "Deep Cut|Physical buster with bleed on top two aggro.",
  "Flip to A-side / B-side|Stored: A-side = cone on one tank, healer and DPS (role spread); B-side = healer line stacks (light parties).",
  "X-snap Twist + Drop the Needle|2–4 half cleaves, then the opposite side; resolve the stored flip.",
  "Disco Infernal|Light parties split east/west; find the spotlight on a safe tile.",
  "Funky Floor / Inside Out / Outside In|Keep moving on safe tiles while doing in/out.",
  "Arcady Night Fever / Let's Dance!|Eight sequential cones, alternating in/out; line up by Wavelength A/B debuff timers.",
  "Ride the Waves|Colour partners move the boss between safe lanes for uptime.",
  "Eighth / Quarter Beats|Max-range spread, or stack with your colour partner.",
  "Frogtourage|If the end frogs move apart, that cardinal and its opposite are safe; if together, unsafe.",
  "Enrage|Hi-NRG Fever ~10:06 (~171k raid DPS)."]}},
 {n:"Sugar Riot",sub:"M2",key:"Double Style: winged bombs are safe, normal bombs aren't, and arrows fly toward the target.",d:{
 normal:[
  "Single / Double Style|Draws objects: fused bombs = big AoE, winged bombs jump across, arrows fire lines, a target redirects arrows.",
  "Pudding Party|Multi-hit healer stack.",
  "Color Riot|Magic buster on both tanks.",
  "Mousse Mural|Raidwide that resets the arena.",
  "Sugarscape|Arena turns to desert (previewed on screen). Cacti explode; quicksand grows from the middle south, so use the corners.",
  "Mousse Touch-up|Spreads plus a party DoT.",
  "Taste of Thunder / Fire|Thunder spreads, fire stacks on both healers.",
  "Flood / Storm|River floods with lightning; a storm cloud kills everyone on the island it strikes. Cross bridges to dodge."],
 savage:[
  "Color Riot|Raised gun hits closest tank, lowered gun the farthest; Warm/Cold tint alternates. Party at max melee.",
  "Wingmark + Color Clash|Launched across the arena; four shots = partners, two = light parties.",
  "Sticky Mousse|Two non-tanks need four players each to split it.",
  "Sugarscape|Heal to full before each mechanic; marked players run away from the group.",
  "Quicksand|Don't move or dash while standing in it; exit at the corner opposite the cactus-blocked one.",
  "Pudding Graf|Winged-bomb holders launch into quicksand; normal-bomb holders stand in quicksand and step out.",
  "Live Painting (adds)|Four waves: MT takes Mu and Jabberwock, OT takes Yan (keep apart from Mu). Ranged kill Gimme Cat; chain-stun the Jabberwock as it walks to its prey healer.",
  "Lightning Storm|Move away from your start spot on the flash; roles rotate opposite ways round the safe bridge.",
  "Mousse Drip / Moussacre / Explosion|Far players drop multi-hit puddles north, close players bait cones; eight towers: bait outside, then soak.",
  "Enrage|Artistic Anarchy ~11:24 (~190k raid DPS)."]}},
 {n:"Brute Abombinator",sub:"M3",key:"Sword = donut (go in), club = point-blank (go out).",d:{
 normal:[
  "Brutal Impact|Physical raidwide.",
  "Stoneringer|Sword = donut, club = point-blank.",
  "Brutish Swing|Repeats the weapon AoE plus a shared physical buster at the front.",
  "Spore Sac|Vines leave two safe spots in the middle; adds then cast Crossing Crosswinds. Silence them.",
  "Pulp Smash|Healer stack; the boss jumps to them and fires cones.",
  "Quarry Swamp|Petrifying gaze. Hide behind add corpses.",
  "Explosion / Neo Bombarian Special|Three proximity AoEs on the edges (go to the third, dodge into the first); knockback off the arena from the far north edge onto platform two.",
  "Glower Power / Abominable Blink|Front line plus lightning spreads; flare on a tank, who runs away."],
 savage:[
  "Brutal Impact|Multi-hit physical raidwide.",
  "Stoneringer / Smash Here or There|Sword: start inside; club: start outside. Castbar sets tank positions.",
  "Sinister Seeds|Vines with opposite intercardinal safe spots; interrupt Blooming Abomination adds in order.",
  "Quarry Swamp|Petrify. Hide behind an add or corpse.",
  "Neo Bombarian Special|Mitigate and burst, stand at the north edge to be knocked to phase two.",
  "Thorny / Demolition / Debris Deathmatch|Tethers that hurt more with distance; passable tethers; four cardinal tethers then Killer Seeds partner stacks.",
  "Abominable Blink|Flared tank to a corner, everyone else at max melee.",
  "Powerslam / Lashing Lariat / Slaminator|Breaks the arena into phase three; go to the glowing weapon's side; invuln the big tower.",
  "Enrage|~11:10 (~180k raid DPS)."]}},
 {n:"Howling Blade",sub:"M4",key:"Terrestrial Titans: towers fall in the direction they're sliced. Keep away from that edge.",d:{
 normal:[
  "Extraplanar Pursuit|Physical raidwide.",
  "Great Divide|Shared line buster.",
  "Wolves' Reign|Clones charge leaving circles; then a dash with a wide knockback cone. Move opposite the boss.",
  "Heavensearth|Healer stack.",
  "Beckon Moonlight|Cardinal clones cleave halves in spawn order (watch the glowing sword).",
  "Shadowchase|Clones fire lines. Stand behind a clone.",
  "Bare Fangs / Terrestrial Rage|Fang adds fire lines in spawn order with ground AoEs. Stand on the second set's line, dodge into the first.",
  "Adds phase / Tracking Tremors|Kill Wolf of Wind and Wolf of Stone together before Saber Intensity hits 100; multi-hit healer stack later."],
 savage:[
  "Windfang / Stonefang|Bits pointing at intercardinals = cardinals safe (and vice versa). Windfang: colour partners; Stonefang: spread.",
  "Eminent / Revolutionary Reign|Tanks hold #1/#2 aggro. Eminent: chase after the dash; Revolutionary: stay where he jumped.",
  "Millennial Decay|Colour groups take the knockback, then rotate an intercardinal as role AoEs go off.",
  "Wind of Decay / Aero III / Prowling Gale|Tethered role is knocked behind the opposite wolf head; other role soaks towers.",
  "Tracking Tremors / Great Divide|Eight-hit healer stack; mitigate or invuln the shared buster.",
  "Tactical Pack (adds)|Two wolves; Earth/Wind Fonts swap debuffs. Run through the matching Font with the shortest debuff; don't let an add die early.",
  "Terrestrial Rage / Beckon Moonlight|Colour waymarks: supports cardinals, DPS intercardinals; quadrant dodging; must be at 1 HP by ~6:50.",
  "Phase two platforms|Five platforms linked by teleporters. Quake III healer stacks, Ultraviolent Ray role line-up, Twinbite on north platforms, Elemental Purge needs an invuln.",
  "Twofold Tempest / Champion's Circuit|Shared tethers carried to the outer melee platform; rotating AoEs per platform four times.",
  "Lone Wolf's Lament / Howling Eight|Close/far partner tethers, towers, then the multi-hit soft enrage (invulns). Starcleaver destroys the last platform."]}}
]},
{exp:"Dawntrail",type:"Raid",inst:"AAC Heavyweight (M1–M4)",lv:100,il:"Normal: i745 · Savage: i770",rl:["Normal Raids"],patch:"7.4",bosses:[
 {n:"Vamp Fatale",sub:"M1",key:"Satisfied stacks grow her. At 8+ stacks Half Moon and other AoEs get bigger.",d:{
 normal:[
  "Half Moon|Cleaves one half, then the other. Watch where the orb is kicked.",
  "Vamp Stomp|Point-blank that summons bats; the shockwave detonates bats it touches.",
  "Sadistic Screech|Raidwide that removes the outer columns and brings the Coffinmaker north.",
  "Flaying Fry|Spreads.",
  "Penetrating Pitch|Stacks on both healers with magic vulnerability.",
  "Crowd Kill / Insatiable Thirst|Raidwides that grow her (Satisfied stacks, bigger orb).",
  "Aetherletting|Four players drop plus or X marks that explode into lines. Ranged drop them at the edge.",
  "Plummet / Barbed Burst|Towers spawn Fatal Flail adds; kill before their cast ends. Brutal Rain is a multi-hit healer stack."],
 savage:[
  "Hardcore|Buster on both tanks on pull.",
  "Vamp Stomp|Spread to clock spots for Curse of the Bombpyre; take the shockwave alone, avoid bat explosions.",
  "Brutal Rain|Healer stack; more hits as Satisfied grows.",
  "Coffinfiller / Half Moon / Dead Wake|Coffin lines in sequence, half cleave, then the Coffinmaker advances a row.",
  "Finale Fatale|Raidwide that makes the arena a circle with puddles.",
  "Aetherletting|Drop prey markers between cones offset CCW from clock spots, then everyone goes dead centre.",
  "Adds (Doornail, Flail)|Tanks soak towers; DPS kill Doornails then Flails, cleaving when possible.",
  "Hell in a Cell|Soak a tower, kill your add to escape; rotate roles clockwise from north.",
  "Undead Deathmatch / Sanguine Scratch|Tethered bats do donut or point-blank; stand on the bat or on the boss accordingly.",
  "Enrage|~10:05 (~212k raid DPS)."]}},
 {n:"Red Hot & Deep Blue",sub:"M2 · The Xtremes",key:"Fire-debuffed players go near Red Hot, water-debuffed near Deep Blue. Fire and water cones exploding together is the danger.",d:{
 normal:[
  "Hot Impact|Shared tankbuster.",
  "Alley-oop Inferno|Spreads leaving fire puddles. Drop them along the back.",
  "Cutback Blaze|Cones on two players leaving burning slices.",
  "Diver's Dare|Raidwide that clears all fire.",
  "Sickest Take-off / Sick Swell|Deep Blue's wave knocks back from the front (or the edge he surfs from). Stand to the side.",
  "Deep Varial|Huge cone from an edge toward the middle.",
  "Xtreme Spectacular|Proximity line down the middle then light raidwide pulses. Stand at the safe edge.",
  "Firesnaking / Watersnaking|Four fire or water debuffs; fire players near Red Hot, water near Deep Blue, cones outward."],
 savage:[
  "Flame Floater|Four tethered in order, Red Hot dashes to each leaving fire. Form a reverse L within half tether range.",
  "Alley-oop Inferno / Cutback Blaze|Drop puddles at walls; bait Cutback so the safe cone points to the far corner.",
  "Pyrolation|Three-hit healer stack leaving fire; stutter-step into the safe cone.",
  "Sick Swell / Sickest Take-off|Count orbs: eight = spread, two or one = light-party stack.",
  "Reverse / Double-Dip Alley-oop|Repeats on spots players occupied or avoided. Stay or move by version.",
  "Deep Impact|Buster on the farthest player with knockback; tank at max melee, party behind.",
  "Insane Air|Surfboard orientation: up = buster, middle = conal share, down = four cones.",
  "Watery Grave / Deep Aerial|Two players bubbled; water tether weakens the bubble, fire hits it for raid damage. Keep tethers parallel.",
  "Xtreme Fire/Watersnaking|Cleanse by being hit by the opposite boss: healer, melee, ranged order.",
  "Enrage|~10:00 (~213k raid DPS)."]}},
 {n:"The Tyrant",sub:"M3",key:"Draw Steel sets his weapon (scythe = donut, axe = point-blank, sword = plus) for the whole fight.",d:{
 normal:[
  "Draw Steel|Weapon choice sets AoE shape: scythe donut, axe point-blank, sword plus.",
  "Void Stardust|AoEs that follow players and drop ground puddles. Spread and keep moving.",
  "Trophy Weapons|He dashes to each trophy weapon in turn. Track the order.",
  "Dance of Domination / Raw Steel|Repeated slashes with lines; one shared hit while others get spreads.",
  "Charybdistopia|Everyone to 1 HP; a short damage-free window follows. Heal up.",
  "Assault Apex|Faster trophy jumps; final jumps spawn cone tornadoes.",
  "Double Tyrannhilation|Hide behind a rock that has another rock behind it.",
  "Flatliner / Arcadion Avalanche|Line breaks the middle with knockback (stay close, two per side); then he throws a platform. Go to the side he isn't facing."],
 savage:[
  "Crown of Arcadia|Physical raidwide.",
  "Raw Steel Trophy|Axe: shared buster plus spreads. Scythe: cones on three players, party stacks behind.",
  "Trophy Weapons|Sword: light parties left/right. Axe: stack mid. Scythe: clock spots. The weapon facing him goes first.",
  "Void Stardust|Melee/tanks stack north and rotate clockwise, ranged fan out, then stack or spread.",
  "Dance of Domination|Seven-hit raidwide, then lines leave safe spots.",
  "Ultimate Trophy Weapons|Six weapons fast, tornadoes from the last four. Save healing cooldowns.",
  "Great Wall of Fire|Two shared busters with fire resist down. Tanks swap fronts or invuln.",
  "Orbital Omen / Meteorain / Triple Tyrannhilation|Portal lines in sequence; place meteors in assigned lines, then hide behind three rocks.",
  "Flatliner / Ecliptic Stampede|Platforms split: light parties by side, pair towers, bait Fire Breath away from tethers.",
  "Heartbreak Kick|Three stacking multi-hit towers; tanks rotate invulns, party mitigation on the last. Enrage ~11:00 (~233k raid DPS)."]}},
 {n:"Lindwurm",sub:"M4 · Normal, and Savage door boss",key:"Cruel Coil: don't chase the first gap in the rotating tail. Wait for the second and leave immediately.",d:{
 normal:[
  "The Fixer / Splattershed|Raidwides; Splattershed engorges both arms.",
  "Bloodshed / Serpentine Scourge|Engorged arm cleaves its half. Go to the other side.",
  "Ravenous Reach|Huge sweep leaving flesh puddles. Stand behind the head, then move to the clean spot.",
  "Cruel Coil|Bound and pulled in; the tail wall rotates with one gap. Leave through the second gap.",
  "Visceral Burst|Tankbusters.",
  "Grotesquerie|Spreads; Flesh Forward teleports you when it expires and Directed Grotesquerie fires a cone. Face the platform and point the cone out.",
  "Feral Fission / Bring Down the House|Tails rise and destroy the platform under them.",
  "Phase two|Regenerates enraged. Mindless Flesh lines across columns then a big cleave; Dramatic Lysis spreads."],
 savage:[
  "The Fixer|~400k raidwide. Pre-mitigate to 50%+.",
  "Mortal Slayer|Orbs from each arm hit the closest player. Tanks take dark orbs, others green.",
  "Act 1 Grotesquerie|Directed cones; one role stacks, the other spreads, cones pointed outward.",
  "Ravenous Reach|Bait ground AoEs, dodge the sweep, move to the small or large safe spot.",
  "Fourth-wall Fusion + Visceral Burst|Healer stack while tanks take busters on the opposite side.",
  "Act 2 Grotesquerie / Roiling Mass|Alpha/Beta in-line order 1–4 breaking tethers; soak the tower two ahead in order.",
  "Cruel Coil|Seven 90° rotations; exit through the gap. Touching the boss knocks back with damage down.",
  "Act 3 (Mitotic)|Cells point fixed cardinals and make towers; go to the opposite cardinal and send your tower onto another player.",
  "Split Scourge / Curtain Call|Tanks bait heads' busters; Rotting Flesh cleansed by being hit by Ravenous Reach.",
  "Raptor Knuckles / Serpentine Scourge|Knockback from NW/NE or half-room from W/E; order set by which arm spawned first. Enrage ~7:17 (~246k)."]}},
 {n:"Lindwurm (final)",sub:"M4 Savage final boss · Savage only",key:"Replication: every clone copies a player's assignment. Know which clone is yours before Staging resolves.",d:{
 savage:[
  "Arcadia Aflame|~350k raidwide on pull. Heavy mitigation.",
  "Replication 1|Clones do fire slams, dark magic or cones. Bait so nobody takes the same debuff twice; the far dark clone is the new north.",
  "Snaking Kick / Double Sobat|Cleave toward a random player (stand behind); shared buster then a magic buster on top aggro.",
  "Staging / Replication 2|Eight clones tether to players and copy their mechanic. Use a fixed strat (DN or Banana Codex).",
  "Firefall Splash / Netherworld Near-Far|Jump on a tether holder, cones on closest four, knockback on farthest; two magic stacks on the closest or farthest pair.",
  "Mutating Cells|Alpha players must take no damage (Beta tank holds the boss).",
  "Blood Mana / Blood Wakening|Shapes move into two black holes; soak to delay, then switch to the opposite hole.",
  "Idyllic Dream|~300k raidwide; mechanics stored in two dimensions across split platforms. Memorise safe spots and towers (macros help).",
  "Downfall towers / Arcadian Arcanum|Dark, Wind, Fire, Earth towers per platform (Fire roots you, Dark needs a cleanse); four spread AoEs with Holy resist down.",
  "Temporal Curtain / Arcadian Hell|Clone returns through a portal; final raidwides ~260k then ~320k. Enrage ~9:14 (~238k raid DPS)."]}}
]}
]);
window.FF = (window.FF || []).concat([
{exp:"Dawntrail",type:"Alliance Raid",inst:"Jeuno: The First Walk",lv:100,il:"24 players",rl:["Alliance Raids"],patch:"7.1",bosses:[
 {n:"Prishe of the Distant Chains",key:"Count the 'Wait for it…' lines: they tell you which Knuckle Sandwich ring or Uppercut landing is safe.",d:{normal:["Knuckle Sandwich|Three slam circles. Stand outside the ring that matches the number of 'Wait for it…' lines.","Nullifying Dropkick|Tankbuster shared by all three tanks.","Banish Storm|Staves fire AoEs outward along their arrows.","Crystalline Thorns|Red spikes cover much of the floor. Never step on them; always precedes Auroral Uppercut.","Auroral Uppercut|Raid-wide knockback with three telegraphs. Count the lines and land safely.","Banishga IV|Orbs swell in sequence. Stand by the small ones, then move into the space the big ones leave."]}},
 {n:"Fafnir the Forgotten",key:"Offensive Posture tells you the attack: Head = edge fire clockwise, Tail = 270° swipe (stand at the head), Feet = huge AoE (edge only).",d:{normal:["Hurricane Wing|Wind pushes and damages everyone; Darters spawn. All tanks pick them up.","Offensive Posture: Head|Fire runs clockwise around the edge. Stay near where it starts.","Offensive Posture: Tail|270° swipe behind. Stand directly in front of the head.","Offensive Posture: Feet|Large AoE around Fafnir. Only the very edge is safe.","Baleful Breath|Multi-hit stack. Stay in until it ends.","Winged Terror / Absolute Terror|Wings slam left and right (stand centre-front), or a huge AoE through the middle (stand at the sides)."]}},
 {n:"The Ark Angels",key:"Break Ark Angel EV's shield, then interrupt Mijin Gakure, or the raid can wipe.",d:{normal:["The Decisive Battle|Each tank is tethered to one Ark Angel; only that one can be damaged by their alliance. Follow your alliance's tank.","Meikyo Shisui|Rapid AoE sequence: checkerboard ice, glowing orb (look away), flower, lightning crystal. The safe cone is smaller than it looks.","Meteor|Ark Angel TT long cast. Interject it.","Guillotine|TT moves to a side and cleaves forward. Stand at his sides.","Utsusemi|Ark Angel HM's clones tether and chase players. Keep distance.","Mijin Gakure|Break EV's Ark Shield, then interject HM's cast.","Rampage|Ark Angel MR dashes three lines then slams a big circle."]}},
 {n:"Shadow Lord",key:"Binding Sigil and Dark Nebula both happen in an order. Remember it and stand where the last one already went off.",d:{normal:["Giga Slash / Nightfall|Swords leave a small safe zone, then a second; Nightfall adds a third hit.","Umbra Smash|Lines cascade outward. Run into a spot an earlier line already hit.","Implosion|Half-circle AoEs from both hands; one orb grows. Stand opposite the larger orb.","Chthonic Fury|Raidwide; new phase.","Dark Nebula|Arena splits into four circles; knockback lines (later four in sequence). Leave room to be knocked to safety.","Dark Sigils|Circles and squares with thorns pointing in or out. The AoE follows the thorns.","Shadow Spawn|Two clones repeat Giga Slash or Implosion in the boss's order.","Binding Sigil|Three sigil sets detonate in order. Stand in ones that already went off."]}}
]},
{exp:"Dawntrail",type:"Alliance Raid",inst:"The Cloud of Darkness (Chaotic)",lv:100,il:"i710 · 24 players",rl:[],patch:"7.11",note:"Chaotic alliance raid. Usual assignments: Alliance A west, B centre, C east; Alliance B plus one tank and healer from A and C take the inner tiles in phase two.",bosses:[
 {n:"Cloud of Darkness",key:"Phase two tiles hold one player each: tanks, then healers, then DPS move first. Refresh tiles often.",d:{chaotic:["Blade of Darkness|One raised arm and one low hand = big AoE, stand behind the low hand. Crossed arms = point-blank, move away.","Deluge of Darkness|Raidwide plus DoT. Orange floor vanishes; stand on the surviving shape.","Grim Embrace|Tethers: hand under the heart = walk backward at timer end, behind the heart = walk forward. Fails give Doom; healers cleanse.","Cloudlets of Darkness|Lasers charge in order. Stand where beams 1 and 2 cross, then step into them after they fire.","Aero IV / Death IV|Knockback west/south/east; or pull-in, point-blank, then donut (wait at outer corners, step in after the circle).","Flare / Unholy Darkness|One flare per alliance (A west, B south, C east); healer stacks in six light-party spots.","Rapid-Sequence Particle Beam|Line stack per alliance, tanks in front with light mitigation.","Break IV|Two eye minions gaze. Look away; the west or east corner is always safe to face.","Stygian Shadows / Atomos|Tanks hold shadows away from Cloud. A and C ranged kill Atomos on spawn.","Evil Seeds / Thorny Vine / Ghastly Gloom|Drop seeds on marked edges; run tethers apart; cross = corners, donut = inside the hitbox (alternates). Tanks interject Flood of Darkness."]}}
]},
{exp:"Dawntrail",type:"Alliance Raid",inst:"San d'Oria: The Second Walk",lv:100,il:"24 players",rl:["Alliance Raids"],patch:"7.3",bosses:[
 {n:"Faithbound Kirin",key:"Wrought Arms copy Kirin's previous AoE, so two shapes can resolve together.",d:{normal:["Stonega IV|Raidwide.","Wrought Arms|Stationary arms repeat the boss's last AoE.","Crimson Riddle|Frontal cleave, then a tail cleave over half the room.","Summon Shijin|Byakko jumps to a panel, dashes across, then a big circle. It ends across the arena, so the sides are safe.","Double Wringer / Synchronized Sequence|Always three AoEs: point-blank at cast end, then initial plus donut, then the copy.","Mighty Grip|Square arena; kill both Chiselled Arms before Kirin Captivator finishes.","Towers|Four towers; an NPC takes one, tanks soak the rest."]}},
 {n:"Ultima and Omega",key:"Multi-missile pulls and stuns you: cross to the green area before the airship explodes.",d:{normal:["Antimatter|Magic busters on Ultima's tank and the non-Omega tank.","Energy Orb|Beams from the edge; only two of three Mana Screens get hit. Use the beam path.","Tractor Beam|Pulls toward Ultima with an airship AoE; move with the airship lines.","Chemical Bomb|Four proximity AoEs round the edge in succession. Rotate.","Surface Missile|Three sets of AoEs in succession.","Trajectory Projection|Chasers explode where you stood when the timer ends. Keep moving.","Multi-missile|Pull and stun; cross to the green area (use mobility)."]}},
 {n:"Kam'lanaut",key:"Elemental Blade rings show which elements come next. Move away from those elements.",d:{normal:["Elemental Blade|Element rings around the boss foretell the next mechanic.","Light Blade|Three parts ending in a half-room cleave.","Esoteric Palisade|Crystals with expanding element rings (line, cone or circle). Leave the shown elements.","Illumed Facet|Adds fire lines toward the platforms, then a knockback (Surecast/Arm's Length).","Empyrean Banish IV|Stack; one stack comes with a half-room cleave, so stack on the safe side."]}},
 {n:"Eald'narche",key:"Cronos Sling cards: sphere = point-blank, cylinder = donut, moving cards = side cleave.",d:{normal:["Cronos Sling|Card shapes show the AoE.","Duplicate|Giant cards explode a tile and its cardinal neighbours. Two safe tiles at first, one after the transition (corner one tile from the other).","Gaea Stream|Lines in the arrow direction; a second set after the transition.","Ancient Triad|Ice on three tiles persists into the next Gaea Stream. Stay opposite.","Warp / Sleepga|Jumps to a corner; frontal sleep. Avoid the front.","Omega Javelin|Spreads leave puddles that explode later."]}}
]},
{exp:"Dawntrail",type:"Alliance Raid",inst:"Windurst: The Third Walk",lv:100,il:"i755 · 24 players",rl:["Alliance Raids"],patch:"7.5",bosses:[
 {n:"Shantotto the Demon",key:"Superior Stone II cliffs: stand in the column where they're furthest apart, then in the gap when they slam.",d:{normal:["Empirical Research|Line where she faces.","Superior Stone II / Groundbreaking Quake|Raidwide and north/south cliffs; then cliffs slam together. Stand in the gap.","Diagrammatic Doorway / Circumscribed Fire|Ley-line jumps with donuts. Follow her, then move out after the last.","Localized Blizzard|Point-blank at the final ley line; spread for ice and lightning.","Vidohunir|Tankbuster shared by three tanks.","Aero Dynamics|Timed knockback on a marked player. Use the cliffs to stop it."]}},
 {n:"Alexander Resurrected",key:"Perfect Defense: kill all four Gordius System adds while dodging their donut/point-blank AoEs.",d:{normal:["Banishga IV|Raidwide.","Divine Arrow|Spinning circle then rotating cones and rings. Note the start and spin direction.","Radiant Sacrament|Squares travel down columns. Stand beside the first one and step in after it fires.","Divine Spear|Triangle AoEs from lines. Start central, move once you see the shape.","Impartial Ruling|Side cleave when a gauge fills. Watch which side.","Perfect Defense|Four Gordius adds.","Electrify|Tethers to containers, then big circles in order."]}},
 {n:"Promathia",key:"Empty Salvation puddles give a heavy debuff. Light travels into them and detonates.",d:{normal:["Aw'aern / Aw'zdei adds|Simple AoEs before the boss.","Empty Salvation|Raidwide that leaves puddles. Avoid them.","Fleeting Eternity|Purple light travels to puddles and detonates.","Pestilent Penance|Corner jump then a closing ring.","False Genesis|Three zones with Memory Receptacle adds and knockbacks. Back against a wall; help other platforms after your add dies.","Earthbound Heaven|Pink circles move through puddles. The two lights that start close together are safe.","Infernal Deliverance|Stack towers on puddles. Soak from the edge and leave immediately."]}},
 {n:"Shinryu Paradox",key:"Match your platform to your Cloak of Twilight colour.",d:{normal:["Cosmic Breath / Cosmic Tail|Top platform hit (go bottom) or bottom platforms hit (go top).","Cloak of Twilight|Light or dark debuff. Avoid opposite-colour mechanics.","Twilight Nebula|Roomwide with light on one platform, dark on the other.","Cataclysmic Vortex|Head marker says pause, play, gaze or gaze-at-boss. Failing sets HP to 1, tanks included.","Dark Nova|Tankbuster."]}},
 {n:"Hollow King",key:"Tower debuff: take one tower, skip the next.",d:{normal:["Towers|Front towers leave a debuff. Take one, skip the next.","Left / Right Swordscross|Half the arena plus a diagonal.","Twin Blaze|Two front AoEs plus a donut on one side. Go front, then to the donut side.","Burst|Rings from both sides.","Cosmic Flame|Exaflares from east and west. Start beside one, step into it after it fires.","Super Nova|Multi-hit stack."]}}
]},
{exp:"Dawntrail",type:"Ultimate",inst:"Futures Rewritten (Ultimate)",lv:100,il:"Synced",rl:[],patch:"7.11",note:"Condensed overview of each phase. Learn the full fight from a dedicated guide and agree a strat (most PF uses the community standard).",bosses:[
 {n:"Fatebreaker",sub:"Phase 1",key:"Fire = pairs or stacks, lightning = spreads, on every combo.",d:{ultimate:["Cyclonic Break|Protean cones rotate; step into the cone that just fired. Fire = partner stacks, lightning = spread.","Powder Mark Trail|Buster that explodes on the tank and nearest player. Tank swap; keep the party clear.","Utopian Sky|Clones with raised or lowered weapons show the safe lanes; resolve the fire/lightning follow-up.","Fall of Faith|Conga line; four tethers fire fire (stack + knockback) or lightning (spread) in order. Go to your side per tether.","Burnt Strike towers|Fill towers by anchor and count; fire knocks back, lightning widens into a line.","Burnished Glory|Raidwide bleed; boss must be at 1 HP before the enrage cast ends."]}},
 {n:"Usurper of Frost",sub:"Phase 2",key:"Shiva's weapon: axe kick = out, scythe kick = in.",d:{ultimate:["Diamond Dust|Axe/scythe kick in or out, icicles, spreads and knockback baits. Frigid Stone puddles.","Mirror, Mirror|Mirrors copy her cleaves. Party goes to the mirror opposite the blue one, then the red ones.","Light Rampant|Chained tethers broken by forming a hexagon, light towers and stacks, then Banish III.","Intermission|Kill crystals of light and darkness in order while dodging; Absolute Zero raidwide."]}},
 {n:"Oracle of Darkness",sub:"Phase 3",key:"Ultimate Relativity: your fire timer (short, medium, long) sets when you spread, stack, bait and drop your rewind.",d:{ultimate:["Ultimate Relativity|Hourglasses, timed fire spreads, Dark Water stacks and rewind spots. Bait the hourglass lasers in order.","Apocalypse|Light pattern rotates exaflare circles. Find the starting safe spot and rotate with it; Dark Water group stacks.","Darkest Dance / Shockwave Pulsar|Tank baits the jump with knockback; heavy raidwide."]}},
 {n:"Usurper & Oracle",sub:"Phase 4 · Enter the Dragon",key:"Crystallize Time: your debuffs (dragon heads, red/blue) decide who pops which head. Return to your placed rewind.",d:{ultimate:["Darklit Dragonsong|Tethers form a box; towers and light stacks; tethered players bait shapes.","Akh Morn|Multi-hit stacks from each boss. Mitigate.","Crystallize Time|Dragon heads, Wyrmclaw/Wyrmfang, Unholy Darkness and rewinds. Pop heads with the right debuff.","Edge of Oblivion / Morn Afah|Heavy raidwides. Keep both bosses' HP even."]}},
 {n:"Pandora",sub:"Phase 5",key:"Paradise Regained tower order and the Polarizing Strikes tank swap.",d:{ultimate:["Fulgent Blade|Paired lines sweep across. Dodge into the gap of the first.","Paradise Regained|Light and dark towers in sequence with tank cleaves.","Polarizing Strikes|Alternating busters with light/dark debuffs. Tanks swap, party stacks behind.","Wings Dark and Light|Tanks take the wing cleaves, party moves through. Enrage follows."]}}
]},
{exp:"Dawntrail",type:"Ultimate",inst:"Dancing Mad (Ultimate)",lv:100,il:"i790 to enter",rl:[],patch:"7.51",note:"Requires the Heavyweight Savage clear. Kefka's telegraphs can be real or fake (question-mark rings): a fake reverses the expected safe spot.",bosses:[
 {n:"Kefka",sub:"Phase 1 · Graven Images",key:"Fake telegraphs (question-mark rings) reverse the outcome. Check before you move.",d:{ultimate:["Setup|Role numbers; support light party west, DPS east, clock positions.","Graven Image 1|Knockbacks, ice cones, fire spreads/stacks and towers from line AoEs.","Graven Image 2|Purple and yellow tethers; light parties stack north and south to overlap puddles; knockback-debuffed players detonate them.","Graven Image 3|Place teleporter arrows in a square; confused players walk into them to finish the puzzle.","Push|Kefka below 15% before enrage. Failing the puzzle leaves the treasure coffer empty."]}},
 {n:"Forsaken Kefka",sub:"Phase 2",key:"Eight duo-tower sets in AAABBBBA order: Group A takes sets 1–3 and 8, Group B sets 4–7.",d:{ultimate:["Forsaken|Spread, Stack or Cone debuffs while soaking towers.","Even sets|Bait Kefka clones' half-room cleaves using the towers as fixed reference points.","Trine / Wings of Destruction|Falling triangles; half-room cleaves.","Two-hit tankbuster|Swap or invuln. Reduce Kefka to 1 HP before enrage."]}},
 {n:"Chaos & Exdeath",sub:"Phase 3",key:"Earthquake sets everyone to 1 HP; Primordial Crust is cleansed by taking lethal damage in In Line order.",d:{ultimate:["Split|Two groups of four by proximity; debuffs stop you hitting the other boss.","Bowels of Agony|Elemental crystals and wind debuffs; short timers first.","Black holes|Tethers; the third hit kills, which is how Primordial Crust is cleansed. Healers resolve Accretion one at a time.","Finish|Blizzard III baits, stacks, towers, then dodge Big Bang. Kill both before enrage."]}},
 {n:"Kefka Says",sub:"Phase 4",key:"Every cast can be real or fake. Track it, including Mana Charge recordings.",d:{ultimate:["Grand Cross ×3|Compressed Water, Forked Lightning, Cursed Shriek and Acceleration Bomb debuffs; short timers first.","Grand Cross 3|Wound and Field or Death debuffs; stand on the correct colour of Flood of Naught (reversed if fake).","Mana Charge / Mana Release|Recorded Thunder and Blizzard replay with their own real/fake rule.","Push|Kefka below 25% to survive Ultima Upsurge."]}},
 {n:"Ultima Kefka",sub:"Phase 5",key:"Celestriad: nine elemental towers in three sets, soaked by resistance debuff, rotating clockwise.",d:{ultimate:["Ultima Repeater|Four-hit raidwide. Mitigate early.","Fell Forces / Flood|Role triple stacks; paired lines while the party stacks and rotates.","Maddening Orchestra|Busters on top two aggro (tanks swap to hold position); non-tanks bait holy spreads.","Celestriad|Soak towers by resistance debuff, rotate clockwise each set.","Forsaken (enrage)|Stack and rotate clockwise as the arena is destroyed. Kill Kefka before Forsaken Null."]}}
]},
{exp:"Dawntrail",type:"Exploration",inst:"Occult Crescent: South Horn",lv:100,il:"i690 (synced 700)",rl:[],patch:"7.25",note:"Critical Engagements. Each avoidable hit adds Vulnerability Up for the rest of the CE; a CE finished with stacks gives no reward. Use Phantom Job actions matching the boss's weakness.",bosses:[
 {n:"Black Star",sub:"CE · The Black Regiment",key:"Windstorm = get out, Cyclone = get in.",d:{normal:["Choco Windstorm|Circle on the boss. Go out.","Choco Cyclone|Donut. Go in.","Choco Slaughter|Four circles move out, a second set fills the gaps. Stand in a gap, then behind the first circle.","Choco Doublades|Four cones, then the gaps. Move into where the first cones landed.","Flying chocobos|Lines drop straight down from each flyer, then a circle lands on the line.","Edge chocobos|Lines then small circles. Stand where none face you."]}},
 {n:"Stone Men / Megaloknight",sub:"CE · Company of Stone",key:"Kill tethered knights one at a time, then burst the Megaloknight before Barefisted Death.",d:{normal:["Knight waves|Use AoE on each wave.","Shuffled lines|Stand beside the first marker, step in after it fires.","Large circles|Centre, then a clockwise or anticlockwise sweep round the edge. Stand beside the second marker.","Rotating lines|Keep the clockwise ring on your right and anticlockwise on your left.","Knockback marker|Land in the second line set or use anti-knockback."]}},
 {n:"Cloister Demon",sub:"CE · Calamity Bound",key:"Seal Asunder needs four players on each glowing marker.",d:{normal:["Sunderseal Roar|Raidwide.","Seal Asunder|Four-player markers fill the Seal gauge while lines alternate; later perpendicular lines.","Great Ball of Fire|Fireball pairs explode; stay far from the first pair, then the second.","Gigaflare|Raidwide with a cleansable bleed (Esuna).","Tidal Breath|Whole front. Get behind when Tidal Wave starts."]}},
 {n:"Death Claw",sub:"CE · Crawling Death",key:"Threefold Marks: the third safe spot is the one with only one claw mark.",d:{normal:["Vertical Crosshatch|Stand at its side, then step front or back as it lands.","Horizontal Crosshatch|Stand front or back, then step to the side.","Skulking Orders|Three lines; a copy at the end fires a cone back. Stand so all three lines point at you.","Grip of Poison|Raidwide with a cleansable bleed.","Threefold Marks|Three claw sets in order."]}},
 {n:"Trading Tortoise",sub:"CE · Cursed Concern",key:"Ruby = stand still and act nothing; Sapphire = keep moving.",d:{normal:["Mhachi Ruby|Sheathe and don't move or act until the countdown ends.","Skallic Sapphire|Keep moving until the countdown ends.","Tortoise Shell|Pushed forward half the arena when it ends. Face a safe spot.","Recommended for You|Tethered to a chest; deliver exactly the coin amount shown before the timer.","Penny Inflation / Waterspout|Coin piles knock back by value plus cones; sequential circles."]}},
 {n:"Repaired Lion",sub:"CE · Eternal Watch",key:"Orbs explode when a matching element cone (stone or wind) lands on them.",d:{normal:["Radiant Wave|Raidwide; then two proximity orbs. Go to the far edge.","Aetherial Exchange|Orbs plus a cone series. Stand in the third safe spot away from matching orbs.","Ancient Stone III / Aero III|Crackle cones (stone) or arc cones (wind); matching orbs explode after.","Holy Blaze|Line in front after the big circles.","Scratch|Heavy hit on top enmity."]}},
 {n:"Hinkypunk",sub:"CE · Flame of Dusk",key:"Molt: memorise every teleport attack in order before it starts.",d:{normal:["Lamplight|Raidwide.","Dread Dive|Heavy hit on top enmity.","Molt|Boss teleports into each bird and attacks (knockback, cross, donut). Memorise the order.","Flock of Souls|Two birds alternate sequences.","Shades' Nest / Crossing|Donut or cross on itself, then two new stored attacks."]}},
 {n:"Neo Garula",sub:"CE · Noise Complaint",key:"Heave is a wide frontal with a very short telegraph. Stay behind.",d:{normal:["Squash|Heavy hit on top enmity.","Lightning Crossing|Four lightning cones. Stand in a gap.","Heave|Wide frontal. Behind.","Rushing Rumble|Charges a marked bird, then circle and four cones. Stand far and at an angle.","Birdserk Rush / Lightning Charge|Cone toward the departing bird; three circles through the centre then four cones."]}},
 {n:"Lion Rampant",sub:"CE · On the Hunt",key:"Pick a spot that will be safe when the beacon countdown reaches 1.",d:{normal:["Fearsome Glint|Brief frontal cone. Stand behind.","Augmentation of Beacons|Rotating lines with 3s countdowns.","Shockwave|Multi-hit raidwide.","Roundels / Stones / Flatten|Glowing objects hidden under stones fire circles. Stay away from all of them."]}},
 {n:"Nymian Petalodus",sub:"CE · Shark Attack",key:"Cleanse Dropsy; dodge shark cones in their firing order.",d:{normal:["Marine Mayhem|Dropsy DoT on everyone. Esuna.","Shark cones|Edge sharks fire in order clockwise or anticlockwise. Follow the sequence.","Dive|Boss submerges; kill three Progenies; dodge circles in the three-arrow order.","Hydrocleave|Brief frontal. Get behind."]}},
 {n:"Crescent Berserker",sub:"CE · The Unbridled",key:"Boil Over makes the arena edge instantly lethal.",d:{normal:["Boil Over|Raidwide plus a lethal edge.","Scathing Sweep|Delayed 180° cleave toward a random player. Get behind.","Channeled Rage|Raidwide that gives Fury stacks.","Hopping Mad|Jumps into a red circle, then a donut covers the rest. Move into the circle once it fades.","White-hot Rage|Jump, Sweep, then expanding waves. Go to uncovered regions."]}},
 {n:"Command Urn",sub:"CE · With Extreme Prejudice",key:"Kill the vessel about to self-destruct before the red mark reaches it.",d:{normal:["Summon / Assail|Commands travel along wires to adds: circles = point-blank, pluses = plus shapes facing north.","Aetheric Burst|Raidwide; adds become targetable.","Destruct|Pairs of adds marked to explode. Kill them first.","Assail v4|Ten alternating circle/plus command sets until the end."]}},
 {n:"Crystal Dragon",sub:"CE · Trial by Claw",key:"Crystallized Chaos: the middle is never safe.",d:{normal:["Primal Roar|Raidwide.","Fearsome Facet|Lightning doubles = point-blank (go to the wall between them); wind = donuts (stand on a double).","Crystal Mirror|Crystals teleport to matching sigils and repeat the element.","Crystallized Chaos|Ring AoEs in two sets. Stand in the safe ring for each."]}},
 {n:"Mythic Idol",sub:"CE · From Times Bygone",key:"Arcane Design spirals: four sets clockwise, then four anticlockwise.",d:{normal:["Mystic Heat|Late-telegraphed cone on a random player.","Shifting Shape|Mirror reveals a bomb (huge point-blank), a head (wide cone) or blades (four lines).","Lots Cast|Raidwide, busters on four tanks, six spreads, then Mystic Heat.","Arcane Design|Spiralling circles."]}},
 {n:"Mysterious Mindflayer",sub:"CE · Scourge of the Mind",key:"Fire/Ice debuffs pull you to the matching add. Start far from it (Phantom Berserker Rage ignores it).",d:{normal:["Dark II|Late 90° cone on a random player.","Mind Blast|Raidwide plus Playing with Fire/Ice; you're pulled to that element's add.","Recharge / Wallop|Tentacles fire frontal lines. Stand between tentacles."]}}
]},
{exp:"Dawntrail",type:"Exploration",inst:"The Forked Tower: Blood",lv:100,il:"24–48 players",rl:[],patch:"7.25",note:"Entry needs a Sanguine Cipher and Auroral Mirages. Avoidable hits add Thrice-come Ruin; three stacks mean Doom.",bosses:[
 {n:"Demon Tablet",key:"Dangers Near = move away; Expulsion Afar = go close and ride the knockback. Always cross under the boss to the open half.",d:{normal:["Demonic Dark II|Raidwide.","Ray of Dangers Near / Expulsion Afar|Half the arena is hit; a second Ray can flip the safe half.","Occult Chisel|Magic busters on top three enmity.","Demonograph|Six four-player towers. Resolve the landing, then fill your tower.","Rotate Left / Right|Diagonal quadrants. Go to the side opposite the named direction, finish behind the boss.","Cometeor|Four stacks, eight meteor markers. Meteor players to the fixed-meteor edge.","Summon|Each party tank takes its add; Phantom Time Mages dispel the Arch Demons.","Gravity|Levitating players take upper towers, grounded take lower, then everyone to the far corner."]}},
 {n:"Dead Stars",sub:"Triton · Nereid · Phobos",key:"Ooze stacks: take only the colour that clears what you have. Anything left at Noxious Nova kills.",d:{normal:["Gravity / Decisive Battle|Tanks to Triton (N), Nereid (SE), Phobos (SW).","Ice / Nova Ooze|Blue clears Nova, red clears Ice.","Frozen Fallout|Slimes jump four times. Never be hit by both.","Snowball Flight|Line stacks; letter parties north, number parties SW.","Chilling Collision|Tethered players get knocked to the wall opposite their snowball; kill both snowballs.","Elemental Impact|Fireball towers slammed three times; tanks invuln after the first.","Six-Handed Fistfight|Bosses fuse; inner ring is lethal. Stay in your outer wedge. Fusion Burst is the enrage."]}},
 {n:"Marble Dragon",key:"Imitation Rain: watch which circle the twister or icicle touches first. That decides the safe side.",d:{normal:["Imitation Star|Raidwide plus bleed.","Draconiform Motion|Front and rear cones; tanks bait north, groups stack south.","Imitation Rain I–IV|Water circles freeze in a chain. Read the spiked circle or nearer icicle.","Dread Deluge|Busters on six tanks.","Withering Eternity|Six Ice Golems; each party takes its own and keeps them apart.","Frigid Dive|Four per active tower, twice.","Lifeless Legacy|Kill your party's Ice Sprite before it reaches the boss.","Wicked Water|Frozen players are safe from Throttle; others break each Gaol in time."]}},
 {n:"Magitaur",key:"Square discipline: never drift into the gaps between squares.",d:{normal:["Unsealed Axe / Lance|Axe hits two nearest per square, lance two farthest. Fixed tanks per square.","Assassin's Dagger|Rotating lines; waymark choice depends on where daggers start.","Empowerment Conduits|Kill the conduit matching the weapon; Phantom Berserker handles the Universal one.","Sage's Staff|Line stacks on nearest player. Agree one staff strat before pulling.","Rune Axe|Greater and Lesser Axebit timers. Greater runs out; Lesser holds square centre.","Holy Lance|Step behind and outside your square when lances activate, then return.","Unsealed Aura|Repeated raidwide; final one is the enrage."]}}
]},
{exp:"Dawntrail",type:"Exploration",inst:"Occult Crescent: North Horn",lv:100,il:"i690 (synced 700)",rl:[],patch:"7.55",note:"Critical Engagements. Several CEs have an instantly lethal arena edge. Weakness given in each subtitle.",bosses:[
 {n:"Metamorph",sub:"CE · Accept No Imitators · weak to wind",key:"Alternates Cerberus and Magic Fan forms. Read the form first.",d:{normal:["Blackened Rain|Raidwide plus lethal edge.","Hellward Bound (Cerberus)|Z-shaped dashes with lines and random circles.","Hellish Breath (Cerberus)|Three cones from the edge. Find the gap.","Made Magic / Cyclone Crossing (Fan)|Four wind orbs expand; small safe spots at the edge.","Shape-shifting supersaw|Rotating cones: first set out, then rotate with the arrows and go in, third just rotate; repeats.","Tongue of Flame → Hellward Bound|Untelegraphed point-blank, then dashes; face the first dash and look left/right for where he ends; safe spot is just under that.","Video|TPLemontFFXIV — Guide to Main Mechanics of CEs in Occult Crescent: North Horn (youtube.com/watch?v=--UpSy-p4Nw)."]}},
 {n:"Phantom Hydra",sub:"CE · Ahead of the Competition · weak to ice",key:"Nigh-drawn = edge safe, Far-flung = middle safe.",d:{normal:["Nigh-drawn / Far-flung Eruption|Five centre circles or eight outer circles.","Elemental Cascade|Lightning orbs: point-blank then rings. Holy: gaze. Poison: expanding puddles. Fire: lines at players. Ice: alternating cones.","Discordance|Raidwide.","Many-headed Breath|Six 120° cleaves hitting twice; the first section goes last. A light-orb gaze goes off at the same time; look away.","Video|TPLemontFFXIV — Guide to Main Mechanics of CEs in Occult Crescent: North Horn (youtube.com/watch?v=--UpSy-p4Nw)."]}},
 {n:"Phantom Necromancer",sub:"CE · Dark Artistry · weak to wind",key:"Pirate specters hit their whole row and column.",d:{normal:["Dark II|180° frontal.","Rise of the Fallen|Zombies: small point-blank when glowing. Pirates: plus over row and column. Remember the small adds' spawn order; for the big crosses find the safe row and column.","Dark Flare|Raidwide.","Arcane Revelation|Three discs rise and fire lines through their wide side.","Video|TPLemontFFXIV — Guide to Main Mechanics of CEs in Occult Crescent: North Horn (youtube.com/watch?v=--UpSy-p4Nw)."]}},
 {n:"Elm Gigas",sub:"CE · Familiar Tactics · weak to lightning",key:"Inspirited Impact: start at the fourth circle and dodge into the first.",d:{normal:["Ancient Aero III|Raidwide.","Unbowed Spirit|Light discs move; being hit adds no vulnerability.","Spinning Sweep|120° frontal in a random direction.","Inspirited Crosswinds / Cyclone|Discs stop and all fire pluses or point-blanks.","Tip|Staying near the centre makes the blades and cones easier; Inspirited Crosswinds ends the phase with small gaps.","Video|TPLemontFFXIV — Guide to Main Mechanics of CEs in Occult Crescent: North Horn (youtube.com/watch?v=--UpSy-p4Nw)."]}},
 {n:"Arbatel",sub:"CE · Forbidden Folios · weak to fire",key:"Add your Correction debuff to your Knowledge Level, then find the page that can't hit that number.",d:{normal:["Knowledge Level Correction|Raidwide; +1 to +5 to your effective level.","Summon|Page 8 (multiples of 4), 16 (multiples of 3), 64 (multiples of 5), 512 (primes) kill matching levels.","Cover to Cover / Unbound Ink|Front then back 180° cleaves, then a circle on the boss.","Book Drop|Three-player towers plus checkerboard.","Arcane Rule / Blot|Cascading lines; dodge into the first plus, then the last circles.","Example|At level 32 with Prime, Level 5 and Level 4 slices: 32 is a multiple of 4, so avoid Level 4; Prime and Level 5 are safe.","Video|TPLemontFFXIV — Guide to Main Mechanics of CEs in Occult Crescent: North Horn (youtube.com/watch?v=--UpSy-p4Nw)."]}},
 {n:"Algol",sub:"CE · Imbalanced Diet · weak to fire",key:"Onion = three rotating cones; Tomato = plus of lines.",d:{normal:["Arena edge|Lethal.","Cursed Screech|Raidwide; unearths Tomatoes and Onions.","Inhale|Cone pulls a mandragora and stuns.","Devour|Onion: dodge into the first cone set. Tomato: stand at the middle intersection outside melee.","Digested Juice|Two 180° cleaves offset 45°, then point-blank.","Other colours|Also described as yellow and orange mandragoras. Yellow = alternating centre cones (sidestep each). Orange = expanding fire waves: start beside the boss at the edge, step into each intersection toward the centre.","Video|TPLemontFFXIV — Guide to Main Mechanics of CEs in Occult Crescent: North Horn (youtube.com/watch?v=--UpSy-p4Nw)."]}},
 {n:"The Abductor",sub:"CE · Lost on the Wind · weak to lightning",key:"Orange glow = get away, green glow = get close.",d:{normal:["Wind Blade|180° frontal.","Skydive / Cyclonic Ring|Orange = point-blank, green = donut.","Plumefall Trap|Four plume orbs fire point-blanks.","Buffet|Knockback across the arena toward the lethal edge. Use anti-knockback.","Hurricane|Raidwide plus two tornadoes firing lines. A windy effect warns of a knockback with a starburst just before and after; dodge the first while moving upwind, adjust after.","Wing wind|Arms raised with wind on the wings = untelegraphed donut.","Video|TPLemontFFXIV — Guide to Main Mechanics of CEs in Occult Crescent: North Horn (youtube.com/watch?v=--UpSy-p4Nw)."]}},
 {n:"Tiny Mage",sub:"CE · Tiny Terror · weak to lightning",key:"All for One: kill small spheres (4, then 3, then 2), then the big one before Meteor.",d:{normal:["Arena edge|Lethal.","All for One|Spheres cast Comet; the middle sphere casts Meteor.","Small for One|Red spheres colliding = big circle; blue = knockback.","Diminutive Dualcast|Cone, point-blank, cone, then the sphere effect.","Small for One (pairs)|Shorter tethers resolve first; ice = knockback, fire = big point-blank. Use each ice push to land clear of the next fire.","Small for One (single orb)|One orb moves three times then explodes; ice = finish next to it for the push, fire = finish away from it.","Meteors|Kill the one with four markers first, then three, then two.","Video|TPLemontFFXIV — Guide to Main Mechanics of CEs in Occult Crescent: North Horn (youtube.com/watch?v=--UpSy-p4Nw)."]}},
 {n:"Claret Dragon",sub:"CE · Cursed Resurgence · weak to fire",key:"Two Necrohaze puddle stacks = Zombification (you attack allies).",d:{normal:["Snaking Necrobreath|270° frontal at a random player.","Grave Mold|Diagonal line of puddles. Avoid.","Cauterize|Line across; puddles on its path explode sideways.","Aetherial Ward|Damage only the open section before Power reaches 100.","Breath in Threes|Three corner cleaves; inside the hitbox is safe.","Soar dive|Puddles hit by the dive fire lines out to the side they're on.","Ethereal Ward|Puddles move; rotate to an unshielded side to damage the ward.","Video|TPLemontFFXIV — Guide to Main Mechanics of CEs in Occult Crescent: North Horn (youtube.com/watch?v=--UpSy-p4Nw)."]}},
 {n:"Conjured Calofisteri",sub:"CE · Doubled Trouble · weak to wind",key:"Scythe order sets the Dual Cut order.",d:{normal:["Asymmetric Coif Charge / Dual Cut|Untelegraphed half cleaves in the order the scythes showed.","Baleful Blowout|Trapped players die to Garrote unless the add is killed.","Dashing Cut|Telegraphed first dash, two untelegraphed, Dual Cut at each stop. Stand behind the dash line and follow it, then dodge each 180° cleave.","Hair Shears|Starburst lines that trap.","Extension traps|Memorise the circular traps at the start; they go off after the third dash. Free trapped players before the cast ends.","Video|TPLemontFFXIV — Guide to Main Mechanics of CEs in Occult Crescent: North Horn (youtube.com/watch?v=--UpSy-p4Nw)."]}},
 {n:"Pelekys",sub:"CE · Many Mouths to Feed · weak to fire",key:"Venom Mist hits where butterflies were eaten. Stand at the empty cardinal.",d:{normal:["Acrid Rain|Raidwide plus cleansable poison.","Central / Side Gardening|Middle hit (sides safe) or sides hit (middle safe).","Noxious Nectar|Expanding puddles in two sets.","Pollen Lure / Devour / Venom Mist|Remember the uneaten cardinal."]}},
 {n:"Crescent Arachne",sub:"CE · Web of Terror · weak to ice",key:"Kill the adds after the charge, or Venom Eruption hits hard.",d:{normal:["Arachnid Funnel|Line charge at the first add, then the rest. Stand in large gaps of the web; then kill the adds before Phantom Eruption.","Arachnid Web|Tethers are safe to cross.","Conformity|Frontal cone. Only adds with an exclamation mark cone; stand between the two marked ones.","Bedrock Uplift|Go to the wall 90° from the circles, dodge into the first donuts.","Video|TPLemontFFXIV — Guide to Main Mechanics of CEs in Occult Crescent: North Horn (youtube.com/watch?v=--UpSy-p4Nw)."]}},
 {n:"Atlas Carbuncle",sub:"CE · A Beast Unleashed · weak to ice",key:"Reflective Coating: pick an L-shaped area with no Topaz Stone touching a ruby wall.",d:{normal:["Topaz Stones|Dropped across the arena.","Ruby Glow|Red lines split the arena into four L-shaped areas with reflective walls.","Reflective Coating|Stones explode; any stone touching a ruby wall reflects damage into its L area. Then Claw to Tail / Tail to Claw follows, so move quickly.","Dash + knockback|He jumps to an edge and dashes through the centre (sideways knockback), then jumps to an adjacent edge for a radial knockback. Use the first push to get toward his final spot, the second to land away from stones.","Video|TPLemontFFXIV — Guide to Main Mechanics of CEs in Occult Crescent: North Horn (youtube.com/watch?v=--UpSy-p4Nw)."]}},
 {n:"Pallmagia",sub:"CE · Appalling Behavior · weak to fire",key:"Esoteric Instruction: track the first two of four edge adds, then keep running the same way round the edge.",d:{normal:["Esoteric Instruction|Four adds at the edge: two big point-blanks, two wide Bad Breath cones (heavy debuffs). They fire in the order the boss tethers them.","Reverse Polarity|The adds swap places to confuse you; dodge the first, move to the second's safe spot, keep circling.","Bullets|Rings with a few gaps that spin then stop; being hit is an instant KO.","Notes|Drops Field Note #41 and the Blue Mage phantom job.","Video|TPLemontFFXIV — Guide to Main Mechanics of CEs in Occult Crescent: North Horn (youtube.com/watch?v=--UpSy-p4Nw)."]}},
 {n:"Alabaster Blade",sub:"CE · Quarried Away · weak to lightning",key:"Fourfold Attack Order: four golems hit 90° corners for four turns; memorise each one's rotations.",d:{normal:["Fourfold Attack Order|Golems attack the corner they face every turn.","Rotation arrows|1–3 clockwise arrows = how many 90° turns that golem makes (one turn each); a golem with one arrow then stays put.","Tip|If two golems point at each other, the edge between them is usually safe.","Light aether adds|Stun them.","Video|TPLemontFFXIV — Guide to Main Mechanics of CEs in Occult Crescent: North Horn (youtube.com/watch?v=--UpSy-p4Nw)."]}}
]},
{exp:"Dawntrail",type:"Exploration",inst:"The Forked Tower: Magic",lv:100,il:"Knowledge Lv 40 · up to 48 players",rl:[],patch:"7.55",note:"Extreme version: 12–48 players in a premade of at least three parties, three resurrection stacks per player, much heavier raidwides and hidden traps between bosses (Phantom Rangers disarm them).",bosses:[
 {n:"Two-headed Aevis",key:"Buffet tethers you to one head for the whole fight. You can only damage that head.",d:{normal:["Buffet|Permanent tether to one head.","Poison Breath / Storm's Breath|Big circle at the tether point; Storm's also knocks back. Mind the square edges.","Summon / Ice and Lightning Cluster|Orbs are all ice, all lightning or mixed. A cluster hitting a matching orb makes a delayed circle.","Two Terrors|Two lines per head along floor markings.","Hissing Reprise|Easterly or Westerly push when it expires.","Blazeloop|Small circle then a huge donut. Stand inside the first circle.","Arcane Revelation / Archaeofury|Wind portals leave small safe squares; busters on each head's top aggro."],extreme:["Same mechanics|Raidwides hit much harder and deaths cost resurrection stacks. Use defensive phantom jobs."]}},
 {n:"Sword Dancer",key:"Martial Mystique cleaves the half its tether points to. Go to the other half.",d:{normal:["Sword Storm|Raidwide plus a lethal death wall.","Throwing Swords|Lines that rotate along floor markings.","Martial Mystique|Half cleave toward a tethered sword.","Cycloswords Unsheathed|Swords facing in = circle (stand out), out = donut (stand in).","Sword Dance|Four-hit raidwide leaving rotating lines that explode in order.","Leaping Lift / Swordpointe|Jumps to four swords; far knockbacks from each in the same order.","Surgeswords Unsheathed|A line of swords; later abilities gain extra swords."],extreme:["Same mechanics|Higher damage; knockbacks toward the death wall are lethal."]}},
 {n:"Necrophobia",key:"Heads copy the element they're tethered to. Track which heads hold which element.",d:{normal:["Hail of Hellflares|Multi-hit raidwide.","Ancient Fire III / Blizzard III / Thunder III|Big point-blank; big plus; four X cones.","Corpse Mangler|Tankbuster.","Summon Heads / Death Shroud|Four or eight heads tethered to a used element.","Heads Roll / Severed spells|Heads go to the edge facing N or S; Severed recasts the spell on matching heads.","Vacuum Wave / Dark Current|Half-room cleave with head lines; lines front and back that pulse sideways."],extreme:["Same mechanics|Boss is weak to Ice. Higher damage."]}},
 {n:"The Index",sub:"Omniscient Obscurant",key:"Quadrilogy of Implements: Harp = out, Bow = in, Bell = front, Sword = sides, in the order shown.",d:{normal:["Quadrilogy of Implements|Four implements resolve in order with knockbacks.","All Knowing Flames|Three spreads and a buster by home platform; unassigned players stack between platforms.","Omni-Elements|Platforms become elements and explode when rings reach them.","Elemental Chemistry|Be hit once by each element, rotating clockwise; mitigate the biggest raidwide after.","Adds / Exaflares|Burn the bomb, take two exaflare hits before the last; tank points the bird cone out.","Bladeblitz|Lines in spawn order."],extreme:["Same mechanics|Killing the Hermetic Recluse before the Index restores a resurrection stack and adds a coffer."]}}
]}
]);
window.FF = (window.FF || []).concat([
{exp:"Dawntrail",type:"Variant & Criterion",inst:"The Merchant's Tale",lv:100,il:"Variant: entry from Lv 90, synced 100 · Advanced: i760 (sync 785) · Criterion: 4 players",rl:[],patch:"7.45",note:"Variant (1–4 players) has three starting routes and 13 Corvosi Folklore Records: Residential (Records 1–4, ends at Pari of Plenty), Market (5–8 end at Darya, secret 13 ends at Deadly Dandan), Gate (9–12, ends at The Lone Swordmaster). Advanced (2–4 players) lets you fight the three route bosses in any order. Another Merchant's Tale (Criterion) needs exactly four players (1 tank, 1 healer, 2 DPS when queued).",bosses:[
 {n:"Genie of the Lamp",sub:"Variant · first boss on Market routes and non-apple Residential routes",key:"Spectacular Sparks: cannons fire in spawn order. Start in front of the second set, rotate into the first.",d:{variant:["Fabulous Firecrackers|One arm glows and cleaves its half; the other fires a cone at its side. Stand at the intercardinal on the non-glowing side.","Spectacular Sparks|Cannons fire lines in the order they appeared.","A Sailor's Tale / Chart Course|Three airships on tracks; one outer track is switched straight, leaving one safe spot on the unswitched side.","Fanning Flame|Alternating cone sets. Start in the second set, rotate into the first.","Rub Burn|Tankbuster on the aggro target.","Parade of Wonders / Explosive Ending / Supernatural Surprise|Raidwides.","Route variants|Residential: Pyromagicks alternating rows (dodge sideways). Market: Dousing Spirits and Lamp Oil, or Rainbow Road, depending on where you killed the Blue Bombs."]}},
 {n:"Rukhkh",sub:"Variant · first boss on Gate routes and apple Residential routes",key:"A sand ball hit by a Sandplume cone detonates bigger. Track which balls were hit.",d:{variant:["Sphere of Sand / Sand Burst|Three sand balls in a triangle explode point-blank.","Sandplume|Rotating cones.","Banishing Mist|The boss or some balls turn invisible. If the boss vanishes, stand far from where it reappears.","Biting Scratch|Massive frontal cone. Sides or rear.","Streaming Sands|Raidwide.","Windborne Seeds (Residential)|3×3 seed grid with one missing seed: that's your safe spot when they explode.","Cherry Bombs / boulders (Gate)|Bombs deal proximity damage; boulders roll along the arrows from the cliffs."]}},
 {n:"Pari of Plenty",sub:"Residential route final boss",key:"Fireflight arrows: if the next arrow matches the first, cross to the side just hit; if opposite, stay put.",d:{variant:["Fireflight / Sun Circlet|Three dashes on her carpet (vulnerability if hit); move onto her position before the room-wide circle.","Left / Right Fireflight (Two or Three Nights)|Sweeping half-room cleaves. Start on the uncleaved side and read each following arrow.","Charming Baubles|Red gems fire plus-shaped lines.","Spurning Flames / Impassioned Sparks|Raidwide grants Fury, which enables expanding fireball rings.","Scouring Scorn / Heat Burst|Raidwide that removes Fury; raidwide.","Route variants|Record 1: wind spirits destroyed by a bird. Record 2: bird jumps (track the spirit). Record 3: tornadoes follow arrows. Record 4: hide under the carpet without a gem."],advanced:["Heat Burst|Raidwide, repeated.","Right / Left Fireflight + Sun Circlet|Line then dash cleaving that side; finish under the boss for the donut.","Doubling|A clone performs a half-room cleave but skips Sun Circlet. Stay out of its half.","Charmed Chains|Partner tethers. Start centre, break by going to opposite walls before the gems fire.","Fire of Victory|Point-blank buster on the aggro target; everyone else out.","Four Long Nights|Rotating half cleaves plus a tether that adds Dark Vulnerability. Each player takes one tether only."],criterion:["Fireflight: Emberlight / Pyrelight|Three dashes with side cleaves into Sun Circlet. Pyrelight = stacks, Emberlight = spreads.","Scattered Kindling / Kindled Flame|Four clones cleave, leaving one safe tile. Stack or spread per cast.","Fireflight: Four Long Nights|Four cleaves with spread and stack markers. Stand on the cardinal lines; one person per spread, in a fixed order.","Pari's Curse / Charming Baubles / Thieves' Weave|Fire debuffs cleansed by the blue gem's AoE; others avoid it.","Spurning Flames|Alpha/Beta chains between pairs. Run apart.","Impassioned Sparks|Wall fire puddles rotate round the room; keep one rotation direction, then run to your quadrant to break chains.","Doubling|Clones tether players with Prey timers. Short timers soak the first towers on their clone's side; long timers the rest.","Charmed Flight: Four Nights|Four half swipes with gem pairs leaving one safe tile. Stay near the swipe midline; macro the safe order."]}},
 {n:"The Lone Swordmaster",sub:"Gate route final boss",key:"Malefic Quartering: your ring's red quadrants are fixed to true north. Never let an attack hit a red quadrant.",d:{variant:["Malefic Quartering|Red quadrants on your ring, fixed to north.","Will of the Underworld / Crusher of Lions|Half cleaves and four 90° cones with arrows. Face your red quadrant away from them and the boss.","Vanishing / Shifting Horizon|Alternating cones. Start in the second set.","Earth-rending Eight / Waiting Wounds|Starbursts from opposite corners. Stand 90° from one near centre; Waiting Wounds: start in the third set, dodge into the first.","Heavens' Confluence / Unyielding Will|Spread, point-blank and donut in either order; blades form an L round a player, keep your red side out of it.","Maw of the Wolf / Sting of the Scorpion|Half cleave; tankbuster.","Steelsbreath Release|Raidwide, then a route-specific mechanic (levitation knockback, corner proximity, magnetic rocks, or boulders to hide behind)."],advanced:["Steelsbreath Release|Raidwide; later casts leave fire tiles.","Malefic Quartering / Portent|Take a tether that doesn't hit a red quadrant in the arrow's direction.","Near to Heaven / Far From Heaven|Marked player needs as many partners as swords around the boss. Extras get knocked into the wall.","Echoing Heat / Echoing Eight|Three sets of fire puddles, then an 8-way starburst. Stack, then rotate out together.","Malefic Alignment|Cones apply red quadrants twice. Keep one E/W and one N/S quadrant open.","Silent Eight|Each player explodes point-blank (physical vulnerability) and leaves a starburst. Drop in separate corners.","Unyielding Will / Waiting Wounds|Same as Variant."],criterion:["Near to Heaven / Far From Heaven|Sword count sets the stack size; limit-cut numbers set point-blank and donut. Donut player stands under the boss.","Malefic Quartering|Pair with the player whose ring matches yours.","Unyielding Will / Malefic Portent|Each pair splits: one takes the L, the other the safe tether.","Echoing Orbit / Echoing Eight|Bait puddles under the boss, then step out or in.","Silent Eight / Maw of the Wolf|Drop AoEs in corners; behind the boss for the cleave.","Fangs of the Underworld|Three-hit line stack behind the tank.","Steel Horizon / Silent Heat|Cones, blades and fire-puddle markers. Each player needs a unique safe spot.","Fallen Rocks / Cardinal Horizons|Don't touch the rocks or break them with starbursts; later hide behind them from the blades."]}},
 {n:"Darya the Sea-maid",sub:"Market route final boss (Records 5–8)",key:"The music score shows the order the minions fire. Memorise it before Echoed Serenade.",d:{variant:["Familiar Call / Echoed Serenade|Blue and yellow minions on the north wall fire in the order shown on the score.","Swimming in the Air|Markers explode point-blank; two corners stay safe.","Sunken Treasure|Orbs crack in sequence. Move toward the second-cracking orbs, then into where the first burst.","Receding / Encroaching Twintides|Point-blank and donut in the order shown.","Surging Current / Hydrocannon|Cleave in the telegraphed direction; line tankbuster.","Piercing Plunge / Aqua Ball|Raidwide; small delayed AoEs under players.","Route variants|Record 5: Goobue orbs. Record 6: Aqua Spear tiles plus Forced March. Record 7: Big Wave knockback onto a safe tile. Record 8: Ceaseless Current waves."],advanced:["Familiar Call|Same as Variant plus crabs and sea turtles.","Sunken Treasure|Stand by the donuts next to the second-cracking orb, then dodge its explosion.","Hydrobullet|Two point-blank markers with magic vulnerability. Supports and DPS split.","Sea Shackles / Tidal Wave|Two tether pairs must stay apart; knockbacks can push you into water (Surecast/Arm's Length).","Swimming in the Air|Markers vanish; remember them. One stack and one point-blank.","Ceaseless Current|Both moving lines fire together, unlike Variant."],criterion:["Familiar Call / Echoed Serenade|Line, point-blank and cone adds; remember the order and spread in your quadrant.","Surging Current|Alternating cones. Start in the second set.","Alluring Order|Forced March on everyone plus two stacks. Pairs split and flex if they share a debuff.","Swimming in the Air|Two safe corners, not always opposite. Use a priority and move with Forced March.","Ceaseless Current|Lines on adjacent walls plus green plus markers. Line up diagonally in the overlap.","Sunken Treasure|Safe donuts sit by the second orb to crack; use Forced March to get there.","Aqua Spear / Aqua Ball|DoT puddles and baited AoEs. Drop markers in your own L-shaped safe area.","Sea Shackles|DPS tethered to tank and healer plus spreads. Partners split between safe areas."]}},
 {n:"Deadly Dandan",sub:"Secret boss · Variant Record 13 (Market route)",key:"Devour is an instant kill. Never stand in the arrowed dash line.",d:{variant:["Murky Waters / Tidal Guillotine|Raidwide; later it submerges and surfaces with a huge point-blank. Move away from the warned area.","Devour|Arrowed dash. Instant death if hit.","Spit / Swallowed Sea|Very wide cone leaves only small wall sections safe, plus a pink point-blank on each player.","Stinging Tentacle|Two rotating lines with a countdown. Pick your spot early.","Strewn Bubbles|Touching one pulls you in with a heavy DoT and no actions.","Maw of the Deep|Three sets in order. Start in the second or third, dodge into the first.","Unfathomable Horror|Two orbs send rings. Stand where they overlap safely."]}}
]},
{exp:"Dawntrail",type:"Limited Job",lj:"Beastmaster",inst:"Crucible of the Unbroken: First Board",lv:30,il:"Beast Rank 5 · max roster 10",rl:[],patch:"7.56",note:"Solo roguelite board for Beastmaster. No healer, outside potions or role actions; HP doesn't regenerate. Pick three familiars per battle (one summoned at a time). After the Second Master's Board, First to Third Degree raise enemy HP and damage.",bosses:[
 {n:"Bone Knight & Bone Bishop",sub:"Enemy",key:"Interrupt Ossify with Soul Crush (Ice Golem).",d:{normal:["Ossify|Interrupt with Soul Crush.","Death Spiral / Tumulus|Stand under the Bishop for Death Spiral; leave for Tumulus.","Black Eruption|Stay out until the second explosion.","Forward Guard|Swap aggro with Snarl and Challenge.","Third Degree|Silencing Ossify with Soul Crush also gives 100 TP, so you reach your first combo sooner.","Video|Mrhappy1227 — Third Degree First Board walkthrough (youtube.com/watch?v=hlCZ95J7aDU)."]}},
 {n:"Arch Demon Piece",sub:"Enemy",key:"Burn it quickly before mechanics stack.",d:{normal:["Abyssal Charge|Spear line AoEs.","Dismember|Start in the middle, then step into a safe square.","Swords / axe|Dodge falling sword circles; stand behind for the axe cleave.","Third Degree|It stops to cast a lot; with no pet out you can kite it to dodge auto-attacks (Mystic Boots make this easy). Abyssal Transfixion follows the swords.","Video|Mrhappy1227 — Third Degree First Board walkthrough (youtube.com/watch?v=hlCZ95J7aDU)."]}},
 {n:"Piscodemon Piece",sub:"Enemy",key:"Dispel Clear Mind's damage-up with a dispel beast.",d:{normal:["Void Blizzard III|Stand in a lane without circles and shift as circles pass.","Clear Mind|Dispel it.","Void Flare Star|Move away."]}},
 {n:"Banemite Piece",sub:"Enemy",key:"Cleanse Deadly Thrust poison with Geshunpest.",d:{normal:["Bedrock Uplift|Stand next to the first centre circle, then step in.","Deadly Thrust|Poison; cleanse.","Venom Web|Leave centre, step into the first outer circle on the opposite side, then return.","Miteling Silkscreen|Dodge the lines.","Tankbuster|The board's first real tankbuster: a Tome of the Impervious negates it.","Miteling Pieces|Stun or freeze them (Chimera's freeze, Buffalo's AoE stun) and line them up for a cone attack. A Fang knockback buys time.","Video|Mrhappy1227 — Third Degree First Board walkthrough (youtube.com/watch?v=hlCZ95J7aDU)."]}},
 {n:"Ogre Piece",sub:"Elite",key:"Kill the wisps before they reach the centre (Gigantoad's Quelling Wave helps).",d:{normal:["Scorching Smite|Stand behind.","Burning Ward|Wisps march to the centre; kill them.","Fire Call|Run from the fireballs.","Third Degree|The hardest fight on the board. Bring big single-target damage or a bind (Diremite) for the Greater Wisps.","All Fire|Unavoidable fire damage: Drake (fire resistance plus a magic shield borrow), Flame Shield or fire-absorb help.","Straight Punch|Tankbuster.","Jumps|On later sets it can jump to a spot without a puddle.","Kiting|Mystic Boots let you kite it almost indefinitely.","Video|Mrhappy1227 — Third Degree First Board walkthrough (youtube.com/watch?v=hlCZ95J7aDU)."]}},
 {n:"Pas de Seul",sub:"Boss",key:"Blood Rain: glowing hand = circle (leave), no glow = donut (stay in).",d:{normal:["Blood Rain|Circle or donut by hand glow.","Void Aero II|Stand behind or beside her, then follow the wind orb's safe spots.","Summoned adds|Behemoth's Meteor one-shots them.","Beguiling Mist|Move away from the hearts.","Blood Sword|Heals her a lot and goes through everything (Tome of the Impervious doesn't stop it). Bring lots of damage.","Cold Caress|Big hit plus poison; if you resist poison, take it yourself rather than on a fragile pet.","Fanaticism|Damage buff on her.","Nightmare|Sleep before a big raidwide; sleep resistance helps.","Video|Mrhappy1227 — Third Degree First Board walkthrough (youtube.com/watch?v=hlCZ95J7aDU)."]}}
]},
{exp:"Dawntrail",type:"Limited Job",lj:"Beastmaster",inst:"Crucible of the Unbroken: Second Board",lv:40,il:"Beast Rank 10 · max roster 12",rl:[],patch:"7.56",bosses:[
 {n:"Manticore Piece",sub:"Enemy",key:"Charge and Hammer: remember the glowing arm, then move to the side he just cleaved.",d:{normal:["Arm and Hammer|Stand on the non-glowing side, then the other.","Deadly Hold|Unavoidable; let your pet tank it.","Hammerleap|Run far from the wall it faces.","Weakness|Wind (Zu and Vulture shred it).","Deadly Hold|Tankbuster; plan who takes it.","Kiting|It casts a lot; kite between attacks to cut auto-attack damage.","Example|Left fist charged first means right is safe, then left.","Video|Mrhappy1227 — Third Degree Second Board walkthrough (youtube.com/watch?v=Kv2rhUMjnoI)."]}},
 {n:"Taurus Piece",sub:"Elite",key:"Stand on lit squares to cleanse Mortal Ray's Doom.",d:{normal:["Mortal Ray|Doom; cleanse on lit squares.","Ray of Ignorance|Drop it in a corner.","Aetherial Fissure|Move east or west out of the sigil lines.","Gaze / Ahriman|Look away; kill the Ahriman when targetable."]}},
 {n:"Wyvern Piece",sub:"Enemy",key:"Storm's Grip sprites fire lines all fight.",d:{normal:["Storm's Grip|Keep dodging sprite lines.","Typhoon|Ride the knockback, dodge tornadoes (bigger the second time).","Liquid Hell / Blazing Trail|Avoid puddles while running behind the boss without stopping.","Pattern|Bursts of heavy auto-attacks (four or five in a row), then long stretches of casting.","Debuffs|Morbol's blind and Treant's seeds (10% less damage dealt) help.","Tornadoes|Squeeze in tight to dodge them; the long casting stretch is your damage window.","Video|Mrhappy1227 — Third Degree Second Board walkthrough (youtube.com/watch?v=Kv2rhUMjnoI)."]}},
 {n:"Voidmancer Piece",sub:"Enemy",key:"Don't let Zombie Pieces chew on you: Wit's End becomes Confusion.",d:{normal:["Death Drive|Drop it where it hits the fewest zombies.","Adds|Use Golem and Worm for area damage.","Mindjack|Position before the forced march expires.","Fragile|Low HP; weak to earth (Golem plus Worm).","Wall trick|Stand flush against a wall so only one Zombie Piece can reach you.","Auto-attacks|Its basic attack is a water spell, so a Tome of Reflection negates autos for 30s.","Tank|Pugil is one of the best magic tanks.","Video|Mrhappy1227 — Third Degree Second Board walkthrough (youtube.com/watch?v=Kv2rhUMjnoI)."]}},
 {n:"Tablitaur Pieces",sub:"Elite",key:"Note which 1000-tonze Swipe finishes first; stand behind it, then swap.",d:{normal:["1000-tonze Swipe|Behind the first, then switch sides.","Rallying Cheer|Interrupt with Soul Crush.","10-tonze Stomp|Knockback; avoid walls.","Endless Swing / Swipes|Kite round the spin, avoid the cones.","Weakness|Fire.","Spin|Get the Young Tablitaur under 20% before the spin, then use the spin to hit the Elder freely.","After a kill|The survivor does a half-room AoE, then a tankbuster plus a damage buff to silence (Soul Crush).","Video|Mrhappy1227 — Third Degree Second Board walkthrough (youtube.com/watch?v=Kv2rhUMjnoI)."]}},
 {n:"Loosefroxy Inkyjots & Chewchum Popoto",sub:"Boss",key:"Push the small round bombs into the worm's pool to flip it, then burst it.",d:{normal:["Gobspin Headlops|Glowing sword = donut (stay close); plain = circle (move away).","Kinborrow|Dispel with Quelling Wave.","Sand Breath|Stand behind the sandpool.","Spiky bombs / Goblin Hammer|Cross AoEs; find the small safe spots.","Sandworm|Provoke it from across the room to take fewer autos; burst it whenever it surfaces.","Sand Pillars|Hit hard (about 170 each); avoid their path.","Bombs|Knock only one into the sand to raise the worm; the cross bombs need dodging.","Worm death|Killing the worm gives the goblin a permanent damage buff; it then spams Goblin Hammer.","Video|Mrhappy1227 — Third Degree Second Board walkthrough (youtube.com/watch?v=Kv2rhUMjnoI)."]}}
]},
{exp:"Dawntrail",type:"Limited Job",lj:"Beastmaster",inst:"Crucible of the Unbroken: Third Board",lv:50,il:"i100 · Beast Rank 15 · max roster 14",rl:[],patch:"7.56",bosses:[
 {n:"Cavalier Piece",sub:"Enemy",key:"Kill the Bone Bishops while avoiding Steelripper's cone.",d:{normal:["Steelripper|Frontal cone.","Menace clones|Go to a safe corner.","Crushing Blade|Knockback; stay off the edge.","Valfodr|Lines; Meteor the later Bishops.","Doubling|If you kill the Bone Bishops quickly, it re-summons them as horses that do point-blank or line AoEs. Kill every wave so they don't pile up.","Weakness|Fire.","Tip|Gather the bishops in a cone and hit them with AoE stuns and cone attacks.","Video|Mrhappy1227 — Third Degree Third Board walkthrough (youtube.com/watch?v=4nVh6z0Zqmk)."]}},
 {n:"Ymir Piece & Sahagin Piece",sub:"Enemy",key:"Don't hit the Sahagin while Paralyzing Spikes is up.",d:{normal:["Paralyzing Spikes|Reflects paralysis; Quelling Wave ignores it.","Blanket Thunder / Dreadwash|Interrupt (War Cry, then an interrupt).","Silkscreen|Roots the Ymir Piece for the finish.","Shell|Burst Ymir's shell first; a bind (Diremite, 30s) keeps the Sahagin out of the way.","Tsunami|A gap closer gets you through it.","Dread Wash|Sahagin's cast: Damage Down and a big knockback. Silence it with Soul Crush.","Sahagin|Very weak once Ymir is dead.","Video|Mrhappy1227 — Third Degree Third Board walkthrough (youtube.com/watch?v=4nVh6z0Zqmk)."]}},
 {n:"Catoblepas Piece",sub:"Enemy",key:"Shifting Gaze: look away from the eye-marked shapes.",d:{normal:["Bestial Roar|Orbs and rings petrify; pop donuts early if needed.","Shifting Gaze|Look away.","Jettataura|Leave the puddle.","Bestial Roar|The only big hit; let your pet take it.","Orbs|A point-blank covers nearly half the room; galaxy orbs are donuts. Floating orbs petrify.","Gazes|On the second set some orbs also gaze; look away.","Weakness|Wind.","Video|Mrhappy1227 — Third Degree Third Board walkthrough (youtube.com/watch?v=4nVh6z0Zqmk)."]}},
 {n:"Zu Piece",sub:"Elite",key:"Every egg killed buffs the boss. Keep AoEs (Crossbreeze) off them.",d:{normal:["Eggs|Kill fast; two hatch into adds.","Caustic Vomit|Interrupt.","Carve tethers|Stretch until purple.","Airy Pursuit|Run to the far wall."]}},
 {n:"Lakhamu Piece",sub:"Enemy",key:"After Landslip's knockback, make sure no golem faces you.",d:{normal:["Landslip|Knockback; avoid golem facings.","Golems|Stun with War Cry, finish with Parting Blow.","Earth Shaker / Earthrender|Don't stack with your pet; leave puddles.","Earth damage|Everything it does is earth; Dodo resists earth and shortens blind.","Earth Shaker|Targets you and your pet.","Golems|Treant's Acorn Bomb plus Nightmare sleeps them.","Weakness|Water.","Video|Mrhappy1227 — Third Degree Third Board walkthrough (youtube.com/watch?v=4nVh6z0Zqmk)."]}},
 {n:"Cactuar Pieces",sub:"Random enemy",key:"Kill Guardia, then Campeador.",d:{normal:["Wave 1|Meteor the adds.","Wave 2|Group with War Cry, then Shield Charge."]}},
 {n:"Siren Piece",sub:"Elite",key:"Inviting Verse's debuff shows which way you'll be forced to run.",d:{normal:["Song of Torment|Tank it (you or your pet).","Unmooring Melody|Run to her side fast.","Feral Lunge / adds|Stay out of the path; Meteor the adds.","Summons|One Crawling Piece and three Shambling Pieces. The Crawling Piece can't be crowd-controlled; if it reaches you it binds you and gives Damage Down, so kill it (Meteor plus a Fang works).","Dead Man's Dirge|Standing normally = donut; wings huddled in = point-blank.","Weakness|Piercing.","Video|Mrhappy1227 — Third Degree Third Board walkthrough (youtube.com/watch?v=4nVh6z0Zqmk)."]}},
 {n:"Guttler Piece",sub:"Boss",key:"Use the side cubbies: Gyrocleave, knockbacks and Goring/Gutting patterns all resolve by cubby.",d:{normal:["Gyrocleave|Stand in a cubby.","Gluttonous Goring / Gutting|Opposite or same cubby.","Thunderbolt|Paralyses; bring a serum and keep your pet apart.","Molten Metal|Drop it in a far cubby, then cross.","Raidwides|Beastly Aura (knockback, unavoidable, ~1,300) and Molten Metal are magic damage; magic reduction (Force Shield) helps most.","Auto-attacks|Cleave; keep your pet off you.","Tankbuster|After the first trio of mechanics and after each Demense plus tether.","Loop|From Overpowering Point on: Demense, Overpowering Point, Thunderbolt, repeating.","Centre|She then does Beastly Aura (unavoidable) or Gyrocleave (avoidable).","Gluttonous Goring|One version has downtime that lowers your damage.","Thunderbolt|Paralysis; resist it, cure it, or have a pet take it.","Video|Mrhappy1227 — Third Degree Third Board walkthrough (youtube.com/watch?v=4nVh6z0Zqmk)."]}}
]},
{exp:"Dawntrail",type:"Limited Job",lj:"Beastmaster",inst:"Crucible of the Unbroken: First Master's Board",lv:50,il:"i120 · Beast Rank 20 · max roster 12",rl:[],patch:"7.56",note:"Optional board.",bosses:[
 {n:"Strix Piece",sub:"Enemy",key:"Quakes: stand in the levitation circle. Floods: turn into a kappa.",d:{normal:["Plummet|Outside the first row, then in.","Magical Mallet Theory|Step into the slime puddle.","Windfeather Whisper|Shield Charge back in.","Check Out|Move away from books with open mouths.","Third Degree|Only Ultimate Focus needs a hard counter: Dispel it (borrow Quelling Wave from a Pugil). Otherwise just burst it.","Video|Mrhappy1227 — First Master's Board Third Degree clear (youtube.com/watch?v=DIOl2QPqCrY) and Legendary clear (youtube.com/watch?v=WY2KgyKJWUE).","Prep|Borrow Quelling Wave from a Pugil before the pull (out of combat it doesn't go on cooldown) for a minute of dispels.","Plummet (detail)|Three sets of AoEs; dodging from the third set into the first is easiest.","Order|First rotation always opens with On the Properties of Quakes; later rotations vary.","On the Properties of Darkness|Big raidwide; worse if Ultimate Focus wasn't dispelled.","Windfeather add|Knock it back (Diremite) to interrupt it. Its own knockback is purple and can't be prevented, so keep it away from the walls.","Add point-blanks|Wait in the gap, then move into the safe pocket.","Video|AzuriteTV — First Master's Board Walkthrough (youtube.com/watch?v=fRglduVTSLs)."]}},
 {n:"Morbol Piece",sub:"Enemy",key:"Burn it. Never stand in front.",d:{normal:["Extremely Bad Breath|Rotating cones.","Vine Probe|Line.","Debuffs|Scouring Ash; Meteor the adds."]}},
 {n:"Corpse Flower Piece",sub:"Random enemy",key:"Stand in the thorns so Floral Trap can't pull you; let it eat the Queen Hawk instead.",d:{normal:["Floral Trap|Draw-in; thorns stop it.","Acid Rain|Keep moving.","Rotten Stench|Take it alone, away from your pet.","Floral Trap|Stand in an expanding vine as the pull goes out.","Queen Hawk Piece|Let the boss eat it; here it doesn't buff the boss.","Third Degree|Mrhappy shares Rotten Stench with his pet to split the damage.","Video|Mrhappy1227 — First Master's Board Third Degree clear (youtube.com/watch?v=DIOl2QPqCrY) and Legendary clear (youtube.com/watch?v=WY2KgyKJWUE).","Budding Thorns|Spawns saplings that leave brier patches; stand in one for Floral Trap. Being devoured gives the boss a damage-up stack.","Brier patches|Deal damage over time; don't linger.","Queen Hawk Piece|Line it up with a sapling so it gets pulled in and devoured. Only kill it if it starts casting Final Sting (big hit plus Damage Down).","Stack|Shared with your pet or taken alone; it still hits you while your pet covers you.","Acid Rain|Baited AoEs chase you; run them round the arena (through the briers if needed).","Video|AzuriteTV — First Master's Board Walkthrough (youtube.com/watch?v=fRglduVTSLs)."]}},
 {n:"Ice Dragon Piece",sub:"Random enemy",key:"Icy Torment: icicles on the sides = stand on the boss; otherwise avoid the centre.",d:{normal:["Frostbite|Scouring Ash.","Withering Eternity|Reach the safe cubby; dodge the slow Sheet of Ice.","Cauterize|Lines plus knockback; don't hit a wall.","Icy Torment|Crystals at his sides = stand in front or behind (hot-wing style). Sucking in ice with no crystals = stand at his sides.","Raidwide|Leaves a nasty damage over time; a cleanse (Ashkin) removes it, or have your pet cover you.","Withering Eternity|Big AoEs freeze you if you stay too long; Sheet of Ice targets you, so wait for two then move.","Ice stacks|Eight stacks freezes you; run through quickly.","Cauterize (sequence)|A memory pattern (e.g. up first, then right); kill the ice sprites fast, then position for the knockback.","Video|AzuriteTV — First Master's Board Walkthrough (youtube.com/watch?v=fRglduVTSLs)."]}},
 {n:"Gargoyle Piece",sub:"Elite",key:"Soak Malady orbs four at most, waiting for stacks to clear.",d:{normal:["Sweeping Evisceration|Stretch the tether to purple, then behind and in front.","Sea of Pitch|Kite round the boss.","Grim Fate|You or your pet tank it.","Third Degree|The hardest fight before the final boss.","Sweeping Evisceration|The worst attack; even full-HP pets can die to it.","Grim Tail|Five-hit tankbuster; a Tome of the Impervious negates one.","Kiting|Borrow Quelling Wave for steady TP while kiting.","Video|Mrhappy1227 — First Master's Board Third Degree clear (youtube.com/watch?v=DIOl2QPqCrY) and Legendary clear (youtube.com/watch?v=WY2KgyKJWUE).","Ripping Evisceration|Always out, then in; avoid the big ring.","Sweeping Evisceration|Tethers you; get far away, mitigate, then move through it twice.","Malady|Orbs tether to him and give damage-up stacks; grab them four at a time. Five stacks gives Hysteria.","Fivefold Fallout|Five magic raidwide hits, then an uncast knockback: get knocked from an intercardinal so you don't hit the wall.","Grim Fate|Tankbuster that grows with his stacks.","Sea of Pitch|Baited AoEs; drop them away from the orbs.","Video|AzuriteTV — First Master's Board Walkthrough (youtube.com/watch?v=fRglduVTSLs)."]}},
 {n:"Administrator Piece",sub:"Random enemy",key:"Kill Bugs before they reach the orb.",d:{normal:["Confound|Interrupt (Spriggan's Soul Crush).","Drone|Line AoEs.","Flamethrower|Frontal cone."]}},
 {n:"Golem Piece",sub:"Elite",key:"Tethered Earthen Ring or Plaincracker comes from the other golem.",d:{normal:["Earthen Ring / Plaincracker|Donut / big circle.","Rock Wall|Spike side stuns once all walls spawn.","Stoneshower|Plain rocks = circles, glowing = donuts.","Outcrop|Frontal cone. Gigantoad, Mantis and Damselfly recommended.","Plaincracker|An Earthing ring saves you from backing off for it.","Obliterate|Must be interrupted.","Video|Mrhappy1227 — First Master's Board Third Degree clear (youtube.com/watch?v=DIOl2QPqCrY) and Legendary clear (youtube.com/watch?v=WY2KgyKJWUE)."]}},
 {n:"Treant Piece",sub:"Elite",key:"Save your guaranteed Fang for the adds, then burst the Sapling before it grows.",d:{normal:["Adds|Each add summon costs the boss about 6% of its max HP.","Sapling|Grows stronger and casts stone magic; burst it (or use a Wild Earth on it).","Interrupt|One add needs interrupting (Golem works).","Acorn Bomb|Nightmare sleep, then a hit; let a pet with full HP take it, or have sleep resistance.","Video|Mrhappy1227 — First Master's Board Third Degree clear (youtube.com/watch?v=DIOl2QPqCrY) and Legendary clear (youtube.com/watch?v=WY2KgyKJWUE).","Rustling Breeze|Big green effect in front = sides hit; green at his sides = middle hit.","Falling Leaves|Adds with point-blanks; kill them quickly.","Sapling|He tethers it with regen and damage reduction; burst it before it grows. It can be Doomed.","Arboreal Storm|Expanding AoE; move in as soon as it finishes.","Acorn Bomb|Sleep on you: use cover so your pet sleeps instead, then swap. Sleep immunity also works.","Healer add|About 7,000 HP and interruptible; kill it fast.","Video|AzuriteTV — First Master's Board Walkthrough (youtube.com/watch?v=fRglduVTSLs)."]}},
 {n:"Progenitrix",sub:"Random enemy (shop or fight)",key:"Kill the Grenade quickly: while it's alive the Progenitrix is immune.",d:{normal:["Scalding Scolding|She jumps to one side and cleaves the whole room in front; move to her left or right.","Adds|Two bombs that leave a fire puddle when killed, and a Grenade that does repeated room-wide damage and makes her immune.","Burst|Clear all three with an AoE (Behemoth's Meteor) and Parting Blow; she usually dies before doing anything else.","Video|Ponzi, The Nasty Namazu — How To Get Legendary On The Fourth Board (youtube.com/watch?v=1Aw0sNCP3Ps)."]}},
 {n:"Borgny the Venomous",sub:"Boss",key:"Huge magic and poison damage: magic reduction, Breathtaker Essence and healing are essential.",d:{normal:["Toxic Vomit / poison|Unavoidable poison stacks Toxicosis; Breathtaker Essence avoids the poison entirely.","Magic damage|Very high; stack magic damage reduction (Warded Shield builds to 40%).","Wriggling Phlegm|An add walks to your poison puddles and explodes (Damage Down, poison). Bind it in place (Slime is safest); a Diremite knockback can push it into a puddle.","Tankbuster|Tome of the Impervious or Excellence.","Touchdown|Also hits.","Items|Hero's Crown nearly guarantees the win; Master Shield is the other strong pick. An axe is the key damage item.","Video|Mrhappy1227 — First Master's Board Third Degree clear (youtube.com/watch?v=DIOl2QPqCrY) and Legendary clear (youtube.com/watch?v=WY2KgyKJWUE).","Toxic Breath|He jumps back the way he faces, then cones forward; stay with him and step to the side.","Poison trail|Drag the puddles to one area as you go.","Fuming Vomit|AoEs burst in the order they appeared; move into the gaps.","Cauterize|Watch his line; he leaves more poison.","Knockback|Blue (preventable); don't get pushed into poison.","Phlegm add|Can be Doomed, stunned, bound or made Heavy. Lead it far from the poison or it explodes (Damage Down and poison).","Tankbuster|Let your pet take it.","Video|AzuriteTV — First Master's Board Walkthrough (youtube.com/watch?v=fRglduVTSLs)."]}}
]},
{exp:"Dawntrail",type:"Limited Job",lj:"Beastmaster",inst:"Crucible of the Unbroken: Second Master's Board",lv:50,il:"i135 sync · Beast Rank 25 · max roster 15 · 120 min",rl:[],patch:"7.56",note:"Optional final board, boss Lauda Piece. Weaknesses come from the wiki's bestiary data.",bosses:[
 {n:"Opening encounters",sub:"Moves 1–5",key:"Bring Earth for move 1 and a status-effect beast for the Myconid.",d:{normal:["Flauros + Lightning Sprite|Both weak to Earth. The Sprite resists physical heavily.","Mindflayer + Myconid (Elite)|Mindflayer weak to Slashing; Myconid weak to Water and to almost every status.","Random (Boogyman, Deepeye, Bomb, Light Sprite)|Ice; Wind (Deepeye takes most statuses); Wind; Slow.","Durga + Spinner-rook (Elite)|Durga weak to Fire, very high magic resistance; Spinner-rook weak to Blunt."]}},
 {n:"Board strategy",sub:"General",key:"Snarl trick (patched): Release-based damage cancelling no longer works; only swapping your pet out manually still does, at a big cost.",d:{normal:["Patch note|A hotfix stopped Parting Blow and Final Sting from cancelling attacks after a Snarl. Manually swapping your pet out still works but costs a lot.","Snarl trick (before the hotfix)|Snarl, then Release a couple of seconds before a hit lands. Used on most tankbusters, Void Paralyze and Thunderbolt; never worked on Durga's Atomic Ray.","Team|Bring three solid beasts; there's an achievement for clearing with each beast type only.","Camps|Heal yourself and at most one pet. A Chemist's Satchel gives a free potion at every camp.","Shop|Sell Temporal Sand (~300) if you won't need a redo. Aim for 10 beast gear and 10 crucible items for score.","Score|Legendary needs roughly 18,500–19,000. Your own remaining HP is worth more than keeping pets full (Selfless).","Video|Mrhappy1227 — Beastmaster Second Master's Board Legendary Rank Walkthrough (youtube.com/watch?v=A-mep8xYcTg)."]}},
 {n:"Flauros + Lightning Sprites",sub:"Move 1",key:"Hit at least two of the lightning elementals with your opening AoE so fewer lasers fire.",d:{normal:["Heat Lightning|Summons lightning elementals that fire lasers; cleave them down early. Leaving one alive is fine if you can dodge.","Second Heat Lightning|Ignore unless one spawns close; Release can clear it.","Erratic Blaster|Tankbuster; mitigate or let a sturdy pet take it.","Video|Mrhappy1227 — Beastmaster Second Master's Board Legendary Rank Walkthrough (youtube.com/watch?v=A-mep8xYcTg)."]}},
 {n:"Mindflayer Piece",sub:"Move 2 (middle route)",key:"Kill the Myconids while they're inside the water, then step away as they die.",d:{normal:["Water puddles|Two puddles are summoned; your pet can stand in one.","Myconids|Must die in the water, or they make a poison cloud that explodes raidwide.","Tankbuster|Hits much less if you're not in the water.","Void Paralyze|Bring paralysis resistance, Esuna or an anti-paralysis serum.","Video|Mrhappy1227 — Beastmaster Second Master's Board Legendary Rank Walkthrough (youtube.com/watch?v=A-mep8xYcTg)."]}},
 {n:"Atomos Piece",sub:"Elite",key:"Every time it summons adds it loses a big chunk of HP (~7%), so the adds speed the fight up.",d:{normal:["First pack|AoE them (Meteor or Release).","Vodoriga Pieces|Kill both fast; meanwhile the Atomos knocks back from the centre.","Water Bavarois|On death: knockback and water puddles, used by the next two.","Fire Bavarois|Stack marker: you and your pet both stand in water.","Lightning Bavarois|AoEs on you and your pet: both stay out of the water.","Dark II|Frontal.","Pulsing orbs|After a raidwide; small and large orbs pulse repeatedly. Stay clear.","Loot|Often good gear (e.g. Flamewreath axe).","Video|Mrhappy1227 — Beastmaster Second Master's Board Legendary Rank Walkthrough (youtube.com/watch?v=A-mep8xYcTg)."]}},
 {n:"Durga",sub:"Boss",key:"Fire damage everywhere: bring fire/magic resistance (Drake is ideal) for Atomic Ray.",d:{normal:["Auto-attacks|Fire damage.","Electric Absorption|Each hand absorbs; the hand that didn't absorb from a tower does a smaller AoE when he slaps the ground.","Summon (60%)|Adds feed him charges; kill or control them.","Atomic Ray|Fire raidwide that scales with charges. Fire armour, fire-absorb potions or magic shields help.","Video|Mrhappy1227 — Beastmaster Second Master's Board Legendary Rank Walkthrough (youtube.com/watch?v=A-mep8xYcTg)."]}},
 {n:"Sphinx Piece",sub:"Enemy (right route)",key:"Banish: head down = point-blank, head up = donut, leaps = half-room.",d:{normal:["Riddle 1|You're given a number: stand on a multiple of it (the number itself is always on the board, so just stand on it).","Riddle 2|Disguised monsters of one type (Beastkin, Wavekin, Scalekin, etc.) shuffle; follow yours and select it for a heal and small damage buff.","Threat|Low HP and low damage; good when your HP is low. Loot is usually modest.","Video|Mrhappy1227 — Beastmaster Second Master's Board Legendary Rank Walkthrough (youtube.com/watch?v=A-mep8xYcTg)."]}},
 {n:"Gigantis Piece",sub:"Elite",key:"Summons Cyclops Pieces throughout. Watch the club: one hand = front swing, overhead = rear swing, two hands crouched = point-blank.",d:{normal:["Club element|No element: can break any slime. With an element: only the opposite element's slime.","Smashing Stomp|Marker on you: aim it at a congealed slime to break it into small slimes you can AoE.","Gigantic Rage follow-up|Lightning club = tower (a pet standing in it also takes damage). Fire club = twisters.","Two big slimes|Silence one or kill it before Deluge (big raidwide).","Cyclops Pieces|Summoned throughout the fight; burst them down before they pile up.","Video|Mrhappy1227 — Beastmaster Second Master's Board Legendary Rank Walkthrough (youtube.com/watch?v=A-mep8xYcTg)."]}},
 {n:"King Ahriman Piece",sub:"Elite",key:"Roulette: destroy your hourglass while the finger isn't pointing at you.",d:{normal:["Roulette|Binds you and sends you to a quadrant with an hourglass.","Brands|Start in one brand, finish on the opposite side (e.g. start behind, end in front).","Tankbuster|No cast bar; learn its timing and mitigate.","Curtains for Rank Five|Level 5 Death on pets: Release rank 25 pets before it.","Add phase|Kill the add quickly or it tankbusts with a burn.","Mortal Gaze|Eyes appear during Roulette; look away while bound.","Loot|Usually drops the Hero's Crown, the strongest item for the final boss.","Video|Mrhappy1227 — Beastmaster Second Master's Board Legendary Rank Walkthrough (youtube.com/watch?v=A-mep8xYcTg)."]}},
 {n:"Lauda Piece",sub:"Boss",key:"Heavy physical hitter that gains High Wire with each Thunderbolt: kill fast and time Hero's Crown Excellence over big hits.",d:{normal:["Damage profile|Mostly heavy physical damage, so blocking and Blink stacks matter.","Thunderbolt|Damage plus Paralysis, and she gains a High Wire stack (more damage dealt, less taken). Resist or cure Paralysis; the Snarl trick no longer works.","Vanishing Daggers / Beastly Aura|Daggers rotate around you, then you're knocked: hit from behind sends you forward, hit from the front sends you back. Line up with the centre and save a gap closer to get straight back in.","Overpowering Point|Keep her in the centre and aim the AoEs straight out, stepping away from her. An AoE that hits one of the pieces at the side activates it; kill it quickly.","Prep|The Hero's Crown (usually from the King Ahriman Piece earlier on the board) gives +30 max HP, +18% damage and 10s of Excellence after each Instinctual Combo; time combos over big hits. The Windshield (50% chance on block to gain a Blink stack) is very strong here.","Remix|A harder version of the Third Board's Guttler Piece (Beastly Aura, Molten Metal, Overpowering Point).","Video|Mrhappy1227 — Beastmaster Second Master's Board Legendary Rank Walkthrough (youtube.com/watch?v=A-mep8xYcTg)."]}}
]}
]);
window.FF = (window.FF || []).concat([
/* ───────── ENDWALKER DUNGEONS ───────── */
{exp:"Endwalker",type:"Dungeon",inst:"The Tower of Zot",lv:81,il:"Drops i520",rl:["Leveling"],patch:"6.0",bosses:[
 {n:"Minduruva",key:"Transmutation sends spheres to marked spots and the spell fires there. Later she chains two.",d:{normal:[
  "Manusya Bio|Tankbuster plus a cleansable poison.",
  "Manusya Blizzard III / Fire III / Thunder III|Cone; donut (get close); cross-shaped ground AoEs.",
  "Manusya Bio III|Huge 180° frontal.",
  "Dhrupad|Uncleansable elemental DoT on non-tanks. Heal through.",
  "Transmutation|Spheres fly to marked spots and cast there. Leave the marks."]}},
 {n:"Sanduruva",key:"Manusya Confuse: the real Sanduruva stands still at the edge while the fakes emote.",d:{normal:[
  "Isitva Siddhi|Tankbuster.",
  "Prapti Siddhi|Lines hit each party member in turn.",
  "Manusya Berserk|Five orbs; anyone caught goes Berserk. Stand at the orb-free wall spot.",
  "Prakamya Siddhi|Point-blank that hits Berserk players.",
  "Manusya Stop|Timed freeze, then Prapti Siddhi lines. Pre-position.",
  "Manusya Confuse|Find the real boss and go to her edge."]}},
 {n:"The Magus Sisters",key:"Delta Attack changes with Cinduruva's call: ice, thunder or fire. Kill Cinduruva to stop it.",d:{normal:[
  "Samsara|Raidwide.",
  "Delta Attack: Glacial ice|Cones and room-length lines plus two proximity markers. Cross the room.",
  "Delta Attack: Thunderous tempest|Circles that split into crosses, long lines, then a stack.",
  "Delta Attack: Insatiable flame|Lines and donuts plus spreads. Dodge into a donut, then spread.",
  "Repeats|Dhrupad, Isitva Siddhi and Prapti Siddhi return between combos."]}}
]},
{exp:"Endwalker",type:"Dungeon",inst:"The Tower of Babil",lv:83,il:"Drops i530",rl:["Leveling"],patch:"6.0",bosses:[
 {n:"Barnabas",key:"Dynamic Pound: same charge as the line = stay close; opposite = get far away.",d:{normal:[
  "Static field|Outer zone DoT. Stay inside.",
  "Ground and Pound|Line on a random player.",
  "Dynamic Pound / Scrapline|Magnetic charges push or pull you relative to the line or the boss; Scrapline adds an untelegraphed point-blank.",
  "Shocking Force|Stack.",
  "Thundercall / Rolling Scrapline|Circles."]}},
 {n:"Lugae",key:"Green panels = Toad (clears Downpour's Breathless), purple = Mini (dodges chakrams).",d:{normal:[
  "Thermal Suppression|Raidwide.",
  "Magitek Missile / Ray|AoEs on two players and a line on one.",
  "Magitek Explosive|Bombs fire plus-shaped lines.",
  "Downpour|Stacks Breathless; become a Toad before five stacks.",
  "Magitek Chakram|Edge chakrams fire lines; become Mini to dodge."]}},
 {n:"Anima",key:"Boundless Pain pulls you in, then expands. Run to a corner.",d:{normal:[
  "Lunar Nail|Nails link into squares. Don't stand inside.",
  "Mega Graviton / Pater Patriae|Raidwide plus pulling orbs; line on a random player.",
  "Boundless Pain|Pull to centre then expanding circle.",
  "Imperatum|Everyone is sent below to fight a separate form.",
  "Obliviating Claw|Nails fire lines in spawn order; later a follower AoE too.",
  "Oblivion|Heavy raidwide at the end of the phase."]}}
]},
{exp:"Endwalker",type:"Dungeon",inst:"Vanaspati",lv:85,il:"Drops i536",rl:["Leveling"],patch:"6.0",bosses:[
 {n:"Terminus Snatcher",key:"Lost Hope: your controls are misdirected. Tap a key to find which way the cursor points.",d:{normal:[
  "Note of Despair|Raidwide.",
  "Mouth Off / What is Left / Right|Open mouths fire circles while the boss cleaves a half.",
  "Last Gasp|Tankbuster.",
  "Lost Hope|Temporary Misdirection; walk the direction the cursor shows.",
  "Half cleave + spreads|Spread on the safe half."]}},
 {n:"Terminus Wrecker",key:"Aether Spray: if it's the room-wide version, step into a bubble; if knockback, avoid bubbles.",d:{normal:[
  "Ring of fire|Stay inside the arena.",
  "Meaningless Destruction|Raidwide.",
  "Unholy Water|Bubbles briefly stun when touched.",
  "Aether Spray|Knockback from centre, or room-wide burn (hide in a bubble).",
  "Total Wreck|Tankbuster.",
  "Poison Heart|Stack."]}},
 {n:"Svarbhanu",key:"Aetherial Disruption: check the colour shown to know which rows erupt.",d:{normal:[
  "Flames of Decay|Raidwide.",
  "Aetherial Disruption|Blue triangles or red circles mark rows.",
  "Crumbling Sky|Spreads on the safe row, or a knockback onto it.",
  "Gnashing of Teeth|Tankbuster.",
  "Meteors|Stand in the column without a meteor."]}}
]},
{exp:"Endwalker",type:"Dungeon",inst:"Ktisis Hyperboreia",lv:87,il:"Drops i542",rl:["Leveling"],patch:"6.0",bosses:[
 {n:"Lyssa",key:"Frostbite and Seek: footprints show where she reappears. Go to that edge.",d:{normal:[
  "Skull Dasher|Tankbuster.",
  "Frostbite and Seek|Reappears where footprints end, casting toward the centre.",
  "Icicall / Frigid Stomp|Icicles near the edge; raidwide makes them fire lines.",
  "Heavy Smash|Stack."]}},
 {n:"Ladon Lord",key:"The lit head decides the breath: left = back-left, middle = straight, right = back-right.",d:{normal:[
  "Scratch|Tankbuster.",
  "Inhale / Pyric Breath|120° cone from the lit head.",
  "Fireballs|Cross-pattern lines, then a breath.",
  "Intimidation|Raidwide.",
  "Pyric Blast|Stack."]}},
 {n:"Hermes",key:"Interrupt True Bravery, and line-of-sight Hermetica behind the whole meteor.",d:{normal:[
  "Trismegistos|Raidwide plus a gale ring.",
  "Hermetica / Meteor|Brands fire lines that knock into the wall. Hide behind the uncracked meteor.",
  "True Tornado|Tankbuster.",
  "True Aero / Aero II|Following AoEs; spreads plus centre AoEs.",
  "Quadruple|Edge brands detonate in order.",
  "True Bravery|Interrupt it."]}}
]},
{exp:"Endwalker",type:"Dungeon",inst:"The Aitiascope",lv:89,il:"Drops i548",rl:["Leveling"],patch:"6.0",bosses:[
 {n:"Livia the Undeterred",key:"Aglaea Climb: cones fire toward the two glowing tentacles.",d:{normal:[
  "Frustration|Raidwide.",
  "Aglaea Bite|Tankbuster.",
  "Aglaea Climb|Cones toward glowing tentacles.",
  "Aglaea Shot|Lines toward the edge, then back across.",
  "Odi Et Amo / Disparagement|AoEs under players then a stack, followed by a cone."]}},
 {n:"Rhitahtyn the Unshakeable",key:"Shield Skewer: hide in the crevice of the rock draining fastest.",d:{normal:[
  "Tartarean Spark|Line on a random player.",
  "Vexillatio|Edge lines spawn rocks; never walk into them.",
  "Shield Skewer|Line down the middle path.",
  "Anvil of Tartarus|Tankbuster.",
  "Shrapnel Shell|Slow AoEs that split; go to the untouched corners.",
  "Tartarean Impact|Raidwide."]}},
 {n:"Amon the Undying",key:"Curtain Call: stand behind the ice block when the cast ends.",d:{normal:[
  "Dark Forte|Tankbuster.",
  "Thundaga Forte|Lightning cones from the middle. Dodge the first set, step into it.",
  "Strophe|Rotating circle fires a line; later two.",
  "Left / Right Firaga Forte|Side cleave.",
  "Curtain Call|Long cast; hide behind the ice.",
  "Eruption Forte|Fire AoEs under players."]}}
]},
{exp:"Endwalker",type:"Dungeon",inst:"The Dead Ends",lv:90,il:"Drops i560",rl:["High-level Dungeons"],patch:"6.0",bosses:[
 {n:"Caustic Grebuloff",key:"Necrosis kills if left alone. Cleanse it.",d:{normal:[
  "Pox Flail|Tankbuster.",
  "Blighted Water / Befoulment|Stack; spreads.",
  "Miasmata|Raidwide plus drifting point-blank orbs.",
  "Cough Up|AoEs under players plus Craven Companionship: stack to avoid Hysteria.",
  "Wave of Nausea|Donut; Hysteric players may be pushed out.",
  "Necrosis|Cleanse it."]}},
 {n:"Peacekeeper",key:"Eclipsing Exhaust knocks back toward edge AoEs. Use anti-knockback or aim for a safe gap.",d:{normal:[
  "Decimation|Raidwide; leaves a fire ring.",
  "Order to Fire / No Future|Cannon lines plus spreads.",
  "Peacefire|Rotating AoEs with a DoT field.",
  "Eclipsing Exhaust|Knockback into few safe spots.",
  "Elimination|Tankbuster."]}},
 {n:"Ra-la",key:"Doom from Lifesbreath butterflies only cleanses at full HP.",d:{normal:[
  "Warm Glow|Raidwide.",
  "Pity|Tankbuster.",
  "Prance|Circles explode in the order she jumped on them.",
  "Lifesbreath|Line spawns butterflies firing lines; hits give Doom.",
  "Loving Embrace|Half cleave on the glowing wing's side.",
  "Still Embrace|Spreads."]}}
]},
{exp:"Endwalker",type:"Dungeon",inst:"Smileton",lv:90,il:"Drops i560",rl:["High-level Dungeons"],patch:"6.0",bosses:[
 {n:"Face",key:"Alternate faces: while debuffed, take the opposite face's line, never the same one.",d:{normal:[
  "Lines of Fire|Rows of smiley/frowny lines give a matching debuff.",
  "Same-face line|Heavy damage and knockdown. Avoid.",
  "Off My Lawn|North or south knockback, sometimes with spreads.",
  "Temper's Flare|Raidwide.",
  "Upside Down|Swaps the faces. Re-read rows.",
  "Heart on Fire IV|Tankbuster."]}},
 {n:"Frameworker",key:"Print Workers repeat Leap Forward. Dodge their landing spots too.",d:{normal:[
  "Circular Saw|Raidwide.",
  "Steel Beam|Tankbuster.",
  "Leap Forward|Jumps in the marked direction with a landing AoE.",
  "Omnidirectional Onslaught|Sequential cones. Dodge into the first."]}},
 {n:"The Big Cheese",key:"One-arrow explosive moves close, three-arrow moves far.",d:{normal:[
  "Explosives Distribution|Two explosives move close or far.",
  "Dispense Explosives / Explosive Power|Mines; Power detonates them all.",
  "Right / Left Disassembler|Arm line.",
  "Violent Discharge|Raidwide.",
  "Leveling Missiles|Spreads."]}}
]},
{exp:"Endwalker",type:"Dungeon",inst:"The Stigma Dreamscape",lv:90,il:"Drops i560",rl:["High-level Dungeons"],patch:"6.0",bosses:[
 {n:"Proto-Omega",key:"Electric Slide knocks back. Don't land in fire puddles.",d:{normal:[
  "Side Cannons / Rear Interceptors|Half cleaves.",
  "Chemical Missile|Spreads leaving fire puddles.",
  "Electric Slide|Knockback stack.",
  "Guided Missile|Tethered missile; kite it.",
  "Mustard Bomb|Tankbuster."]}},
 {n:"Arch-Lambda",key:"Auto-mobile Assault Cannon: go to the last marked dash spot, then out of the centre.",d:{normal:[
  "Wheel|Tankbuster.",
  "Assault Cannon / Wave Cannon|Dashes then a big centre AoE.",
  "Atomic Flame|Raidwide.",
  "Sniper Cannon|Numbered lines fire at matching numbers; spread."]}},
 {n:"Stigma-4",key:"Kill the targetable adds from AI Takeover before they self-destruct.",d:{normal:[
  "AI Takeover|Adds; targetable ones self-destruct.",
  "Transformation|Circle form = donut (stay close), spiral = point-blank (go out).",
  "Mindhack|Forced March plus donut or point-blank.",
  "Atomic Ray|Raidwide plus uncleansable bleed.",
  "Multi-AI Takeover|Rocket Punch rush lines plus an add."]}}
]},
{exp:"Endwalker",type:"Dungeon",inst:"Alzadaal's Legacy",lv:90,il:"Drops i575",rl:["High-level Dungeons"],patch:"6.1",bosses:[
 {n:"Ambujam",key:"Toxic Fountain rings go off in order with knockbacks.",d:{normal:[
  "Big Wave|Raidwide with bleed.",
  "Tentacle Dig|Tentacles travel and explode where they stop; contact poisons.",
  "Toxic Fountain|Three ring sets in order."]}},
 {n:"Armored Chariot",key:"Articulated Bits: claws fire in order (later several together). Track the sequence.",d:{normal:[
  "Articulated Bits|Electric puddle plus claw lines.",
  "Cone|In the direction its shields point.",
  "Diffusion Ray|Raidwide.",
  "Graviton Cannon|Spreads.",
  "Rail Cannon|Tankbuster."]}},
 {n:"Kapikulu",key:"Wild Weave: ropes of the tethered colour erupt when the cast ends.",d:{normal:[
  "Billowing Bolts|Raidwide.",
  "Spin Out|Spun in a direction through a spike maze; spikes bleed.",
  "Basting Blade|Divebomb over a third of the arena.",
  "Magnitude Opus|Spreads.",
  "Crewel Slice|Tankbuster.",
  "Rotary Gale|Stack."]}}
]},
{exp:"Endwalker",type:"Dungeon",inst:"The Fell Court of Troia",lv:90,il:"Drops i595",rl:["High-level Dungeons"],patch:"6.2",bosses:[
 {n:"Evil Dreamers",key:"Unite Mare beams: kill the add nearest the new spawns to open a safe spot.",d:{normal:[
  "Evil Dreamer adds|Pull together and AoE.",
  "Charges|Edge adds charge across.",
  "Void Gravity|Spreads.",
  "Endless Nightmare|Big add makes three explode; stay clear of the tethered one."]}},
 {n:"Beatrice",key:"Eye of Troia is a gaze. Looking gives a lethal Doom.",d:{normal:[
  "Eye of Troia|Shrinking gaze ring. Look away.",
  "Beatific Scorn|Delayed lines; start late, step into the first.",
  "Hush|Tankbuster.",
  "Voidshaker / Void Nail|Frontal plus spreads.",
  "Toric Void|Donut; stay inside while looking away."]}},
 {n:"Scarmiglione",key:"Kill the Necroserfs before the bar fills or Corruptor's Pitch wipes you.",d:{normal:[
  "Poison pit|Edge DoT; get knocked into a wall instead.",
  "Cursed Echo|Raidwide plus bleed.",
  "Rotten Rampage|Room AoEs and spreads; avoid three Brain Rot stacks.",
  "Blighted Bladework / Sweep|Big marked AoE; huge frontal (stand behind).",
  "Necroserf adds|Kill in time."]}}
]},
{exp:"Endwalker",type:"Dungeon",inst:"Lapis Manalis",lv:90,il:"Drops i605",rl:["High-level Dungeons"],patch:"6.3",bosses:[
 {n:"Albion",key:"Roar of Albion: hide behind an ice block.",d:{normal:[
  "Call of the Mountain|Animal stampedes cross the arena.",
  "Albion's Embrace|Tankbuster.",
  "Right / Left Slam|Jumps centre and cleaves a side.",
  "Knock on Ice / Icebreaker|Ice blocks fall; a marked block shatters with spreads.",
  "Roar of Albion|Large AoE; line-of-sight behind ice."]}},
 {n:"Galatea Magna",key:"Tenebrism petrifies: soak towers, then look away from other players.",d:{normal:[
  "Waxing / Waning Cycle|Point-blank and donut in quick succession.",
  "Soul Scythe|Jumps to the edge it faces.",
  "Soul Nebula|Raidwide.",
  "Scarecrow Chase|Numbered portals then lines with cleansable Doom.",
  "Tenebrism|Towers plus Glassy-eyed."]}},
 {n:"Cagnazzo",key:"Kill all four Fearsome Flotsam before Tsunami or the party wipes.",d:{normal:[
  "Stygian Deluge|Raidwide; floods the outer area.",
  "Antediluvian|Edge bubbles explode.",
  "Body Slam|Centre knockback.",
  "Cursed Tide|Neap Tide spreads, Spring Tide stack.",
  "Cagnazzo's Power / Tsunami|Flotsam adds; kill all.",
  "Void Torrent|Magic tankbuster."]}}
]},
{exp:"Endwalker",type:"Dungeon",inst:"The Aetherfont",lv:90,il:"Drops i625",rl:["High-level Dungeons"],patch:"6.4",bosses:[
 {n:"Lyngbakr",key:"Upsweep detonates ice from Body Slam: small ice before large.",d:{normal:[
  "Upsweep / Body Slam|Raidwides; ice patches explode on Upsweep.",
  "Tidal Breath|Frontal at a random player.",
  "Floodstide|Spreads then a healer stack."]}},
 {n:"Arkas",key:"Lightning Leap paths keep growing. Weave between them.",d:{normal:[
  "Battle Cry|Raidwide; edge lightning ring after.",
  "Lightning Leap / Rampage|Jumps leaving growing lightning paths.",
  "Ripper Claw|Tankbuster.",
  "Spinning Claw|Point-blank leaving paths.",
  "Lightning Claw|Stack."]}},
 {n:"Octomammoth",key:"Octostroke leaves one platform safe from tentacles.",d:{normal:[
  "Tidal Roar|Raidwide.",
  "Octostroke|Tentacles cover all but one platform.",
  "Vivid Eyes|Ring in the middle; stand at platform front or back.",
  "Saline Spit|Marked platforms; stand on a path between.",
  "Tidal Breath|180° frontal.",
  "Telekinesis / Breathstroke|Tethered pillars fire onto platforms; tiny safe spot opposite the single tentacle."]}}
]},
{exp:"Endwalker",type:"Dungeon",inst:"The Lunar Subterrane",lv:90,il:"Drops i635",rl:["High-level Dungeons"],patch:"6.5",bosses:[
 {n:"Dark Elf",key:"Sorcerous Shroud hides the staves. Memorise them first.",d:{normal:[
  "Hexing Staves|Plus-shaped AoEs; hits give Doom and Dark Whispers stacks.",
  "Shadowy Sigil|Stand on tiles with the opposite symbol.",
  "Sorcerous Shroud|Find the tile with no staff in its row or column.",
  "Void Dark II|Spreads.",
  "Abyssal Outburst|Raidwide."]}},
 {n:"Damcyan Antlion",key:"Track which pillars Antlion March hits. Their rows get lines.",d:{normal:[
  "Stone Pillars|Struck pillars fall along their row.",
  "Sandblast|Raidwide.",
  "Landslip|Sand columns push; anti-knockback.",
  "Earthen Geyser / Pound Sand|Stack creates quicksand; then a marked AoE."]}},
 {n:"Durante",key:"Contrapasso: middle column safe for the first set, a corner afterwards.",d:{normal:[
  "Old Magic|Raidwide.",
  "Duplicitous Battery|Spiral circles; dodge the first, step into its path.",
  "Forsaken Fount|Dark orbs explode.",
  "Fallen Grace|Spreads.",
  "Antipodal Assault|Shared line, then a wide cone from the wall.",
  "Twilight Phase / Dark Impact / Death's Journey|Stake lines; big circle; point-blank plus cones."]}}
]},
/* ───────── ENDWALKER TRIALS ───────── */
{exp:"Endwalker",type:"Trial",inst:"The Dark Inside / Zodiark's Fall",lv:83,il:"Extreme: i560 to queue",rl:["Trials"],patch:"6.0",bosses:[
 {n:"Zodiark",key:"Astral Flow rotates the arena (and its concepts), not you. Stand where it will be safe after the turn.",d:{
 normal:[
  "Kokytos|Sets HP to 1. Heal up.",
  "Ania|Tankbuster.",
  "Phlegethon|Ground AoEs under players.",
  "Styx|Multi-hit stack.",
  "Exoterikos|Triangle sigil: hug that wall; square: move away from it.",
  "Paradeigma|Behemoths = circles, pythons = lines.",
  "Astral Flow|Arena rotates with concepts.",
  "Adikia / Triple Esoteric Ray / Algedon|Two semicircles; sequential lines; corner charge (go opposite)."],
 extreme:[
  "Kokytos|HP to 1. Start full, shields ready.",
  "Paradeigma|Fixed bird/behemoth/snake layouts; learn them.",
  "Styx|Stack gaining a hit each cast (6 up to 10).",
  "Ania|Buster with Umbral Rays. Tank swap.",
  "Exoterikos|Sigil colour: rectangle half, triangle cone, diamond line.",
  "Algedon|Corner line knockback. Stand in a free corner.",
  "Phobos|Raidwide with heavy bleed.",
  "Astral Flow|Track rotated tokens; Phase 3 adds a firewall.",
  "Phase 2 orbs|Destroy rear orbs first; Zodiark's Power wipes at 100.",
  "Enrage|Apomnemoneumata ~11:30."]}}
]},
{exp:"Endwalker",type:"Trial",inst:"The Mothercrystal / Hydaelyn's Call",lv:89,il:"Extreme: i560 to queue",rl:["Trials"],patch:"6.0",bosses:[
 {n:"Hydaelyn",key:"Weapon sets the shape: staff = point-blank, chakram = donut, sword = cross.",d:{
 normal:[
  "Heros's / Magos's Radiance|Raidwides.",
  "Mousa's Scorn|Shared tankbuster.",
  "Dawn Mantle|Weapon swap and its AoE.",
  "Hydaelyn's Ray|Proximity line down the centre.",
  "Crystalline Blizzard III|Spreads.",
  "Crystallize|Adds ice spreads or earth stack after the next Mantle.",
  "Parhelion / Parhelic Circle|Lines out and back; avoid endpoints.",
  "Lightwave / Echoes|Waves sweep; multi-hit stack in the far corner."],
 extreme:[
  "Shining Saber|8-player stack.",
  "Crystalize + Dawn's Mantle|Resolve weapon then element: ice spread, water healer stacks, earth party stack.",
  "Aureole / Lateral Aureole|Safe cones at flanks or front/back.",
  "Crystals of Light|Kill crystals on one side, tanks hold the other; keep Conviction under 100.",
  "Lightwaves|Hide behind crystals; Heros's Glory frontal, Intralateral Arc role hits.",
  "Heros's Sundering|Cone buster away from party.",
  "Parhelion / Parhelic Circle|Light-party water stacks; stand between long lines.",
  "Echoes|One safe corner for the five-hit stack."]}}
]},
{exp:"Endwalker",type:"Trial",inst:"The Final Day / The Endsinger's Aria",lv:90,il:"Extreme: i580 to queue",rl:["Trials"],patch:"6.0",bosses:[
 {n:"The Endsinger",key:"Fiery stars = circle (go away), azure stars = knockback (go toward).",d:{
 normal:[
  "Elegeia|Raidwide; two planets collide.",
  "Galaxias|Centre knockback.",
  "Elenchos|Dark orb = centre line; spread wings = side lines.",
  "Death's Embrace|Chasing cones leave nails.",
  "Aporrhoia|Heads fire lines.",
  "Hubris|AoE buster on both tanks.",
  "Elegeia Unforgotten / Fatalism|Explosions recorded then replayed.",
  "Ekstasis / Nemesis|Black puddles expand; spreads."],
 extreme:[
  "Elegeia Unforgotten|Read star type and spawn, then the safe spot or knockback.",
  "Katasterismoi + Grip of Despair|Eight towers; tethers between supports and DPS.",
  "Telos + Hubris|Raidwide then busters on top two.",
  "Eironeia|Healer light-party stacks.",
  "Fatalism|Replays collisions in order.",
  "Aporrhoia / Twinsong|Find the Wave of Nausea head, rotate clockwise.",
  "Theological Fatalism|Ring counts rewind each head's attack.",
  "Despair Unforgotten|Timed flare, donut, stack or circle debuffs.",
  "Telomania|Four hits then a heavy bleed hit."]}}
]},
{exp:"Endwalker",type:"Trial",inst:"Storm's Crown",lv:90,il:"Extreme: i600 to queue",rl:["Trials"],patch:"6.2",bosses:[
 {n:"Barbariccia",key:"Impact instantly kills anyone under it. Stand close enough not to be knocked out.",d:{
 normal:[
  "Savage Barbery|Sword lands at a cardinal, then line or donut.",
  "Hair Raid|Dash to the sword that cleaves; safe spots at its wall.",
  "Teasing Tangles|Stun and tether into a cone; stay in the circle.",
  "Deadly Twist / Hair Spray|Stack then spreads.",
  "Curling Iron|Hitbox knockback plus raidwide.",
  "Catabasis|Ultimate; heavy mitigation.",
  "Brittle Boulder / Winding Gale|Drop rocks together; stack for curved lines.",
  "Impact|Centre knockback; lethal under it."],
 extreme:[
  "Savage Barbery|Sword raised = line, lowered = donut, then a big circle.",
  "Hair Raid|Airborne = donut; crouched = cone across the arena.",
  "Deadly Twist / Hair Spray|Light-party healer stacks or clock spreads.",
  "Void Aero III|Buster with vulnerability; swap.",
  "Teasing Tangles|Stay in your circle; resolve by sides.",
  "Wind phase|Brutal Rush dashes, shared Boulder Break, bait Brittle Boulder.",
  "Impact / Trample|Tanks north, party south.",
  "Enrage|Maelstrom ~11:14."]}}
]},
{exp:"Endwalker",type:"Trial",inst:"Mount Ordeals",lv:90,il:"Extreme: i610 to queue",rl:["Trials"],patch:"6.3",bosses:[
 {n:"Rubicante",key:"Ordeal of Purgation: trace the fuse through the rotated rings to find which rune fires.",d:{
 normal:[
  "Inferno|Raidwide.",
  "Ordeal of Purgation|Rooted; stand beside the sparked rune's cone.",
  "Shattering Heat|Magic tankbuster.",
  "Arch Inferno|Rotating circles and a knockback tornado.",
  "Flamerake|Arrow line expands; step in after.",
  "Soulscald|Lines on everyone, repeated by clones.",
  "Dualfire|Conal busters on both tanks.",
  "Sweeping Immolation|Side cleave plus spreads."],
 extreme:[
  "Ordeal of Purgation|Trace the fireball path; stand in the safe spot at max melee.",
  "Arch Inferno|Light parties east/west round the outside.",
  "Fourfold / Twinfold / Spike of Flame|Light-party stack, partner stack, or spread.",
  "Radial Conflagration|Cones baited from clock spots.",
  "Adds phase|Kill adds fast; tanks take tethers; keep Rubicante's Power under 100.",
  "Blazing Rapture|Huge damage plus burn.",
  "Phase 3|Welt debuffs, Flamerake, Inferno spreads.",
  "Scalding Ring / Signal / Dualfire|Donut or point-blank then lines; tanks NW/NE."]}}
]},
{exp:"Endwalker",type:"Trial",inst:"The Voidcast Dais",lv:90,il:"Extreme: i640 to queue",rl:["Trials"],patch:"6.4",bosses:[
 {n:"Golbez",key:"Azdaja's Shadow: wide circle = donut + spreads, small circle = point-blank + stacks.",d:{
 normal:[
  "Terrastorm|Sphere marks half the arena.",
  "Crescent Blade|Half cleave toward a player.",
  "Arctic Assault|Icicle lines over two quadrants.",
  "Void Meteor|Tankbuster with comets.",
  "Lingering Spark|Baited AoEs; dodge as a group.",
  "Binding Cold|Raidwide with frost DoT.",
  "Black Fang|Pulsing raidwides into a heavy hit."],
 extreme:[
  "Terrastorm + Lingering Spark|Safe intercardinal, bait together, step into the spent zone.",
  "Phases of the Blade|Front 180° then back 180°.",
  "Gale Sphere|Orb lines in a fixed order.",
  "Void Meteor|Multi-hit buster; tanks apart.",
  "Azdaja's Shadow|Three cleaves stack a lethal debuff; rotate targets.",
  "Double Meteor|Knockback into towers; proximity players to the free corner.",
  "Void Stardust|Light parties east/west; step out then back.",
  "Eventide Fall / Triad|Healer line stacks; role cleaves.",
  "Enrage|Black Fang ~11:00."]}}
]},
{exp:"Endwalker",type:"Trial",inst:"The Abyssal Fracture",lv:90,il:"Extreme: i640 to queue",rl:["Trials"],patch:"6.5",bosses:[
 {n:"Zeromus",key:"Big Bang: stop acting when Acceleration Bomb expires, stack for Beckoning Dark, spread for Divisive Dark.",d:{
 normal:[
  "Abyssal Nox|HP to 1 plus Doom; heal to full to remove it.",
  "Visceral Whirl|Claws leave front and back safe.",
  "Dark Matter|Three-pulse AoE on one target.",
  "Flare|Tower then fireball lines.",
  "Big Bang|Raidwide with debuffs.",
  "Meteor Impact|Tethers to the meteor; stretch to the edge.",
  "Black Hole|Expands from an intercardinal; opposite is safe.",
  "Nostalgia|Physical then magical waves."],
 extreme:[
  "Abyssal Nox|Heal everyone to full; dodge two orb waves.",
  "Sable Thread|Shared line; two closest take extra.",
  "Dark Matter|Multi-hit buster.",
  "Visceral Whirl|Front safe spot north of the front-most mark.",
  "Flare|Two towers then lines.",
  "Void Bio|Slow poison orbs drift backward.",
  "Big Bang / Big Crunch|Spreads then regroup; Acceleration Bomb.",
  "Meteor Impact|Role stretches tethers in numbered order; never clip.",
  "Black Hole|Drop at the cardinal edge.",
  "Enrage|~11:05."]}}
]},
/* ───────── ENDWALKER RAIDS (Pandæmonium) ───────── */
{exp:"Endwalker",type:"Raid",inst:"Pandæmonium: Asphodelos (P1–P4)",lv:90,il:"Savage: i570–580 to queue",rl:["Normal Raids"],patch:"6.0",bosses:[
 {n:"Erichthonios",sub:"The First Circle",key:"Intemperance: stand where the crystal explosion is the opposite element to your debuff.",d:{
 normal:[
  "Gaoler's Flail|Half cleave; side shown by the spin.",
  "Warder's Wrath|Raidwide.",
  "Pitiless Flail / True Holy|Knockback line on a player then a stack.",
  "Heavy Hand|Tankbuster.",
  "Intemperance|Hot/Cold debuffs; go to the opposite-element quadrant.",
  "Shining Cells|Raidwide; arena gets red and blue sections.",
  "Aetherchain / Aetherflail|Orb colour erupts that colour; combined with a side cleave."],
 savage:[
  "Heavy Hand / Warder's Wrath|Buster; raidwide.",
  "Gaoler's Flail|Sickle 270° cleaves, Morningstar point-blank, Chakram donut in sequence.",
  "Pitiless Flail of Grace / Purgatory|Knockback tank swap; then group stack or tank flare.",
  "Aetherial Shackles|Red = big AoE on target and 3 farthest; purple = small on target and 3 closest.",
  "Intemperance|Nine crystal stacks; finish on the opposite element.",
  "Aetherflail|Side + depth + colour at once.",
  "Shackles of Time / Fourfold Shackles|Same-colour damage; ordered clock-spot holds.",
  "Enrage|~10:20."]}},
 {n:"Hippokampos",sub:"The Second Circle",key:"Spoken Cataract: behind the head and beside the body (usually one safe quadrant).",d:{
 normal:[
  "Doubled Impact|Shared tankbuster.",
  "Spoken Cataract|Head half cleave plus body line.",
  "Sewage Deluge|Floods all but platforms; water gives Dropsy.",
  "Tainted Flood / Predatory Sight|Spreads; stack with at least one other.",
  "Shockwave|Platform knockback.",
  "Dissociation|Head dashes along the edge.",
  "Coherence|Tank proximity plus line stack."],
 savage:[
  "Murky Depths / Doubled Impact|Raidwide; shared buster.",
  "Sewage Deluge|Reach a platform.",
  "Spoken / Winged Cataract|Behind or in front of the head, outside the body.",
  "Coherence|Tank runs the tether, other tank in front of party.",
  "Ominous Bubbling + Shockwave|Healer stacks of four, anti-knockback.",
  "Predatory Avarice|Knockback debuffs away; damage debuff stays.",
  "Channeling Flow / Overflow|Arrow knockbacks must collide with another player.",
  "Kampeos Harma|Numbered dashes and jumps.",
  "Enrage|~10:28."]}},
 {n:"Phoinix",sub:"The Third Circle",key:"Experimental Fireplume: one big fireball = edge, eight small = centre then step out.",d:{
 normal:[
  "Experimental Fireplume|Big centre AoE or eight small.",
  "Heat of Condemnation|Busters on both tanks.",
  "Darkened / Brightened Fire|Use your marker AoE to kill an invincible add.",
  "Left / Right Cinderwing|Side cleave.",
  "Trail of Condemnation|Edge dash.",
  "Fore / Rear Carve|Sunbird cleaves front or back.",
  "Fledgling Flight / Ashen Eye|Four cones in sequence.",
  "Devouring Brand / Searing Breeze|Fire splits the arena; spread to intercardinals."],
 savage:[
  "Heat of Condemnation|Tethers become busters; tanks take them.",
  "Experimental Fireplume|Small = rotating to centre, large = stack mid then out.",
  "Darkened / Brightened Fire|Numbered hits on adds in order.",
  "Devouring Brand + Searing Breeze|Quadrant bait as a group.",
  "Trail of Condemnation|Middle head = line + spread; side heads = partner stacks.",
  "Sunbirds|Kill far apart; dodge dashes.",
  "Fountain of Fire / Sun's Pinion|Healers soak towers; others bait and spread.",
  "Death's Toll|Stacks cleared by Ashen Eye cones; enrage ~11:03."]}},
 {n:"Hesperos",sub:"The Fourth Circle",key:"Belone Coils/Bursts: soak only what your role is allowed to. Three Thrice-come Ruin stacks = Doom.",d:{
 normal:[
  "Elegant Evisceration|Heavy hit on one target.",
  "Decollation|Raidwide.",
  "Setting the Scene|Electric = edge, water = knockback into a corner.",
  "Setting the Stage|Poison spreads, fire stack.",
  "Hell Skewer|Line on a player.",
  "Bloodrake / Belone|Role-restricted towers and orbs.",
  "Shift|Sword = cone (go to sides), cloak = knockback (stand in front)."],
 savage:[
  "Part 1 · Bloodrake|Drains one role; the other role handles the next mechanic.",
  "Part 1 · Director's Belone|Four role-killing debuffs, passed once each.",
  "Part 1 · Inversive Chlamys|Tethers: other role takes them at max melee.",
  "Part 1 · Pinax|Lightning proximity, water knockback, poison spread, fire healer stacks.",
  "Part 1 · Shift|Sword cleaves centre; cloak knocks back.",
  "Part 2 · Akanthai Acts 1–4|Thorn tethers set the order: towers, Nearsight/Farsight, Demigod Double, tethers broken in order.",
  "Part 2 · Curtain Call|Everyone Dark IV tethered; break shortest DPS first.",
  "Part 2 · Ultimate Impulse|Huge raidwide; hard enrage ~8:25."]}}
]},
{exp:"Endwalker",type:"Raid",inst:"Pandæmonium: Abyssos (P5–P8)",lv:90,il:"Savage: i600–610 to queue",rl:["Normal Raids"],patch:"6.2",bosses:[
 {n:"Proto-Carbuncle",sub:"The Fifth Circle",key:"Ruby Glow walls reflect attacks back from their origin.",d:{
 normal:[
  "Searing Ray|Corner jump, frontal cleave.",
  "Ruby Glow|Reflective wall splits arena.",
  "Topaz Glow|Stones explode.",
  "Crunch / Toxic Crunch|Tankbuster (+poison).",
  "Sonic Howl|Raidwide.",
  "Venom Squall|Markers then stack opposite the pool.",
  "The Hunt|Bite icons show jump order; go to the edge at the first."],
 savage:[
  "Ruby Glow|Heavy raidwide; walls split halves or quadrants.",
  "Topaz Stones|Poison pools; reflected by walls.",
  "Toxicosis|Four puddles need two each.",
  "Venomous Mass → Toxic Crunch|Swap between busters.",
  "Double Rush|Dashes knock toward walls.",
  "Venom Surge / Squall|Stack-bait-spread or spread-bait-stack.",
  "Raging Claw / Tail|Behind for claws, front for tail.",
  "Starving Stampede|Eight jumps; feed it one Lively Bait.",
  "Enrage|~9:58."]}},
 {n:"Hegemone",sub:"The Sixth Circle",key:"Transmission: face out with your cone, at about 1s left.",d:{
 normal:[
  "Aetheric Polyominoid|Spikes mark grid squares.",
  "Choros Ixou|Hand cones twice.",
  "Hemitheos's Dark IV|Raidwide.",
  "Transmission|Glossomorph cone from you.",
  "Synergy|AoE busters on both tanks.",
  "Strophe Ixou|Rotating front/back cones.",
  "Polyominoid Sigma|Tethered spikes swap; safe tiles swap too."],
 savage:[
  "Chelic Synergy / Synergy|Bleed busters; swap.",
  "Pathogenic Cells|Numbered cone baits; two hits lethal.",
  "Exchange of Agonies|Tethered players swap mechanics.",
  "Choros Ixou|Side or front/back, then the other.",
  "Transmission|Chelomorph face in, Glossomorph face out.",
  "Polyominoid Sigma|Use tethers to find the safe tile.",
  "Dark Ashes / Dark Sphere|One hit per player.",
  "Cachexia / Dual Predation / Ptera Ixou|Resistance debuffs pick your side.",
  "Enrage|~10:39."]}},
 {n:"Agdistis",sub:"The Seventh Circle",key:"Immortal's Obol splits the arena into three platforms: be at the safe edge first.",d:{
 normal:[
  "Bough of Attis|Hands back = front slam then line; forward = back slam.",
  "Hemitheos's Holy|Spreads then centre.",
  "Hemitheos's Glare III|Centre donut.",
  "Immortal's Obol|Proximity; three platforms.",
  "Hemitheos's Aero III|Busters on both tanks.",
  "Spark of Life|Heavy raidwide plus bleed.",
  "Forbidden Fruit|Ios platform circles, Stymphalides lines.",
  "Blades of Attis|Exaflares."],
 savage:[
  "Spark of Life|Heavy raidwide plus bleed.",
  "Condensed / Dispersed Aero II|Shared or split buster.",
  "Blades of Attis / Immortal's Obol|Front platform with the bigger gap.",
  "Inviolate Bonds|Aero III spreads back, Holy III stack middle; swap.",
  "Bough of Attis|Platform not being swiped.",
  "Forbidden Fruit|Ios, birds, minotaurs: bait cones, stretch tethers.",
  "Inviolate Purgation|Four marked sets between platforms.",
  "Famine / Death / War's Harvest|Trio sets of tethers, lines, cones.",
  "Enrage|Light of Life ~11:13."]}},
 {n:"Hephaistos",sub:"The Eighth Circle",key:"Sunforge: serpent = middle line, phoenix = sides (middle safe).",d:{
 normal:[
  "Sunforge|Serpent or phoenix.",
  "Flameviper|Tankbuster.",
  "Blazing Footfalls|Dash knockback then jumps.",
  "Fourfold Fires / Chthonic Vent|Puddles; serpents jump puddle to puddle.",
  "Into the Shadows|Look away; kill Gorgons before Gorgoneion.",
  "Gorgospit|Line.",
  "Volcanic Torches|Rectangle AoEs; find the clear column."],
 savage:[
  "Door · Genesis of Flame|Heavy raidwide.",
  "Door · Volcanic Torches|Corners never safe.",
  "Door · Sunforge|Inside/outside black lines, then Tetraflare/Octaflare.",
  "Door · Flameviper|Two-hit line buster; swap.",
  "Door · Gorgomanteia|Eye players petrify adds, Blood players kill them.",
  "Door · Uplift / Stomp Dead|Physical stomps; bait jumps in order.",
  "Door · Quadrupedal Crush / Impact|Go opposite (crush) or to the facing edge (impact).",
  "Final · High Concept 1 & 2|Fuse Perfection buffs into Conceptions correctly or wipe; soak matching towers.",
  "Final · Limitless Desolation / Inverse Magicks|Corner baits; swaps stack/spread and fire/ice.",
  "Final · Enrage|Ego Death ~8:28."]}}
]},
{exp:"Endwalker",type:"Raid",inst:"Pandæmonium: Anabaseios (P9–P12)",lv:90,il:"Savage: i630–640 to queue",rl:["Normal Raids"],patch:"6.4",bosses:[
 {n:"Kokytos",sub:"The Ninth Circle",key:"Kokytos's Whisper enlarges the flashed element.",d:{
 normal:[
  "Gluttony's Augur|Raidwide.",
  "Fire III / Blizzard III / Dualspell|Spreads or inner safe spot.",
  "Archaic Rockbreaker|Centre knockback leaving exploding lines.",
  "Archaic Demolish|Healer stacks.",
  "Ascendant Fist|Tankbuster.",
  "Comet / Ecliptic Meteor|Hide behind the solid comet.",
  "Iceflame Summoning|Go to the non-expanding element."],
 savage:[
  "Ravening / Soul Surge|Raidwide; edge walls removed by Augur.",
  "Duality of Death|Fire/wind buster; swap mid-cast.",
  "Dualspell|Fire partners, lightning clock; ice flash inner ring.",
  "Ascendant Fist + Rockbreaker|Swap, knocked into walls with partner stack.",
  "Front / Rear Combination|Point-blank or donut, cleave, opposite AoE.",
  "Archaic Demolish|Light-party healer stacks.",
  "Chimera's Lament I|Limit cut: orbs into towers, dashes, ice in order.",
  "Beast phase|Tornado cones, Comet stack, hide from Ecliptic Meteor.",
  "Enrage|~9:58."]}},
 {n:"Pandæmonium",sub:"The Tenth Circle",key:"Harrowing Hell ends in a front knockback. Stand at the very front edge.",d:{
 normal:[
  "Silkspit|Silk tethers; run across to break before 5 stacks.",
  "Pandaemonium Pillars|Towers; tethered objects point-blank, spinning donut.",
  "Pandaemoniac Meltdown|Line stack.",
  "Entangling Web|Webs form bridges to side platforms.",
  "Pandaemoniac Ray|Lit side hit; go opposite.",
  "Parted Plumes|Rotating cones round a bleed puddle.",
  "Touchdown|Lethal expansion; go to a side platform.",
  "Harrowing Hell|Repeated hits then knockback."],
 savage:[
  "Ultima + Soul Grasp|Raidwide then four-hit buster.",
  "Dividing Wings + Steel Web|Wing cones away; webs break stacks.",
  "Wicked Step|Tank towers knock to side platforms.",
  "Entangling Web|Touch posts to form bridges.",
  "Pandaemoniac Pillars|Eight towers; read cannon shape.",
  "Daemoniac Bonds|Tetra/Duo spreads and stacks in expiry order.",
  "Pandaemoniac Turrets|Bait in order; tanks behind baiters.",
  "Harrowing Hell|Eight hits plus knockback; webs must be impassable.",
  "Enrage|~10:40."]}},
 {n:"Themis",sub:"The Eleventh Circle",key:"Light vs dark changes every Ruling: learn both versions.",d:{
 normal:[
  "Eunomia|Raidwide with bleed.",
  "Divisive Ruling|Line; dark pulses outward (step in), light expands (step out).",
  "Dark and Light|Stand in the opposite colour circle.",
  "Emissary's Will|Instant death outside the right circle.",
  "Dineis|Stack then out.",
  "Dismissal Ruling|Knockback then donut (dark) or point-blank (light).",
  "Upheld Ruling|Dark tank buster + donut; light stack + point-blank.",
  "Shadowed Messenger|Clones' Divisive Ruling."],
 savage:[
  "Eunomia|Raidwide with bleed.",
  "Dike|Two-hit alternating buster; swap.",
  "Styx|Healer multi-hit stack, growing each cast.",
  "Jury Overruling|Light: light parties in hitbox. Dark: partners rotate.",
  "Upheld Overruling|Light: shared then split; dark: tank jump then donut.",
  "Divisive Overruling|Light: step aside; dark: step into the line.",
  "Dismissal Overruling|Knockback, then point-blank or donut.",
  "Arcane Revelation|Portals; two opposite intercardinals safe.",
  "Dark and Light|Close/far tethers; keep the right distance.",
  "Lightstream / Heart of Judgment|Odd laser out; pairs in towers. Enrage ~11:15."]}},
 {n:"Athena",sub:"The Twelfth Circle · Normal, and Savage Part 1",key:"Superchain Theory: read each orb's chained shape before it hits the big orb.",d:{
 normal:[
  "On the Soul|Raidwide.",
  "Trinity of Souls|Wings glow in order for half cleaves.",
  "Paradeigma|Red orbs lines, yellow orbs tether.",
  "Glaukopis|Line tankbuster.",
  "Superchain Theory|Small orb = point-blank, donut orb = donut.",
  "Parthenos|Vertical line with slight knockback.",
  "Unnatural Enchainment|Floor under tethers crumbles; no jumping.",
  "Ultima Blade|Heavy raidwide."],
 savage:[
  "On the Soul|Heavy raidwide.",
  "Glaukopis|Two-hit line buster; swap.",
  "Trinity of Souls|Bottom-to-top glow spins the second cleave.",
  "Paradeigma 1–3|Bait add lines, tethers solve towers, platform enchainment.",
  "Engravement of Souls|Debuffed players by opposite-aspect tethers.",
  "Superchain Theory I / IIA / IIB|Partner stacks or clock spreads; rotate to next safe orb.",
  "Palladion|Limit cut 1–8 dashes, pairs 1/3, 2/4, 5/7, 6/8.",
  "Theos's Ultima|Massive raidwide before phase two."]}},
 {n:"Pallas Athena",sub:"The Twelfth Circle Savage Part 2 · Savage only",key:"Caloric Theory: only ever move in straight lines.",d:{
 savage:[
  "Ultima / Palladian Grasp|Raidwide; two-hit buster on the main tank's side.",
  "Gaiaochos|Arena shrinks, everyone slowed; break Missing Link chains, Geocentrism.",
  "Classical Concepts 1 & 2|Shape tethers; stand between red/yellow and blue in your column. Panta Rhei mirrors them.",
  "Caloric Theory 1 & 2|Close Caloric from movement; share fire and wind.",
  "Ekpyrosis|Exaflares plus proximity AoEs.",
  "Pangenesis|Unstable Factor fusion and aspect towers.",
  "Summon Darkness|Stretch tethers; soak in front.",
  "Enrage|Ignorabimus ~8:28."]}}
]},
/* ───────── ENDWALKER ALLIANCE RAIDS (Myths of the Realm) ───────── */
{exp:"Endwalker",type:"Alliance Raid",inst:"Aglaia",lv:90,il:"i565 · 24 players",rl:["Alliance Raids"],patch:"6.1",bosses:[
 {n:"Byregot",key:"Levinforge: hammered floor blocks slide. Stay on ground that will remain.",d:{normal:[
  "Byregot's Ward|Tankbuster.",
  "Electrocution border|Edge DoT.",
  "Ordeal of Thunder|Raidwide.",
  "Byregot's Strike|Knockback with a lethal centre and four cones.",
  "Levinforge / Byregot's Spire|Sliding floor.",
  "Reproduce|Clones fire circles down the arena; fast ones first."]}},
 {n:"Rhalgr",key:"Rhalgr's Beacon: stand on a line aligned with a finger to stop the knockback.",d:{normal:[
  "Lightning Reign|Raidwide.",
  "Advent of the Eighth / Broken World|Punches a half; with a comet next to it, only under the comet is safe.",
  "Rhalgr's Beacon|Centre knockback.",
  "Bronze Work|Two cones; stand in the second.",
  "Destructive Bolt|Busters on all three tanks."]}},
 {n:"Azeyma",key:"Wildfire Ward: stay in the central triangle through three ordered knockbacks.",d:{normal:[
  "Warden's Warmth|Three tankbusters.",
  "Warden's Prominence|Raidwide.",
  "Solar Fans / Radiant Finish|Fans sweep then explode.",
  "Solar Fold / Sun's Shine|Quadrant fire; the clear quadrant is not the front one.",
  "Fleeting Spark|Fast 270° cleave.",
  "Wildfire Ward|Triangle knockbacks."]}},
 {n:"Nald'thal",key:"Tipped Scales: stand opposite your tethered add to balance. Unbalanced = wipe.",d:{normal:[
  "Heat Above, Flames Below|Only the active brother's colour is real.",
  "Once Above, Ever Below|Follow the active colour's arrows.",
  "Tipped Scales|Balance the scale.",
  "Fired Up|Ordered circles and knockbacks.",
  "Soul's Measure|Dodge Twingaze; alliance stacks."]}}
]},
{exp:"Endwalker",type:"Alliance Raid",inst:"Euphrosyne",lv:90,il:"24 players",rl:["Alliance Raids"],patch:"6.3",bosses:[
 {n:"Nophica",key:"Floral Haze forces a walk in the icon's direction. Plan the landing.",d:{normal:[
  "The Giving Land|Rings hit melee then ranged.",
  "Matron's Plenty|Edge thorns.",
  "Floral Haze|Forced walk.",
  "Matron's Harvest|Stand in the ring matching the soonest-closing hollow ring.",
  "Reaper's Harvest / Sowing Circle|Start in the last set, move into the first."]}},
 {n:"Althyk & Nymeia",key:"Spinner's Wheel card: look away, look toward, keep moving, or stop.",d:{normal:[
  "Spinner's Wheel|Debuff by card.",
  "Time and Tide|Speeds up time; next mechanic resolves early.",
  "Axioma / Inexorable Pull|Raidwide leaving puddles; stand in them to become Heavy and avoid the launch.",
  "Hydrorythmos|Wave pushes out; walk back.",
  "Mythril Greataxe / Petrai|Frontal; stacking tankbuster.",
  "Hydrostatis|Four water meteors in order."]}},
 {n:"Halone",key:"Doom Spear: one tower per alliance, resolving in order.",d:{normal:[
  "Rain of Spears|Triple raidwide.",
  "Tetrapagos|Four sweeps in telegraphed order.",
  "Doom Spear|Three alliance towers.",
  "Thousandfold Thrust|Go opposite.",
  "Lochos|Edge spears.",
  "Will of the Fury|Inward strikes; start at the edge.",
  "Glacial Spears|Burst spears, avoid the centre, rotate for Cheimon."]}},
 {n:"Menphina",key:"Moon icons fill up to time each attack.",d:{normal:[
  "Midnight Frost|Ice sheet from a cardinal.",
  "Love's Light|Areas pop in sequence.",
  "Ceremonial Pillars|Burst pillars before the meter caps.",
  "Dalamud tandem|Boss above, hound below; find the gap.",
  "Winter Solstice|Slippery ice."]}}
]},
{exp:"Endwalker",type:"Alliance Raid",inst:"Thaleia",lv:90,il:"24 players",rl:["Alliance Raids"],patch:"6.5",bosses:[
 {n:"Thaliak",key:"Hieroglyphica: work out where the safe square ends up after the rotation.",d:{normal:[
  "Katarrakes|Raidwide.",
  "Thlipsis|Stack.",
  "Rhyton|Tankbuster.",
  "Rheognosis|Clone shows the knockback side.",
  "Tetraktys|Triangles explode.",
  "Hieroglyphica|Two safe squares, then rotation."]}},
 {n:"Llymlaen",key:"Navigator's Trident: go opposite the marked side quickly.",d:{normal:[
  "Tempest|Raidwide.",
  "Seaform Spiral|Donut; stand under her.",
  "Navigator's Trident|Side marked.",
  "Deep Dive|Stack.",
  "Denizens of the Deep|Serpents from bubble portals.",
  "Surging Wave|Pushed back; run in avoiding bubbles."]}},
 {n:"Oschon",key:"Trek Shot: the curved arrow shows where he lands, which is the safe spot.",d:{normal:[
  "Flinted Foehn|Six-hit stack.",
  "Soaring Minuet|Frontal.",
  "Downhill / Climbing Shot|AoEs plus knockback.",
  "Trek Shot|Land with him.",
  "Pitton Pull|Chains explode; normal-coloured corners safe.",
  "Wandering Shot|Path plus wind ball half."]}},
 {n:"Eulogia",key:"Hand of the Destroyer: go to the circle she doesn't punch.",d:{normal:[
  "Quintessence|First, Second and Final Forms; use the blue lines.",
  "Love's Light|Moons fire lines when full.",
  "Solar Fans|Go to the middle.",
  "Hand of the Destroyer|Red or blue punch.",
  "Byregot's Strike|Beside the marker on the cross's empty sides.",
  "As Above, So Below|Avoid the colour she casts."]}}
]},
/* ───────── ENDWALKER VARIANT & CRITERION ───────── */
{exp:"Endwalker",type:"Variant & Criterion",inst:"The Sil'dihn Subterrane",lv:90,il:"Variant: i575 (sync 635) · Criterion: i610 · Savage: i635",rl:[],patch:"6.25",dlabel:{savage:"Criterion Savage"},note:"Variant (1–4 players): left door = Silkie (Records 1–4), middle = Gladiator (8–11), right = Shadowcaster (5–7), secret Record 12 = Thorne Knight. Another Sil'dihn Subterrane (Criterion and Savage) is four players and skips Geryon. Savage has higher HP and damage and some telegraphs removed.",bosses:[
 {n:"Geryon the Steer",sub:"Variant · first boss on every route",key:"Orange-top barrels explode around themselves; blue-top barrels are safe directly underneath.",d:{variant:[
  "Colossal Strike|Tankbuster.",
  "Exploding Catapult|Raidwide plus barrels.",
  "Colossal Slam|Cone at a random player.",
  "Subterranean Shudder|Route-dependent: knockback, mud puddles, fan pull-in, or rolling boulders.",
  "Gigantomill|Plus shape rotating over five slams."]}},
 {n:"Silkie",key:"Tail colour sets the follow-up: blue = plus-shaped ice, green = safe under the boss / donut, yellow = cardinals safe.",d:{
 variant:[
  "Total Wash|Raidwide.",
  "Squeaky Left / Right|Two cones then a sweep. Go opposite the named side.",
  "Carpet Beater|Tankbuster.",
  "Chilling / Bracing Suds|Tail colour sets the pattern.",
  "Spot Remover|DoT puddles.",
  "Dust Bluster|Centre knockback."],
 criterion:[
  "Cottonballs|Green = donut (stand under), yellow = cardinals safe, blue = plus ice that stuns.",
  "Fizzling Suds / Soap's Up|Yellow tail detonates; stand on its cardinals.",
  "Fresh Puff 1|The odd-coloured ball marks the safe side; route Slippery Soap through a green ball.",
  "Total Wash|Raidwide with bleed; full barriers negate the bleed.",
  "Fresh Puff 2–4|Tail colour plus ball formation decide how you move tethered balls. Baiting into a corner wipes.",
  "Dust Bluster|Knockback; shields or anti-knockback."],
 savage:[
  "Same mechanics|Higher HP and damage; bleed zone surrounds the arena; ice-charged soap freezes players standing still; puffs landing too close wipe."]}},
 {n:"Gladiator of Sil'dih",key:"Ring of Might: the gauge shows which circle explodes first.",d:{
 variant:[
  "Flash of Steel|Raidwide.",
  "Ring of Might|Coloured rings; leave the one the gauge reaches.",
  "Sculptor's Passion|Line at a random player.",
  "Rush of Might|Corner dash with two cleaves.",
  "Wrath of Ruin|Checkerboard lines in two sets.",
  "Sundered Remains|Rotating AoEs in spawn order."],
 criterion:[
  "Specter of Might|Count the flashes; stand behind the far add, move past it.",
  "Sculptor's Passion / Mighty Smite|Line soak with tank in front; physical buster.",
  "Curse of the Fallen|Purple spread, blue goes north, red-cross shared by the two without debuffs.",
  "Hateful Visage|Quadrants: melee NW, tank NE, healer SW, ranged SE.",
  "Accursed Visage|Gold/silver: be hit by the opposite colour laser.",
  "Curse of the Monument|Break chains N/S, numbered towers, purple-ball players move out."],
 savage:[
  "Same mechanics|Higher damage and HP; strategy can differ for low-DPS groups."]}},
 {n:"Shadowcaster Zeless Gah",key:"Infern Brand wires/portals: clear lines in your numbered order.",d:{
 variant:[
  "Show of Strength|Raidwide.",
  "Firesteel Fracture|Frontal buster.",
  "Infern Brand|Fireballs plus scepters (teleport or laser).",
  "Pure Fire|Baited AoE under each player.",
  "Cast Shadow|Two cone sets; start in the second.",
  "Infern Gale / Well|Knockback scepter or pull with point-blank."],
 criterion:[
  "Infern Brand 1|Portal pairs rotate to two safe spots; jump cleaves on two players, others spread.",
  "Blessed Beacon|Non-jumped players block the lines for the jumped ones.",
  "Infern Brand 2|Numbered wires: clear in ascending order through the opposite colour.",
  "Infern Brand 3|Red lasers block east/west; bait canes, get teleported, bait again.",
  "Infern Brand 4|Mirror-portal pairs leave four safe tiles.",
  "Infern Brand 5|Canes baited by number pairs, partner stacks for puddles."],
 savage:[
  "Same mechanics|Fire border burns; Brand 5 has a high-DPS cheese or the intended bait-in-order strat."]}},
 {n:"Thorne Knight",sub:"Variant · secret boss (Record 12)",key:"Slashburn: arrows round the boss swap the blue and orange AoEs.",d:{variant:[
  "Cogwheel|Raidwide.",
  "Spring to Life|Triangle or circle commands make mammets or cannons fire lines.",
  "Blistering Blow|Tankbuster.",
  "Fore Honor|180° frontal.",
  "Signal Flare|Three sets; start in the third.",
  "Blaze of Glory|Plus-shaped fireballs."]}}
]},
{exp:"Endwalker",type:"Variant & Criterion",inst:"Mount Rokkon",lv:90,il:"Criterion Savage: i665",rl:[],patch:"6.45",dlabel:{savage:"Criterion Savage"},note:"Variant: left = Moko (Records 1–4), middle = Gorai (5–7, hidden 12 = Enenra), right = Shishio (8–11); Yozakura is fought on every path first. Another Mount Rokkon (Criterion/Savage): Shishio, Gorai, Moko. Savage: higher HP/damage, fewer telegraphs.",bosses:[
 {n:"Yozakura the Fleeting",sub:"Variant · every route",key:"Blossom pile element sets the shape: fire point-blank, wind donut, lightning cardinal cone, water intercardinal cone.",d:{variant:[
  "Glory Neverlasting|Tankbuster.",
  "Art of the Wind/Fireblossom|Donut or point-blank.",
  "Oka Ranman / Seal of the Fleeting|Elemental piles.",
  "Seal of Riotous Bloom|Two piles at once.",
  "Kuge Rantsui|Raidwide.",
  "Seasons of the Fleeting|Four previewed lines/cones; memorise."]}},
 {n:"Shishio",key:"Count clouds eaten (1–3): it sets line count and explosion size.",d:{
 variant:[
  "Enkyo|Raidwide.",
  "Stormcloud Summons / Smokeater|Eats up to three clouds.",
  "Rakujo|1–3 lines; remaining clouds explode.",
  "Thunder Onefold–Threefold|Growing lines.",
  "Noble Pursuit / Thunder Vortex|Dash lines then donut."],
 criterion:[
  "Closing edge|Lethal outer AoE.",
  "Stormclouds Combo|Inhalations set lines and explosion size; Sprint for three.",
  "Splitting Cry / Slither|Wide line buster then rear cone.",
  "Noble Pursuit|Find the gap opposite the start.",
  "Wailing|Intensified = support+DPS pairs; Scattered = spread; Haunting Cry cleaves.",
  "Vengeful Souls|Unmarked soak towers; marked to corners."],
 savage:["Same mechanics|Higher HP/damage; fewer telegraphs."]}},
 {n:"Gorai the Uncaged",key:"Rousing Reincarnation: soak the tower matching your debuff; a missed tower wipes.",d:{
 variant:[
  "Unenlightenment|Raidwide.",
  "Flickering Flame|Edge lines.",
  "Sulphuric Stone|AoEs under stones.",
  "Plectrum of Power / Morphic Melody|Bigger AoEs, or safe spots on marked AoEs.",
  "Rousing Reincarnation|Debuffs removed in towers."],
 criterion:[
  "Unenlightenment|Raidwide with burns.",
  "Seal of Scurrying Sparks|Live Brazier pairs stack; corners per glow.",
  "Impure Purgation|Spread for aimed cones.",
  "Thundercall / Humble Hammer|Mini healer on the safe orb, tank in front.",
  "Rousing / Malformed Reincarnation|Coloured towers; drop order middle, corner, wall.",
  "Fighting Spirits|Limit-cut waymarks, knockback, wall cleaves."],
 savage:["Same mechanics|Higher HP/damage. Enrage Living Hell."]}},
 {n:"Moko the Restless",key:"Fire markers = outside safe, water markers = inside safe.",d:{
 variant:[
  "Kenki Release|Raidwide.",
  "Iai-kasumi-giri|270° cleave by facing.",
  "Soldiers of Death|Arrow AoEs or charges.",
  "Double Iai-kasumi-giri|Recalculate after the first.",
  "Boundless Scarlet / Azure|Widening lines; walk into the first azure wave."],
 criterion:[
  "Triple Kasumi-giri|Read each cleave symbol.",
  "Lateral Slice|90° physical buster.",
  "Scarlet / Azure Auspice|Untelegraphed point-blank and donut.",
  "Boundless Scarlet|Pyre/Flame stack or spread; tethered player to far corner.",
  "Shadow-twin|Clones' Double Iai-giri; overlapping clones wipe.",
  "Boundless Azure / Soldiers of Death|Small east-west movement; archer sets safe cardinals."],
 savage:["Same mechanics|Higher HP/damage."]}},
 {n:"Enenra",sub:"Variant · hidden boss (Record 12)",key:"Smoke and Mirrors clone copies everything and shares HP.",d:{variant:[
  "Flagrant Combustion|Raidwide.",
  "Out of the Smoke / Into the Fire|Dash along the trail then middle cleave.",
  "Kiseru Clamor|Expanding donut; find the safe lane.",
  "Smoke Rings|Edge for big AoE, centre for knockback.",
  "Smoldering Damnation|Puddles explode as they turn orange."]}}
]},
{exp:"Endwalker",type:"Variant & Criterion",inst:"Aloalo Island",lv:90,il:"Criterion Savage: i665",rl:[],patch:"6.51",dlabel:{savage:"Criterion Savage"},note:"Variant: Quaqua first on every path; left = Ketuduke, middle = Lala, right = Statice; secret Loquloqui after Record 12. Another Aloalo Island (Criterion/Savage): Ketuduke, Lala, Statice with lethal arena edges.",bosses:[
 {n:"Quaqua",sub:"Variant · every route",key:"Chakrams = donut at each orb, axes = circle.",d:{variant:[
  "Made Magic|Raidwide; outer danger ring.",
  "Arcane Armaments|Weapons float to orbs.",
  "Hammer Landing|Knockbacks from orbs 1–3 in order.",
  "Rout|Swords then a dash with lines.",
  "Violet Storm|Frontal cone."]}},
 {n:"Ketuduke",key:"Fluke Typhoon moves bubbled items two squares.",d:{
 variant:[
  "Spring Crystals|Spheres = circles, crystals = lines.",
  "Bubble Net|Enter an empty bubble for cover.",
  "Fluke Typhoon|Side knockback.",
  "Receding / Encroaching Twintides|Point-blank or donut then the other.",
  "Hydrobomb / Blowing Bubbles|Ground AoEs; trapping bubbles."],
 criterion:[
  "Tidal Roar|Raidwide plus Dropsy; edge lethal.",
  "Spring Crystals / Bubble Net / Fluke Gale|Tank+ranged north, healer+melee south; four safe tiles.",
  "Hydrofall / Hydrobullet|Pair stacks with a debuff-free player; spreads mid-tile.",
  "Blowing Bubbles|Bait three Hydrobomb sets in debuff order.",
  "Zaratan adds|Bait the add opposite your debuff; face them to the wall.",
  "Angry Seas|Anti-knockback; missed towers wipe."],
 savage:["Same mechanics|Higher HP/damage."]}},
 {n:"Lala",key:"Arcane Blight rotates 270° (Times Three) or 450° (Times Five) in the arrow's direction.",d:{
 variant:[
  "Inferno Theorem|Raidwide; outer danger zone.",
  "Arcane Blight|270° cone; safe cardinal rotates.",
  "Arcane Plot|Glowing tiles travel.",
  "Analysis / Targeted Light|Point your open side at the boss.",
  "Calculated Trajectory|Face the right way before it resolves."],
 criterion:[
  "Inferno Theorem|Raidwide; burns at the edge.",
  "Arcane Blight|Calculate the final safe side.",
  "Analysis + Arcane Array|Open side to the first orb reached.",
  "Planar Tactics|Forced March, Subtractive Suppressor Alpha cleansed in mines.",
  "Arcane Mine|Disarm mines by stack count and march direction; no Sprint.",
  "Spatial Tactics / Symmetric Surge|Count Beta hits; Surge Vector pairs."],
 savage:["Same mechanics|Arcane Blight lethal."]}},
 {n:"Statice",key:"Trick Reload: two duds. First/last set stack vs spread, middle sets the Trigger Happy sector.",d:{
 variant:[
  "Hidden Mine|Mid-arena knock-up.",
  "Surprise Balloon|Pinned balloon knockback.",
  "Trick Reload / Trigger Happy|Duds mark safe spots.",
  "Pinwheel|Rotating fire lines.",
  "Dartboard|Red knockback, yellow proximity, blue spreads."],
 criterion:[
  "Aero IV|Raidwide; wall lethal.",
  "Trick Reload|Call the pattern.",
  "Trapshooting|Stack and spread.",
  "Ring a Ring O' Explosions|Glowing bomb plus its tethered bombs explode.",
  "Dartboard of Dancing Explosives|DPS red, tank blue, healer yellow.",
  "Present Box / Pinwheeling Dartboard|Missile stack then break chains; Forced March order."],
 savage:["Same mechanics|Higher HP/damage."]}},
 {n:"Loquloqui",sub:"Variant · secret boss",key:"O Isle, Bloom: flowerfields erupt in bloom order.",d:{variant:[
  "Long-lost Light|Raidwide.",
  "Summoning Rite|Bird lines, lizard circles.",
  "O Life, Flourish|Glowing animals' AoEs grow.",
  "O Petals, Unfurl|Petals erupt at marked spots.",
  "Stirring of Spirits|Edge AoEs and centre knockbacks."]}}
]},
/* ───────── ENDWALKER ULTIMATES ───────── */
{exp:"Endwalker",type:"Ultimate",inst:"Dragonsong's Reprise (Ultimate)",lv:90,il:"Synced",rl:[],patch:"6.11",note:"Condensed phase overview. Use a full guide and an agreed strat for progression.",bosses:[
 {n:"Adelphel, Grinnaux & Charibert",sub:"Phase 1 · Thordan's knights",key:"Holiest Hallowing must be interrupted every time.",d:{ultimate:[
  "Holiest Hallowing|Interrupt.",
  "Empty / Full Dimension|Donut or point-blank from Grinnaux.",
  "Heavensblaze / Holy Shield Bash|Stack on a healer; bash stuns, so the other healer handles it.",
  "Planar Prison / Shining Blade|Dashes; pick the safe orb gaps.",
  "Execution / Hyperdimensional Slash|Tank flare; tethered slashes."]}},
 {n:"King Thordan",sub:"Phase 2",key:"Strength and Sanctity of the Ward are the two big sets: learn your clock role.",d:{ultimate:[
  "Ascalon's Mercy Concealed|Cones baited by everyone; spread round the boss.",
  "Strength of the Ward|Knights dive (Spiral Thrust) and leap to marked players; spread for Lightning Storm.",
  "Sanctity of the Ward|Dragon's Gaze (look away from the eyes), Sacred Sever stacks, then meteor towers by role.",
  "Ultimate End|Heavy raidwide."]}},
 {n:"Nidhogg",sub:"Phase 3",key:"Dive from Grace: your number (1/2/3) and arrow (high/low/circle) decide your tower and jump.",d:{ultimate:[
  "Final Chorus|Raidwide.",
  "Dive from Grace|Numbered jumps leave towers; Gnash and Lash (in/out).",
  "Drachenlance|Frontal cone.",
  "Geirskogul|Lines from jump players."]}},
 {n:"Eyes of Nidhogg / Haurchefant",sub:"Phase 4 + intermission",key:"Mirage Dive tethers swap: red/blue tether holders pass eyes to balance.",d:{ultimate:[
  "Resentment / Mirage Dive|Tethered players swap with blue-orb players.",
  "Steep in Rage|Kill the eyes evenly.",
  "Pure of Heart (intermission)|Shelter under Haurchefant; bait Brightwing cones in pairs; dodge Skyblind puddles."]}},
 {n:"Thordan & knights",sub:"Phase 5 · Alternative End",key:"Death of the Heavens: Doom players and playstation markers.",d:{ultimate:[
  "Wrath of the Heavens|Tethers, Spiral Pierce, Twisting Dive; skyward leap blue marker away.",
  "Death of the Heavens|Doom debuffs plus playstation markers; cleanse after.",
  "Heavenly Heel / Ascalon's Might|Tank swap busters."]}},
 {n:"Nidhogg & Hraesvelgr",sub:"Phase 6",key:"Wyrmsbreath: glowing dragons decide tank tether handling and buffs.",d:{ultimate:[
  "Wyrmsbreath|Tanks take tethers; glow means a damage buff on the other dragon.",
  "Mortal Vow|Pass the debuff in order.",
  "Akh Afah|Healer stacks.",
  "Hallowed Wings / Plume / Cauterize|Side and in/out lines; charge lanes.",
  "Touchdown|Raidwide; keep both dragons' HP even."]}},
 {n:"Dragon-king Thordan",sub:"Phase 7",key:"Trinity tankbusters on first aggro, second aggro and farthest player.",d:{ultimate:[
  "Exaflare's Edge|Exaflares.",
  "Akh Morn's Edge|Tank stacks.",
  "Gigaflare's Edge|Huge point-blank; move away.",
  "Trinity|Three-way buster.",
  "Enrage|Morn Afah's Edge."]}}
]},
{exp:"Endwalker",type:"Ultimate",inst:"The Omega Protocol (Ultimate)",lv:90,il:"Synced",rl:[],patch:"6.31",note:"Condensed phase overview. Use a full guide and an agreed strat for progression.",bosses:[
 {n:"Omega",sub:"Phase 1",key:"Program Loop: numbered players alternate towers and tethers.",d:{ultimate:[
  "Program Loop|Towers 1–4 and tethers passed in order.",
  "Pantokrator|Limit cut: missiles and beams by number.",
  "Wave Cannon|Line stacks/baits."]}},
 {n:"Omega-M & Omega-F",sub:"Phase 2",key:"Party Synergy: glitch (near/far) plus circle/triangle/square/X partners.",d:{ultimate:[
  "Party Synergy|Pair by playstation symbol; mid or remote glitch sets spacing.",
  "Limitless Synergy|Optimized Fire III spreads, tethers.",
  "Solar Ray|Tankbusters."]}},
 {n:"Omega Reconfigured",sub:"Phase 3",key:"Hello, World: rot passes between players. Pass on time.",d:{ultimate:[
  "Hello, World|Red/blue rot passes, towers, tether breaks.",
  "Oversampled Wave Cannon|Monitors cleave; spread to monitor-safe spots.",
  "Program Loop variants|Towers plus baits."]}},
 {n:"Blue Screen",sub:"Phase 4",key:"DPS check: kill before Blue Screen.",d:{ultimate:[
  "Wave Cannon stacks|Line stacks.",
  "Blue Screen|Enrage if not pushed."]}},
 {n:"Run: Dynamis",sub:"Phase 5",key:"Dynamis stacks build each sub-phase: Delta, Sigma, Omega.",d:{ultimate:[
  "Delta|Beetle and Final Omega arms, tethers.",
  "Sigma|Playstation markers, towers.",
  "Omega|Omega-M/F swaps with Dynamis stacks."]}},
 {n:"Alpha Omega",sub:"Phase 6",key:"Cosmo Memory needs tank LB3.",d:{ultimate:[
  "Cosmo Memory|Tank LB3.",
  "Flash Gale|Tankbuster.",
  "Wave Cannon / Cosmo Arrow|Exaflares.",
  "Unlimited Wave Cannon|Baits and exaflares.",
  "Cosmo Dive|Tank and stack.",
  "Magic Number|Healer LB3; enrage Run: Dynamis."]}}
]}
]);
window.FF = (window.FF || []).concat([
{exp:"Shadowbringers",type:"Dungeon",inst:"Holminster Switch",lv:71,il:"Drops i390",rl:["Leveling"],patch:"5.0",bosses:[
 {n:"Forgiven Dissonance",key:"Thumbscrew's line plus Brazen Bull crosses leave one small safe section.",d:{normal:["The Path of Light|Raidwide.","Pillory|Tankbuster.","Brazen Bull|Four orbs fire cross-shaped AoEs.","Thumbscrew|Line AoE, then a charge to the edge.","Wooden Horse|Large cone toward the centre right after Thumbscrew."]}},
 {n:"Tesleen, the Forgiven",key:"Fevered Flagellation: stand in a diamond round the boss so the numbered charges don't overlap.",d:{normal:["The Tickler|Tankbuster.","Scold's Bridle|Raidwide.","Fevered Flagellation|Charges players 1–4 in order.","Exorcise|Stack plus four circles; leaves bleed puddles."]}},
 {n:"Philia",sub:"Lightwarden",key:"Chain Down fetters a player: break the Iron Chain before Aethersup hits them.",d:{normal:["Scavenger's Daughter|Raidwide.","Headcrusher|Tankbuster.","Pendulum|Proximity on the tank, then in the centre.","Chain Down / Aethersup|Free the fettered player; keep out of the cone.","Left / Right Knout|Over-180° arc on the raised-arm side; go opposite."]}}
]},
{exp:"Shadowbringers",type:"Dungeon",inst:"Dohn Mheg",lv:73,il:"Drops i400",rl:["Leveling"],patch:"5.0",bosses:[
 {n:"Aenc Thon, Lord of the Lingering Gaze",key:"Landsblood markers darken before they explode and stun.",d:{normal:["Candy Cane|Tankbuster.","Hydrofall|Two circles under random players.","Laughing Leap|Small centre circle or a stack.","Landsblood|Party DoT plus darkening water markers."]}},
 {n:"Griaule",key:"Fodder: stand between saplings and Griaule to block beams; keep his stacks under 5.",d:{normal:["Swinge|60° frontal.","Fodder|Intercepting beams grows you (damage up); the boss also grows.","Tiiimbeeer|Raidwide.","Coiling Ivy|Ivy roots each player; kill your own, then free others."]}},
 {n:"Aenc Thon, Lord of the Lengthsome Gait",sub:"Lakelord",key:"Funambulist's Fantasia: walk the winding path, then destroy the Lyre from inside the barrier.",d:{normal:["Crippling Blow|Tankbuster.","Virtuosic Capriccio|Raidwide plus bleed.","Imp Choir|Gaze. Look away.","Toad Choir|Untelegraphed cone at a random player.","Funambulist's Fantasia|Knockback into a pit with one path; Finale kills outside the barrier.","Changeling's Fantasia|Becomes Shade of Fear: wide cone and tentacle line."]}}
]},
{exp:"Shadowbringers",type:"Dungeon",inst:"The Qitana Ravel",lv:75,il:"Drops i406",rl:["Leveling"],patch:"5.0",bosses:[
 {n:"Lozatl",key:"A glowing statue (Scorn) or a red-hot side (Fury) marks the half that gets hit.",d:{normal:["Stonefist|Tankbuster.","Sun Toss|Circle on a random player.","Lozatl's Scorn|Glowing statue's half.","Heat Up / Lozatl's Fury|Red-hot side's half.","Combined|Both together; find the overlap."]}},
 {n:"Batsquatch",key:"Pillars topple on Soundwave. Stand outside their fall cone.",d:{normal:["Ripper Fang|Tankbuster.","Soundwave|Raidwide; topples pillars.","Subsonics|Stacking stomps plus falling rocks."]}},
 {n:"Eros",sub:"Lightwarden",key:"Confession of Faith: lightning = stack in front, fire = stand at its sides.",d:{normal:["Rend|Tankbuster.","Hound out of Heaven|Tether; get far enough for it to turn purple.","Viper Poison|Poison puddles.","Inhale / Heaving Breath|Pulled in then knocked back; avoid puddles.","Confession of Faith|Lightning or fire breath."]}}
]},
{exp:"Shadowbringers",type:"Dungeon",inst:"Malikah's Well",lv:77,il:"Drops i412",rl:["Leveling"],patch:"5.0",bosses:[
 {n:"Greater Armadillo",key:"Flail Smash: avoid the centre proximity, then the outer ring.",d:{normal:["Falling Rocks|Two sets of four circles.","Stone Flail|Tankbuster.","Head Toss|Stack.","Right Round|Untelegraphed melee-range knockback.","Pack Armadillos|Adds after each Flail Smash."]}},
 {n:"Amphibious Talos",key:"Swift Spill: a rotating cone from the centre.",d:{normal:["Efface|Tankbuster.","Wellbore|Big centre circle, then geysers.","High Pressure|Knockback.","Swift Spill|Rotating cone."]}},
 {n:"Storge",sub:"Lightwarden",key:"Censure: nails and Storge repeat the last attack clockwise. Track the sequence.",d:{normal:["Intestinal Crank|Raidwide.","Heretic's Fork|Four cardinal lines.","Breaking Wheel|Only inside Storge's hitbox is safe.","Crystal Nail|Circles leave Rhapsodic Nails.","Censure|Repeats in order."]}}
]},
{exp:"Shadowbringers",type:"Dungeon",inst:"Mt. Gulg",lv:79,il:"Drops i418",rl:["Leveling"],patch:"5.0",bosses:[
 {n:"Forgiven Cruelty",key:"Lumen Infinitum has no ground marker. Leave the front when it casts.",d:{normal:["Rake|Tankbuster.","Lumen Infinitum|Frontal line.","Cyclone Wing|Raidwide.","Typhoon Wing|Don't stand in front of the green orbs."]}},
 {n:"Forgiven Whimsy",key:"Exegesis faces map onto the 3×3 floor. Stand on a square without a face.",d:{normal:["Sacrament of Penance|Raidwide.","Catechism|Tankbuster.","Judgement Day|One player soaks each meteor puddle.","Exegesis|Symmetrical face pattern; upper corners often safe."]}},
 {n:"Forgiven Obscenity",key:"Glowing casts add extra shapes: rings for the circle, an X for the line.",d:{normal:["Orison Fortissimo|Raidwide.","Sacrament Sforzando|Tankbuster.","Divine Diminuendo|Circle (plus rings if glowing).","Conviction Marcato|Front line (plus X if glowing).","Solitaire Ring|Clones; stand on the last ring's column, then leave it."]}}
]},
{exp:"Shadowbringers",type:"Dungeon",inst:"Amaurot",lv:80,il:"Drops i430",rl:["High-level Dungeons"],patch:"5.0",bosses:[
 {n:"The First Beast",key:"The Final Sky: hide behind a meteor boulder, then outrun the falling building.",d:{normal:["Venomous Breath|Poison cone on the tank.","Meteor Rain|Markers become ground AoEs and leave boulders.","The Falling Sky|Circles under players.","The Final Sky|Edge meteor; line-of-sight behind a boulder.","Earthquake|Point-blank on the boss."]}},
 {n:"Terminus Bellwether",key:"Kill tethering adds first and stop Burst before stacks build.",d:{normal:["Shrill Shriek|Raidwide.","Mob waves|Kill as they spawn; tethered players take more damage.","Burst|Grows the boss; fires on death too."]}},
 {n:"Therion",sub:"Chthonic Riddle",key:"Apokalypsis cracks one outcrop each cast and drops it the next.",d:{normal:["Shadow Wreck|Raidwide.","Apokalypsis|Platform-wide line; use an outcrop.","Therion Charge|Proximity leap that removes floor.","Deathly Ray|Mask lines (side unannounced) or a line on a player."]}}
]},
{exp:"Shadowbringers",type:"Dungeon",inst:"The Twinning",lv:80,il:"Drops i430",rl:["High-level Dungeons"],patch:"5.0",bosses:[
 {n:"Alpha Zaghnal",key:"Attacks that hit the side containment units free a Beta Zaghnal.",d:{normal:["Augurium|Frontal cone buster.","Beastly Roar|Raidwide.","Pounce Errant|Circles as it jumps between players.","Forlorn Impact|Numbered lines 1–4.","Charge Eradicated|Stack leaving fire."]}},
 {n:"Mithridates",key:"Laserblade leaves safe gaps between crossed lines.",d:{normal:["Thunder Beam|Tankbuster.","Electric Discharge|Orbs burst later.","Laserblade|Crossed lines.","Allagan Thunder|Spreads (later only tank and healer)."]}},
 {n:"The Tycoon",sub:"Artificial Enigma",key:"Never walk into a time-stopped laser.",d:{normal:["Rail Cannon|Tankbuster.","Magitek Crossray|Boss's starting spot is safe.","Defensive Array|Lasers fire inward.","Temporal Stasis|Frozen lasers punish contact.","Artificial Gravity|Growing circles.","High-tension Discharger / Magicrystal|Raidwide; spreads."]}}
]},
{exp:"Shadowbringers",type:"Dungeon",inst:"Akadaemia Anyder",lv:80,il:"Drops i430",rl:["High-level Dungeons"],patch:"5.0",bosses:[
 {n:"Cladoselache & Doliodus",key:"'Gathering its strength' warns which shark does the big move.",d:{normal:["Protolithic Puncture|Tankbuster.","Tidal Guillotine|Circle round Cladoselache.","Aquatic Lance|Lingering zone on a player.","Pelagic Cleaver|Doliodus cone with knockback.","Marine Mayhem|Raidwide."]}},
 {n:"Marquis Morbol",key:"Blossom puddles persist until the next Blossom.",d:{normal:["Arbor Storm|Raidwide.","Extensible Tendrils / Bile Vomit|Rotating tentacle lines then a frontal.","Blossom|Heavy puddles.","Sap Shower|Circles on non-tanks."]}},
 {n:"Quetzalcoatl",sub:"Guardian Force",key:"Collect the Thunderstorm orbs or they buff the boss.",d:{normal:["Shockbolt|Tankbuster.","Thunderbolt|Raidwide.","Thunderstorm|Spreads plus orbs.","Shocking Plumage|Four cones.","Winding Current|Knocked to the edge; get into the hitbox."]}}
]},
{exp:"Shadowbringers",type:"Dungeon",inst:"The Grand Cosmos",lv:80,il:"Drops i445",rl:["High-level Dungeons"],patch:"5.1",bosses:[
 {n:"Seeker of Solitude",key:"Sweep brooms knock back along their lanes.",d:{normal:["Shadowbolt|Tankbuster.","Immortal Anathema|Raidwide.","Tribulation|Bleed/Heavy puddles.","Sweep|Brooms along lanes.","Dark Shock / Dark Well|Circles and spreads."]}},
 {n:"Leannan Sith",key:"Move seeds onto bare tiles so they die when they sprout.",d:{normal:["Storm of Color|Tankbuster.","Ode to Lost Love|Raidwide.","Direct Seeding|Seeds on grass must be killed.","Toxic Sprout|Kill Lover's Rings fast.","Ode to Far Winds / Fallen Petals|Safe zone round the boss.","Ireful Wind|Djinn knocks players and seeds one tile."]}},
 {n:"Lugus",sub:"Insatiable Flame",key:"Mortal Flame: walk into your own furniture to pass it on.",d:{normal:["Scorching Left / Right|Side cleave.","Otherworldly Heat|Crosses from markers.","Captive Bolt|Big tankbuster.","Mortal Flame|Escalating debuff.","Fire's Domain / Ire|Charge through tethers; get far.","Culling Blade|Raidwide; drops chandeliers."]}}
]},
{exp:"Shadowbringers",type:"Dungeon",inst:"Anamnesis Anyder",lv:80,il:"Drops i455",rl:["High-level Dungeons"],patch:"5.2",bosses:[
 {n:"Unknown",key:"Scrutiny: the arrow stops once then slips four times. Move if it will slip onto you.",d:{normal:["Fetid Fang|Tankbuster.","Scrutiny|Three safe spots.","Luminous Ray|Line on a player.","Inscrutability|Raidwide plus bleed.","Second Unknown|Must also die; line stack."]}},
 {n:"Kyklops",key:"Terrible Hammer/Blade: the first tile image detonates first.",d:{normal:["The Final Verse|Raidwide.","2,000-mina Swing / Swipe|Circle; frontal.","Terrible Hammer / Blade|Tile combo.","Eye of the Cyclone|Melee range only safe.","Raging Glower|Line.","Open Hearth / Wanderer's Pyre|Stack; spreads."]}},
 {n:"Rukshs Dheem",key:"Stand on rippling vents or adds spawn and make the boss invulnerable.",d:{normal:["Bonebreaker|Tankbuster.","Seabed Ceremony|Raidwide; Dropsy puddle.","Depth Grip|Hands slam in summon order.","Falling Water|Two big circles.","Unnatural Ripples|Vents spawn adds."]}}
]},
{exp:"Shadowbringers",type:"Dungeon",inst:"The Heroes' Gauntlet",lv:80,il:"Drops i475",rl:["High-level Dungeons"],patch:"5.3",bosses:[
 {n:"Spectral Thief",key:"Shadowdash: note both marked spots before he moves.",d:{normal:["Spectral Dream|Tankbuster.","Chicken Knife|Corner lines at players.","Dash / Shadowdash|Teleport circles or lines.","Spectral Whirlwind|Raidwide.","Spectral Gust|Spreads."]}},
 {n:"Spectral Necromancer",key:"Walking zombies set up Necroburst; keep moving away from them.",d:{normal:["Twisted Touch|Tankbuster.","Chaos Storm|Raidwide.","Absolute Dark II|Cone with Doom; cleanse.","Necromancy|Tethered zombies.","Pain Mire / Dark Deluge|Big circles leaving bleed puddles; spreads."]}},
 {n:"Spectral Berserker",sub:"Distant Ideal",key:"Wild Rampage: stand in the crater, then leave as soon as it ends.",d:{normal:["Beastly Fury|Raidwide; edge bleed puddles.","Wild Anguish|Stack.","Raging Slice|Line series.","Wild Rage|Lethal circle leaving a crater.","Falling Rock|Stack with the rocks, not each other."]}}
]},
{exp:"Shadowbringers",type:"Dungeon",inst:"Matoya's Relict",lv:80,il:"Drops i485",rl:["High-level Dungeons"],patch:"5.4",bosses:[
 {n:"Mudman",key:"Peat Pelt: line up so your mud ball rolls through you into a corner drain.",d:{normal:["Petrified Peat|Spreads leave mud balls.","Peat Pelt|Tethered balls; send to drains, never at a mudman.","Hard Rock|Tankbuster.","Brittle Breccia|270° frontal in three waves.","Falling Rock|Stack."]}},
 {n:"Nixie",key:"Get onto the cloud before Sea Shanty.",d:{normal:["Smash-Crash|Cleave buster with plus tethers.","Shower Power|Stand in the lane without a glowing pipe.","Singing in the Rain|Ride a spout to the cloud; kill adds.","Sea Shanty|Kills anyone off the cloud."]}},
 {n:"Mother Porxie",sub:"Porcine Porcelain",key:"Barbecue: keep walking away from the front death zone.",d:{normal:["Tender Loin|Raidwide.","Huff and Puff|Gust pushes you into the donut's safe zone.","Barbecue|Pull toward a lethal front.","Hidden Huff and Puff|Kill the sprite to reveal the wind.","Meat Mallet / Minced Meat|Proximity; tankbuster."]}}
]},
{exp:"Shadowbringers",type:"Dungeon",inst:"Paglth'an",lv:80,il:"Drops i505",rl:["High-level Dungeons"],patch:"5.5",bosses:[
 {n:"Amhuluk",key:"Lightning Bolt: pass your circle onto a lamppost without one.",d:{normal:["Critical Rip|Tankbuster.","Lightning Bolt|Circles on players and lampposts.","Thundercall|Edge orbs pulse.","Electric Burst|Raidwide.","Wide Blaster / Spike Flail|Front then rear cone."]}},
 {n:"Magitek Fortress",key:"Defensive Reaction only fires while the Core is being attacked.",d:{normal:["Cannon blasts|Charging cannons fire lines.","Magitek Claw|Predators jump at their target.","Magitek Missile|Big circle on a player.","Defensive Reaction|Raidwide during Core phases.","Missiles / Ballistic|Lanes and centre knockback."]}},
 {n:"Lunar Bahamut",sub:"Telotherium",key:"Megaflare Dive: stand in the gaps left by the Twisted Scream nails.",d:{normal:["Twisted Scream|Raidwide plus nails exploding in order.","Perigean Breath|Cone at a player.","Akh Morn|Four-hit stack.","Megaflare|Spreads then a second circle.","Megaflare Dive|Line dive with knockback.","Lunar Flare|Shrinking circles: four edge spots or centre."]}}
]},
{exp:"Shadowbringers",type:"Trial",inst:"The Dancing Plague",lv:75,il:"Extreme: i430",rl:["Trials"],patch:"5.0",bosses:[
 {n:"Titania",key:"Kill the adds fast: Titania's Power sets how hard Being Mortal hits.",d:{normal:["Divination Rune|Cone buster.","Bright Sabbath|Raidwide.","Phantom Rune|Stack under her or spread.","Water Rune → Flame Rune|One player per puddle; then stack in a puddle.","Growth Rune|Roots along the star direction.","Frost / Mist Rune|Circles in order; spreads.","Adds|Puck and Peaseblossom on separate tanks; avoid the blue centre.","Being Mortal|Scales with the Power gauge."],extreme:["Divination Rune|Cone buster away from group.","Phantom Rune|Open wings = circle (run away); spinning staff = donut (go under).","Mist Rune|Fill all eight towers.","Flame Rune|Healer stacks in separate puddles.","Chain of Brambles|Support–DPS tethers; break quickly.","Thunder Rune|Pass the tether; a second hit kills.","Frost Rune + Uplift|Last circle, then centre; spreads.","Adds|Mustardseed first, then Puck, then Peaseblossom; keep apart."]}}
]},
{exp:"Shadowbringers",type:"Trial",inst:"The Crown of the Immaculate",lv:79,il:"Extreme: i430",rl:["Trials"],patch:"5.0",bosses:[
 {n:"Innocence",key:"Starbirth orbs explode when hit by his abilities. Use Light Pillar to clear them safely.",d:{normal:["Heavenly Host|Adds; raidwides; weak buster.","Day Break|Circles under DPS.","Sinsphere + Enthrall|Soak each meteor; avoid the gaze.","Guiding Light|Buffs adds; kill them.","Exalted Wing|Repeated raidwides; phase change.","Winged / Rightful Reprobation|Sword lines.","Flaming Sword|Kill tethered Shames before sacrifice; meter at 100 wipes."],extreme:["Righteous Bolt|Lightning buster; swap.","Light Pillar|Line stack.","Winged Reprobation (Duel Descent)|Tethered run to the far edge without crossing the centre.","Rightful Reprobation|Sweep then return.","Drop of Light|Two spreads.","Soul and Body|Curved rotating lines.","Adds|Keep the two Venery apart; kill Shame first.","Starbirth / Beatific Vision / God Ray|Uncovered section; proximity line (go to edge); cones then waves."]}}
]},
{exp:"Shadowbringers",type:"Trial",inst:"The Dying Gasp / Hades's Elegy",lv:80,il:"Extreme: i450",rl:["Trials"],patch:"5.0",bosses:[
 {n:"Hades",key:"Captivity traps players in gaols. Destroy them before Chorus of the Lost.",d:{normal:["Ravenous Assault|Tankbuster.","Bad Faith|Wall fires spikes north and south.","Dark Eruption|Five players spread (Doubled adds a second).","Shadowspread|Floor cones.","Broken Faith|Blue circles explode wider than shown.","Adds|Five waves; keep Fervor below 100.","Shadowstream|Untelegraphed centre column; go east/west.","Captivity|Free trapped players."],extreme:["Shadow Spread|Clock-spot cones, then move between.","Bad Faith|Safe quadrant then adjacent.","Ravenous Assault|Double buster; swap.","Arcane Utterance|Red orbs: empty section; blue squares: opposite edge.","Comet towers|Tanks north/south.","Dark Flame|Ascian tethers; keep Igeyorhm and Lahabrea apart.","Universal Manipulation|Role debuffs; face out; heal tanks/healers to clear Doom.","Captivity / Bident / Dark Current|Marked healer to the far edge; lanes; moving AoEs."]}}
]},
{exp:"Shadowbringers",type:"Trial",inst:"Cinder Drift",lv:80,il:"Normal: i455 · Extreme: i470",rl:["Trials"],patch:"5.2",bosses:[
 {n:"The Ruby Weapon",key:"Liquefaction turns the floor to quicksand. Stand on the cracks.",d:{normal:["Stamp|Tankbuster.","Optimized Ultima|Raidwide.","Ravensclaw|Cracks with end AoEs.","Undermine|All cracks explode.","Liquefaction|Quicksand; stand on cracks.","Ruby Ray|Huge charge line.","Helioclaw|Fan of travelling circles.","Ruby Dynamics|Donut; get in the hitbox."],extreme:["Stamp|Blunt Resistance Down; swap.","Helicoclaw|Stand in the big gaps, then move in.","Undermine / Liquefaction|Two per quadrant; or separate tunnel tips.","Ravensflight|Arrow sequence; swap icon flips safe floor.","Ruby Dynamics / Cut and Run|Healer stacks then wall spreads.","Negative Personae|Attack the image opposite your debuff.","Meteor Mine|Place in order; hide behind the eighth.","Optimized Ultima|Ends rotations; enrage."]}}
]},
{exp:"Shadowbringers",type:"Trial",inst:"Memoria Misera (Extreme)",lv:80,il:"i470",rl:[],patch:"5.25",bosses:[
 {n:"Varis yae Galvus",key:"Altius: everyone agrees one facing so the Terminus Est crosses align.",d:{extreme:["Altius|Raidwide plus crosses aimed where you face.","Alea Iacta Est|Four frontal swings then a reverse fifth.","Citius|Shared 90° buster.","Festina Lente|Two healer stacks.","Ignis Est / Ventus Est|Centre circle or donut with a line.","Electrified Gunshield|Knockback.","Reinforced Gunshield|Don't hit shielded sides.","Loaded Gunshield / Fortius|Fire spreads; rotating cones with puddles."]}}
]},
{exp:"Shadowbringers",type:"Trial",inst:"The Seat of Sacrifice",lv:80,il:"Extreme: i480",rl:["Trials"],patch:"5.3",bosses:[
 {n:"Warrior of Light",key:"Only use a DPS Limit Break while he's casting, or Hallowed Ground makes him invulnerable.",d:{normal:["Terror Unleashed|HP to 1 with Walking Dead; heal everyone to full.","Solemn Confiteor|Four circles.","Coruscant Saber|Rings round the sword = stand in centre; none = out.","Absolute Fire III / Blizzard III|Pause = stop; play = keep moving.","Imbued spells|Hidden element added to the next attack.","Sword of Light|Triangle interior lethal.","Ascendance|Button-mash minigame; everyone must succeed."],extreme:["Terror Unleashed|Heal everyone to full in 12s.","LB3 Meteor|Pair supports with DPS in corners.","LB1 Braver|Role cone stacks on different sides.","Sword of Light + Absolute Holy|One safe edge.","Imbued Saber|Stone spread, Holy stack, Fire still, Blizzard move.","Absolute Flash|Don't look at the marked player.","Specters|Warrior/DK apart, interrupt Berserk, take towers.","Ultimate Crossover|Tank LB3 only."]}}
]},
{exp:"Shadowbringers",type:"Trial",inst:"Castrum Marinum",lv:80,il:"Extreme: i500",rl:["Trials"],patch:"5.4",bosses:[
 {n:"The Emerald Weapon",key:"Legio Phantasmatis: find the gap in each soldier line in order.",d:{normal:["Emerald Shot|Tankbuster.","Emerald Beam|Rotating cones and rings; arena shrinks.","Magitek Magnetism|Find unaffected mines.","Optimized Ultima|Raidwide.","Sidescathe|Half arena.","Drop-Down|Knockback circle.","Primus Terminus Est|Knockback columns.","Legio Phantasmatis|Black Wolf add; soldier lanes."],extreme:["Aetheroplasm Production|Pairs pop one blue and one yellow each.","Emerald Beam|Rotate, dodge waves, avoid the rim.","Magitek Magnetism|Gap between matching-polarity mines.","Bit Storm / Photon Ring|Under the boss, then out.","Divide Et Impera|Shared buster plus spreads.","Primus / Tertius Terminus Est|Arrows flush to wall; sword sets.","Mechanized Maneuver|Numbered airships; shift lanes."]}}
]},
{exp:"Shadowbringers",type:"Trial",inst:"The Cloud Deck",lv:80,il:"Extreme: i510",rl:["Trials"],patch:"5.5",bosses:[
 {n:"The Diamond Weapon",key:"Adamant Purge: a hit is a KO. Teleport to the other ship.",d:{normal:["Diamond Rain|Raidwide.","Adamant Purge|Glowing hand side lethal.","Diamond Flash|Line stack.","Auri Cyclone|Knockback circle on one ship.","Airship's Bane|Destroys a ship.","Auri Arts|Zig-zag spheres.","Diamond Shrapnel|Chasing blasts on two players.","Adamant Sphere|One soaker per sphere."],extreme:["Diamond Rain|Light parties on opposite platforms; ≤5 stacks.","Adamant Purge|Claw side's party teleports.","Homing Laser / Diamond Flash|Spreads; line stack.","Photon Burst|Tank flares far away.","Code Chi-Xi-Stigma|Fist uppercuts across or to far edge; one platform destroyed.","Auri Arts|Zig-zag and slam knockbacks.","Flood Ray|Numbered cones; odds blue, evens red.","Diamond Shrapnel / Adamant Sphere|Chasers then towers."]}}
]},
{exp:"Shadowbringers",type:"Raid",inst:"Eden's Gate (E1–E4)",lv:80,il:"Normal: i425 · Savage: i440–450",rl:["Normal Raids"],patch:"5.0",bosses:[
 {n:"Eden Prime",sub:"E1",key:"Pure Light: get behind Eden the moment it teleports. Never touch the edge.",d:{normal:["Spear of Paradise|Two-hit buster.","Eden's Gravity|Raidwide.","Vice & Virtue|Orb markers leave darkness puddles.","Eden's Flare|Donut; go into the hitbox.","Pure Light|Corner frontal blast.","Delta Attack|Point-blank, plus lines and spreads.","Dimensional Shift / Pure Beam|Orb lines."],savage:["Eden's Gravity|70% HP raidwide.","Spear of Paradise|Swap or invuln.","Vice and Virtue|DPS landmines, tank line busters, healer bleeds passed to tanks.","Delta Attack|Pair up toward diagonal edges.","Paradise Lost|Four farthest kite homing AoEs.","Pure Beam|Beside an orb aimed outward.","Guardians of Paradise|Split, face away, interrupt; kill within 50s.","Paradise Regained|Reverses Vice and Virtue and Delta. Enrage ~10:00."]}},
 {n:"Voidwalker",sub:"E2",key:"Nyx demons follow fixed paths after every Guillotine and Slicer.",d:{normal:["Doomvoid Guillotine|Front/back line.","Doomvoid Slicer|Donut; get in.","Nyx|Avoid their paths.","Shadowflame|Both tanks.","Dark Fire III / Unholy Darkness|Spreads; stack.","Shadow Eye|Turn away from the marked player."],savage:["Entropy / Shadowflame|Raidwide; double buster.","Doomvoid Cleaver|Spread cones spawn Nyx.","Spell-in-Waiting|Stored casts fire on timers.","Hell Wind|Two DPS at 1 HP; avoid all damage.","Punishing Ray|Eight towers.","Equilibrium|Light/dark ring pairs.","Enrage|After the fifth Quietus."]}},
 {n:"Leviathan",sub:"E3",key:"Undersea Quake destroys the east and west sides.",d:{normal:["Tidal Roar|Raidwide.","Rip Current|Tank line; aim away.","Temporary Current|Diagonal half; alternates.","Tidal Wave|Knockback; move toward the spout.","Undersea Quake|Stand centre.","Tsunami|Debuffs; resolve in order.","Maelstrom|Puddles and portal dives."],savage:["Rip Current|Two line busters; swap.","Tidal Wave + Undersea Quake|Light parties by the nearer head.","Temporary Current|Cardinal edge, step aside; P2 run to the opposite corner.","Drenching Pulse / Freak Wave|Stack centre; spreads leave puddles.","Maelstrom|Quadrant avoiding first two portals.","Tsunami|Splashing, Sundering, Swirling, Smothering… in expiry order.","Stormy Horizon / Black Smokers|Move together; flare tank opposite; towers alternate."]}},
 {n:"Titan",sub:"E4",key:"Seismic Wave: hide behind the last boulder.",d:{normal:["Voice of the Land|Raidwide.","Evil Earth / Weight of the Land|Chain explosions; move onto exploded tiles.","Stonecrusher|Buster with splash.","Seismic Wave|Line-of-sight behind a boulder.","Geocrush|Knockback from the landing.","Titan Fists / Wheels|Front tiles then sides; charge line.","Bomb Boulders / Cobalt Bomb|Explode in order."],savage:["Stonecrusher|Three busters; swap twice or invuln.","Weight of the Land / Evil Earth|Aftershock chains.","Pulse of the Land / Force of the Land|Yellow spreads on separate tiles; orange stacks of 2+.","Geocrush|Knockback then wheels or gauntlets.","Fault Line / Magnitude 5.0|Charge then donut.","Granite Gaols|Healers 30y apart; ranged LB.","Rotating Fury|Centre tiles that go second and third are safe. Enrage ~13:30."]}}
]},
{exp:"Shadowbringers",type:"Raid",inst:"Eden's Verse (E5–E8)",lv:80,il:"Normal: i455 · Savage: i470–480",rl:["Normal Raids"],patch:"5.2",bosses:[
 {n:"Ramuh",sub:"E5",key:"Fury's Bolt: everyone needs one Surge Protection stack for the next Judgement Volts.",d:{normal:["Crippling Blow|Tankbuster.","Stratospear Summons|Go to the shorter rod's side.","Stormcloud Summons|Drop clouds far apart.","Fury's Bolt / Judgement Volts|Need Surge Protection.","Tribunal Summons|Charge knockback; Ixion lanes.","Thunderstorm|Keep moving."],savage:["Judgement Volts|Leaves Surge orbs; one each.","Executor Summons|Chaser hunts the most-stacked player.","Stormcloud Summons|Hated of Levin cleansed by clouds.","Tribunal Summons|Solid line if buffed, dotted if not.","Stepped Leader|Move off, or stay still under Fury's Bolt.","Chain Lightning|Pass without receiving twice."]}},
 {n:"Garuda & Ifrit",sub:"E6 · Raktapaksa",key:"Vacuum Slice line is lethal. Stay on your side.",d:{normal:["Ferostorm|Blade cones.","Superstorm|Raidwide.","Aerial stacks|One unmarked player in each blue circle.","Vacuum Slice|Lethal line.","Hands of Hell|Pass tethers.","Instant Incineration|Tankbuster."],savage:["Storm of Fury|DPS tether cones redirected by Wind Cutter.","Air Bump|Support+DPS pairs.","Vacuum Slice + Occluded Front|Light parties per half.","Hands of Flame / Incineration / Meteor Strike|Swap; tank moves for Meteor.","Hands of Hell|Ranged/healers take tethers.","Strike Spark|Trace the fireball chain to the one safe spot.","Irons of Purgatory|Partner tethers within 10y."]}},
 {n:"The Idol of Darkness",sub:"E7",key:"Words of Night: stand in a lane hit by the opposite colour to your aspect.",d:{normal:["Empty Wave|Raidwide.","Unshadowed Stake|Tank line.","Words of Motion|Bird lanes in order.","Away With Thee|Teleport; aim your marker.","Unjoined Aspect / Words of Night|Opposite colour lane.","Idolatry|Kill both adds in time.","Black Smoke|Meteor towers."],savage:["Unshadowed Stake|Line plus delayed charge.","Words of Motion + Voidgates|Portal order repeats.","Betwixt Worlds|Crystal walls lethal.","Away with Thee|Face to land on the planned spot.","False Moonlight / Midnight|Stack then puddles on edges.","Idolatry & Blasphemy|Kill both within ~8s; interrupt Advent of Light.","Words of Unity / Fervor|Astral/Umbral swarms and orbs. Enrage 11:30."]}},
 {n:"Shiva",sub:"E8",key:"Mirror, Mirror copies her next frost cone in Blue → Green → Red order.",d:{normal:["Absolute Zero|Raidwide.","Redress|Look away (ice form); Thin Ice (holy form).","Axe Kick / Scythe Kick|Away; into the hitbox.","Biting / Driving Frost|Front or rear cones.","Heavenly Strike|Knockback with no rails.","Mirror, Mirror|Copies.","Frigid Eruption|Following AoEs."],savage:["Mirror, Mirror|Between same-colour mirrors.","Driving / Biting Frost|Untelegraphed.","Diamond Frost|Freezing debuffs, Frigid Stone, knockback.","Light Rampant|Lightsteeped stacks; Bright Orbs; towers.","Shattered World|Two platforms; interrupt, stun, intercept tethers.","Akh Morn / Wyrm's Lament|Split with one tank each; cleanse Wyrmclaw in order.","Icelit Dragonsong|Keep Lightsteeped ≤3; clock spread for the House of Light."]}}
]},
{exp:"Shadowbringers",type:"Raid",inst:"Eden's Promise (E9–E12)",lv:80,il:"Normal: i485 · Savage: i500–510",rl:["Normal Raids"],patch:"5.4",bosses:[
 {n:"Cloud of Darkness",sub:"E9",key:"The Art of Darkness telegraph is very short. Watch her hands.",d:{normal:["Ground-razing Particle Beam|Raidwide.","The Art of Darkness|Half cleave.","Zero-form Particle Beam|Tank beam.","Particle Concentration|Four columns, one each.","Flood of Emptiness|Corners and under her lethal.","Hypercharged Condensation|Kill clouds.","Anti-air Particle Beam|Ghost beams plus point-blank."],savage:["Art of Darkness|All tentacles = partner stacks; body glows = spread; one side = cone.","Devouring Dark|Line buster; swap.","Obscure Woods|Paired puddles; break vines through the boss.","Anti-Air / Wide-Angle Phaser|Light parties in corners.","Empty Plane|Never share a tile; keep moving.","Full-perimeter Particle Beam|Cardinal clouds then donut.","Enrage|~10:00."]}},
 {n:"Shadowkeeper",sub:"E10",key:"Read the shadow tail: the boss faces away from it.",d:{normal:["Forward / Backward Implosion|Opposite side.","Shadow Implosion|Read the tail.","Deepshadow Nova|Raidwide.","Shadow Warrior|Behind the tethered clone's landing.","Fade to Shadow|Quadrant explodes.","Giga Slash|Opposite side.","Voidgate|Two per zone."],savage:["Implosion / Giga Slash|Same direction type through the chain.","Umbra Smash|Four busters then line or stack.","Shadow Cleave|Spread cones leave shadows; return to centre.","Dualspell|Shadow numbers say which hit to skip.","Shadow Servant|Arrange shadows to mirror Giga Slash.","Voidgate Amplifier|Pitch Bog landmines make extra shadows."]}},
 {n:"Fatebreaker",sub:"E11",key:"Red aura = fire (knockback, stacks), blue aura = lightning (wide lines, spreads).",d:{normal:["Burnt Strike|Fire: stay close; lightning: go to edge.","Bound of Faith|Stack (fire) or DoT (lightning).","Burnished Glory|Raidwide.","Powder Mark|Buster then wide AoE.","Turn of the Heavens|Between narrow circles.","Shifting Sky|Knockback, snake cone, clone strikes.","Prismatic Deception|Find the outermost copy."],savage:["Elemental Break|Clock cleaves; blue in/out, orange pairs.","Burnt Strike|Side; blue wider, orange knockback.","Bound of Faith|Blue cones; orange stack behind.","Powder Mark|Swap; debuffed tank away.","Sundered Sky|Opposite the dragon's aura.","Prismatic Deception|Check your clock clone's gunblade.","Cycle of Faith|Three rapid rotations."]}},
 {n:"Eden's Promise",sub:"E12 · Normal, and Savage door boss",key:"Crystal tethers: Leviathan = middle, Garuda = intercardinals, Ramuh = max melee, Ifrit = beside the boss.",d:{normal:["Maleficium|Raidwide.","Primal tethers|Position per primal.","Formless Judgment|Tank arrows.","Platform transitions|Step on the glowing circle.","Laser Eye / Battlefield Push|Knockbacks.","Stock and Release|Two primals combined.","Junction Shiva / Titan|Diamond Dust spread then stack; boulders."],savage:["Primal casts|Leviathan centre, Garuda intercardinals, Ramuh away, Ifrit sides.","Formless Judgment|Two-hit buster; swap mid-cast.","Diamond Dust / Ice Pillar|Spread so pillars don't overlap.","Bomb Boulders|Three rounds by marker colour.","Stock vs Cast|Banked attacks fire later."]}},
 {n:"Oracle of Darkness",sub:"E12 Savage final boss · Savage only",key:"Relativity: resolve debuffs by timer; work backward from the last.",d:{savage:["Shockwave Pulsar|Heavy raidwide.","Dark Water III / Dark Eruption|Light-party stacks or clock spreads.","Darkest Dance|Tank baits far; party in the hitbox.","Basic / Intermediate / Advanced Relativity|Hourglass orientation; Return debuffs.","Apocalypse|Beams sweep; find intersections.","Black Halo|Double frontal buster.","Terminal Relativity|Quietus plus three Pulsars; enrage Memory's End."]}}
]},
{exp:"Shadowbringers",type:"Alliance Raid",inst:"The Copied Factory",lv:80,il:"i435 · 24 players",rl:["Alliance Raids"],patch:"5.1",bosses:[
 {n:"Serial-jointed Command Model",key:"Sidestriking: stand directly in front of or behind it.",d:{normal:["Clanging Blow|Tankbuster.","Energy Assault|Lingering cone.","Systematic Targeting|Keep moving for lasers.","Sidestriking / Centrifugal Spin|Front or back safe.","Shockwave|Knockback."]}},
 {n:"Hobbes",key:"Each alliance platform has its own hazard: lightning grating (A), conveyor (B), oil vents (C).",d:{normal:["Left Arm|Crate panels; hold one tether max.","Right Arm|Blade cones and a syringe ring.","Ring Laser|Centre or already-hit sections.","Laser Sight|Alliance line stacks.","Short-range Missile|Spreads."]}},
 {n:"Engels",key:"Kill all adds before Charge hits 100, and destroy both Marx arms before they meet.",d:{normal:["Marx Smash|Arm pose shows the safe area.","Precision Guided Missile|Three tank busters.","Incendiary Bombing|Napalm puddles.","Guided Missile|Lure away.","Adds|Goliaths per alliance.","Marx Crush|Destroy the arms."]}},
 {n:"9S-operated Walking Fortress",key:"Total Annihilation Maneuver: kill the three Service Models before 9S finishes hacking.",d:{normal:["Neutralization|Tankbuster.","Laser Turret|Line.","Fore-hind / Dual-flank Cannons|Sides, then front/back.","Ballistic Impact|Six spreads.","Bombing Run|Edge 2P indicates.","Total Annihilation Maneuver|Kill adds."]}}
]},
{exp:"Shadowbringers",type:"Alliance Raid",inst:"The Puppets' Bunker",lv:80,il:"i465 · 24 players",rl:["Alliance Raids"],patch:"5.3",bosses:[
 {n:"813P-operated Aegis Unit",key:"Life's Last Song: rings expand to the edge; falling off kills.",d:{normal:["Anti-personnel Laser|AoE buster.","Beam Cannons|Narrowing cones; edges or melee.","Collider Cannons|Rotating cones stop then fire.","Surface Laser|Lingering AoE on a player.","Bombardment|Each alliance kills its Flight Unit."]}},
 {n:"Superior Flight Units",sub:"A-lpha, B-eta, C-hi",key:"Shield Protocol: damage your own alliance's unit.",d:{normal:["Apply Shield Protocol|Matching debuff required.","Missile Command|Hits once per surviving unit.","Incendiary Bombing|Fire puddles.","High-powered Laser|Alliance line stack; never two.","Sharp Turn|Right grip = middle, left grip = edges.","Sliding Swipe|Follow the arrow to the safe side."]}},
 {n:"905P-operated Heavy Artillery Unit",key:"Impact Crusher's final ring: only melee range is safe.",d:{normal:["Volt Array|Raidwide.","Laser Turret|Bottom lingering cone, top staggered cone.","Unconventional Voltage|Four cones; spread.","Impact Crusher / Revolving Laser|Melee range.","Pod Program|R010 lines, R030 circles.","Synthesize Compound|Three-plus per tower."]}},
 {n:"The Compound",sub:"4C6F6E67696E67",key:"Mechanical Decapitation: only its hitbox is safe.",d:{normal:["Mechanical Laceration|Raidwide.","Mechanical Dissection|Rotating laser.","Mechanical Decapitation|Ring; get in.","Mechanical Contusion|Spreads and ground circles.","Copies|Edge copies fire then rush."]}},
 {n:"Compound 2P",key:"Prime Blade: sword in ground = hitbox; overhead = behind; side = out.",d:{normal:["Centrifugal Slice|Raidwide.","Prime Blade|Read the sword.","Relentless Spiral|Circles under players.","Forced Transport|Sparks show the destination.","Three Parts Disdain|Triple stack with knockback.","Reproduce|Clones mimic Prime Blade."]}}
]},
{exp:"Shadowbringers",type:"Alliance Raid",inst:"The Tower at Paradigm's Breach",lv:80,il:"i495 · 24 players",rl:["Alliance Raids"],patch:"5.5",bosses:[
 {n:"Knave of Hearts",key:"Colossal Impact: open hands = centre line, fists = both side lines.",d:{normal:["Roar|Raidwide.","Colossal Impact|Read the hands.","Replicate / Stacking the Deck|Real boss goes first.","Magic Artillery Alpha|Lines; step in after the first.","Light Leap / Lunge|Knockback into the white boxes."]}},
 {n:"Hansel & Gretel",key:"The shielded boss can only be hit from the front. Keep them apart.",d:{normal:["Upgraded Shield / Lance|Shield and damage buff.","Wail / Crippling Blow|Raidwide; buster.","Bloody Sweep|Halberds inside = far spot; outside = edge between.","Seed / Riot of Magic|Spreads and stack.","Passing Lance|Gap in the fireball line.","Hungry Lance / Breakthrough|Cones; avoid centre and marked side."]}},
 {n:"Red Girl",key:"Barriers: stand behind the barrier opposite your AoE colour.",d:{normal:["Cruelty|Raidwide; edge kill zones.","Shockwave / Generate Barrier|White or black markers.","Recreate Meteor|Matching barrier between you and the meteor.","Child's Play|Rotate with one small girl.","Hacking minigame|Destroy pylons, then the sphere."]}},
 {n:"Xun-Zi & Meng-Zi",key:"Red = centre line, yellow = side lines.",d:{normal:["Deploy Armaments (red)|Go to the sides.","Deploy Armaments (yellow)|Go to the centre.","Sequencing|Both cast in sequence."]}},
 {n:"False Idol",key:"Made Magic: the red wheel spins toward one side. Go opposite.",d:{normal:["Screaming Score|Raidwide.","Made Magic|Opposite side.","Lighter Note|Arrow AoEs away from the group.","Rhythm Rings / Seeds of Magic|Bullets, beams, puddles.","Darker Note|Tank markers."]}},
 {n:"Her Inflorescence",key:"Mixed Signals: stand on a red signal.",d:{normal:["Recreate Structure|Rising buildings knock off.","Recreate Signal|Trains; red signal safe.","Heavy Arms|Middle for pillars, sides for a hug.","Distortion / Final Song|Match your colour half to the ring.","Pillar Impact / Towerfall|Knocked to the second pillar."]}}
]},
{exp:"Shadowbringers",type:"Ultimate",inst:"The Epic of Alexander (Ultimate)",lv:80,il:"Synced i475",rl:[],patch:"5.11",note:"Condensed phase overview. Use a full guide and an agreed strat for progression.",bosses:[
 {n:"Living Liquid",sub:"Phase 1",key:"Keep the boss and Liquid Hand within 4% HP of each other.",d:{ultimate:["Cascade|Liquid Rage puddles give lethal Dropsy.","Hand of Prayer / Parting|Boss and Hand together or apart by the Hand's shape.","Hand of Pain|HP difference over 4% wipes.","Jagd Dolls|Feed at ≤25% HP; not too many at once."]}},
 {n:"Brute Justice & Cruise Chaser",sub:"Phase 2",key:"Judgment Nisi must be passed between the right partners.",d:{ultimate:["Judgment Nisi|Pass the matching colour.","Link-up|Compressed Water and Lightning; tornado and Propeller Wind line-of-sight.","Verdict / Gavel|Required Nisi colour per player.","Kill together|Keep HP close."]}},
 {n:"Alexander Prime",sub:"Phase 3",key:"Inception's True Heart gives the Enigma Codex needed in Phase 4.",d:{ultimate:["Temporal Stasis|House Arrest, Restraining Order, Aggravated Assault.","Inception|Plasmaspheres, Judgment Crystals, True Heart.","Wormhole|Limit cut, chakrams, Void of Repentance.","Summon Alexander|Kill CC and BJ fast, then Alexander."]}},
 {n:"Perfect Alexander",sub:"Phase 4",key:"Fate Calibration: your clone shows where to stand.",d:{ultimate:["The Final Word|Contact and Escape debuffs.","Ordained Motion / Stillness|Move or freeze completely.","Fate Calibration α / β|Clones preview mechanics.","Almighty Judgment|Memorise and dodge.","Temporal Prison|Enrage; caged in order."]}}
]},
{exp:"Shadowbringers",type:"Exploration",inst:"The Bozjan Southern Front",lv:80,il:"Synced i430",rl:[],patch:"5.35",note:"Critical Engagements. CE cards are condensed from Rhigitar's guide; duel cards from The Phookas. Avoidable hits add Vulnerability Up; finish a CE with no stacks and no deaths to qualify for the following duel.",bosses:[
 {n:"Akbaba",sub:"CE · The Shadow of Death's Hand · Zone 1",key:"Kill the Beastmaster first (he heals); all the danger comes from the bird.",d:{normal:["Beastmaster|Heals the bird; kill first.","Hard Beak|Tankbuster.","Broadside Barrage|Huge column in the bird's facing direction; stand behind it.","North / East / South / West Wind|Knockback from the named side; go to that side (or use knockback prevention).","Whirlwind|Lingers after the winds; don't touch it.","Notes|Rewards Field Notes 03.","Spawn|Spawns from killing 4th Legion Roaders (III).","Video|Rhigitar — Each Critical Engagement in the Bozja Front explained (youtube.com/watch?v=3wTwOYiMQyg). Auto-captions; some names may be off."]}},
 {n:"Canis Dirus",sub:"CE · The Baying of the Hound(s) · Zone 1",key:"Lava Spit fireballs zip in the direction they spin: never stand in front of one.",d:{normal:["Hell's Claw|Tankbuster.","Void Tornado|From the centre; drops HP to single digits. Stand as far from the centre as possible.","Lava Spit|Up to six fireballs, three at a time; first three go first.","Hell Pounce|Jumps to one side, then always across to the opposite side.","Dragon's Breath / Lion's Breath|Thunder on both sides, or fire down the middle; read the heads.","Notes|Three-headed hound.","Spawn|Spawns from killing 4th Legion Death Claws (III).","Video|Rhigitar — Each Critical Engagement in the Bozja Front explained (youtube.com/watch?v=3wTwOYiMQyg). Auto-captions; some names may be off."]}},
 {n:"Peerifool",sub:"CE · Kill It with Fire · Zone 1",key:"Dead Leaves: stand in a coloured quadrant, then swap to the other colour each time it repeats. Never red.",d:{normal:["Budbutt|Tankbuster.","Dead Leaves|Quadrants give a colour debuff; switch colour every time. Red is lethal.","Harvest Festival|Three Rotten Mandragoras at the edge throw hearts inward; dodge them, they explode on contact.","Notes|Rotten Mandragora and Pheromone adds. Rewards Field Notes 13.","Spawn|Spawns from 4th Legion Nimrods (II) after the skirmish All Pets Are Off.","Video|Rhigitar — Each Critical Engagement in the Bozja Front explained (youtube.com/watch?v=3wTwOYiMQyg). Auto-captions; some names may be off."]}},
 {n:"Vigilia",sub:"CE · Vigil for the Lost · Zone 1",key:"Tail Missile covers almost everything except a crescent at the side; plenty of time to get there.",d:{normal:["Crippling Blow|Tankbuster.","Towers|Need at least one player each.","AoE spam|Lots of ground AoEs; keep dodging.","Tail Missile|Move to the crescent-shaped safe area.","Duel unlock|No hits from dodgeable mechanics to be eligible for Gabriel.","Notes|Clear without stacks to open the Gabriel duel.","Spawn|Spawns from 4th Legion Slashers (I) after More Machine Now than Man.","Video|Rhigitar — Each Critical Engagement in the Bozja Front explained (youtube.com/watch?v=3wTwOYiMQyg). Auto-captions; some names may be off."]}},
 {n:"Gabriel",sub:"Duel · Aces High · Zone 1",key:"Easy with a buffed Lost Flare Star: keep running from the puddles and let it tick.",d:{normal:["Prep|Two holster sets: one of out-of-combat buffs (potions, Reraiser etc.) applied early, then a damage set ending on Lost Excellence + Lost Flare Star. Potion and ether kits share a 30s cooldown. Stacked buffs make Flare Star tick ~400k.","Opening cast|Spawns AoE puddles that follow you; keep moving.","Defensives|Not needed if your damage holster is set up; he dies quickly.","Notes|Opened by Vigil for the Lost. Rewards Field Notes 12 and grants nearby players Double Mettle for 60 minutes.","Video|The Phookas — FFXIV Bozja Duel Guide (youtube.com/watch?v=bybzBLT7nBo)."]}},
 {n:"Spartoi",sub:"CE · The Final Furlong · Zone 2",key:"Grasping Rancor: look away from your hand until it's inside the blue circle, then look at it to freeze it there.",d:{normal:["Staff|Tankbuster.","Talon / Wings|Purple haze shows the first side hit; avoid it, then move into it. Order: side, then front/back.","Grasping Rancor|Tethered hands; look away to pull it, look at it to freeze. Freeze it in the centre blue AoE so the AoE kills it.","Unicorn|Standing in the unicorn's small blue AoE gives a damage buff.","Notes|Spawns from 4th Legion Avengers (II) after Unicorn Flakes.","Video|Rhigitar — Each Critical Engagement in the Bozja Front explained (youtube.com/watch?v=3wTwOYiMQyg). Auto-captions; some names may be off."]}},
 {n:"Pyrobolus Mater",sub:"CE · The Fires of War · Zone 2",key:"Add wave CE: kill the little fireball farthest from the boss to open a safe zone.",d:{normal:["Adds|Lots of them; kill.","Fireballs|Kill the one farthest from the boss for a safe zone.","Mechanics|Stack markers, towers and telegraphed AoEs.","Notes|Spawns from 4th Legion Gunships (III). Clear waves before the enrage.","Video|Rhigitar — Each Critical Engagement in the Bozja Front explained (youtube.com/watch?v=3wTwOYiMQyg). Auto-captions; some names may be off."]}},
 {n:"Patriot",sub:"CE · Patriot Games · Zone 2",key:"Electrochemical Transfer: turrets fire when two of their lights are on (they glow briefly first).",d:{normal:["Plasma Gun|Tankbuster.","Electrochemical Transfer|Tethers to three turrets (one twice); count lights.","Lightning Rod|Three landmines go invisible then explode; have someone (ideally a tank) run over them.","Notes|Spawns after The Fires of War (also reported as spawning together, and Patriot Games is the more popular pick).","Video|Rhigitar — Each Critical Engagement in the Bozja Front explained (youtube.com/watch?v=3wTwOYiMQyg). Auto-captions; some names may be off."]}},
 {n:"Red Comet",sub:"CE · The Hunt for Red Choctober · Zone 2",key:"Choco Meteor Stream: find the rotating red zone; when the orange plus returns, move to where the red zone currently is.",d:{normal:["Choco Slash|Tankbuster.","Choco Meteor Strike|Out of the centre, back in for the side exaflares, then out to soak towers.","Choco Meteorain|Go to the red chocobo farthest from the first two drops, then hop chocobo to chocobo.","Choco Meteor Stream|Safe zones from the plus; follow the rotation.","Lost Reflect|Blocks the red meteor damage but you still get a vuln stack.","Duel unlock|No dodgeable hits to be eligible for the Lyon duel.","Notes|Spawns from 4th Legion Vanguards (I) after Red (Chocobo) Alert.","Spawn|Finish with no stacks and no deaths to unlock the Lyon duel.","Video|Rhigitar — Each Critical Engagement in the Bozja Front explained (youtube.com/watch?v=3wTwOYiMQyg). Auto-captions; some names may be off."]}},
 {n:"Lyon the Beast King",sub:"Duel · Beast of Man · Zone 2",key:"Bring Lost Dispel: swap to it once Flare Star is up and use it after his first cast.",d:{normal:["Prep|Two holster sets: one of out-of-combat buffs (potions, Reraiser etc.) applied early, then a damage set ending on Lost Excellence + Lost Flare Star. Potion and ether kits share a 30s cooldown. Stacked buffs make Flare Star tick ~400k.","Lost Dispel|Required; without it you will most likely die.","Winds' Peak|Knockback AoE.","Heart of Nature|Wait at the edge of the puddle and move in as soon as the quake starts moving.","Taste of Blood|Follows Heart of Nature; get behind him.","Twin Agonies|Tankbuster.","The King's Notice|Gaze.","Video|The Phookas — FFXIV Bozja Duel Guide (youtube.com/watch?v=bybzBLT7nBo)."]}},
 {n:"Mark XIII-X Magitek Laborer",sub:"CE · Rise of the Robots · Zone 3",key:"Order: steer your Forced March into the numbered zone that makes your HP answer his maths question.",d:{normal:["Training|Spins and fires from both ends; stand at his side, then move the way he indicated.","Order|Note your HP and your forced-march direction; aim at the numbered zone (added to HP) that answers the question. If your HP already answers it, avoid all four.","After two questions|HP resets; heal up for Incinerate (raidwide).","Loop|Training and Incinerate repeat.","Notes|Rewards Field Notes 15.","Spawn|Spawns from 4th Legion Hexadrones (I) after I'm a Mechanical Man.","Video|Rhigitar — Each Critical Engagement in the Bozja Front explained (youtube.com/watch?v=3wTwOYiMQyg). Auto-captions; some names may be off."]}},
 {n:"Eale",sub:"CE · Trampled under Hoof · Zone 3",key:"Shifting Gaze: look away from the orbs, unless the boss is also casting Demon Eye.",d:{normal:["Bull Horn|Tankbuster.","Shifting Gaze|Tethered orbs cast gazes; look away.","With Demon Eye|First take an orb's gaze from the edge on purpose to get Pall of Darkness; Demon Eye then removes it instead of petrifying you.","Adds|Golems and small guardians; kill the golems (heavy AoE).","Orbs on players|Pulse damage; move away.","Notes|Opens Where Strode the Behemoth (also reported as spawning together, and most groups pick the Behemoth).","Spawn|Spawns from 4th Legion Armoured Weapons (III).","Video|Rhigitar — Each Critical Engagement in the Bozja Front explained (youtube.com/watch?v=3wTwOYiMQyg). Auto-captions; some names may be off."]}},
 {n:"Chlevnik",sub:"CE · Where Strode the Behemoth · Zone 3",key:"Blazing Meteor: be behind a behemoth corpse when the cast ends.",d:{normal:["Wild Horn|Cleaving tankbuster; point away.","Blazing Meteor|Line-of-sight behind a corpse; checked at cast end.","Zombie Bile|Green goo revives three corpses that cone in front of them; avoid their fronts.","Zombie Breath|Lethal front cleave from the big behemoth; revives corpses.","Spawn|Spawns after Trampled under Hoof.","Video|Rhigitar — Each Critical Engagement in the Bozja Front explained (youtube.com/watch?v=3wTwOYiMQyg). Auto-captions; some names may be off."]}},
 {n:"Dáinsleif",sub:"CE · Metal Fox Chaos · Zone 3",key:"Three turret mechanics: Diffractive Laser, Laser Shower and Satellite Laser.",d:{normal:["Diffractive Laser|Turrets on three sides; cleave, then each set fires in turn. Run in the firing direction.","Laser Shower|Turrets on opposite sides in a zigzag; dodge, then move into the path once the other side fires.","Satellite Laser|Turrets on two adjacent sides fire together; find an unhit spot.","Duel unlock|No dodgeable hits to be eligible for Sartauvoir.","Notes|Clear without stacks to open the Sartauvoir duel.","Spawn|Spawns from 4th Legion Scorpions (II) after For Absent Friends and Of Steel and Flame.","Video|Rhigitar — Each Critical Engagement in the Bozja Front explained (youtube.com/watch?v=3wTwOYiMQyg). Auto-captions; some names may be off."]}},
 {n:"Sartauvoir the Inferno",sub:"Duel · And the Flames Went Higher · Zone 3",key:"Time Eruption: stand on the slowest clock (reverse: the fastest).",d:{normal:["Pyrokinesis|Room-wide damage.","Time Eruption|Clock grid. Stand on a slow clock; step into the fast ones once they go off.","Phoenix Egis|Line charge.","Thermal Gust / Grand Crossflame|Lines; centre cross.","Burning Blade|Heavy buster.","Prep|Two holster sets: one of out-of-combat buffs (potions, Reraiser etc.) applied early, then a damage set ending on Lost Excellence + Lost Flare Star. Potion and ether kits share a 30s cooldown. Stacked buffs make Flare Star tick ~400k.","Opening cast|AoE explosion; just move out.","Video|The Phookas — FFXIV Bozja Duel Guide (youtube.com/watch?v=bybzBLT7nBo)."]}}
]},
{exp:"Shadowbringers",type:"Exploration",inst:"Castrum Lacus Litore",lv:80,il:"Synced i430 · up to 48 players",rl:[],patch:"5.35",note:"Southern Front raid-style CE. Unlocks at Resistance Rank 10.",bosses:[
 {n:"Brionac & 4th Legion Helldiver",key:"Engage both at once or the raid enrages.",d:{normal:["Electric Anvil|Tankbuster.","False Thunder|Spinning arm cleave.","Magitek Core|Kill immediately.","Energy Generation|Light orb = donut (stand under), dark orb = circle (corners).","Voltstream|Rotating safe zones.","Helldiver Dive Formation / Infrared Blast|Soak rectangles in order; intercept tethers."]}},
 {n:"Albeleo the Maleficent",sub:"Miniboss",key:"Kill shielding adds first; free the prisoners.",d:{normal:["Adds|Telegraphed AoEs; green tether shields the boss.","Large-AoE adds|Stun or silence.","Prisoners|Kill each executioner quickly."]}},
 {n:"Adrammelech",key:"Only three of six orb types appear. The telegraph shows only the first time.",d:{normal:["Fire orb|Stop all actions.","Ice orb|Keep moving.","Lightning orb|Big centre AoE; edges.","Earth orb|Concentric donuts.","Wind orb|Outer donut; centre.","Water orb|Knockback; stay central.","Meteor|Kill Arcane Spheres."]}},
 {n:"Dawon",key:"Obey: memorise the +/O order before it vanishes.",d:{normal:["Molting Plumage|Orange feathers point-blank, blue donut.","Fervid / Frigid Pulse|Plus or donut in Obey order.","Summon Birds|Push feathers per quadrant.","Pentagust / Scratch|Five cones; buster.","Tamed Beetles|Kill to remove invincibility."]}},
 {n:"Lyon the Beast King",sub:"Upper arena · 8 players",key:"Get Lyon to 50%.",d:{normal:["Winds' Peak|Knockback.","Heart of Nature|Eruption then donuts.","Taste of Blood|Frontal.","Twin Agonies|Buster.","The King's Notice|Gaze."]}}
]},
{exp:"Shadowbringers",type:"Exploration",inst:"Delubrum Reginae",lv:80,il:"Synced i430 · Normal 24 players · Savage 24–48",rl:[],patch:"5.41 / Savage 5.45",note:"Savage: resurrection limited (healer LB3 and Lost Sacrifice exempt); avoidable hits give Twice-come Ruin.",bosses:[
 {n:"Trinity Seeker",key:"Verdant Path swaps the weapon; each weapon has its own set.",d:{normal:["Verdant Tempest|Raidwide.","Act of Mercy / Mercy Fourfold|Plus AoE; four katana cleaves in glow order.","Seasons of Mercy|Moon gaze, ice lines, blossom circle.","Baleful Swathe / Blade / Phantom Edge|Hide behind walls; Phantom Edge makes it a knockback.","Burning Chains|Run apart.","Iron Impact / Splitter / Dead Iron|Line stack; opposite tile ring; Earthshaker spreads."],savage:["Merciful Arc|Heavy cleave; tank faces north.","Manifest Avatar|Clones add Iron Rose lines and Baleful Firestorm charges.","Phantom Edge|Semi-random.","Enrage|~9:15 Verdant Tempest."]}},
 {n:"Dahu",key:"Head Down adds run the outer edge. The centre is safe.",d:{normal:["Left / Right-sided Shockwave|Half point-blank, named side first.","Feral Howl|Knockback and stun.","Firebreathe|Cone, rotating five times.","Head Down / Hunter's Claw|Edge dashes; point-blank with a howl.","Falling Rocks|Five sets of three.","Charge / Tail Swing|Two charges; small point-blank."],savage:["Reverberating Roar|AoEs under three players, three times, no castbar.","Hysteric Assault|Knockback and stagger.","Spit Flame / Burn|Marked players hit edge adds.","Stygimoloch Warrior duel|Optional; start before Dahu dies."]}},
 {n:"Queen's Guard",key:"Coat of Arms: only hit wards from unprotected sides.",d:{normal:["Blood and Bone / Rapid Sever|Raidwide; buster.","Pawn Off|Track a safe Soldier clone.","Sword / Shield Omen|Point-blank at range; donut close.","Bombslinger / Above Board|Heavy bomb (light if Reversal of Forces).","Coat of Arms|Ward counter-attacks."],savage:["Pairs|All four to 80%, then Knight & Warrior, then Gunner & Soldier; killing one enrages its partner.","Wards|Destroy within 60s."]}},
 {n:"Bozjan Phantom",key:"Circle shape: stand in the donut's front half.",d:{normal:["Weave / Manipulate Miasma|Moving donuts and lines.","Summon|Edge add knockback that can't be prevented.","Vile Wave|Big cone.","Malediction of Agony / Excruciation|Raidwide; buster."],savage:["Adds|Kill Bloody Wraiths, heal Misty Wraiths to full.","Vile Wave|No telegraph.","Summon #2|Pre-position into a donut."]}},
 {n:"Trinity Avowed",key:"Hot and Cold: bring your temperature back to 0 using matching-number attacks of the opposite element.",d:{normal:["Glory of Bozja|Raidwide.","Wrath of Bozja|Cone buster (Lost Reflect works).","Hot and Cold|±1/±2 temperature.","Allegiant Arsenal|Staff point-blank, bow cone (behind safe), sword cone (front safe).","Unseen Eye|Centre 3×3 has safe tiles.","Flames of Bozja|Side column safe."],savage:["Elemental Brand|More than two stacks KO.","Glory of Bozja|Heavier with bleed.","Flames of Bozja|Arrow maze, one safe tile."]}},
 {n:"Stygimoloch Lord",sub:"Savage only · optional",key:"Kill it before The Queen to remove her Royal Favor buff.",d:{savage:["Access|Needs a Mini Trap to pass the gate before Trinity Avowed.","Vicious Swipe|Ignores anti-knockback.","1111-Tonze Swing|Retreat to the edges.","Monks|Kite clockwise or anticlockwise.","Labyrinthine Fate|Opposite pushes."]}},
 {n:"The Queen",key:"Queen's Edict: move exactly the ordered number of squares.",d:{normal:["Empyrean Iniquity|Raidwide.","Cleansing Slash|Buster with bleed and Doom; cleanse.","Queen's Will / Beck and Call|Guard plus AoEs.","Northswain's Glow|Avoid line crossings.","Heaven's Wrath|Knockback line.","Judgement Blade|Flank cleave and dash.","Relentless Play|Two guards' mechanics together.","Gods Save the Queen|Heavy raidwide."],savage:["Death wall|Fluctuates.","Queen's Edict|5–7 total moves across casts.","Gods Save the Queen|Reflect orbs, dispel buffs, Lightning Resistance from puddles.","Relentless Play #5|Two Lost Aethershield users."]}}
]},
{exp:"Shadowbringers",type:"Exploration",inst:"Zadnor",lv:80,il:"Synced i430",rl:[],patch:"5.55",note:"Critical Engagements and duels. CE cards are condensed from Mrhappy1227's guide; duel cards from The Phookas. All CEs have a 60-minute respawn.",bosses:[
 {n:"4th-make Shemhazai",sub:"CE · From Beyond the Grave · Zone 1",key:"Gallows March: steer your Forced March into the blue circle to cleanse Doom, avoiding the orbs.",d:{normal:["Devour Soul|Tankbuster.","Blight|Raidwide.","Gallows March|Forced March + Doom and two pulsing orbs; end the march inside the monoceros's blue circle.","Soul Purge|Point-blank or donut; note which.","Living Corpse (1)|Zombie Hernais and Dyunbu: get behind Hernais, spread for Dyunbu, interrupt Dyunbu's heal (Marching Breath).","Chain Magic|Double Soul Purge, alternating circle and donut.","Living Corpse (2)|Wraiths fire AoEs during another Gallows March; AoE them down.","Notes|Spawns from 4th Legion Infantry (II).","Video|Mrhappy1227 — All Zadnor Critical Engagements Guide (youtube.com/watch?v=L4lXAV_OD-0)."]}},
 {n:"Elemental Zinitras",sub:"CE · On Serpents' Wings · Zone 1",key:"Five mob sets: blue serpents drop water donuts, red point-blank, green knockback. Lost Death / Lost Assassination work on all of them.",d:{normal:["Set 1|Spiral of fire AoEs: stand where the last spawns, move to centre once the first goes off.","Set 2|Knockback + four donuts: donut players stack and get knocked the same way (or all use Arm's Length/Surecast).","Set 3|Knockback + two fire sets: dodge the first, take the knockback into the revealed gap.","Set 4|Room covered in fire: kill the fire serpent opposite the wind serpent to open a landing spot.","Set 5 (DPS check)|One of each serpent channels a wipe; kill them (or resolve 4 donuts + 4 fires + a centre knockback in different directions).","Notes|Flameborne, Waveborne and Stormborne Zinitra. Spawns after the skirmish An Immoral Dilemma (also reported: from Magitek gunships in Zone 1).","Video|Mrhappy1227 — All Zadnor Critical Engagements Guide (youtube.com/watch?v=L4lXAV_OD-0)."]}},
 {n:"Hedetet",sub:"CE · With Diremite and Main · Zone 1",key:"Crystalline Stingers: hide behind the stalagmite type shown over its head.",d:{normal:["Crystal Needle|Tankbuster.","Shardstrike|Spread circles; don't hit stalagmites with them.","Hailfire|Four line AoEs; spread.","Shardfall|Two kinds of stalagmite; hit ones explode after a delay.","Crystalline Stingers|Hide behind the matching type, then move away before it explodes.","Sandsphere|Orbs pulse AoEs; stay away.","Earthbreaker|Cascading AoE from the centre.","Notes|Harder version of The Burn's first boss. Spawns from 4th Legion Nimrod (II).","Video|Mrhappy1227 — All Zadnor Critical Engagements Guide (youtube.com/watch?v=L4lXAV_OD-0)."]}},
 {n:"4th-make Hashmal",sub:"CE · A Familiar Face · Zone 1",key:"Towers topple onto you: go to the safe half for Phantom Order and dodge the falling towers.",d:{normal:["Rock Cutter|Tankbuster.","Extreme Edge / Phantom Order|Clones dash through; the lit fist shows which half gets hit. Two dashes; the second isn't recast-telegraphed.","Towers|Toppled by his attacks; dodge them plus random ground AoEs.","Third tower set|He chops three himself; Intractable Lands travel across fast, so tuck in behind the first one once it passes.","Hammer Round|Four hammers clockwise or anticlockwise; run along the far wall opposite their direction.","Duel unlock|Take no hits from dodgeable AoEs to qualify for Dabog.","Notes|Same mechanics as Rabanastre's Hashmal. Spawns after Another Pilot Episode.","Video|Mrhappy1227 — All Zadnor Critical Engagements Guide (youtube.com/watch?v=L4lXAV_OD-0)."]}},
 {n:"Hypertuned Dabog",sub:"Duel · The Broken Blade · Zone 1",key:"Right Arm Comet towers knock you back: aim to land in a safe spot, and stay near the boss for the blue knockback marker.",d:{normal:["Prep|Two holster sets: out-of-combat buffs applied early, then a damage set with Lost Excellence + Lost Flare Star. Potion and ether kits share a 30s cooldown. This setup is for Summoner or Red Mage (shown on SMN; RDM is easier). It doesn't work for Black Mage, though BLM can still clear the duels with a different setup.","Pre-pull|At 20s on the duel timer: Lost Excellence, Lost Chainspell, Lost Font of Magic, Banner of Noble Ends; inside, Ether Pact + tincture. On start, Banner again and Lost Flare Star close to him (it's an AoE around you).","Opening cast|Cone in front of him; move out.","Right Arm Comet|Tower at the edge knocks you back; get knocked into a safe spot (there's time to adjust).","Blue marker|Knockback on you; stay near him so you don't hit the deadly border.","Repeat|The pattern repeats flipped 180°.","Notes|Opened by A Familiar Face. Grants nearby players Double Mettle.","Video|The Phookas — FFXIV Zadnor Duel Guide (youtube.com/watch?v=ZGQPgT1gWuE)."]}},
 {n:"Clibanarius",sub:"CE · Here Comes the Cavalry · Zone 2",key:"Gust Slash knocks you across: stay aware of where he is and run close.",d:{normal:["Adds phase|Clear cavalry waves and dodge AoEs.","Gust Slash|Knockback; fire puddles burn if you're knocked through.","Charge|He dashes through, killing anyone in the path and knocking others back; one edge gap is safe (or Arm's Length/Surecast, not dead centre).","Solo phase|Point-blank, donut, stack markers, raidwides while cavalry fire lines.","Distance tankbuster|Tethered tank uses an invuln or runs away.","Notes|Spawns after the skirmish Tanking Up (also reported: from Magitek Armored Weapons in Zone 2).","Video|Mrhappy1227 — All Zadnor Critical Engagements Guide (youtube.com/watch?v=L4lXAV_OD-0)."]}},
 {n:"Hanbi",sub:"CE · There Would Be Blood · Zone 2",key:"Learn the cast names: Cloud of Locusts is point-blank, Plague of Locusts is a donut (the telegraph is very late).",d:{normal:["Hamsa's Auto|Tankbuster.","Dread Wind|Raidwide.","Cloud / Plague of Locusts|Out or in, then ground AoEs.","Flight of the Malefic|Three wings light; go to the unlit quadrant, out of his hitbox. Often twice.","Summon Darkness|Rows of souls: 1st lines, 2nd gazes (look away), 3rd lines + locusts.","Notes|Remix of Pazuzu (Eureka Anemos). Spawns from 4th Legion Satellite (III).","Video|Mrhappy1227 — All Zadnor Critical Engagements Guide (youtube.com/watch?v=L4lXAV_OD-0)."]}},
 {n:"4th-make Belias",sub:"CE · Time to Burn · Zone 2",key:"Hardest Zadnor CE: bring Lost Reflect or Light Curtain to ignore most of it (not the charges).",d:{normal:["Fire IV|Raidwide.","Fire|Tankbuster.","Time Eruption (paused)|Slow clocks first; he pauses time, so remember which were slow.","Time Bomb (2 bombs)|Safe spots are perpendicular to the bombs, toward the wall.","Time Bomb (3 bombs)|Find the opposed pair; safe crack between them and along the wall the odd one faces.","Reproduce|Clones dash in lines; stand where none charge. Can't be reflected.","Combo|All of the above at once; track the slow clocks for the end.","Reflect notes|You still take vuln stacks; reflect every Fire IV. Tanks can't reflect autos.","Notes|Spawns from 4th Legion Colossus (III).","Video|Mrhappy1227 — All Zadnor Critical Engagements Guide (youtube.com/watch?v=L4lXAV_OD-0)."]}},
 {n:"Hrodvitnir",sub:"CE · Never Cry Wolf · Zone 2",key:"Storm Within = point-blank (get out); Storm Without = donut (get in).",d:{normal:["Glaciation|Raidwide (also the enrage).","The Storm Within / Without|Out or in.","Ice Pillar|Pillars fire lines; two remain.","Lunar Cry|Use the arrow pushback that sends you toward a pillar, then hide behind it; pillars explode after.","Mage line|Screen text warns of mages; get to the opposite half.","Mages channel|Kill them before Glaciation finishes or the group wipes.","Age of Endless Frost|Rotating cones; follow behind one while dodging ground AoEs.","Duel unlock|Take no dodgeable hits to qualify for Menenius.","Notes|Like the Skoll/Fenrir fights. Spawns after An End to Atrocities.","Video|Mrhappy1227 — All Zadnor Critical Engagements Guide (youtube.com/watch?v=L4lXAV_OD-0)."]}},
 {n:"Menenius sas Lanatus",sub:"Duel · Head of the Snake · Zone 2",key:"Bring Light Curtain (single-use reflect) or you can't win: use it toward the end of his big crossfire cast.",d:{normal:["Prep|Two holster sets: out-of-combat buffs applied early, then a damage set with Lost Excellence + Lost Flare Star. Potion and ether kits share a 30s cooldown. This setup is for Summoner or Red Mage (shown on SMN; RDM is easier). It doesn't work for Black Mage, though BLM can still clear the duels with a different setup.","Light Curtain|Required; pop it near the end of the crossfire cast.","Magitek Minefield|Two bombs in one corner: run into the blue bomb, avoid the red one (a friend can waymark them).","Dark Shot|Empowers his next Gunberd; be far away to survive.","Magitek Impetus|Forced March plus another Minefield: reach the blue bomb first, then resolve the march.","Notes|Opened by Never Cry Wolf. Grants nearby players Double Mettle. Ability names are from auto-captions.","Video|The Phookas — FFXIV Zadnor Duel Guide (youtube.com/watch?v=ZGQPgT1gWuE)."]}},
 {n:"Kampe",sub:"CE · Lean, Mean, Magitek Machines · Zone 3",key:"Mob CE: dodge X-blade line AoEs, then satellites, death machines and a scorpion.",d:{normal:["Infantry|X-blade lines from the edges; main threat early.","Satellites|Three sets of crosses; find the third set and dodge into the first once it clears.","Death Machines|Rotating lines; stand in the quadrant both rotate away from.","Magitek Scorpion|Raidwides plus persistent front and back AoEs.","Notes|Spawns from 4th Legion Helldiver (III).","Video|Mrhappy1227 — All Zadnor Critical Engagements Guide (youtube.com/watch?v=L4lXAV_OD-0)."]}},
 {n:"Ayida",sub:"CE · Looks to Die For · Zone 3",key:"Fore Lash = front is bad; Hind Lash = back is bad. Charybdis drops everyone to 1 HP before a raidwide.",d:{normal:["Serpent's Edge|Tankbuster.","Roar|Raidwide.","Thundercall|Small orbs explode, then grow: away from small, under big.","Fore / Hind Lash|180° knockback front or back.","Charybdis|HP to 1, then Roar; heal up (bring potions solo).","Exalightning|Stand between the second set, move behind the first after it hits.","Eleven bolts|Spread loosely.","Twisting Winds|Front and back lines; go to the flanks.","Flame|Fireballs: the ones that swell go first, then dodge into them.","Big combo|Exalightning, then a big orb on her flank for Twisting Winds.","Notes|Remix of Deltascape V1.0 Savage. Spawns from 4th Legion Cavalry (III).","Video|Mrhappy1227 — All Zadnor Critical Engagements Guide (youtube.com/watch?v=L4lXAV_OD-0)."]}},
 {n:"Alkonost",sub:"CE · Worn to a Shadow · Zone 3",key:"Stormcall: follow the slow orb, then move opposite where it's headed.",d:{normal:["Bladed Beak|Tankbuster.","Nihility's Song|Raidwide.","Phantom|Baited AoEs.","Stormcall|Three orbs drift to the edge; two fast, one slow.","Shadows|Two tethered clones copy donut, circle or cone. Two cones + two circles: wall opposite a circle clone. Two donuts + two cones: behind a cone. Two circles + two donuts: under the donuts.","Notes|Same boss as in the Dalriada. Spawns after The Beasts Are Back.","Video|Mrhappy1227 — All Zadnor Critical Engagements Guide (youtube.com/watch?v=L4lXAV_OD-0)."]}},
 {n:"Blackburn",sub:"CE · Feeling the Burn · Zone 3",key:"Analysis: point your open (unmarked) side toward each dash.",d:{normal:["Suppressive Magitek Rays|Raidwide.","Rearguard's Coordinated Assault|Four rows of escorts dash; find the gap in each.","Anti-personnel Missile|Two quadrants at a time; remember the order.","Shots Fired|Escorts aim at players; aim out of the centre, then don't cross the persistent gunfire. Bait surface missiles.","Escorts|Tether to Blackburn and block damage; kill them.","Analysis + Assault|Weakness markers; face the open side toward each row.","Duel unlock|No dodgeable hits to qualify for Lyon.","Notes|Spawns after Hypertuned Havoc and Attack of the Supersoldiers.","Video|Mrhappy1227 — All Zadnor Critical Engagements Guide (youtube.com/watch?v=L4lXAV_OD-0)."]}},
 {n:"Lyon the Beast King",sub:"Duel · Taking the Lyon's Share · Zone 3",key:"Bring Lost Dispel; for Duel or Die stand behind the clone, opposite Lyon.",d:{normal:["Winds' Peak|Knockback.","Heart of Nature|Eruption then donuts.","Taste of Blood|Frontal.","Twin Agonies|Buster.","The King's Notice|Gaze.","Prep|Two holster sets: out-of-combat buffs applied early, then a damage set with Lost Excellence + Lost Flare Star. Potion and ether kits share a 30s cooldown. This setup is for Summoner or Red Mage (shown on SMN; RDM is easier). It doesn't work for Black Mage, though BLM can still clear the duels with a different setup.","Lost Dispel|Required. After Lost Flare Star is up, swap to it: dispel his self-buff in time or he one-shots you.","Duel or Die|You must be hit by Lyon's next Taste of Blood but avoid his clone's: stand behind the clone, opposite Lyon.","Video|The Phookas — FFXIV Zadnor Duel Guide (youtube.com/watch?v=ZGQPgT1gWuE)."]}}
]},
{exp:"Shadowbringers",type:"Exploration",inst:"The Dalriada",lv:80,il:"Synced i430 · up to 48 players",rl:[],patch:"5.55",note:"Zadnor raid-style CE. Eight players go up to Sartauvoir while the rest run the gauntlet below; both must be engaged together.",bosses:[
 {n:"Sartauvoir the Inferno",sub:"Upper · 8 players",key:"Time Eruption: stand on the slowest clock; Reverse is the opposite.",d:{normal:["Pyrokinesis|Raidwide.","Time Eruption / Reverse|Clock grid.","Phoenix Egis|Line charge.","Thermal Gust|Lines on players.","Grand Crossflame|Centre cross.","Burning Blade|Heavy buster."]}},
 {n:"Miniboss gauntlet",sub:"Blackburn · Augur · Alkonost / Carrion Crow",key:"Anti-personnel Missile: remember three rounds of unsafe quadrants.",d:{normal:["Blackburn|Raidwide; missile quadrants.","Augur|Raidwide; knockback adds; one player per meteor marker.","Alkonost / Carrion Crow|Follow the slow orb; get knocked into a Frigid Pulse clone."]}},
 {n:"4th-make Cuchulainn",key:"Fleshy Necromass: step into puddles to become slimes.",d:{normal:["Putrified Soul|Raidwide.","Might of Malice|Hard buster.","Burgeoning Dread|Forced March; avoid puddles.","Necrotic Billow|Bait together then out.","Ambient Pulsation|First row, then where the third spawned."]}},
 {n:"Saunion & Dawon the Younger",key:"Keep them apart: they tether and buff when close.",d:{normal:["High-powered Magitek Ray|Buster.","Magitek Halo|Donut; get in.","Missile Command|Spreads then stack.","Obey / Spiral Scourge|Weave around Saunion's path to the green donut.","Tooth and Talon / Pentagust|Buster; cones."]}},
 {n:"The Diablo Armament",sub:"Allagan Harrier",key:"Aetheric Boom: touch and destroy tethered orbs before they meet.",d:{normal:["Advanced Death Ray|Line buster away from party.","Aetheric Explosion|Raidwide.","Aetherochemical Lasers|Dodge, then stand on the second set's hitbox.","Diabolic Gate|Shrinking arena; follow the gates.","Advanced Death IV|Expanding lethal AoEs.","Aetheric Boom|Pop the orbs."]}}
]}
]);
window.FF = (window.FF || []).concat([
/* ───────── STORMBLOOD DUNGEONS ───────── */
{exp:"Stormblood",type:"Dungeon",inst:"The Sirensong Sea",lv:61,il:"Drops i260",rl:["Leveling"],patch:"4.0",bosses:[
 {n:"Lugat",key:"Sea Swallows All pulls you in: run out, then back to the centre for Amorphous Applause.",d:{normal:[
  "Amorphous Applause|Large directional AoE; stay tight to the boss.",
  "Hydroball|Stack.",
  "Sea Swallows All / Concussive Oscillation|Pull-in; run out then back in.",
  "Overflow|Knockback to the edge; return for the stack."]}},
 {n:"The Governor",key:"Enter Night tethers and pulls a player; run far to break it.",d:{normal:[
  "Bloodburst|Raidwide.",
  "Shadowflow / Shadowsplit|Shadow areas stack magic vulnerability.",
  "Enter Night|Break the tether by distance."]}},
 {n:"Lorelei",key:"Morbid Advance/Retreat forces you forward or back: face a route that avoids the Virgin Tears puddles.",d:{normal:[
  "Somber Melody|Raidwide.",
  "Void Water III|AoE on a player.",
  "Virgin Tears|DoT puddles forming a ring.",
  "Morbid Advance / Retreat|Forced march forward or backward."]}}
]},
{exp:"Stormblood",type:"Dungeon",inst:"Shisui of the Violet Tides",lv:63,il:"Drops i270",rl:["Leveling"],patch:"4.0",bosses:[
 {n:"Amikiri",key:"Mucal Glob roots a player for Shuck: break the leg to interrupt it.",d:{normal:[
  "Sharp Strike|Tankbuster.",
  "Mucal Glob / Shuck|Destroy the targetable leg.",
  "Kamikiri adds|Kill quickly."]}},
 {n:"Ruby Princess",key:"Seduce pulls you in: hide behind your own box.",d:{normal:[
  "Seduce / Coriolis Kick|Pull then big circle; use a box.",
  "Abyssal Volcano|Circle plus chasing AoEs.",
  "Tornadogenesis|Tankbuster."]}},
 {n:"Shisui Yohi",key:"Kill the sharks before they rush.",d:{normal:[
  "Foul Nail|Two-hit tankbuster.",
  "Mad Stare|Gaze; look away.",
  "Thick Fog|Boss hides; kill three Churns, avoid ripples.",
  "Black Tide|Returns where the ripples were.",
  "Naishi sharks|Kill fast."]}}
]},
{exp:"Stormblood",type:"Dungeon",inst:"Bardam's Mettle",lv:65,il:"Drops i276",rl:["Leveling"],patch:"4.0",bosses:[
 {n:"Garula",key:"Animals marked '!' in the pen show the next attack: ram = line, coeurl = cone, kukuru = circle.",d:{normal:[
  "Heave|Frontal cone.",
  "Crumbling Crust|Four AoEs round the boss.",
  "Rush|Tethered charge; move once it turns purple.",
  "War Cry / Earthquake|Raidwide then stun."]}},
 {n:"Bardam",key:"Travail (lightning): hit only one tower, and never miss two.",d:{normal:[
  "Magnetism / Travail|Pulled in; stand just outside the inner circle facing away, then step back.",
  "Charge|Crossing spear lines.",
  "Travail (lightning)|Three towers.",
  "Travail (firestorm) / Starfall|Spread clockwise; centre or edge."]}},
 {n:"Yol",key:"Eye of the Fierce: look away.",d:{normal:[
  "Feathercut|Frontal buster.",
  "Wind Unbound / Flutterfall|Orb lines; spreads.",
  "Eye of the Fierce|Gaze.",
  "Wingbeat|Knocked to the edge; return to the centre."]}}
]},
{exp:"Stormblood",type:"Dungeon",inst:"Doma Castle",lv:67,il:"Drops i282",rl:["Leveling"],patch:"4.0",bosses:[
 {n:"Magitek Rearguard",key:"Garlean Fire: dodge beside each circle, not in front.",d:{normal:[
  "Cermet Pile|Cleaving buster.",
  "Garlean Fire|Line of circles.",
  "Rearguard Bit|Edge lines.",
  "Rearguard Mine|Drifting bots explode on contact."]}},
 {n:"Magitek Hexadrone",key:"Magitek Missiles: at least one player in the tower.",d:{normal:[
  "Circle of Death|Boss circle.",
  "2-tonze Magitek Missile|Stack.",
  "Chain Mine|Red field.",
  "Magitek Missiles|Tower."]}},
 {n:"Hypertuned Grynewaht",key:"Thermobaric Charge: drop the proximity marker away from the group.",d:{normal:[
  "Chainsaw|Line in front; sidestep.",
  "Delay-action Charge|Spreads.",
  "Gunsaw|Tracking beam on a player.",
  "Thermobaric Charge|Proximity drop.",
  "Clean Cut|Edge chakrams."]}}
]},
{exp:"Stormblood",type:"Dungeon",inst:"Castrum Abania",lv:69,il:"Drops i288",rl:["Leveling"],patch:"4.0",bosses:[
 {n:"Magna Roader",key:"Wild Speed: kill the Optio and use their cannons on it when it pauses.",d:{normal:[
  "Wheel|Tankbuster.",
  "Magitek Fire II / III|Circle on a player; raidwide.",
  "Wild Speed|Rushing lines; cannons."]}},
 {n:"Subject Number XXIV",key:"Elemental Overload shows the next set: fire, ice or thunder.",d:{normal:[
  "Fire|Cones plus a stack.",
  "Ice|Crossing lines then circles.",
  "Thunder|Two towers plus lines.",
  "Vulnerability Up|Damage window after each set."]}},
 {n:"Inferno",key:"Kill the Packer before it charges the device.",d:{normal:[
  "Ketu Slash|Tankbuster.",
  "Rahu Blaster|Column on a player.",
  "Ketu & Rahu|Ground and player AoEs.",
  "Roids|Empowered arms add bleed and extra AoEs.",
  "Legion adds|Death Claws tether; Packer upgrades the boss."]}}
]},
{exp:"Stormblood",type:"Dungeon",inst:"Ala Mhigo",lv:70,il:"Drops i300",rl:["High-level Dungeons"],patch:"4.0",bosses:[
 {n:"Magitek Scorpion",key:"Tail Laser hits front and back. Stand at its sides.",d:{normal:[
  "Electromagnetic Field|Raidwide.",
  "Target Search|Following markers become puddles.",
  "Tail Laser|Front and back line."]}},
 {n:"Aulus mal Asina",key:"Mindjack: avoid the Claws and Bits before returning to your body.",d:{normal:[
  "Order to Fire|Overlapping circles.",
  "Magitek Disruptor|Stun and pull.",
  "Mindjack|Out of Body.",
  "Demimagicks|Markers and AoEs."]}},
 {n:"Zenos yae Galvus",key:"Unmoving Troika is untelegraphed: watch for Zenos shouting 'Kill!'.",d:{normal:[
  "Art of the Storm|Point-blank; go out.",
  "Art of the Swell|Knockback; move toward him.",
  "Art of the Sword|Lines on each player; spread.",
  "Unmoving Troika|Tankbuster."]}}
]},
{exp:"Stormblood",type:"Dungeon",inst:"Kugane Castle",lv:70,il:"Drops i300",rl:["High-level Dungeons"],patch:"4.0",bosses:[
 {n:"Zuiko-maru",key:"Keep bomb-tethered players on one side of the room.",d:{normal:[
  "Frontal cone|Avoid the front.",
  "Shared marker|Stack.",
  "Bombs|Tethered chasers.",
  "Kenki Release|Raidwide."]}},
 {n:"Dojun-maru",key:"Kill clones fast.",d:{normal:[
  "Column AoEs|Avoid.",
  "Clones|Kill or take raid damage.",
  "Electric circle|Spread."]}},
 {n:"Yojimbo",key:"Payday: grab gold before Daigoro does to keep the gauge low.",d:{normal:[
  "Payday|Collect gold.",
  "Metta-giri|Raidwide.",
  "Inoshikacho|Centre then outskirts.",
  "Dragon heads|Destroy quickly."]}}
]},
{exp:"Stormblood",type:"Dungeon",inst:"The Temple of the Fist",lv:70,il:"Drops i300",rl:["High-level Dungeons"],patch:"4.0",bosses:[
 {n:"Coeurl Sruti & Smriti",key:"Kill Sruti first, then Smriti.",d:{normal:[
  "Radial Blaster|Circle round Sruti.",
  "Windblaster|150° cone from Smriti.",
  "Electric Blaster|Purple markers; spread."]}},
 {n:"Arbuda",key:"Killer Instinct: only attack from the open side.",d:{normal:[
  "Port and Star|Side cones; stand front or back.",
  "Fore and Aft|Front/back cones; stand at the sides.",
  "Fourfold Shear|Tankbuster.",
  "Hellseal|Move to the glowing symbol early.",
  "Killer Instinct|Parry stance."]}},
 {n:"Ivon Coeurlfist",key:"Rhalgr's Piece: run to the corners.",d:{normal:[
  "Hurricane Kick|270° stun cleave.",
  "Touch of Slaughter|Target to single-digit HP; heal.",
  "Coeurl Whisper|Dragon-head lines with gaps.",
  "Rhalgr's Piece|Centre proximity.",
  "The Rose of Destruction|Stack."]}}
]},
{exp:"Stormblood",type:"Dungeon",inst:"The Drowned City of Skalla",lv:70,il:"Drops i315",rl:["High-level Dungeons"],patch:"4.1",bosses:[
 {n:"Kelpie",key:"Hydro Pull: move away; Hydro Push: move toward it.",d:{normal:[
  "Torpedo|Tankbuster.",
  "Hydro Pull / Push|Edge damage.",
  "Bloody Puddle|Spread puddles; kite orbs."]}},
 {n:"The Old One",key:"Order to Detonate: kill the adds (Spriggan action the second time).",d:{normal:[
  "Mystic Light|Cone at a player.",
  "Mystic Flame|Circles.",
  "Order to Detonate|Kill four, then six adds."]}},
 {n:"Hrodric Poisontongue",key:"Cross of Chaos: the marked player stands still; Circle: move away.",d:{normal:[
  "Rusting Claw|Frontal after the arm raise.",
  "Tail Drive|Rear after the tail raise.",
  "The Spin|Proximity; edge.",
  "Cross / Circle of Chaos|Player-centred AoE."]}}
]},
{exp:"Stormblood",type:"Dungeon",inst:"Hells' Lid",lv:70,il:"Drops i325",rl:["High-level Dungeons"],patch:"4.2",bosses:[
 {n:"Otake-maru",key:"Grrraaarrrgh: he follows one player while drooling lava. Kite him.",d:{normal:[
  "100-tonze Swing|Point-blank.",
  "10-tonze Slash|Cone away from tank.",
  "Grrraaarrrgh|Kite.",
  "Pickup|Short point-blank on landing."]}},
 {n:"Kamaitachi",key:"Read the on-screen messages: 'the wind begins to howl' = point-blank spin; 'the wind shifts' = line.",d:{normal:[
  "Whipping Wittret|Untelegraphed buster.",
  "The Patient Blade|180° frontal.",
  "Whispers in the Wind|Adds, whirlwinds, charges."]}},
 {n:"Genbu",key:"Destroy the Chelonian Gate before the meter fills, and leave the glowing platforms.",d:{normal:[
  "Caduceus|Buster on the 'Water to rend flesh' call.",
  "Hell of Water|Cross; diagonal gaps.",
  "Hell of Waste|Marked player away.",
  "Sinister Tide|Arrows send water across platforms.",
  "Hell of Waves / Divine Cataract|Gate and meter."]}}
]},
{exp:"Stormblood",type:"Dungeon",inst:"The Fractal Continuum (Hard)",lv:70,il:"Drops i325",rl:["High-level Dungeons"],patch:"4.2",bosses:[
 {n:"Motherbit",key:"Citadel Buster: get to the safe half before the brown line; crossing it knocks you back.",d:{hard:[
  "Electrochemical Transfer|Bit patterns: odd = lines, even = split.",
  "Allagan Gravity|Puddle detonates Heavy.",
  "Citadel Buster|Half-arena charge."]}},
 {n:"The Ultima Warrior",key:"Primordial Aether copies a Warring Triad mechanic: Sephirot, Sophia or Zurvan.",d:{hard:[
  "Aetheroplasm|AoE tankbuster.",
  "Citadel Buster|Line on a player.",
  "Ceruleum Vent|Raidwide knockback.",
  "Primordial Aether|Primal-specific mechanic.",
  "Mass Aetheroplasm|Stack."]}},
 {n:"The Ultima Beast",key:"Claw raised = Death Spin (get away); rearing up = Aether Bend (get in).",d:{hard:[
  "Death Spin / Aether Bend|Point-blank or donut.",
  "Flare Star|Magma puddle.",
  "Light Pillar|Circle then eight lines.",
  "Demi Ultima|Enrage below 10%."]}}
]},
{exp:"Stormblood",type:"Dungeon",inst:"The Swallow's Compass",lv:70,il:"Drops i345",rl:["High-level Dungeons"],patch:"4.3",bosses:[
 {n:"Otengu",key:"Wile of the Tengu: look away.",d:{normal:[
  "Clout of the Tengu|Boss circle.",
  "Yama-kagura|Line at a player.",
  "Wile of the Tengu|Gaze.",
  "Tengu Ember|Roaming embers.",
  "Might of the Tengu|Tankbuster."]}},
 {n:"Daidarabotchi",key:"Arm slam has no castbar: stand opposite the arm.",d:{normal:[
  "Arm slam|Opposite side.",
  "The Land Take You|Following AoE.",
  "Swallow You|Growing lake.",
  "Mountain Falls|Delayed drop on a player."]}},
 {n:"Qitian Dasheng",key:"Raised staff = stay away; lowered electric staff = stay close.",d:{normal:[
  "The Short End|Tankbuster.",
  "Both Ends|Read the staff.",
  "Monkey Magicks / Second Heaven|Kill adds before the meter fills.",
  "Splitting Hairs|Two shadows; kill together."]}}
]},
{exp:"Stormblood",type:"Dungeon",inst:"The Burn",lv:70,il:"Drops i355",rl:["High-level Dungeons"],patch:"4.4",bosses:[
 {n:"Hedetet",key:"Hailfire and Shardfall: hide behind a crystal.",d:{normal:[
  "Crystal Needle|Tankbuster.",
  "Hailfire|Line-of-sight.",
  "Shardfall / Dissonance|Behind a crystal, then inside the hitbox.",
  "Shardstrike|Spreads."]}},
 {n:"Defective Drone",key:"Full Throttle: stand in the lane of the sparking drone with no lights above it.",d:{normal:[
  "Burns|Side lanes burn.",
  "Aetherochemical Flame|Raidwide.",
  "Full Throttle|Drones charge.",
  "Rock Busters|Lines from the sides."]}},
 {n:"Mist Dragon",key:"Free anyone trapped in Mist before Touchdown.",d:{normal:[
  "Rime Wreath|Raidwide.",
  "Frost Breath|Line then tank arc; ice puddles.",
  "Fog Plume|Star AoE traps in Mist.",
  "Deep Fog|Run the edge.",
  "Touchdown|Opposite side."]}}
]},
{exp:"Stormblood",type:"Dungeon",inst:"Saint Mocianne's Arboretum (Hard)",lv:70,il:"Drops i355",rl:["High-level Dungeons"],patch:"4.4",bosses:[
 {n:"Nullchu",key:"Devour: stand near the Rafflesia before the breath.",d:{hard:[
  "Odious Air|Poison cone.",
  "Vine Whip|Tankbuster.",
  "Sludge Bomb|Pool.",
  "Devour|Poison zone."]}},
 {n:"Lakhamu",key:"Landslip conveyors push you half the arena. Aim for a safe area.",d:{hard:[
  "Thorny vines|Edges.",
  "Landslip|Conveyors plus golem lines.",
  "Earthquake|Melee then ring.",
  "Earth Shaker|Lines to DPS.",
  "Empty Gaze|Gaze."]}},
 {n:"Tokkapchi",key:"Never hit the Mud Slime.",d:{hard:[
  "Mud eruptions|Stay on platforms.",
  "Quagmire|Spreads; keep puddles off platforms.",
  "Mud Pie|Unkillable slime grows when hit.",
  "Feculent Flood|Cone pushes the slime."]}}
]},
{exp:"Stormblood",type:"Dungeon",inst:"The Ghimlyt Dark",lv:70,il:"Drops i375",rl:["High-level Dungeons"],patch:"4.5",bosses:[
 {n:"Mark III-B Magitek Colossus",key:"Magitek Slash puddles keep covering the arena.",d:{normal:[
  "Jarring Blow|Wide frontal buster.",
  "Magitek Ray|Stack.",
  "Wild Fire Beam|Spreads.",
  "Exhaust|Line.",
  "Magitek Slash|Cone leaving fire."]}},
 {n:"Prometheus",key:"Needle Gun (front 90°) and Oil Shower (rear 270°) cover everything; step back out of range.",d:{normal:[
  "Nitrospin|Raidwide; fire ring.",
  "Cermet Drill|Tankbuster.",
  "Needle Gun / Oil Shower|Front and rear cones.",
  "Burrow blast|Lingering fire line.",
  "Freezing Missile|Cardinal proximity."]}},
 {n:"Annia & Julia quo Soranus",key:"Keep tanks apart so Heirsbane doesn't chain.",d:{normal:[
  "Delta Trance / Innocence|Tankbusters.",
  "Artificial Plasma|Raidwide.",
  "Heirsbane|Chaining tank detonation.",
  "Order to Bombard|Edge safe spots; Crossbones knockback.",
  "Imperial Authority|Wipe if finished."]}}
]},
/* ───────── STORMBLOOD TRIALS ───────── */
{exp:"Stormblood",type:"Trial",inst:"The Pool of Tribute",lv:63,il:"Extreme: i300",rl:["Trials"],patch:"4.0",bosses:[
 {n:"Susano",key:"Ama-no-iwato: break the bottom-most stone on the enemy list.",d:{
 normal:[
  "Assail|Untelegraphed buster.",
  "Yata no Kagami / Brightstorm|Knockback sets the safe zone; stack.",
  "Dark Cloud|Line clouds paralyse.",
  "Clashing|Tank takes the crystal; burn the sword.",
  "Sheer Force|Off-tank intercepts orbs.",
  "Ama-no-iwato|Free the trapped player."],
 extreme:[
  "Churn|Freeze and sheathe as it ends.",
  "Rasen Kaikyo|Circles; then hold still.",
  "Yata-no-Kagami / Seasplitter|Stack behind Susano.",
  "Thunderhead|Keep the cloud off his front/back.",
  "Clashing|One tank per clash; swap.",
  "Dark Levin|Burst orbs clockwise from NE.",
  "Levinbolt / Sinkhole|Marked cross; never stop in the sinkhole.",
  "The Hidden Gate|Break the last gaol on the list."]}}
]},
{exp:"Stormblood",type:"Trial",inst:"Emanation",lv:65,il:"Extreme: i300",rl:["Trials"],patch:"4.0",bosses:[
 {n:"Lakshmi",key:"Hold a Vril charge for her big hits; take only one orb.",d:{
 normal:[
  "Vril|Shield charge; use before big hits.",
  "Centre AoE|Use Vril; stay off edges.",
  "Hand attacks|Growing pool; crosses.",
  "Orange arrow marker|Stack.",
  "Dreaming Kshatriya|Kill one at a time."],
 extreme:[
  "Vril|Three charges; save for Chanchala.",
  "Hand of Grace / Beauty|DPS line spreads; healer puddles.",
  "Divine Denial|Vril, stay close.",
  "Divine Desire|Vril, go to edge.",
  "Alluring Embrace|Everyone needs Vril.",
  "Divine Doubt / Blissful Spear|Refill from bubbles; pairs."]}}
]},
{exp:"Stormblood",type:"Trial",inst:"The Royal Menagerie / Shinryu's Domain",lv:70,il:"Extreme: i320 · Unreal (7.5): Lv 100, i690 (synced i695)",rl:["Trials"],patch:"4.0 · Unreal 7.5",note:"Shinryu's Domain (Unreal), the current Unreal: Raid Finder (Trials); requires Fantastic Mr. Faux (Transparency, Gyr Abania). 8 players, 60-minute limit, no Phoenix Down, no unsync. Rewards: 20 Mathematics + 10 Mnemonics tomestones and weekly Faux Hollows access.",bosses:[
 {n:"Shinryu",key:"Destroy The Worm's Heart every time it appears.",d:{
 normal:[
  "Tidal Wave|Knockback from a spout.",
  "Aerial Blast|Centre whirlwind pulses.",
  "Hellfire|Stand in puddles.",
  "Judgment Bolt|Stay out of puddles.",
  "Earthen Fury|Leave the targeted platform.",
  "Diamond Dust|Stay still.",
  "Right Wing|Spreads.",
  "Burning Chains|Run apart."],
 extreme:[
  "Earthen Fury / The Worm's Heart|Kill the heart in ~10s; stay off east/west.",
  "Tail Slap|Place slaps SE, then centre/NW, then SW.",
  "Tidal Wave|Spout side or anti-knockback.",
  "Hellfire + Summon Icicle|Stand in a puddle.",
  "Judgment Bolt + Summon Icicle|Out of puddles; cleanse Paralysis.",
  "Burning Chains|Role pairs to opposite corners.",
  "Aerial Blast|Final knockback toward a corner.",
  "Atomic Ray / Ice Storm|DPS pairs; Hypernova stack still, Levinbolt spread moving."],
 unreal:[
  "Before pull|Know your Burning Chains partner and run direction. Tanks and healers get DPS partners for Atomic Ray, taking chain pairs into account. Destroying the middle tile wipes the party. The main and off-tank both take auto-attacks.",
  "Corrupted Aether Gauge|Fills over time; at 100 Shinryu uses his next special attack.",
  "P1 (100–44%) · The Worm's Heart|Respawns every 70s; kill it on spawn. If a Corrupted Aether attack finishes while it lives, the party wipes. Each respawn adds HP Boost and Rehabilitation stacks.",
  "P1 · Earthen Fury|Opener raidwide. Destroys the east and west platforms and cracks three more. Kill the Heart within ~10s.",
  "P1 · Tail Slap|Marked player; after ~9s the tail hits the two tiles nearest the marker with knockback. Intact tiles crack; cracked tiles break. Hit the tail for big damage. Place it SE first, then centre/NW, then SW, to keep the northern tiles. Once a north or south tile is gone, you can't cross diagonals; jump to avoid the void.",
  "P1 · Tidal Wave|Spout on a random edge: heavy damage and knockback away; leaves five water puddles. Run to the spout side or use Arm's Length/Surecast.",
  "P1 · Hellfire|Extreme fire raidwide plus Burns (20s); clears puddles. Paired with Summon Icicle: stand in a puddle.",
  "P1 · Judgement Bolt|Heavy lightning raidwide; Paralyzes 1–4 players (Esuna). Clears puddles. Paired with Summon Icicle: stay out of puddles.",
  "P1 · Water Puddle|Fire Resistance Up, Lightning Resistance Down.",
  "P1 · Summon Icicle (Left Wing)|Three icicle lines: damage, knockback and Slow (60s).",
  "P1 · Ice Storm (Left Wing)|Unavoidable raidwide.",
  "P1 · Levinbolt (Right Wing)|Unmarked spread circles plus Electrocution (9s).",
  "P1 · Hypernova (Right Wing)|Unmarked stack, heavy fire damage. Read the wing from the ring colour or enmity list.",
  "P1 · Diamond Dust|Heavy damage, ice floor (extra sliding), five puddles, Burning Chains on both healers. Healers stand together on the north half of centre, then slide to opposite north corners.",
  "P1 · Aerial Blast|Three light radial knockbacks, then a strong fourth; DPS get chained before it. Go to centre and aim the knockback at the corner opposite your partner, or use Arm's Length/Surecast.",
  "P1 · Burning Chains|Same-role partners via breakable tethers; fire damage and Suppuration until broken. Same-type DPS pair (two melee together). Run to opposite corners.",
  "P1 · Dragonfist|Static centre circle: Down for the Count plus Vulnerability Up.",
  "P1 · Akh Morn + Akh Rhai|Multi-hit shared tankbuster; tanks stack. Fire pillars under random DPS; DPS spread and step out.",
  "P1 · Earth Breath|One healer and one DPS marked for big cones plus Sludge (15s); aim away.",
  "P1 · Reiryu|Four heads tether all DPS with The Worm's Curse (DoT, no healing, small lifesteal). Heal heads to full from 0% to remove them. If a tethered player dies or time runs out: raid damage plus Damage Down.",
  "P1 · Gyre Charge|Shinryu reappears in a far corner and dives a huge knockback line, then returns east or west. Run far into a corner beside the charge.",
  "P1 rotation|Earthen Fury → Chains → Tidal Wave → Tail Slap (healer, SE) → Wings → Dragonfist → Akh Morn → Icicle + Hellfire/Bolt → Tail Slap (DPS, centre/NW) → Levinbolt → Chains (tanks/healers) → Earth Breath → Akh Morn → Diamond Dust → Reiryu → Tail Slap (off-tank, SW) → Akh Morn → Aerial Blast → Earth Breath → Gyre Charge → Akh Morn → Tidal Wave. Ends at 44% or rotation end.",
  "Transition · Active Time Maneuver|Everyone is bound. Success launches you onto a new platform; failure sends you to the second platform. A centre proximity AoE uppercuts you onto the northern blue platform, where dead allies wait.",
  "Transition · Adds|Ginryu (Blazing Trail long line) and Hakkinryu (Death Sentence tankbuster). Wave 1: 4 Ginryu + 1 Hakkinryu. Wave 2 (+10s): 3 Ginryu + 2 Hakkinryu. Wave 3 (+15s): five spread markers hatch into Ginryu; drop them apart or the explosions wipe the party.",
  "Transition · Protostar|100s charge: kill every add or wipe. The incomplete Protostar still hits hard, then Tail Spit knocks back from centre.",
  "Transition · Tail run|Run up the tail (~20s) dodging Aetherial Ray lines (2s Stun); jump off above the south platform.",
  "P2 (44–24%) · Doom Puddle|Permanent puddle under Shinryu: Doom (10s) while inside, removed on exit.",
  "P2 · Tera Slash|Tankbuster plus Physical Vulnerability Up (25s); mitigate and swap.",
  "P2 · Atomic Ray + Burning Chains|Each tank is chained to a random healer; all four DPS get stacks plus Magic Vulnerability Up, so two DPS can't share a stack. Group to shorten the chains, break them, then split into pre-agreed stack pairs. Surviving alone gives Vulnerability Up.",
  "P2 · Ice Storm + Hypernova|Green Ice Storm: Deep Freeze (12s) if still. Stack and stand still to freeze; the ice offsets Hypernova.",
  "P2 · Ice Storm + Levinbolt|Keep moving to avoid Deep Freeze. The stronger Levinbolt drops where you stood at cast end: move off and stay apart.",
  "P2 · Benighting Breath|Huge static cone: heavy damage plus Infirmity (60s).",
  "P2 · Wormwail|Donut, safe spot under Shinryu (a bit smaller than the Doom Puddle). Heavy damage plus Infirmity (60s). Wait a few seconds before stepping into the Doom Puddle.",
  "P2 · Reiryu|Heal the heads before tethered players die.",
  "P2 rotation|Tera Slash → Atomic Ray + Chains → Ice Storm + Hypernova/Levinbolt → Breath or Wormwail → Tera Slash → Reiryu → loop. Ends at 24% or after two rotations.",
  "Enrage · Tidal Wave|70s cast knocks everyone off unless Shinryu dies.",
  "Enrage · Wings|Left and Right Wings cast Hellfire and Judgement Bolt (35s). Use the jump pads onto his back; each wing destroyed stops its cast and takes ~9% HP. Then drop down and finish him."]}}
]},
{exp:"Stormblood",type:"Trial",inst:"The Jade Stoa",lv:70,il:"Extreme: i340",rl:["Trials"],patch:"4.2",bosses:[
 {n:"Byakko",key:"Roar of Thunder scales with Hakutei's remaining HP. Burn the tiger.",d:{
 normal:[
  "Storm Pulse|Raidwide.",
  "Heavenly Strike|Tankbuster.",
  "State of Shock|Grab plus stack; then Sweep the Leg (go behind).",
  "Fire & Lightning|Line at a player.",
  "White Herald|Proximity flare from Hakutei.",
  "Roar of Thunder|Kill Hakutei."],
 extreme:[
  "State of Shock|Two stacks; tank provokes back.",
  "Unrelenting Anguish|Orbs; keep Ominous Wind players apart.",
  "Aratama|Bleed puddles at the edges.",
  "Roar of Thunder|Healers collect orbs; others burn Hakutei.",
  "Free-fall|Centre for donuts; dodge orbs.",
  "Hundredfold Havoc|Two waves of moving AoEs.",
  "Gale Force|Vacuum Claw puddles at the edges."]}}
]},
{exp:"Stormblood",type:"Trial",inst:"Castrum Fluminis / Tsukuyomi's Pain",lv:70,il:"Extreme: i350",rl:["Trials"],patch:"4.3",bosses:[
 {n:"Tsukuyomi",key:"Selenomancy: switch platform halves around three stacks; five means Doom.",d:{
 normal:[
  "Torment Unto Death|Frontal buster.",
  "Zashiki-asobi|Fans explode in order.",
  "Nightfall|Random add-on attack.",
  "Selenomancy|Switch halves.",
  "Antitwilight / Perilune|Raidwide reset.",
  "Lunacy|Multi-hit stack.",
  "Dark / Bright Blade|Over half cleave."],
 extreme:[
  "Reprimand|Raidwide.",
  "Nightfall (Gun)|Line stack.",
  "Nightfall (Spear)|Three groups for three cleaves.",
  "Nightbloom|Down for the Count.",
  "Suffering adds|Kill tethered first; Zenos fast.",
  "Supreme Selenomancy|Moonlit/Moonshadowed resets.",
  "Moonfall|Meteors on the shrinking colour's edge.",
  "Antitwilight / Perilune|Step into the opposite colour."]}}
]},
{exp:"Stormblood",type:"Trial",inst:"Hells' Kier",lv:70,il:"Extreme: i370",rl:["Trials"],patch:"4.3",bosses:[
 {n:"Suzaku",key:"Scarlet Melody: face the arrow when the light reaches you.",d:{
 normal:[
  "Cremate|Tankbuster.",
  "Eternal Flame|Kill revived phoenixes.",
  "Endless Summer|Cone at a player.",
  "Screams of the Damned|Raidwide.",
  "Phoenix Down|Destroy the middle plume.",
  "Scarlet Melody|Face the arrows."],
 extreme:[
  "Fleeting Summer|Cone.",
  "Rout|Spreads; charge line.",
  "Phoenix Down|Each DPS kills its small plume.",
  "Scarlet Lady|Kill within 15s with your partner.",
  "Scarlet Melody|Face arrows; missed arrows fill the meter.",
  "Scarlet Hymn|Beside the first quadrant, then into it.",
  "Incandescent Interlude|Marked players avoid towers; others knocked in."]}}
]},
{exp:"Stormblood",type:"Trial",inst:"The Wreath of Snakes",lv:70,il:"Extreme: i380",rl:["Trials"],patch:"4.5",bosses:[
 {n:"Seiryu",key:"Onmyo Sigil: yin-yang = away (circle), serpent eye = close (donut).",d:{
 normal:[
  "Fifth Element|Raidwide.",
  "Infirm Soul|Tankbuster.",
  "Serpent Descending|Spreads.",
  "Onmyo Sigil|Circle or donut.",
  "Kuji-kiri|Line grid.",
  "Forbidden Arts|Double line stack.",
  "Strength of Spirit|Kill adds before the meter fills."],
 extreme:[
  "Cursekeeper|Swap during the cast.",
  "Onmyo Sigil / Circle|Resolve in shown order.",
  "Summon Shiki|Red knockback tethers to walls, blue healer line stack, rock tethers away, interrupt Mud.",
  "White Water|Stay out of the water.",
  "Snakes and Mountain|Run toward snakes; avoid the raised fist half.",
  "Forbidden Arts|Healer line stacks; split once buffed."]}}
]},
{exp:"Stormblood",type:"Trial",inst:"Kugane Ohashi",lv:70,il:"i365",rl:[],patch:"4.56",note:"Single-difficulty Yojimbo trial, tuned harder than a normal trial.",bosses:[
 {n:"Yojimbo",key:"Embodiment adds: kill both before Divine Epicness reaches 100%, and keep them apart.",d:{normal:[
  "Inoshikacho|Butterflies; stack first.",
  "Gekko|Spreads leave donuts.",
  "Icewind|Two waves of safe squares.",
  "Tiny Song|Stack.",
  "Dragon's Head|Sweeping heads.",
  "Electrogenetic Force|One open spot.",
  "Enchain / Iron Chains|Kill chains before Hells' Gate.",
  "Epic Stormsplitter|Centre line then the strip."]}}
]},
{exp:"Stormblood",type:"Trial",inst:"The Great Hunt",lv:70,il:"Extreme: i350",rl:[],patch:"4.36",note:"Monster Hunter: World collaboration. Mega Potions available; GCD attacks fill the Down gauge.",bosses:[
 {n:"Rathalos",key:"Evasive Breath has a very short telegraph. Never linger in front of him.",d:{
 normal:[
  "Whipping Bite|Front and tail sweep; flanks.",
  "Tail Swipe|Counterclockwise 180°s.",
  "Charging Bite|Lunge at a player.",
  "Fireball|Marked player away.",
  "Evasive Breath|Front fire blast.",
  "Down Counter|Fill gauge; burst the tail."],
 extreme:[
  "Roar|Raidwide; stay above 40%.",
  "Charging Bite|Sidestep on the roar.",
  "Evasive Breath|Out of the front.",
  "Garula / mount (P2)|Kill Garula; mounted DPS survives.",
  "Scalebound (P3)|Only Mega Potions and shields heal.",
  "Down gauge|Break the tail for 30% HP."]}}
]},
/* ───────── STORMBLOOD RAIDS (Omega) ───────── */
{exp:"Stormblood",type:"Raid",inst:"Omega: Deltascape (O1–O4)",lv:70,il:"Normal: i295 · Savage: i310–320",rl:["Normal Raids"],patch:"4.0",bosses:[
 {n:"Alte Roite",sub:"O1",key:"Downburst tornado kills anyone in the centre.",d:{
 normal:["Wyrm Tail|Tankbuster.","Flame orbs|Avoid circles.","Breathwing|Knockback.","Downburst|Out of centre.","Roar / Charybdis|Raidwide; HP to 1."],
 savage:["Twin Bolt|Shared tank hit.","Clamp|Front line knockback.","Blaze|Healer stack.","Charybdis|HP to 1; heal.","Levinbolt|Clock spreads.","Classical Elements|Orbs, Downburst, ice floor patterns.","Enrage|~9:45."]}},
 {n:"Catastrophe",sub:"O2",key:"Levitate for purple orbs, stay grounded for gold.",d:{
 normal:["Earthquake|Levitate.","Paranormal Wave|Frontal.","Demon Eye|Face away.","Antilight|Purple = levitate, gold = grounded.","Maniacal Probe / Epicenter|Stand on the tentacle without an icon.","-100G|Safe zones at the ends."],
 savage:["Antilight|Grounded under yellow.","100 Gs|Into tank circles.","Gravitational Manipulation|Supports float, DPS ground.","Probe / Epicenter|Run to the edge of the stopped probe.","Long Drop|Knockback spreads.","Evilsphere|Swap and mitigate. Enrage ~10:15."]}},
 {n:"Halicarnassus",sub:"O3",key:"The Playing Field: stand on your role's tile.",d:{
 normal:["Ribbit|Frog cone; get behind.","Spellblade Thunder III|Line.","Spellblade Holy|Spread/stack.","Blizzard III → Fire III|Circle then donut.","The Playing Field|Role tiles.","Sand maze|Reach the portal."],
 savage:["Spellblade Holy (Pole Shift)|Positions swap.","Queen's Waltz|Varies by arena.","Playing Field + The Game|Fill by role.","Oink / Ribbit / Squelch|Stack, face away, look away.","Place Token|Off-tank pulls add.","Haste / Dimensional Wave|Dodge the follow-up. Enrage 11:20."]}},
 {n:"Exdeath",sub:"O4 · Normal, and Savage (Exdeath + Neo Exdeath)",key:"Void Blizzard: keep moving; void Fire: minimise actions.",d:{
 normal:["Blizzard|Normal = step off; void = keep moving.","Thunder|Buster; void = stun.","Fire|Spreads; void = Pyretic.","Doom|Esuna.","Vacuum Wave / Holy|Knockback; stack.","The Decisive Battle|Head, black holes, flare."],
 savage:["Exdeath · Dualcast Blizzard/Fire|Clock spreads.","Exdeath · Thunder III|Swap.","Exdeath · Black Hole / Holy|Edge rotation then stack.","Neo Exdeath · Almagest|Heavy healing.","Neo Exdeath · Edge of Death|Opposite your Wound.","Neo Exdeath · Grand Cross Alpha/Delta|Positions and gazes.","Enrage|Exdeath ~4:50; Neo ~12:45."]}}
]},
{exp:"Stormblood",type:"Raid",inst:"Omega: Sigmascape (O5–O8)",lv:70,il:"Normal: i325 · Savage: i340–350",rl:["Normal Raids"],patch:"4.2",bosses:[
 {n:"Phantom Train",sub:"O5",key:"Diabolical Headlamp: line up behind the target, any distance.",d:{
 normal:["Ghost Block|Leave squares before walls form.","Head-On Collision|Retreat to the back.","Spotlights|Lead into ghosts.","Diabolical Headlamp|Line stack.","Diabolical Whistle|Lure ghosts into lights.","Diabolical Light|Drop far."],
 savage:["Encumber|Keep a block or two.","Saintly Beam|Dodge spotlights.","Diabolic Whistle|Knockback protection or lure ghosts.","Head On|Back of the platform.","Diabolic Wind|Spread sides, stack centre.","Enrage|~10:00."]}},
 {n:"Demon Chadarnook",sub:"O6",key:"Paint the matching sketch before each Possession.",d:{
 normal:["Demonic Howl|Raidwide.","Demonic Shear|Tankbuster.","Fire|Brush the fire canvas.","Earth|Brush for a flying mount.","Water|Make a boulder and hide.","Prey|Keep moving."],
 savage:["Demonic Storm|Healer stack.","Poltergeist|Healer gaze timing.","Demonic Pain|Tank–DPS tethers.","Last Kiss|Pass by touch.","Possession combos|Paint in order.","Lullaby|Siren sketch timing. Enrage 10:45."]}},
 {n:"Guardian",sub:"O7",key:"Chakra Burst: every circle needs a player.",d:{
 normal:["Magitek Ray|Line.","Arm & Hammer|Buster.","Shockwave|Knockback.","Chakra Burst|Eight circles.","Ultros program|Chain cannon.","Bomb Deployment|Step on the brighter wire."],
 savage:["Atomic Ray|DPS spread then return.","Missile / Aura Cannon|Prey and bleed targets.","Load (Bibliotaph)|Two groups of four.","Bomb Deployment|Defuse correctly.","Viral Weapon / Aether Rot|Pass Rot five times. Enrage ~12:15."]}},
 {n:"Kefka",sub:"O8 · Normal, and Savage (Kefka + God Kefka)",key:"Question-mark telegraphs are tricks: do the opposite.",d:{
 normal:["Hyper Drive|Tankbuster.","Blizzard Blitz|Donut or circle.","Flagrant Fire|Four spreads.","Thrumming Thunder|Lines.","Timely Teleport|Behind the second circle.","Trick attacks|Opposite response.","Graven Image|Tower gazes."],
 savage:["Kefka · Mana Charge / Release|Stored spells.","Kefka · Jester's Antics|Reverses mechanics.","God Kefka · Heartless Angel|Heal to full.","God Kefka · Celestriad|Supports stack, DPS spread.","God Kefka · Wings of Destruction|Tanks closest and farthest.","God Kefka · Forsaken|Towers, puddles, shared busters. Enrage Light of Judgment."]}}
]},
{exp:"Stormblood",type:"Raid",inst:"Omega: Alphascape (O9–O12)",lv:70,il:"Normal: i355 · Savage: i370–380",rl:["Normal Raids"],patch:"4.4",bosses:[
 {n:"Chaos",sub:"O9",key:"Dark Crystal: destroy it before Dark Aether hits 100.",d:{
 normal:["Chaotic Dispersion|Buster.","Damning Edict|180° frontal.","Implosions|Unmarked then marked.","Inferno|Centre circle; spread inside.","Cyclone|Centre knockback.","Dark Crystal|DPS check."],
 savage:["Knock Down|Stacks and flares by role.","Elemental phases|Inferno, Cyclone, Tsunami, Earthquake debuffs.","Umbra Smash|Opposite corner.","Big Bang|Earth phase: DPS take exactly one hit.","Fiendish Orbs|Tank tethers. Enrage ~8:40."]}},
 {n:"Midgardsormr",sub:"O10",key:"Two horizontal spins = point-blank; horizontal→vertical = donut; two vertical = plus.",d:{
 normal:["Ambient Aether|Spin combos.","Ice-Storm|Puddles to corners.","Cauterize|Dash across half.","Exaflare|Behind the first.","Northern Cross|Sliding ice.","Protostar|Kill adds."],
 savage:["Vertical / horizontal spins|Face boss north; clock spots.","Akh Morn / Tail End|Stack; swaps.","Thunderstorm|Spreads.","Death from Below|Debuffed tank holds aggro.","Immortal Keys / Ancient Dragon|Arcane Bulwark.","Enrage|Endless Akh Morn after 10:00."]}},
 {n:"Omega",sub:"O11",key:"Wave Cannon: find Larboard (left) or Starboard (right), then follow the 180° turn.",d:{
 normal:["Atomic Ray|Raidwide.","Mustard Bomb|Tankbuster.","Ballistic Impact|Spreads leave fire.","Wave Cannon|Side beams.","Peripheral Synthesis|Rocket Punch wall.","Electric Slide|Stack."],
 savage:["Flame Thrower + Ballistic Missile|Rotate into gaps.","Peripheral Synthesis|Collide opposite colours.","Storage Violation|Looper towers, chains apart.","Blaster|Off-tank tether to a corner.","Pantokrator / Wave Cannon Kyrios|Supports first lasers, DPS second.","Enrage|Loop."]}},
 {n:"Omega-M & Omega-F",sub:"O12 · Normal, and Savage phase 1",key:"Firewall splits the raid: hit only the form your debuff allows.",d:{
 normal:["Solar Ray|Buster with splash.","Program Alpha|Spreads then stack.","Efficient Bladework|Point-blank.","Subject Simulation|Knockback; stay close.","Optimized Fire III / Blizzard III|Spreads and cross.","Laser Shower|Kill both in time.","Firewall|Split."],
 savage:["Suppression|Optical Unit lines.","Beyond Defense / Pile Pitch|Spread from marked, others stack.","Superliminal Motion|Group behind, spread.","Fundamental Synergy|Odd away, even stay.","Optimized Meteor / Cosmo Memory|Tank LB or heavy mitigation."]}},
 {n:"Final Omega",sub:"O12 Savage final phase · Savage only",key:"Hello, World: no more than three Critical Overflow, five Overflow Debuggers.",d:{savage:[
  "Hello, World / Critical Error|Pre-planned debuff positions.",
  "Patch|Break tethers one at a time.",
  "Archive Peripheral|Orange left, blue right.",
  "Archive All / Delta Attack|Kill the arm unit, spread, regroup.",
  "Cascading Latent Defect|Underflow carriers to towers.",
  "Enrage|Ion Efflux ~10:30."]}}
]},
/* ───────── STORMBLOOD ALLIANCE RAIDS (Return to Ivalice) ───────── */
{exp:"Stormblood",type:"Alliance Raid",inst:"The Royal City of Rabanastre",lv:70,il:"i305 · 24 players",rl:["Alliance Raids"],patch:"4.1",bosses:[
 {n:"Mateus, the Corrupt",key:"Breathless: reset stacks in Flume Toad air pockets; 10 kills.",d:{normal:["Unbind / White Whisper|Pop spheres before the dancer.","Blizzard III pillars|Destroy or become snowmen.","Blizzard IV|Proximity.","Suffocation|Air pockets.","Azure Guards|Separate and kill."]}},
 {n:"Hashmal, Bringer of Order",key:"Extreme Edge burns one side: go to the other.",d:{normal:["Quake IV|Raidwide.","Jagged Edge|Keep moving.","Earth Hammer / Falling Rocks|Opposite side.","Extreme Edge|Edge burn.","Towers / Command Tower|Avoid drops; destroy Command Tower."]}},
 {n:"Rofocale",key:"Trample: stand in the middle of a loop of the figure-8 or outside it.",d:{normal:["Chariot / Crush Helm / Crush Weapon|Charge, buster, circles.","Trample|Figure-8 charge.","Embrace|Radius bigger than shown.","Dark Geas|Toggle circles in time.","Heavenly Subjugation|Kill Archaeodemons."]}},
 {n:"Argath Thadalfus",key:"Divine face: turn away and move. Demon face: face him and stand still.",d:{normal:["Faces|Turn and Flee checks.","Shards of Emptiness|Destroy quickly.","Unrelenting|Cones away from tank.","Judgment Blade / Coldblood|Bleed squares; proximity.","Transfiguration wall|Edge zombifies."]}}
]},
{exp:"Stormblood",type:"Alliance Raid",inst:"The Ridorana Lighthouse",lv:70,il:"i335 · 24 players",rl:["Alliance Raids"],patch:"4.3",bosses:[
 {n:"Famfrit, the Darkening Cloud",key:"Dark Cannonade: pair with exactly one other marked player.",d:{normal:["Tide Pod|Tankbuster.","Tsunami|Knockback cone; follow the amphora.","Darkening Rainfall|Kill Dark Rain adds.","Dark Cannonade|Pair to avoid the toss."]}},
 {n:"Belias, the Gigas",key:"Time Eruption: fast hands explode first.",d:{normal:["Charges|Centre tile.","Time Eruption|Clock order.","The Hand of Time|Avoid tethers.","Gigas adds|Separate and kill.","Time Bomb|Rotate meteors."]}},
 {n:"Construct 7",key:"Computation Mode: step into circles that divide your HP (or are prime).",d:{normal:["Destroy|Tankbuster.","Pulverize / Compress|Circle then line.","Dispose|Untelegraphed rotating cleave; get behind.","Computation Mode|Divisibility check.","Construct 7.1|Alliance-specific adds."]}},
 {n:"Yiazmat",key:"Magnetic Lysis: stand in the opposite +/- zone; levitating players die to Cyclone.",d:{normal:["Rake|Tankbuster.","Stone Breath|Petrifying cone.","Magnetic Lysis|Opposite charge.","Cyclone|Stay above 50%.","Solar Storm|Kill adds."]}}
]},
{exp:"Stormblood",type:"Alliance Raid",inst:"The Orbonne Monastery",lv:70,il:"i365 · 24 players",rl:["Alliance Raids"],patch:"4.5",bosses:[
 {n:"Mustadio",key:"Handgonne hits one side then the other.",d:{normal:["Energy Burst|Raidwide.","Arm Shot|Tankbuster.","Leg Shot|Mines under three players.","Left / Right Handgonne|Side cleave then the other.","Ballistic Missile|One per alliance."]}},
 {n:"Agrias",key:"Judgment Blade: stand in a Shieldbearer pillar and face the boss.",d:{normal:["Judgment Blade|Holy Shield.","Thunder Slash|Tank cone.","Cleansing Strike|Pulled alliance kills souls.","Heavenly Judgment|Shield and Sword actions.","Divine Ruination|Tethered players shield."]}},
 {n:"The Thunder God",key:"Holy Sword: in ground = inner arc; sideways = outer arc; raised = avoid marked platforms.",d:{normal:["Holy Sword|Three variants.","Duskblade|Three per circle.","Shadowblade|Don't overlap spheres.","Crush Armor|Pass the tank tether.","Cleansing Strike|Heal to full."]}},
 {n:"Ultima, the High Seraph",key:"Grand Cross: one safe square.",d:{normal:["Holy IV / Auralight|Ice walls.","Grand Cross|Safe square.","Demi-summons|Kill before ultimates.","Ultimate Illusion|Inside the barrier.","Cataclysm|Maze."]}}
]},
/* ───────── STORMBLOOD ULTIMATES ───────── */
{exp:"Stormblood",type:"Ultimate",inst:"The Unending Coil of Bahamut (Ultimate)",lv:70,il:"Synced i345",rl:[],patch:"4.11",note:"Condensed phase overview. Use a full guide and an agreed strat for progression.",bosses:[
 {n:"Twintania",sub:"Phase 1",key:"Neurolinks let you survive Hatch and catch Generate orbs.",d:{ultimate:["Neurolink|Place three.","Death Sentence|Swap.","Liquid Hell|Ranged baits at the edge.","Fireball / Twisters|Stack; drop at edge.","Enrage|~3:00."]}},
 {n:"Nael deus Darnus",sub:"Phase 2",key:"Quotes are the only warning: learn the pairs.",d:{ultimate:["Quotes|Dynamo, Chariot, Beam, Dive.","Heavensfall|Away from centre.","Dragon debuffs|Ice/fire cancel; thunder spread; doom puddles.","Cauterize|Edge divebombs.","Ravensbeak|Swap."]}},
 {n:"Bahamut Prime",sub:"Phase 3",key:"Each trio (Quickmarch, Blackfire, Fellruse, Heavensfall, Tenstrike, Grand Octet) has its own pattern.",d:{ultimate:["Trios|Learn each.","Twisters|Light parties.","Aetheric Profusion|Neurolinks.","Gigaflare|Mitigate."]}},
 {n:"Twintania & Nael",sub:"Phase 4 · Teraflare",key:"Kill both close together.",d:{ultimate:["Split tanks|One boss each.","Quotes|Four-attack sequences.","Busters|Swap.","Flames of Rebirth|Revive with buff if both die in time."]}},
 {n:"Golden Bahamut",sub:"Phase 5",key:"Morn Afah: untelegraphed stack; mitigate or tank LB.",d:{ultimate:["Morn Afah|Stack.","Akh Morn|Tank invulns later.","Exaflare|Move into the first's safe area.","Enrage|Don't lose Phoenix's Blessing."]}}
]},
{exp:"Stormblood",type:"Ultimate",inst:"The Weapon's Refrain (Ultimate)",lv:70,il:"Synced i375",rl:[],patch:"4.31",note:"Condensed phase overview. Use a full guide and an agreed strat for progression.",bosses:[
 {n:"Garuda",sub:"Phase 1",key:"Thermal Low: three stacks wipe; clear in the Gigastorm bubble or Mesohigh tether.",d:{ultimate:["Spiny Plume|Tank it.","Satin Plumes|Kill before Sleep.","Thermal Low|Manage stacks.","Wicked Tornado|Out then into the hitbox."]}},
 {n:"Ifrit",sub:"Phase 2",key:"Infernal Nails: each needs two Eruptions; kill order sets later Crimson Cyclones.",d:{ultimate:["Spawn|Safe cardinals beside him.","Infernal Nails|Kill order.","Searing Wind|Healer to edge.","Flaming Crush|Stack."]}},
 {n:"Titan",sub:"Phase 3",key:"Granite Gaols: break before Granite Sepulchre.",d:{ultimate:["Geocrush|Opposite side.","Rock / Mountain Buster|Tank combo.","Upheaval|Knocked behind rocks.","Gaols|Free trapped players.","Landslide / Tumult|Dodge lines."]}},
 {n:"Lahabrea",sub:"Phase 4",key:"Limit Breaks are given: caster LB3 for bits, healer LB3 for Blight, melee LB3 on Lahabrea.",d:{ultimate:["Pillars|Stack centre.","Magitek Bits|Caster LB3.","Blight|Healer LB3.","Lahabrea|Melee LB3."]}},
 {n:"The Ultima Weapon",sub:"Phase 5",key:"Ultima needs tank LB3.",d:{ultimate:["Ultima|Tank LB3.","Viscous Aetheroplasm|Soak orbs.","Ultimate Suppression|Push before 49.9%.","Enrage|Ultima Aether 100%."]}}
]},
/* ───────── STORMBLOOD EXPLORATION (Eureka) ───────── */
{exp:"Stormblood",type:"Exploration",inst:"Eureka Anemos",lv:70,il:"Elemental Lv 1–20",rl:[],patch:"4.25",note:"Notorious Monsters spawn from killing their spawn mob and work like boss FATEs, with a 2-hour cooldown. Gold rank and an elemental level no more than one below the NM's needed for full rewards. One card per NM, with its spawn mob in the subtitle.",bosses:[
 {n:"Sabotender Corrido",sub:"NM · Lv 1 · Wind · spawn: Flowering Sabotender",key:"Needle attacks deal set damage; keep HP topped up.",d:{normal:["Cactus Crush|Hit on the tank.", "30,000 / 100,000 Needles|Set damage based on the needle count; the bigger one hurts a lot, so heal up before it lands.", "Other abilities|Countless Needles (effect not confirmed).", "Model|Sabotender.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"The Lord of Anemos",sub:"NM · Lv 2 · Water · spawn: Sea Bishop",key:"Inhale pulls you in, then Flood hits around it: get back out.",d:{normal:["Cross Attack|Hit on the tank.", "Water III|Circle AoE.", "Inhale / Flood|Pull-in followed by a point-blank AoE; move out after the pull.", "Other abilities|Benight (effect not confirmed).", "Model|Kraken.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"Teles",sub:"NM · Lv 3 · Wind · spawn: Anemos Harpeia",key:"Watch for the Suffering cones.",d:{normal:["Fourfold / Eightfold Suffering|Several cone AoEs around it (four, then eight).", "Hysteric Voice|Raidwide.", "Tornado|Circle AoE.", "Model|Siren.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"The Emperor of Anemos",sub:"NM · Lv 4 · Wind · spawn: Darner",key:"Cleanse poison.",d:{normal:["Venom|Poison; cleanse.", "Cursed Sphere|Circle AoE.", "Other abilities|Incubus (effect not confirmed).", "Model|Gadfly.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"Callisto",sub:"NM · Lv 5 · Earth · spawn: Val Bear",key:"Unbearable Cloud is a lingering cloud; keep out of it.",d:{normal:["Champ|Hit on the tank.", "Unbearable Cloud|Cloud AoE; stay out.", "Other abilities|Mind of its Own (effect not confirmed).", "Model|Bear.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"Number",sub:"NM · Lv 6 · Lightning · spawn: Pneumaflayer",key:"Kill the Void Garm adds it summons.",d:{normal:["Big Hug|Hit on the tank.", "Void Call: Void Garm|Summons adds; kill them.", "Eerie Soundwave|Raidwide (removes buffs elsewhere).", "Model|Mantis.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"Jahannam",sub:"NM · Lv 7 · Wind · spawn: Typhoon Sprite (Gales)",key:"Ancient Aero I–III are bigger each time: III is a heavy raidwide.",d:{normal:["Tornado|Circle AoE.", "Ancient Aero / II / III|Escalating wind AoEs; III hits the whole area.", "Model|Anila.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"Amemet",sub:"NM · Lv 8 · Fire · spawn: Abraxas",key:"Razor Scales is a big cone: stay behind.",d:{normal:["Overbite|Hit on the tank.", "Primordial Roar|Raidwide.", "Razor Scales|Large cone at a player.", "Other abilities|Expell (effect not confirmed).", "Model|Vinegaroon.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"Caym",sub:"NM · Lv 9 · Ice · spawn: Stalker Ziz",key:"Double Hex Eye is a gaze: look away.",d:{normal:["Sanguine Slash|Frontal cone.", "Double Hex Eye|Gaze; look away.", "Other abilities|Knowing Gleam, Quick Release (effect not confirmed).", "Model|Mirrorknight.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"Bombadeel",sub:"NM · Lv 10 · Earth · spawn: Traveling Gourmand (night)",key:"Heavy Scrapline is a big frontal: stand behind.",d:{normal:["Grand Spike / Grand Toss|Hits on the tank.", "Heavy Scrapline|Frontal cone.", "Pandemic|Spreads debuffs.", "Other abilities|Heavy Toss (effect not confirmed).", "Model|Goobbue.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"Serket",sub:"NM · Lv 11 · Earth · spawn: Khor Claw",key:"Cleanse poison from Venom Storm and Venom Shot.",d:{normal:["Impale|Hit on the tank.", "Venom Storm|Poison AoE.", "Venom Shot|Poison on a player.", "Tremblor|Raidwide.", "Model|Karlabos.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"Judgmental Julika",sub:"NM · Lv 12 · Ice · spawn: Henbane",key:"Stay out of the front: Bad Breath stacks many debuffs.",d:{normal:["Vine Probe|Frontal line.", "Offal / Extremely Bad Breath|Frontal cone that stacks debuffs; stand behind.", "Schizocarps: Explosive Dehiscence|Seed adds that explode; kill or avoid.", "Model|Morbol.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"The White Rider",sub:"NM · Lv 13 · Lightning · spawn: Duskfall Dullahan (night)",key:"Hall of Sorrow is a raidwide; Valfodr charges a player.",d:{normal:["Geirrothr|Frontal cone.", "Valfodr|Charge at a player with knockback.", "Hall of Sorrow|Raidwide.", "Void Call|Summons adds (Death Sprite, Glory Crier, Venusian Eye); kill them.", "Model|Odin.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"Polyphemus",sub:"NM · Lv 14 · Ice",key:"Two hands on the swing = huge circle, get far away.",d:{normal:["100-tonze Swipe|Frontal cone.", "10,000-tonze Swing|Large point-blank; get out.", "Eye of the Beholder|C-shaped AoE; stand behind or on the safe side.", "Glower|Line at a player.", "Other abilities|Predatorial Instinct (effect not confirmed).", "Model|Cyclops.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"Simurgh's Strider",sub:"NM · Lv 15 · Wind",key:"The song attacks put you to sleep; spread and heal.",d:{normal:["Dread Dive|Hit on the tank.", "Horde Lullaby|Sleep.", "Giga / Tera Scream|Raidwides; Tera is bigger.", "Other abilities|Massacre Elegy (effect not confirmed).", "Model|Gagana.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"King Hazmat",sub:"NM · Lv 16 · Fire",key:"Sap drops chasing puddles: keep moving.",d:{normal:["Scalding Scolding|Frontal cone.", "Sap|Puddles that chase you; keep moving.", "Big Burst|Big explosion.", "Bombshell Drop|Summons bombs; kill or avoid.", "Model|Bomb (Progenitor).", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"Fafnir",sub:"NM · Lv 17 · Fire",key:"Ultimate Terror is a donut: hug the boss.",d:{normal:["Dragon Breath|Frontal cone.", "Spike Flail|Rear cone.", "Heavensfall|Circles at players; move away.", "Ultimate Terror|Donut; get in close.", "Model|Dragon (Tioman).", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"Amarok",sub:"NM · Lv 18 · Ice",key:"Stay out of the tail and the front.",d:{normal:["Predator Claws|Hit on the tank.", "Slabber|Frontal cone.", "Hound out of Hell / Tail Blow|Charge; rear knockback.", "Lightning Bolt / Shock|Circles at players.", "Other abilities|Infernal Gate / Infernal Trinity (effect not confirmed).", "Model|Cerberus.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"Lamashtu",sub:"NM · Lv 19 · Wind",key:"Forced marches: face so the march carries you to safety.",d:{normal:["Right / Left Tentacle|Side cleaves.", "Ink Cloud|AoE that blinds.", "Death Rings|Ring AoE.", "Morbid Advance / Retreat / Left Turn / Right Turn|Forced march in that direction.", "Model|Calofisteri.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"Pazuzu",sub:"NM · Lv 20 · Wind",key:"Cloud of Locusts = point-blank (get out); Plague of Locusts = donut (get in).",d:{normal:["Camisado|Tankbuster.", "Cloud of Locusts|Point-blank AoE.", "Plague of Locusts|Donut AoE.", "Dread Wind|Raidwide.", "Other abilities|Boon Void, Tartarean Storm (effect not confirmed).", "Model|Diabolos Hollow.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}}
]},
{exp:"Stormblood",type:"Exploration",inst:"Eureka Pagos",lv:70,il:"Elemental Lv 20–35",rl:[],patch:"4.36",note:"Notorious Monsters; same rules as Anemos.",bosses:[
 {n:"The Snow Queen",sub:"NM · Lv 20 · Ice · spawn: Yukinko",key:"Kill the bomb adds before Hypothermal Combustion.",d:{normal:["Snow Squall|Raidwide.", "Bomb adds|Hypothermal Combustion explodes; kill them.", "Model|Flurry.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"Taxim",sub:"NM · Lv 21 · Earth · spawn: Demon of the Incunable (night)",key:"Kill the Rotting Bandages adds.",d:{normal:["Glass Punch|Hit on the tank.", "Catapult|Hit on a player.", "Adds|Rotting Bandages; kill them.", "Other abilities|Butterfly Float (effect not confirmed).", "Model|Corse.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"Ash Dragon",sub:"NM · Lv 22 · Fire · spawn: Blood Demon",key:"Stand to the side: breath at the front, Tail Drive at the back.",d:{normal:["The Look|Hit on the tank.", "Lithic Breath|Frontal cone.", "Tail Drive|Rear cone.", "Adds|Rocksplitters; kill them.", "Model|Dahak.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"Glavoid",sub:"NM · Lv 23 · Earth · spawn: Val Worm",key:"Spread when it's underground.",d:{normal:["Sand Breath|Frontal cone.", "Sand Pillar|Circle AoE.", "Sand Cyclone|Damage over time on a player.", "Earthquake|Raidwide.", "Adds|Poison Breath; kill them.", "Model|Worm.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"Anapos",sub:"NM · Lv 24 · Water · spawn: Snowmelt Sprite (fog)",key:"Inhale then Flood: move out after the pull.",d:{normal:["Water III|Circle AoE.", "Inhale / Flood|Pull-in then point-blank.", "Horde Lullaby|Sleep.", "Other abilities|Aetherial Spark / Massacre Elegy (effect not confirmed).", "Model|Water elemental.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"Hakutaku",sub:"NM · Lv 25 · Fire · spawn: Blubber Eyes",key:"Hex Eye and Death Ray come from the eyes; keep out of the front.",d:{normal:["Firestorm / Fire Whirl|AoEs around it.", "Death Ray|Line at a player.", "Hex Eye|Gaze; look away.", "Gold rating|Carry a Hakutaku Eye Cluster for the special drop.", "Other abilities|Live Candle / Live Pyre (effect not confirmed).", "Model|Hecteyes.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"King Igloo",sub:"NM · Lv 26 · Ice · spawn: Huwasi",key:"White Death freezes: keep moving.",d:{normal:["White Death|Freezing attack.", "Adds|Snowblind.", "Other abilities|Snowcap, Bergy Bit (effect not confirmed).", "Model|Phoebad.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"Asag",sub:"NM · Lv 27 · Lightning · spawn: Wandering Opken",key:"Bellows is a frontal cone.",d:{normal:["Body Blow|Hit on the tank.", "Bellows|Frontal cone.", "Void Thunder II|Circle AoEs.", "Model|Guud Suud.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"Surabhi",sub:"NM · Lv 28 · Earth · spawn: Pagos Billygoat",key:"Crumbling Crust drops circles around it.",d:{normal:["Earthquake|Raidwide.", "Heave|Frontal cone.", "Crumbling Crust|Circles around the boss.", "Disorienting Groan|Knockback.", "Adds|Bombs; kill before Hypothermal Combustion.", "Other abilities|Khoomii (effect not confirmed).", "Model|Yak.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"King Arthro",sub:"NM · Lv 29 · Water · spawn: Val Snipper (fog)",key:"Watery Grave traps players in bubbles; free them.",d:{normal:["Bubble Shower|Frontal cone.", "Riptide|Pull-in.", "Watery Grave|Bubble prison; break players out.", "Flood|Point-blank.", "Poison Gas / Bubble|Poison and water AoEs.", "Hundred Fists|Rapid hits on the tank.", "Other abilities|High Water (effect not confirmed).", "Model|Crab.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"Mindertaur & Eldertaur",sub:"NM · Lv 30 · Earth / Wind · spawn: Lab Minotaur",key:"Two bosses; look away from Mortal Ray.",d:{normal:["Triclip|Tankbuster.", "Mow|Poison cone.", "Frightful Roar|Point-blank.", "Mortal Ray|Doom gaze; look away.", "Blood Brother|Can be silenced.", "Other abilities|Cerulean Ray (effect not confirmed).", "Model|Taurus.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"Holy Cow",sub:"NM · Lv 31 · Wind / Water · spawn: Elder Buffalo",key:"Kill the Glory adds; Ancient Holy orbs explode.",d:{normal:["Bull Charge|Charge at a player.", "Shrill Shriek|Raidwide.", "Scratch|Hit on the tank.", "Adds|Glory.", "Luminous Guillotine / Swinge|Frontal attacks.", "Ancient Holy orbs|Explode; avoid.", "Other abilities|Apotheosis / Advent / Aetheric Burst (effect not confirmed).", "Model|Dzo.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"Hadhayosh",sub:"NM · Lv 32 · Lightning · spawn: Lesser Void Dragon (thunder)",key:"Wild Horn is a cleave; Ecliptic Meteor is the big one, so mitigate.",d:{normal:["Wild Horn|Cleaving tankbuster; face away.", "Trounce|Large cone.", "Comet / Cometeor|Circles at players.", "Wild Bolt|Raidwide.", "Ecliptic Meteor|Massive damage.", "Other abilities|Death Spin (effect not confirmed).", "Model|Behemoth.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"Horus",sub:"NM · Lv 33 · Fire · spawn: Void Vouivre (heat waves)",key:"Liquid Hell drops fire puddles on a player: keep moving.",d:{normal:["Death Sentence|Tankbuster.", "Liquid Hell|Chain of puddles under a player.", "Superflare / Solar Flare|Big AoEs.", "Other abilities|Blazing Trail, Sunstroke / Scarlet Thread (effect not confirmed).", "Model|Twintania.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"Arch Angra Mainyu",sub:"NM · Lv 34 · Wind · spawn: Gawper",key:"Gaze attacks: look away.",d:{normal:["Mortal Gaze|Doom gaze; look away.", "Ghastly Gaze|Gaze; look away.", "Summons|Gusting Gauge and Cross Reaper adds.", "Other abilities|Stare, Purple Haze (effect not confirmed).", "Model|Angra Mainyu.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"Copycat Cassie",sub:"NM · Lv 35 · Ice · spawn: Morbols (Blizzards)",key:"Inhale pulls you to Ravening Maw: get out after the pull.",d:{normal:["Extensible Tendrils|Line AoEs.", "Inhale / Ravening Maw|Pull-in then bite.", "Miasmic / Freezing / Chilling Vapor|Breath AoEs.", "Spawn|Her spawn mobs (Morbols) use untelegraphed Bad Breath.", "Other abilities|Griplash, Ice Cream / Basic Vomit / Pulp (effect not confirmed).", "Model|Cuchulainn.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"Louhi",sub:"NM · Lv 35 · Ice",key:"Dextral Icecleave hits the right side, Sinistral the left.",d:{normal:["Dextral / Sinistral Icecleave|Right- or left-side cleave.", "Cold Kick|Hit on the tank.", "Snowstorm / Snowbloom|AoEs.", "Adds|Three add waves (Rustbite, Rain of Pain, Raging Strikes).", "Other abilities|Windlash, Supercool (effect not confirmed).", "Model|Cruise Chaser.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}}
]},
{exp:"Stormblood",type:"Exploration",inst:"Eureka Pyros",lv:70,il:"Elemental Lv 35–50",rl:[],patch:"4.45",note:"Notorious Monsters; same rules as Anemos.",bosses:[
 {n:"Leucosia",sub:"NM · Lv 35 · Water · spawn: Pyros Bhoot (night)",key:"Morbid Advance/Retreat force you forward or back: face away from the danger.",d:{normal:["Morbid Advance / Retreat|Forced march forward or back.", "Stream of Filth|Line AoE.", "Eyes of Anguish|Gaze; look away.", "Other abilities|Debilitating Spout, Ram (effect not confirmed).", "Model|Lorelei.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"Flauros",sub:"NM · Lv 36 · Lightning · spawn: Thunderstorm Sprite (thunder)",key:"Crackle Hiss at the front, Spike Flail at the back: stand to the side.",d:{normal:["Crackle Hiss|Wide frontal cleave.", "Spike Flail|Rear cone.", "Critical Rip|Tankbuster.", "Wild Charge|Charge; others stand in front of the target to share it.", "Erratic Blaster|Prey on a player.", "Electric Burst / Electrification|Raidwide.", "Model|Imdugud.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"The Sophist",sub:"NM · Lv 37 · Earth · spawn: Pyros Apanda",key:"Ripper Claw at the front, Tail Smash at the back.",d:{normal:["Ripper Claw|Frontal cleave.", "Tail Smash|Rear cleave with knockback.", "Bone Shaker|Raidwide.", "Adds|Head Down, Oil Breath and Fireball adds.", "Other abilities|Wisdom of the Ancients / Void Call (effect not confirmed).", "Model|Apanda.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"Graffiacane",sub:"NM · Lv 38 · Ice · spawn: Valking",key:"Heat Gaze fires cones and donuts.",d:{normal:["Heat Gaze|Cone and donut AoEs.", "Slapstick|Raidwide.", "Knockout|Tankbuster.", "Other abilities|Tag (effect not confirmed).", "Model|Calcabrina.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"Askalaphos",sub:"NM · Lv 39 · Wind · spawn: Overdue Tome (wind)",key:"Familiars add earth, wind and water attacks.",d:{normal:["Soporific|Sleep.", "On the Properties of Darkness|Hit on the tank.", "Familiars|Wind (Ruffle), Earth (Earthstorm), Water (Water III).", "Other abilities|On the Properties of Gravity, Check Out (effect not confirmed).", "Model|Strix.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"Grand Duke Batym",sub:"NM · Lv 40 · Earth · spawn: Dark Troubadour (night)",key:"Kill the adds; Condemnation is a cone.",d:{normal:["Demonic Flame / Dark Orb|Hits on players.", "Dark Dome|Circle AoE.", "Condemnation|Cone AoE.", "Adds|Dark II casters; kill them.", "Other abilities|Hundredfold Gale (effect not confirmed).", "Model|Demon.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"Aetolus",sub:"NM · Lv 41 · Lightning · spawn: Islandhander",key:"Stay out of the tail.",d:{normal:["Flamespitter / Levinspitter|Frontal AoEs.", "Tail Swipe|Rear cone.", "Adds|Lightning Bolt.", "Other abilities|Moldy Gale (effect not confirmed).", "Model|Einhander.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"Lesath",sub:"NM · Lv 42 · Fire · spawn: Bird Eater",key:"Molten Silk is a 270° cleave: stand directly behind.",d:{normal:["Molten Silk|270° cleave; behind is safe.", "Realm Shaker|Point-blank.", "Other abilities|Borehole, Magma (effect not confirmed).", "Model|Lava Scorpion.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"Eldthurs",sub:"NM · Lv 43 · Fire · spawn: Pyros Crab",key:"Spin is point-blank, then a donut.",d:{normal:["Buffet|Frontal cone.", "Spin|Point-blank, then donut.", "Fiery Sneeze|Frontal.", "Adds|Bombs; kill before Detonation.", "Other abilities|Scoop / Mash (effect not confirmed).", "Model|Yeti.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"Iris",sub:"NM · Lv 44 · Water · spawn: Northern Swallow",key:"Electric Whorl: stand inside its hitbox.",d:{normal:["Hydrocannon|Line AoE.", "Electric Swipe|Rear cone.", "Immersion|Raidwide.", "Electric Whorl|Ring; inside the hitbox is safe.", "Body Slam|Circle at a player.", "Adds|Hydroburst and Lightning Bolt.", "Other abilities|Hydrowave (effect not confirmed).", "Model|Cetus.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"Lamebrix Strikebocks",sub:"NM · Lv 45 · Earth · spawn: Illuminati Escapee",key:"Gobspin: it spins, then stops; stay clear.",d:{normal:["Gobspin Whooshdrops|Spin attack.", "Bomb Toss|Stack.", "Iron Kiss|Circle AoE.", "Adds|Drill Cannons, Bomb Spread, Needle Burst.", "Other abilities|Gobswipe Conklops, Gobfire Shootypops (effect not confirmed).", "Model|Goblin.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"Dux",sub:"NM · Lv 46 · Lightning · spawn: Matanga Castaway (thunder)",key:"Kill the Spindly Finger adds.",d:{normal:["Howl|Raidwide.", "Spark / Shock|Lightning AoEs.", "Rake|Hit on the tank.", "Adds|Spindly Finger and Lightning Bolt.", "Other abilities|Plasma Drop (effect not confirmed).", "Model|Nue.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"Lumber Jack",sub:"NM · Lv 47 · Earth · spawn: Pyros Treant",key:"Two parts: beetle and treant.",d:{normal:["Rhino Attack / Rhino Wrecker|Hits on the tank.", "Rhino Guard|Defence buff.", "Orogeny / Subsidence / Rise and Fall|Earth AoEs.", "Acorn Bomb|Circle at a player.", "Arboreal Storm|Raidwide.", "Adds|Mildew.", "Other abilities|Backhand Blow (effect not confirmed).", "Model|Beetle & Treant.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"Glaukopis",sub:"NM · Lv 48 · Fire · spawn: Val Skatene",key:"Edicts and their 'Little' versions pair Rush, Tornado and Breakga.",d:{normal:["Rush / Tornado / Breakga|Basic attacks; Breakga petrifies.", "Other abilities|Rush / Tornado / Breakga Edict, Little Rush / Tornado / Breakga, Wilder Fire (effect not confirmed).", "Model|—.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"Ying-Yang",sub:"NM · Lv 49 · Water · spawn: Pyros Hecteyes",key:"Dark-element attacks.",d:{normal:["Sadistic Attack|Hit on the tank.", "Dark|Circle AoE.", "Bloodburst|Raidwide.", "Other abilities|Ravening Shadow (effect not confirmed).", "Model|Leshy.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"Skoll",sub:"NM · Lv 50 · Ice · spawn: Pyros Shuck (Blizzards)",key:"Storm Within = point-blank (get out); Storm Without = donut (get in).",d:{normal:["Heavensward Howl|Frontal cone.", "The Storm Within|Point-blank.", "The Storm Without|Donut.", "Ecliptic Bite|Tankbuster.", "Endless Frost|Rotating cones.", "Other abilities|Hoarhound Halo / Ancient Glacier / Arcane Howl / Mocking Howl (effect not confirmed).", "Model|Fenrir.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}},
 {n:"Penthesilea",sub:"NM · Lv 50 · Fire · spawn: Val Bloodglider (heat waves)",key:"Kill the moth adds.",d:{normal:["Dramatic Flare / Raging Inferno|Raidwides.", "Burning Lover / Ardent Caress|Hits on the tank.", "Rain of Ire / Fire Flies|AoEs.", "Adds|Moth to the Flame and Ungentle Breeze.", "Other abilities|Center of Convection, Tongues of Flame / Thrown Kiss (effect not confirmed).", "Model|Scathach.", "Source|Ability names from a community Eureka NM sheet; what each does is cross-referenced from the same abilities in other fights, so confirm in game."]}}
]},
{exp:"Stormblood",type:"Exploration",inst:"Eureka Hydatos",lv:70,il:"Elemental Lv 50–60",rl:[],patch:"4.55",note:"Notorious Monsters plus Ovni, which opens The Baldesion Arsenal.",bosses:[
 {n:"Hydatos Notorious Monsters",sub:"12 NMs",key:"Gold rank on Ovni lets you enter the Baldesion Arsenal.",d:{normal:[
  "Khalamari|Lv 50 · Water · Xzomit.",
  "Stegodon|Lv 51 · Earth · Hydatos Primelephas.",
  "Molech|Lv 52 · Ice · Val Nullchu.",
  "Piasa|Lv 53 · Wind · Vivid Gastornis.",
  "Frostmane|Lv 54 · Fire · Northern Tiger.",
  "Daphne|Lv 55 · Water · Dark Void Monk.",
  "King Goldemar|Lv 56 · Lightning · Hydatos Wraith (night).",
  "Leuke|Lv 57 · Earth · Tigerhawk.",
  "Barong|Lv 58 · Fire · Laboratory Lion.",
  "Ceto|Lv 59 · Water · Hydatos Delphine.",
  "Provenance Watcher|Crystalline Provenance.",
  "Ovni|Random, ~every 30 min during Umbral Turbulence. It periodically powers itself up: Dispel the buff, or its raidwides one-shot most non-tanks.","Tristitia (Arsenal event)|Shields itself with a buff that counters damage and raises its own; Dispel it before attacking."]}}
]},
{exp:"Stormblood",type:"Exploration",inst:"The Baldesion Arsenal",lv:70,il:"Elemental Lv 60 · up to 56 players",rl:[],patch:"4.55",note:"No Phoenix Downs; revives only from Spirit of the Remembered, Sacrifice L or LB3. 25-minute timer extended by clearing rooms.",bosses:[
 {n:"Art, the Black Spear",key:"Legendary Geas: the floor turns black — stand still.",d:{normal:["Thricecull|Tankbuster.","Acallam na Senorach|Raidwide.","Legendcarver / Legendspinner|Point-blank or donut plus spear copies.","Spiritcall|Marked players stack.","Gravity Ball|Proximity plus chaser.","Legendary Geas|Don't move."]}},
 {n:"Owain, the White Spear",key:"Mythcall spears matching his element copy Elemental Magics.",d:{normal:["Elemental Shift|Fire or ice orbs.","Mythcall|Spear ring.","Elemental Magics|Point-blank plus matching spears.","Hands|Look at your hand to root it, then approach."]}},
 {n:"Raiden",key:"Ultimate Zantetsuken: kill every sword before the cast ends.",d:{normal:["Shingan|Buster.","Spirits of the Fallen|Raidwide.","Thundercall|Edge electrified.","Ame-no-Sakahoko|Move away from his old spot.","Whirling Zantetsuken|Donut; get in.","Lancing Bolt / Ultimate Zantetsuken|Kill swords.","Bitter Barbs|Break chains."]}},
 {n:"Absolute Virtue",key:"True Virtue: six teams clear the side rooms to remove it.",d:{normal:["True Virtue|Side rooms.","Meteor|Raidwide.","Auroral Wind|Buster.","Medusa Javelin|Cone.","Eidos / Hostile Aspect|Stand by opposite-colour pools.","Impact Stream|Opposite half.","Wyvern adds|Kill quickly."]}},
 {n:"Proto Ozma",key:"Black Hole: at least one player per lit panel or the rest are ejected.",d:{normal:["Sphere form|Black Hole panels.","Spiked form|Point-blank then stack.","Triangle form|Column; side walkways; Acceleration Bombs.","Cube form|Donut; off-tanks pop orbs.","Ozmashades|Shades act first."]}}
]},
/* ───────── LIMITED JOB: BLUE MAGE — MASKED CARNIVALE ───────── */
{exp:"Stormblood",type:"Limited Job",lj:"Blue Mage",inst:"The Masked Carnivale: Stages 1–25",lv:50,il:"Solo · level synced",rl:[],patch:"4.5",note:"Unlocked via The Real Folk Blues as a level 50 Blue Mage (Ul'dah). Death fails the stage; spell loadout is locked once you start. General combos: Ram's Voice + Ultravibration; Off-guard + Whistle + Moon Flute + Final Sting.",bosses:[
 {n:"Stage 1 · All's Well That Starts Well",sub:"Arena Slime, Arena Dullahan",key:"Intro stage; everything can be Vibe Checked.",d:{normal:["Tips|Kill enemies and dodge AoEs."]}},
 {n:"Stage 2 · Much Ado About Pudding",sub:"Puddings, Marshmallow, Bavarois, Gelato, Flan, Licorice",key:"Match each slime's weakness shown above its head.",d:{normal:["Weakness|Elemental filler per slime; one at a time.","Golden Tongue|Interrupt with Flying Sardine."]}},
 {n:"Stage 3 · Waiting for Golem",sub:"Zipacna",key:"Interrupt Obliterate.",d:{normal:["Damage|Water filler.","Obliterate|Must interrupt.","Earthen Heart|Interrupt or avoid."]}},
 {n:"Stage 4 · Gentlemen Prefer Swords",sub:"Bat, Wolf; Kreios",key:"Interrupt Magitek Field.",d:{normal:["Act 1|Kill while staying healed.","Act 2|Dodge Grand Strike lines; Electrogenesis or Bomb Toss."]}},
 {n:"Stage 5 · The Threepenny Turtles",sub:"Brotherly Gil Turtle",key:"1000 Needles ignores their damage reduction.",d:{normal:["Damage|1000 Needles or Doom."]}},
 {n:"Stage 6 · Eye Society",sub:"Catoblepas, Mandragora; + Arena Eye",key:"Get blinded by Teary Twirl to ignore gazes.",d:{normal:["Blind|Immune to gazes.","Stone|Still hits; keep healed."]}},
 {n:"Stage 7 · A Chorus Slime",sub:"Ice Sprite, Lava Slime; Gladiatorial Node",key:"Needs Sticky Tongue: detonate Lava Slimes next to Ice Sprites and Nodes.",d:{normal:["Act 1|Kill the slime by the sprites.","Act 2|Pull each slime to a sprite.","Act 3|Three slimes per node, out of line of sight."]}},
 {n:"Stage 8 · Bomb-edy of Errors",sub:"Snoll, Bomb; Progenitrix, Cherry Bomb",key:"Be in combat with the Progenitrix before detonating bombs.",d:{normal:["Act 1|Blow the nearest Cherry Bomb.","Act 2|Blue bombs freeze it; interrupt Burst."]}},
 {n:"Stage 9 · To Kill a Mockingslime",sub:"Guimauve",key:"Elemental filler per slime; interrupt Golden Tongue.",d:{normal:["Puddings|Kill quickly.","Dark|Avoid."]}},
 {n:"Stage 10 · A Little Knight Music",sub:"Crom Dubh",key:"Interrupt King's Will (or let it go three times for Giant Slayer).",d:{normal:["King's Will|Grows him.","Black Nebula|Interrupt."]}},
 {n:"Stage 11 · Some Like It Excruciatingly Hot",sub:"Arena Gas Bomb",key:"Any damage interrupts Fulmination.",d:{normal:["Act 1|Hit them to interrupt.","Act 2|Centre and spam Hydro Pull."]}},
 {n:"Stage 12 · The Plant-om of the Opera",sub:"Roselet; Hydnora",key:"Needs Ice Spikes and Faze.",d:{normal:["Act 1|Ice Spikes then aggro Roselets.","Act 2|Ice Spikes on Spore Sac; stun Infallible Fumes."]}},
 {n:"Stage 13 · Beauty and a Beast",sub:"Haagenti, Vodoriga; Carmilla",key:"Kill the Succubus add before Carmilla eats it.",d:{normal:["Act 2|Dodge, look away, interrupt Beguiling Mist."]}},
 {n:"Stage 14 · Blobs in the Woods",sub:"Arena Jam",key:"Needs Loom: be behind a wall when Jams explode.",d:{normal:["Act 2|Loom out of sight during The Last Song."]}},
 {n:"Stage 15 · The Me Nobody Nodes",sub:"Bestial Node",key:"Sleep the Shabti during its damage buff.",d:{normal:["High Voltage|Interrupt.","Serpents|Kill."]}},
 {n:"Stage 16 · Sunset Bull-evard",sub:"Cyclops; Tikbalang",key:"Diamondback through 1111-tonze Swing.",d:{normal:["Act 1|Keep distance; Reflux helps.","Act 2|Sidestep cones; Loom if at the edge."]}},
 {n:"Stage 17 · The Sword of Music",sub:"Right & Left Claw; Kreios",key:"Each claw reflects one damage type: use the other.",d:{normal:["Act 2|Kill claws then Kreios; avoid Magitek Ray."]}},
 {n:"Stage 18 · Midsummer Night's Explosion",sub:"Manticore, Firesand Keg",key:"Lead Manticores past barrels and detonate them.",d:{normal:["Act 2|Two Manticores hurt each other; keep together."]}},
 {n:"Stage 19 · On a Clear Day You Can Smell Forever",sub:"Reflective Rebekkah",key:"She reflects magic: use physical spells.",d:{normal:["Act 2|Ink Jet reflects blind onto you, ignoring Hot Hips gazes."]}},
 {n:"Stage 20 · Miss Typhon",sub:"Typhon; Ultros",key:"Diamondback for Snort.",d:{normal:["Act 2|Interrupt Imp Song.","Act 3|Buffed Final Sting kills Typhon without tentacles."]}},
 {n:"Stage 21 · Chimera on a Hot Tin Roof",sub:"Imp; Apademak",key:"Ram's Voice = move away, Dragon's Voice = move close.",d:{normal:["Imps|Interrupt Void Blizzard; avoid Icefall."]}},
 {n:"Stage 22 · Here Comes the Boom",sub:"Grenade; The Forefather",key:"Sticky Tongue a Gas Bomb onto The Forefather to stun him.",d:{normal:["Act 2|Avoid Sap; kill the Grenade before Ignition."]}},
 {n:"Stage 23 · Behemoths and Broomsticks",sub:"Kronprinz Behemoth",key:"Diamondback through Ecliptic Meteor.",d:{normal:["Dodges|Charybdis tornadoes, Trounce cones, Comet waves."]}},
 {n:"Stage 24 · Amazing Technicolor Pit Fiends",sub:"Viking, Magus; Scribe; Epilogi",key:"Magic on the Viking, physical on the Magus.",d:{normal:["Act 2|Interrupt Silence; cleanse Condensed Libra.","Act 3|Kill the Magi each Bone Shaker."]}},
 {n:"Stage 25 · Dirty Rotten Azulmagia",sub:"Azulmagia",key:"Ice Spikes = use magic; Repelling Spray = use physical.",d:{normal:["Act 1|Ram/Dragon voices, Plaincracker donuts.","Act 2|Kill swords before they explode.","Act 3|Loom out of Meteor."]}}
]},
{exp:"Stormblood",type:"Limited Job",lj:"Blue Mage",inst:"The Masked Carnivale: Stages 26–30",lv:60,il:"Solo · level synced",rl:[],patch:"5.15",note:"Level 60 stages. Rewards: 5,000 gil, 100 Allied Seals and 80 Poetics each. Death fails the stage.",bosses:[
 {n:"Stage 26 · Papa Mia",sub:"Arena Mirrorknight; Papa Humbaba · 5:00 / 4:00",key:"Bring Eerie Soundwave to strip buffs and Exuviation for Electrocution.",d:{normal:[
  "Act 1 · Alternate Plumage|Remove its mitigation buff with Eerie Soundwave.",
  "Act 1 · Caber Toss|Interrupt with Flying Sardine.",
  "Act 2 · Damage|Weak to earth, resists lightning: Plaincracker, Mountain Buster, Surpanakha.",
  "Act 2 · Raw Instinct|Eerie Soundwave removes his crit buff.",
  "Act 2 · Void Thunder II|Thunderheads drift toward you and fire bolts; stay well clear.",
  "Act 2 · Dad Jokes|Red marker then knockback; don't get pushed into electricity, or use Surecast.",
  "Act 2 · Void Thunder III|Arena-wide plus Electrocution; cleanse with Exuviation."]}},
 {n:"Stage 27 · Lock up Your Snorters",sub:"Typhon · 4:00 / 2:20",key:"Never let a bomb or Fireball hit the Magitek Explosive.",d:{normal:[
  "Magitek Explosive|Wipes if its timer ends or it's hit; destroy it fast with water spells.",
  "Bombs|Knock them away with Protean Wave or Snort, or pull them to Typhon with Hydro Pull.",
  "Snort|Typhon pushes bombs; keep them on the far side from the Explosive.",
  "Bomb AoE|Standing in one fails the stage.",
  "No-Explosive waves|Knock bombs into Typhon for heavy damage.",
  "Spells|Protean Wave, Hydro Pull, Water Cannon, Snort."]}},
 {n:"Stage 28 · Dangerous When Dead",sub:"Durinn · 6:00 / 5:00",key:"Mega Death: stand in the Necrobane puddle; leave it for Helblar Shriek and Funeral Pyre.",d:{normal:[
  "Doom Impending|Heal to full before it ends (Incurable follows).",
  "March of the Draugar|Four add groups; all fire-weak and freezable (Ram's Voice). Kill the two big slow ones.",
  "Cackle|Interrupt with Flying Sardine.",
  "Necrobane / Mega Death|Be in the puddle for Mega Death.",
  "Helblar Shriek / Funeral Pyre|Out of the puddle.",
  "Brainstorm + Bilrost Squall|Forced march; stand centre and face so it carries you to the safe zone.",
  "Spells|Mimic healer + Pom Cure, Eruption, Fire Angon, Saintly Beam, Bristle + Breath of Magic + Song of Torment."]}},
 {n:"Stage 29 · Red, Fraught, and Blue",sub:"Shikigami of the Pyre; Shikigami of the Undertow · 8:00 / 7:00",key:"Interrupt every Fluid Swing; cleanse Throttle with Exuviation.",d:{normal:[
  "Act 1 · Damage|Weak to wind (Sonic Boom); resists fire.",
  "Act 1 · Pyretic|Do nothing for 2s (precast Apokalypsis to channel through).",
  "Act 1 · Sea of Flames / Pillar of Flame|Walk away from eruptions.",
  "Act 1 · Rush|Move far away.",
  "Act 1 · Flare Star|Edges; bait lines past the tornadoes.",
  "Act 2 · Damage|Weak to lightning (Glower, Electrogenesis); resists water.",
  "Act 2 · Throttle|Exuviation before it hits 0.",
  "Act 2 · Ferrofluid|Same sign to the boss, opposite sign to the edge.",
  "Act 2 · Watery Grasp|Kill the Left Hand, interrupt, then kill the Right Hand.",
  "Act 2 · Big Splash|Diamondback.",
  "Act 2 · Cascade|Bait AoEs away from the vortexes."]}},
 {n:"Stage 30 · The Catch of the Siegfried",sub:"Siegfried (three acts) · 7:30 / 6:30",key:"Magic Drain reflects magic: use physical spells until it wears off.",d:{normal:[
  "Act 1 · Magic Drain|Physical damage (Drill Cannons).",
  "Act 1 · Ankle Graze|Bind; Exuviation.",
  "Act 1 · Hyperdrive|Point-blank then three chasers.",
  "Act 1 · Magitek Explosive + Rubber Bullet|Use the knockback to reach the safe corner.",
  "Act 2 · Law of the Torch|Three cones; stand in the gaps.",
  "Act 2 · Swiftsteel|Stay close or Surecast.",
  "Act 2 · Sparksteel|Fire waves; stay near centre.",
  "Act 2 · Shattersteel|Go to the wedge without a crystal.",
  "Act 3 · Clones|Ice-, wind- and fire-weak clones; use Bristle when he raises his sword. Focus Siegfried unless chasing the bonus.",
  "Bonus · The Celestium's Finest|Kill all three shades before Siegfried; avoid Electrocution."]}}
]},
{exp:"Stormblood",type:"Limited Job",lj:"Blue Mage",inst:"The Masked Carnivale: Stage 31",lv:70,il:"Solo · level synced",rl:[],patch:"5.45",note:"Rewards: 10,000 gil, 200 Allied Seals, 160 Poetics.",bosses:[
 {n:"Stage 31 · Anything Gogo's",sub:"Gogo, Master of Mimicry (two acts) · 7:40 / 6:50",key:"During Mimic, don't target Gogo: use only non-targeted spells.",d:{normal:[
  "Act 1 · Mimic|Targeted spells get countered; precast Apokalypsis or Phantom Flurry.",
  "Act 1 · Mimicked Imp Song|Interrupt (Bad Breath or Flying Sardine) or Doom kills you.",
  "Act 1 · Doom Impending|Heal to full first.",
  "Act 1 · Sap|Keep moving.",
  "Act 1 · Bunshin|Stay central and circle him.",
  "Act 1 · Raw Instinct|Eerie Soundwave.",
  "Act 2 · Fire III → Blizzard III|Stand still for Pyretic, already away from him.",
  "Act 2 · Flare / Holy|Diamondback halfway through Flare.",
  "Act 2 · Meteor|Third Meteor is lethal: Diamondback near centre (or Mighty Guard at max HP).",
  "Act 2 · Charybdis|Stand between tornadoes.",
  "Act 2 · Icestorm + Thunder III|Cleanse Heavy, bait bolts into the gaps.",
  "Bonus · Pure Azure|Take no Vulnerability Up stacks."]}}
]},
{exp:"Stormblood",type:"Limited Job",lj:"Blue Mage",inst:"The Masked Carnivale: Stage 32",lv:80,il:"Solo · level synced",rl:[],patch:"6.45",note:"Rewards: 10,000 gil, 200 Allied Seals, 160 Poetics. Bring healer Mimicry, Pom Cure and Exuviation.",bosses:[
 {n:"Stage 32 · A Golden Opportunity",sub:"Goldor (two acts) · 7:40 / 6:50",key:"Interrupt Goldor Blizzard III every time.",d:{normal:[
  "Act 1 · Blizzard III|Interrupt, or Deep Freeze into Fire III kills you.",
  "Act 1 · Fire III / Blast|Chasing AoEs; line on you.",
  "Act 1 · Slimy Summon|Ice-weak slime; kill with Ram's Voice + Ultravibration before Rupture.",
  "Act 1 · Quake|Circle then two donuts.",
  "Act 1 · Goldor Fire + Aero III|Kill one Ball of Fire (wind-weak) and use the knockback gap.",
  "Act 1 · Gravity|Heavy then two Blasts; Loom out.",
  "Act 1 · Thunder III|Gobskin prevents Electrocution.",
  "Act 2 · Golems|Checkerboard lanes plus knockback.",
  "Act 2 · Marionettes|Unavoidable cones; Diamondback where fewest overlap.",
  "Act 2 · Cyclops|Inhale then Swing; get out.",
  "Act 2 · Gold Fever|Break the crystal with physical spells (skip for the bonus).",
  "Act 2 · Goldor Rush|Mighty Guard + Diamondback, or dodge with Sprint.",
  "Bonus · Going for Gold|Don't destroy the crystal; no Sprint; all six elements."]}}
]}
]);
window.FF = (window.FF || []).concat([
/* ───────── A REALM REBORN DUNGEONS ───────── */
{exp:"A Realm Reborn",type:"Dungeon",inst:"Sastasha",lv:15,il:"Drops i17",rl:["Leveling"],patch:"2.0",bosses:[
 {n:"Chopper",key:"Charged Whisker paralyses: step out of the circle.",d:{normal:["Charged Whisker|Point-blank circle that applies Paralysis; step out."]}},
 {n:"Captain Madison",key:"Two fights: the second adds Scurvy Dogs at 50%.",d:{normal:["Heavy Swing / Fast Blade|Light hits on the tank.","Sandslinger|Accuracy Down; cleanse.","Crew / Scurvy Dogs|Adds join; kill them quickly."]}},
 {n:"Denn the Orcatoothed",key:"Click bubbling grates to stop adds spawning.",d:{normal:["True Thrust|Light tank hit.","Hydroball|Cone that Silences; face it away.","Bubbling grates|Interact to stop adds, or ignore and burn the boss."]}}
]},
{exp:"A Realm Reborn",type:"Dungeon",inst:"The Tam-Tara Deepcroft",lv:16,il:"Drops i17",rl:["Leveling"],patch:"2.0",bosses:[
 {n:"Void Soulcounter",sub:"After each mini-boss group",key:"Interrupt Enthunder.",d:{normal:["Enthunder|Buffs autos with lightning; interrupt.","Dark Orb|Light tank hit.","Condemnation|Cone; avoid."]}},
 {n:"Galvanth the Dominator",key:"Kill the tethered imps to make him vulnerable.",d:{normal:["Mind Blast|Point-blank paralysis; step out.","Drain Touch|Lifesteal on the tank.","Inconspicuous Imps|Tethered imps make the boss invincible; kill them.","Mitelings / Skeleton Soldiers|Extra adds."]}}
]},
{exp:"A Realm Reborn",type:"Dungeon",inst:"Copperbell Mines",lv:17,il:"Drops i17",rl:["Leveling"],patch:"2.0",bosses:[
 {n:"Kottos",key:"Lumbering Leap: three big circles; the safe spot is at the edge.",d:{normal:["Grand Slam|Tankbuster.","Lumbering Leap|Three circles; small edge safe spot.","Colossal Slam|Cone on a player.","Catapult|Rock on a player; heal through."]}},
 {n:"Ichorous Ire",key:"At 50% it splits into Drips that each cast Burst.",d:{normal:["Fluid Spread|Tankbuster.","Syrup|Circles under everyone; move.","Divide / Burst|Split at 50%; avoid each circle."]}},
 {n:"Gyges the Great",key:"Gigantic Swing is a donut: get into the hitbox.",d:{normal:["Grand Slam|Tankbuster.","Gigantic Swing|Donut; get in.","Gigantic Smash|Centre plus five outer circles; find the gap.","Colossal Slam|Cone on a player."]}}
]},
{exp:"A Realm Reborn",type:"Dungeon",inst:"Halatali",lv:20,il:"Drops i22",rl:["Leveling"],patch:"2.0",bosses:[
 {n:"Firemane",key:"Fireflow: step into the first set of cones once it resolves.",d:{normal:["Fire II|Circle.","Fireflow|Two sets of cardinal cones.","Burning Bolt|Tankbuster."]}},
 {n:"Thunderclap Guivre",key:"Purple water = Hydroelectric Shock: get onto the dirt slopes.",d:{normal:["Electrify|Circle.","Levinfang|Tankbuster.","Hydroelectric Shock|Leave the water."]}},
 {n:"Pit Peiste",sub:"Optional",key:"Spawns if you approach the central chest; often skipped.",d:{normal:["Rudis Beak adds|Kill with the boss."]}},
 {n:"Tangata",key:"Burning Ward at ~80% and ~60%: kill the wisps to drop the shield.",d:{normal:["Straight Punch|Tankbuster.","Burning Ward|Kill torch wisps.","Plain Pound|Circle then two donuts; step in after the first.","Firewater|Circle."]}}
]},
{exp:"A Realm Reborn",type:"Dungeon",inst:"The Thousand Maws of Toto-Rak",lv:24,il:"Drops i26",rl:["Leveling"],patch:"2.0",bosses:[
 {n:"Coeurl O' Nine Tails",sub:"Fought twice",key:"Step away from Acid Mist and cure Poison.",d:{normal:["Acid Mist|Nearby poison; step out.","Warden's Whip adds|Second fight only; kill them."]}},
 {n:"Graffias",key:"At 50% kill the Comesmites, then break the tail for a Vulnerability Up window.",d:{normal:["Leaden puddles|Slow; avoid.","Realm Shaker|Point-blank; out.","Silkscreen|Line on a player.","Sticky Web / Pod Burst|Targeted player moves away from the pod.","Comesmites + tail|Kill adds, then the tail.","Deadly Thrust|Poison puddle; drop it away."]}}
]},
{exp:"A Realm Reborn",type:"Dungeon",inst:"Haukke Manor",lv:28,il:"Drops i28–30",rl:["Leveling"],patch:"2.0",bosses:[
 {n:"Manor Claviger",key:"Stun Dark Mist; interrupt Void Fire II.",d:{normal:["Cleave / Sweet Steel|Face away; stay out of the front.","Void Fire II|Interrupt.","Dark Mist|Big point-blank; stun."]}},
 {n:"Manor Jester & Manor Steward",key:"Kill the Jester first.",d:{normal:["Ice Spikes (Jester)|Interrupt.","Soul Drain (Steward)|Point-blank; stun."]}},
 {n:"Lady Amandine",key:"Look away from the Manor Sentry's gaze.",d:{normal:["Sentry gaze|Look away, or stand between boss and Sentry.","Lady's Handmaiden|Gives Stoneskin; kill it.","Seduce|Walk slowly in; look away when it ends.","Void Fire III / Void Thunder III|Interrupt.","Dark Mist|Stun."]}}
]},
{exp:"A Realm Reborn",type:"Dungeon",inst:"Brayflox's Longstop",lv:32,il:"Drops i34",rl:["Leveling"],patch:"2.0",bosses:[
 {n:"Great Yellow Pelican",key:"Avoid Numbing Breath and cleanse Paralysis.",d:{normal:["Violet Back adds|Poison; cleanse.","Numbing Breath|Paralysis cone.","Hammer Beak|Tank hit."]}},
 {n:"Inferno Drake",key:"Stun Burning Cyclone.",d:{normal:["Levinfang / Levinshower|Uncast cone.","Tempest Biast|Add at 75%; tank it.","Blaze Spikes|Melee take recoil damage.","Burning Cyclone|Stun."]}},
 {n:"Hellbender",key:"Kill the Queer Bubble to free the bound player; Aiatar ends the fight.",d:{normal:["Bog Bubble|Circle on a player.","Stagnant Spray|Cone at the tank.","Peculiar Light|Point-blank Magic Vuln; out.","Effluvium|Bubble binds a player; kill it.","Aiatar|Arrives ~15%; avoid Touchdown."]}},
 {n:"Aiatar",key:"Toxic Vomit pods: dodge the first set, then step where they were.",d:{normal:["Salivous Snap|Tankbuster plus Poison.","Toxic Vomit|Two waves of pods.","Dragon Breath|Line plus Poison.","Esuna|Cure poison throughout."]}}
]},
{exp:"A Realm Reborn",type:"Dungeon",inst:"The Sunken Temple of Qarn",lv:35,il:"Drops i37",rl:["Leveling"],patch:"2.0",bosses:[
 {n:"Teratotaur",key:"Mortal Ray: step on a glowing plate to remove Doom, or stun the cast.",d:{normal:["Triclip|Tankbuster.","Dung Wespe|Kill before Final Sting.","Frightful Roar|Point-blank Vuln Up.","Mow|Poison cone.","Mortal Ray|Doom; use plates."]}},
 {n:"Temple Guardian",key:"Kill the Golem Soulstone to stun the golem and open a damage window.",d:{normal:["Golem Soulstone|Switch to it.","Rockslide / Boulder Clap|Frontal; avoid.","True Grit|Blind cone.","Obliterate|Raidwide.","Stone Skull|Knockback and stun."]}},
 {n:"Adjudicator",key:"Mythril Verges chain players: kill your Verge before Verge Pulse.",d:{normal:["Looming Judgment|Tankbuster.","Two Verges|Kill before Self-Destruct at 6 Haste stacks.","Four Verges|Break your chain.","Creeping Darkness|Raidwide.","Dark II|Big cone; stay near the boss.","Dark|Circle on a player."]}}
]},
{exp:"A Realm Reborn",type:"Dungeon",inst:"Cutter's Cry",lv:38,il:"Drops i37–40",rl:["Leveling"],patch:"2.0",bosses:[
 {n:"Myrmidon Princess",key:"Interrupt Silence; avoid Guard and Marshal cones.",d:{normal:["Stone II|Circle.","Mandible Bite|Frontal cone.","Silence|Interrupt.","Adds|Soldiers, Guard, Marshal (buffs the Princess)."]}},
 {n:"Giant Tunnel Worm",key:"Bottomless Desert pulls to centre: run out before it surfaces.",d:{normal:["Sandstorm|Frontal.","Sand Cyclone|DoT on a player.","Sand Pillar / Earthbreak|Spread while submerged.","Bottomless Desert|Leave the centre.","Sludge|Heavy DoT; cleanse."]}},
 {n:"Chimera",key:"Blue eyes = Ram's Voice (get out); violet eyes = Dragon's Voice (get in).",d:{normal:["Lion's Breath|Face away.","Ram's / Dragon's Breath|Side cones; stand behind.","Ram's Voice|Point-blank; out.","Dragon's Voice|Donut; in.","Cacophony|Marked player leads the orb away.","Lightning Storm|Two circles."]}}
]},
{exp:"A Realm Reborn",type:"Dungeon",inst:"The Stone Vigil",lv:41,il:"Drops i43",rl:["Leveling"],patch:"2.0",bosses:[
 {n:"Chudo-Yudo",key:"Stay behind the dragon.",d:{normal:["Rake|Tank hit.","Lion's Breath|Frontal burn.","Swinge|Cone that Silences and Pacifies."]}},
 {n:"Koshchei",key:"Typhoon: stand in front of a still whirlwind, then step behind the moving pair.",d:{normal:["Spiked Tail|Tankbuster.","Sonic Storm|Circle on a player.","Typhoon|Three, then four whirlwind lanes."]}},
 {n:"Isgebind",key:"Cauterize: leave the third of the arena that turns blue.",d:{normal:["Rime Wreath|Raidwide.","Frost Breath|Frontal cone.","Sheet of Ice|Circle plus Frostbite.","Cauterize|Leave the blue area.","Double Sheet of Ice|Chained circles; dodge.","Touchdown|Leave the centre."]}}
]},
{exp:"A Realm Reborn",type:"Dungeon",inst:"Dzemael Darkhold",lv:44,il:"Drops i46",rl:["Leveling"],patch:"2.0",bosses:[
 {n:"All-seeing Eye",key:"Void Matter: centre first, then dodge out.",d:{normal:["Blustering Blink|Frontal line.","Void Matter|Wall circles then centre.","Eyes on Me|Room-wide."]}},
 {n:"Taulurd",key:"Spread for the slaves' Firewater.",d:{normal:["Deepvoid Slaves|Untargetable ranged adds.","Firewater|Four circles.","Boulderdash|Raidwide.","Double Smash / Elbow Drop|Frontal cones."]}},
 {n:"Batraal",key:"Kill crystals fast; aim Desolation away from the party.",d:{normal:["Grim Fate|Frontal tank hit.","Grim Halo|Point-blank; out.","Crystals|Make him invulnerable; kill.","Desolation|Lethal column.","Hellssend|~30%: Desolation at will."]}}
]},
{exp:"A Realm Reborn",type:"Dungeon",inst:"The Aurum Vale",lv:47,il:"Drops i49",rl:["Leveling"],patch:"2.0",bosses:[
 {n:"Locksmith",key:"Eat a Morbol Fruit to keep Gold Lung at 2 stacks or fewer.",d:{normal:["Hundred Lashings|Heavy tank hit.","Gold Rush|Stacking DoT; eat fruit.","Gold Dust|Circle; spread."]}},
 {n:"Coincounter",key:"Stun the 100-tonze swings.",d:{normal:["10-Tonze Swipe|Frontal.","100-Tonze Swipe / Swing|Cone or huge circle; stun.","Glower|Paralysing laser.","Eye of the Beholder|C-shaped AoE; behind or close on the safe side."]}},
 {n:"Miser's Mistress",key:"Use Morbol Fruits to clear Burrs and Bad Breath debuffs.",d:{normal:["Bad Breath|Debuff cone; keep away.","Vine Probe|Frontal column.","Hooked Burrs / Burr Burrow|Fruit at 2–3 stacks.","Fruit adds (50%)|Kill immediately."]}}
]},
{exp:"A Realm Reborn",type:"Dungeon",inst:"The Wanderer's Palace",lv:50,il:"Drops i55",rl:["High-level Dungeons"],patch:"2.0",bosses:[
 {n:"Keeper of Halidom",key:"Inhale pulls you in: step out before Goobbue's Grief.",d:{normal:["Beatdown / Moldy Sneeze|Frontal.","Inhale|Pull; step out.","Goobbue's Grief|Melee poison.","Moldy Phlegm|Circle; heal down."]}},
 {n:"Giant Bavarois",key:"Kill White and Purple Bavarois first.",d:{normal:["Fire|Stun or move behind.","Amorphic Flail|Focused player runs.","Coloured adds|White Heavy, Purple Paralysis, Green DoT."]}},
 {n:"Tonberry King",key:"Don't kill Tonberry adds: each feeds Everybody's Grudge.",d:{normal:["Lateral Slash / Sharpened Knife|Mitigate.","Scourge of Nym|Hits anyone outside melee.","Everybody's Grudge|Damage per Rancor stack.","Tonberry Slashers|~25%; avoid and burn."]}}
]},
{exp:"A Realm Reborn",type:"Dungeon",inst:"Castrum Meridianum",lv:50,il:"Synced i60",rl:["Main Scenario"],patch:"2.0",bosses:[
 {n:"The Black Eft",key:"High-powered Magitek Ray is untelegraphed: stay off his front.",d:{normal:["Incendiary Support|Three raidwides.","Request Assistance|Adds.","Magitek Cannon|Big circle; move out.","Magitek Ray|Frontal line."]}},
 {n:"Magitek Vanguard F-1",key:"Thermobaric Strike: go to the opposite corner.",d:{normal:["Cermet Drill|Tankbuster.","Thermobaric Strike|Corner flare.","Hypercharge|Donut and circle safe spot.","Overcharge|Paralysis cone."]}},
 {n:"Livia sas Junius",key:"At 18% she spams Artificial Plasma: burn her.",d:{normal:["Aglaea Climb|Tankbuster.","Artificial Plasma|Raidwide.","Roundhouse|Out, then back in.","Infinite Reach|Line then side circles, four times.","Stunning Sweep / Angry Salamander|Safe edge or between lines.","Artificial Boost|Enrage spam."]}}
]},
{exp:"A Realm Reborn",type:"Dungeon",inst:"The Praetorium",lv:50,il:"Synced i60",rl:["Main Scenario"],patch:"2.0 · rebuilt 6.1",note:"Rebuilt in 6.1 as a 4-player duty with Duty Support.",bosses:[
 {n:"Mark II Magitek Colossus",key:"Spread for Laser Beta.",d:{normal:["Ceruleum Vent|Raidwide.","Prototype Laser Alpha|Travelling circles.","Prototype Laser Beta|Spread.","Grand Sword|Cone."]}},
 {n:"Nero tol Scaeva",key:"Keep away from the electrified edge; Augmented Suffering knocks back from centre.",d:{normal:["Spine Shatter|Tankbuster.","Iron Uprising|Cone knockback; stay behind.","Activate|Tethered Death Claw; kill it away from the group.","Augmented Shatter|Stack, then out.","Augmented Uprising|Big cone.","Augmented Suffering|Stand in the centre."]}},
 {n:"Gaius van Baelsar",key:"At 5% kill the four Phantom Gaius before Veni Vidi Vici reaches 100%.",d:{normal:["Innocence|Tankbuster.","Horrida Bella|Raidwide.","Terminus Est / Phantasmata|Line AoEs; move between copies.","Festina Lente|Stack.","Ductus|Moving circles.","Hand of the Empire|Spread.","Phantom Gaius|Kill adds."]}}
]},
{exp:"A Realm Reborn",type:"Dungeon",inst:"Amdapor Keep",lv:50,il:"Drops i55",rl:["High-level Dungeons"],patch:"2.0",bosses:[
 {n:"Lunatic Priest & Psycheflayer",key:"Interrupt Void Fire III; kill marionettes on spawn.",d:{normal:["Void Fire II / III|Circle; interrupt III.","Canker|Esuna.","Mind Melt|Avoid Psycheflayer.","Marionettes|Stone (column), Marble (interrupt), Megalith (hug the wall)."]}},
 {n:"Demon Wall",key:"Liquefy middle = stand at edges; sides = stand in centre; Repel = stay centre.",d:{normal:["Liquefy|Heavy or Slow lanes.","Repel|Knockback toward the edge.","Murder Hole|Light hit.","Bloodlappers|Stun Thunderstorm; kill."]}},
 {n:"Anantaboga",key:"Imminent Catastrophe: hide behind a statue.",d:{normal:["Tail Drive / Rotten Breath|Flank.","Imminent Catastrophe|Line of sight.","Plague Dance|Keep orbs away from statues.","Dark Helot|Terror Eye circle."]}}
]},
{exp:"A Realm Reborn",type:"Dungeon",inst:"Pharos Sirius",lv:50,il:"Drops i60",rl:["High-level Dungeons"],patch:"2.1",bosses:[
 {n:"Symond the Unsinkable",key:"Corrupting Crystal explodes at 3 stacks: run away from the group.",d:{normal:["Corrupting Crystal|Stacks from hits.","Corrupting Shot|Line.","Crystalline Shot|Expanding puddles; split.","Giga Slash|Knockback."]}},
 {n:"Zu",key:"Only kill one egg, and only when it's about to hatch.",d:{normal:["Eggs|Spotted eggs make tethering Cockerels.","Flying Frenzy|If several eggs die.","Sonic Boom|Airborne phase; move.","Heavy AoE|Heal."]}},
 {n:"Tyrant",key:"Burn it; AoE the sailors.",d:{normal:["Bombination|Point-blank; out.","Sailor adds|Tank and AoE."]}},
 {n:"Siren",key:"Deathly Verse: heal the charmed target to full within 12s.",d:{normal:["Zombie Sergeants|Bind on touch; kite.","Deathly Verse|Charm; heal to full.","Song of Torment|Bleed; Esuna.","Deathly Cadenza|Donut; stay on the centre grate.","Feral Lunge|Line.","Lunatic Voice|Interrupt or Esuna."]}}
]},
{exp:"A Realm Reborn",type:"Dungeon",inst:"Copperbell Mines (Hard)",lv:50,il:"Drops i60",rl:["High-level Dungeons"],patch:"2.1",bosses:[
 {n:"Hecatoncheir Mastermind",key:"Kill or stun Flambeau before it reaches the burning ground.",d:{hard:["Darkfire|Burns part of the bridge; move forward.","Flambeau|Kill or stun."]}},
 {n:"Gogmagolem & Biggy",key:"Drop the Waymaker Bomb in the golem's path.",d:{hard:["Waymaker Bomb|Carry from the device.","Black bombs|Run away.","Kindling Sprites|Kill.","Plaincracker|Tank cone.","Biggy|Kill fast; avoid big bombs."]}},
 {n:"Ouranos",key:"Searching for fodder: drop Crystallized Rock in the sand.",d:{hard:["Circular AoE|Avoid.","Giga adds|Kill.","Sand Worm|Place the rock.","Bottomless Desert|Pull plus damage if missed."]}}
]},
{exp:"A Realm Reborn",type:"Dungeon",inst:"Haukke Manor (Hard)",lv:50,il:"Drops i60",rl:["High-level Dungeons"],patch:"2.1",bosses:[
 {n:"Manor Jester",key:"Esuna Slow; kill the butlers.",d:{hard:["Void Blizzard|Slow.","Manor Butlers|Kill.","Ice patches|Avoid."]}},
 {n:"Ash",key:"Cleanse Abyssal Transfixion.",d:{hard:["Cleave|Avoid front.","Spirit cutters / swords|Dodge.","Abyssal Transfixion|Paralysis; Esuna.","Add|Kill."]}},
 {n:"Halicarnassus",key:"She absorbs adds: bring them to 0% first; hold her ~35% until Lady Amandine is dead.",d:{hard:["Void Fire III / Dark Mist|Move out.","Absorb + Blood Rain|Damage scales with the add's HP.","Lady Amandine|40%; use LB.","Beguiling Mist|Kill before the third cast."]}}
]},
{exp:"A Realm Reborn",type:"Dungeon",inst:"The Lost City of Amdapor",lv:50,il:"Drops i70",rl:["High-level Dungeons"],patch:"2.2",bosses:[
 {n:"Decaying Gourmand",key:"Kill the Voracious Maw to free the devoured player.",d:{normal:["Devour|Kill the Maw.","Moldy Phlegm|Pollen puddle.","Spore Cloud|Poison; cleanse."]}},
 {n:"Arioch",key:"Keep the Scale Flakes stacks on the tank.",d:{normal:["Ranch Wamoura|Kill to make Arioch targetable.","Plague Swipe|Cone.","Eerie Soundwave|Raidwide.","Green puddle|Move out."]}},
 {n:"Diabolos",key:"Use the doors to be Voidbound during Ruinous Omen.",d:{normal:["Door pairs|Teleport.","Ruinous Omen|Avoid via Voidbound.","Graviball|Lead away.","Ultimate Terror|Donut.","Nightmare|Sleep.","Camisado|Tankbuster."]}}
]},
{exp:"A Realm Reborn",type:"Dungeon",inst:"Halatali (Hard)",lv:50,il:"Drops i70",rl:["High-level Dungeons"],patch:"2.2",bosses:[
 {n:"Pyracmon",key:"Pull the lever for Mammet's Manawall before 1000 Tonze Swing.",d:{hard:["Mace swings|Two hands = away, one hand = through him.","Lasers|Dodge.","1000 Tonze Swing|Manawall."]}},
 {n:"Catoblepas",key:"Activate your Shadowy Orb for Gloam before Demonic Eye.",d:{hard:["Demonic Eye|Gloam.","Exposed eye|Burn before red.","Cone|Avoid."]}},
 {n:"Silent Moss, Franz, Langloisiert & U'linbho",key:"Kill the healer first.",d:{hard:["Lancer|Random targets.","Healer|Priority."]}},
 {n:"Mumuepo the Beholden & Narasimha",key:"Free chained allies with Thal's Scepter before Thal's Fury.",d:{hard:["Chains|Use the scepter.","Tail swipe|Melee.","Targeted circles|Move."]}}
]},
{exp:"A Realm Reborn",type:"Dungeon",inst:"Brayflox's Longstop (Hard)",lv:50,il:"Drops i70",rl:["High-level Dungeons"],patch:"2.2",bosses:[
 {n:"Illuminati Commander",key:"Intercept sniper tethers.",d:{hard:["Snipers|Swap tethers.","Spiked bombs|Cardinal lines.","Bomb Toss|Circle."]}},
 {n:"Magitek Vangob G-III",key:"Pull it out of ceruleum puddles before Oversurge.",d:{hard:["Oversurge|Puddles explode.","Drill Cannons|Line.","Career|Rush on a player.","Gliders|Kill."]}},
 {n:"Gobmachine G-VI",key:"Intermissions at 75/50/25%: avoid its path, then clear bombs from the middle.",d:{hard:["Flame Thrower|Tank cleave.","Bombardment|Circle.","Intermissions|Knock bombs out.","Giant Bomb|Kill; avoid centre."]}}
]},
{exp:"A Realm Reborn",type:"Dungeon",inst:"Hullbreaker Isle",lv:50,il:"Drops i80",rl:["High-level Dungeons"],patch:"2.3",bosses:[
 {n:"Sasquatch",key:"Drop a Banana Bunch to interrupt Chest Thump.",d:{normal:["Banana trees|One at a time.","Chest Thump|Raidwide.","Smallfoot Sifaka|Kill.","Stool Pelt|Circle."]}},
 {n:"Sjoorm",key:"Step into a Watery Grave bubble on time for Whirlpool.",d:{normal:["Upwell|Line.","Water Puddle|Move.","Watery Grave|Use for Whirlpool.","Tunnel / Surface Breach|Dodge."]}},
 {n:"Kraken",key:"World's End: drop the tornado at the far edge of another island.",d:{normal:["Waterspouts|Move platforms; Suppuration.","Kraken's Arms|Kill pairs.","Clearout|Donut; get in.","Tentacle|Priority; Scoop.","World's End|Drop away."]}}
]},
{exp:"A Realm Reborn",type:"Dungeon",inst:"The Tam-Tara Deepcroft (Hard)",lv:50,il:"Drops i80",rl:["High-level Dungeons"],patch:"2.3",bosses:[
 {n:"Liavinne",key:"Don't kill zombies yourself; the marked player leads them into the boss AoE.",d:{hard:["Zombie hordes|Kite.","Arrow marker|Run into the horde."]}},
 {n:"Spare Body",key:"Protect Paiyo Reiyo: intercept spirits.",d:{hard:["Nameless Spirits|Run through them.","Nameless Souls|Kill before centre.","Bleed zones|Boss at the edge."]}},
 {n:"Avere Bravearm",key:"Kill crawling zombies before they light the runes.",d:{hard:["Edda's circle|Stay out.","Demon lines|Dodge.","Zombies|Kill at the edges.","Red Wedding|Scales with lit runes."]}}
]},
{exp:"A Realm Reborn",type:"Dungeon",inst:"The Stone Vigil (Hard)",lv:50,il:"Drops i80",rl:["High-level Dungeons"],patch:"2.3",bosses:[
 {n:"Gorynich",key:"Kill adds away from the boss so he doesn't gain Haste.",d:{hard:["Swinge|Stay behind.","Rake|Tankbuster.","Lion's Breath|Frontal.","Adds|Kill; explode on death."]}},
 {n:"Cuca Fera",key:"Use cannons; rotate Spindly Finger stuns; stop firing on Diamondback.",d:{hard:["Iron Kiss / Spindly Finger|Damage and stun.","Diamondback|Reflects.","Hard Stomp|Stun.","Keep NPCs alive|Otherwise wipe."]}},
 {n:"Giruveganaus",key:"Ignores enmity; read the tells.",d:{hard:["Shoulder Tackle|Charge.","Tail Swipe|Rear.","Claw Swipe|Front.","Clone (~60%)|Burn the original.","Fireball|Circle."]}}
]},
{exp:"A Realm Reborn",type:"Dungeon",inst:"Snowcloak",lv:50,il:"Drops i90",rl:["High-level Dungeons"],patch:"2.4",bosses:[
 {n:"Wandil",key:"Keep moving to avoid Frozen stacks; 4 stacks stun you.",d:{normal:["Cold Wave|Circles.","Snow Drift|Keep moving.","Frost Bombs|Kill.","Deep Freeze|4 stacks."]}},
 {n:"Yeti",key:"Updrift launches you: pre-position away from the big snowballs.",d:{normal:["Buffet|Frontal.","Northerlies|Snowballs.","Updrift|Can't move.","Spin|Circle then donut.","Frozen Spike|Circle."]}},
 {n:"Fenrir",key:"Lunar Cry: hide behind an icicle, later the one that stays blue.",d:{normal:["Heavensward Roar|Frontal cone.","Ecliptic Bite|Tankbuster.","Thousand Year Storm|Raidwide.","Howling Moon / Lunar Cry|Hide."]}}
]},
{exp:"A Realm Reborn",type:"Dungeon",inst:"Sastasha (Hard)",lv:50,il:"Drops i90",rl:["High-level Dungeons"],patch:"2.4",bosses:[
 {n:"Karlabos",key:"Cleanse Slime before Tail Screw.",d:{hard:["Aqua Balls|Slime DoT; spread.","Prey|Pass to a DPS.","Tail Screw|To 1% HP; stun."]}},
 {n:"Captain Madison",key:"Kill adds at the centre.",d:{hard:["Captain's Guards|Kill.","Charge / gunshots|Burn him.","Add waves|AoE; caster LB."]}},
 {n:"Kraken",key:"Kill the Arms, ignore the Tentacles.",d:{hard:["Kraken + Tentacles|Hit Kraken.","Arms up|Kill Arms.","Ink Jet|Blind; Esuna."]}}
]},
{exp:"A Realm Reborn",type:"Dungeon",inst:"The Sunken Temple of Qarn (Hard)",lv:50,il:"Drops i90",rl:["High-level Dungeons"],patch:"2.4",bosses:[
 {n:"Damaged Adjudicator",key:"Attack the part with the red orb.",d:{hard:["Core|Break it; kill adds.","Sand whirlpools|Avoid.","Sand sphere|Edge."]}},
 {n:"Sabotender Emperatriz",key:"Burst her to interrupt 100,000 Needles.",d:{hard:["Adds|Kill.","3,000 Needles|Circles.","100,000 Needles|Damage check.","Guardia|Kill first."]}},
 {n:"Vicegerent to the Warden",key:"Avoid mummies: four Curse stacks mummifies you.",d:{hard:["Mummies|Avoid.","Sword strike|Run behind.","Tether|Stun."]}}
]},
{exp:"A Realm Reborn",type:"Dungeon",inst:"The Keeper of the Lake",lv:50,il:"Drops i100",rl:["High-level Dungeons"],patch:"2.5 · changed 6.2",bosses:[
 {n:"Einhander",key:"Avoid the glowing ceruleum tanks.",d:{normal:["Aero Blast|Raidwide.","Resounding Screech|Tanks glow; avoid.","Quick-firing Cannon|Line.","Heavy Swing|Tankbuster."]}},
 {n:"Magitek Gunship",key:"Don't walk in its fire trail.",d:{normal:["Flame Thrower|Cone.","Carpet Bomb|Circle.","Adds|Kill.","Fire puddles|Avoid."]}},
 {n:"Midgardsormr",key:"Animadversion: kill the Mirage Dragons before the gauge hits 100%.",d:{normal:["Admonishment|Wide line.","Inner / Outer Turmoil|Out or in.","Phantom Kin|Combined dodge.","Akh Morn|Stack.","Antipathy|Middle ring, then centre.","Condescension|Tankbuster."]}}
]},
{exp:"A Realm Reborn",type:"Dungeon",inst:"The Wanderer's Palace (Hard)",lv:50,il:"Drops i100",rl:["High-level Dungeons"],patch:"2.5",bosses:[
 {n:"Frumious Koheel Ja",key:"Kill the Fire Angon spears.",d:{hard:["Fire Angon|Spears stack a debuff."]}},
 {n:"Slithy Zolool Ja",key:"Claim useful totems before he recalls them.",d:{hard:["Totems|Damage up, cleanse, fire vuln, Heavy.","Toad hex|Toads take the cleanse totem.","Random fire|Spread stacks."]}},
 {n:"Manxome Molaa Ja Ja",key:"Kite him off banners and the Sacred Standard.",d:{hard:["Huge cone|Stay close.","Rotting Gas|Target away.","Banners / Sacred Standard|Kite.","Soul Douse|Heal Doom to full.","Sacred Idol|Kill."]}}
]},
{exp:"A Realm Reborn",type:"Dungeon",inst:"Amdapor Keep (Hard)",lv:50,il:"Drops i100",rl:["High-level Dungeons"],patch:"2.5",bosses:[
 {n:"Anchag",key:"Red marker: hide behind a statue.",d:{hard:["Red marker|Line of sight.","Random AoEs|Protect statues.","Rush|Avoid statues."]}},
 {n:"Boogyman",key:"Take Irradiance from the orb, then run to him to reveal him.",d:{hard:["Invisible|Irradiance.","Bloodmoon adds|Kill.","Split|Spread."]}},
 {n:"Ferdiad",key:"Kill tethered Wicked Jesters to stop the growing circle.",d:{hard:["Circular AoE|Edge.","Wicked Jesters|Kill.","Slime traps|Free.","Scythes|Move.","Cross lines|Dodge."]}}
]}
]);
window.FF = (window.FF || []).concat([
{exp:"Heavensward",type:"Dungeon",inst:"The Dusk Vigil",lv:51,il:"Drops i120",rl:["Leveling"],patch:"3.0",bosses:[
 {n:"Towering Oliphant",key:"Rout: someone stands between the boss and the marked player to share the line.",d:{normal:["Trunk Tawse|Tankbuster.","Rear|Point-blank; out.","Prehistoric Trumpet|Raidwide.","Rock of Ages|Marked player moves away.","Wooly Inspiration|Pull cone at the marked player.","Rout|Shared line."]}},
 {n:"Ser Yuhelmeric",key:"Keep the boss out of the adds' Rictus and Lifeless Wind puddles.",d:{normal:["Skullsplinter|Tankbuster.","Tumulus|Point-blank.","Brain Drain|Raidwide plus adds.","Red adds|Rictus buffs damage.","Blue adds|Lifeless Wind buffs Haste; Heavy and Bind circles.","Hell Slash → Death Spiral|Knockback, then donut; get in."]}},
 {n:"Opinicus",key:"Winds of Winter: put a rubble pile between you and the boss.",d:{normal:["Golden Talons|Tankbuster.","Alpine Draft|Line.","Freefall|Big circle on a player.","Whirling Gaol|Hide behind rubble.","Winds of Winter|Line of sight."]}}
]},
{exp:"Heavensward",type:"Dungeon",inst:"Sohm Al",lv:53,il:"Drops i130",rl:["Leveling"],patch:"3.0",bosses:[
 {n:"Raskovnik",key:"Kill hornets before they reach the boss.",d:{normal:["Acid Rain|Small circles on everyone.","Sweet Scent|Hornets walk to the boss.","Flower Devour|Pull plus circle; hornets inside buff it.","Spit|Raidwide."]}},
 {n:"Myath",key:"Red blob = stack on the target; blue blob = target goes away.",d:{normal:["Razor Scales|Cone.","Primordial Roar|Raidwide; blobs spawn.","Mad Dash|Stack or spread.","Chyme of the Mountain|Kill before The Last Song."]}},
 {n:"Tioman",key:"At 50% destroy both wings.",d:{normal:["Abyssic Buster|Frontal.","Chaos Blast|Gaps between lines.","Comet|Marked players to the edge, then back.","Wings|Make her vulnerable.","Heavensfall|Move away, then dodge.","Dark Star|Raidwide."]}}
]},
{exp:"Heavensward",type:"Dungeon",inst:"The Aery",lv:55,il:"Drops i136",rl:["Leveling"],patch:"3.0",bosses:[
 {n:"Rangda",key:"Stay in melee range for Electric Cachexis; pass Prey to a pillar.",d:{normal:["Electric Cachexis|Hits anyone outside melee.","Prey|Run to a pillar.","Leyak adds|Kill."]}},
 {n:"Gyascutus",key:"Inflammable Fumes explode with the next Pyre or Ouroboros.",d:{normal:["Proximity Pyre|Out.","Ashen Ouroboros|Donut; in.","Inflammable Fumes|Avoid.","Crippling Blow|Tankbuster.","Body Slam|Centre knockback."]}},
 {n:"Nidhogg",key:"At ~50% kill the dragon adds before Rancor fills.",d:{normal:["Hot Tail / Hot Wing|Line or side lines.","Cauterize|Fire line.","Horrid Roar|Spread.","Scarlet Price|Tankbuster.","Sable Price|Free the trapped player.","Massacre|Kill adds.","Horrid Blaze|Stack."]}}
]},
{exp:"Heavensward",type:"Dungeon",inst:"The Vault",lv:57,il:"Drops i142",rl:["Leveling"],patch:"3.0",bosses:[
 {n:"Ser Adelphel Brightblade",key:"Avoid the light orbs from Charge.",d:{normal:["Holy Shield Bash|Stun on a player.","Holiest of Holy|Raidwide.","Charge|Orbs explode.","Crash-down|Jump."]}},
 {n:"Ser Grinnaux the Bull",key:"Bait both Hyperdimensional Slash tears to the same wall.",d:{normal:["Hyperdimensional Slash|Tears.","Aetherial Tear|Don't go near.","Faith Unmoving|Knockback; no tear behind you.","Dimensional Rift|Circle."]}},
 {n:"Ser Charibert",key:"At half HP kill the Holy Flames quickly.",d:{normal:["Altar Pyre|Raidwide.","Holy Chain|Run apart.","Heavensflame|Rings.","Knight rows|Avoid.","Holy Flames|Kill."]}}
]},
{exp:"Heavensward",type:"Dungeon",inst:"The Great Gubal Library",lv:59,il:"Drops i148",rl:["Leveling"],patch:"3.0",bosses:[
 {n:"Demon Tome",key:"Disclosure: run along the sides to his back.",d:{normal:["Central / side AoEs|Avoid.","Dark Blizzard III|Circle.","Disclosure|Get behind.","Words of Winter|Ice floor; slide carefully."]}},
 {n:"Byblos",key:"Kill adds, then pull the tethered orb into Byblos.",d:{normal:["Invulnerability|Orb.","Oil fumes|Knockback; one at a time.","Gale Cut|Frontal, no telegraph.","Tail Swipe|Rear.","Head Down|Line up to share."]}},
 {n:"The Everliving Bibliotaph",key:"Void Summon: put 1, 2 or 3 players on each lit platform.",d:{normal:["Void Summon|~85/55/25%.","Targeted marks|Bait between platforms.","Deep Darkness|Tank Heavy.","Magic Burst|Knockback."]}}
]},
{exp:"Heavensward",type:"Dungeon",inst:"The Aetherochemical Research Facility",lv:60,il:"Synced i180 · no gear",rl:["High-level Dungeons"],patch:"3.0 · changed 6.3",bosses:[
 {n:"Regula van Hydrus",key:"Kill turrets before they self-destruct.",d:{normal:["Stun + AoE|Move away.","Turrets|Kill.","Magitek Slug|Line.","Magitek Spread|270° cone; find the gap."]}},
 {n:"Harmachis",key:"Anti-Naga: look away; Anti-Machina: soak with as many players as there are orbs.",d:{normal:["Sphinx|Circle; Poison cone.","Anti-Cobra|Tankbuster.","Anti-Naga|Gaze; spread.","Anti-Machina|Missile soak; stack."]}},
 {n:"Lahabrea & Igeyorhm",key:"Fire stars: get out; ice stars: get under them.",d:{normal:["Shadow Flare|Raidwide.","Fire Sphere / Esoteric Fusion|Avoid fire.","Circle of Ice|Stand on ice.","End of Days|Line stack.","Dark Fire II|Spread."]}},
 {n:"Ascian Prime",key:"Dualstar: work out which colour collides first.",d:{normal:["Height of Chaos|Tankbuster.","Dualstar / Fusion Prime|Ice under, fire away.","Universal Manipulation|Five debuffs.","Entropic Flame|Line stack.","Arcane Revelation|Shade attacks.","Ancient Eruption|Move."]}}
]},
{exp:"Heavensward",type:"Dungeon",inst:"Neverreap",lv:60,il:"Drops i160",rl:["High-level Dungeons"],patch:"3.0",bosses:[
 {n:"Nunyenunc",key:"Mist phase: run the edge to find the Shadow.",d:{normal:["Feather Squall|Avoid.","Mist|Kill the Shadow.","Feathers|Kill."]}},
 {n:"Canu Vanu",key:"Totem Chant: move totems out of the purple circle.",d:{normal:["Morrowcloud|Bleed.","Sacred Totem|Spread drops.","Totem Chant|Keep totems out."]}},
 {n:"Waukkeon",key:"Turbine: stack beside the boss with open space behind you.",d:{normal:["Divine Mist|Mist adds.","Divine Gale|Charge.","Turbine|Knockback.","Tornadoes|Avoid; LB."]}}
]},
{exp:"Heavensward",type:"Dungeon",inst:"The Fractal Continuum",lv:60,il:"Drops i160",rl:["High-level Dungeons"],patch:"3.0",bosses:[
 {n:"Phantom Ray",key:"Double Sever: cones front and back, then the sides.",d:{normal:["Double Sever|Rotate.","Circles|Move.","Rapid Sever|Tankbuster."]}},
 {n:"Minotaur",key:"1111-tonze Swipe: click a Biomass Incubator to spawn a Shabti that interrupts it.",d:{normal:["11-tonze Swipe|Frontal.","111-tonze Swing|Big point-blank.","Disorienting Groan|Knockback, rush, line.","1111-tonze Swipe|Incubator."]}},
 {n:"The Curator",key:"Stay off lit tiles.",d:{normal:["Clockwork Alarums|Kill.","Aetherochemical Explosive|DoT; cleanse.","The Educator|Lit tiles.","Mines|Avoid."]}}
]},
{exp:"Heavensward",type:"Dungeon",inst:"Saint Mocianne's Arboretum",lv:60,il:"Drops i185",rl:["High-level Dungeons"],patch:"3.1",bosses:[
 {n:"Rose Garden",key:"Rotate with her sweeping Bad Breath while dodging the adds' fixed breaths; kill Rose Hips fast.",d:{normal:["Spinning breath|Avoid.","Rose Hips|Kill.","Vine Probe|Hits the tank hard; use cooldowns.","Extremely Bad Breath|She runs to the centre; untargetable adds breathe in set directions while her own larger breath sweeps round. Rotate with her to avoid both.","Poison hitbox|Her hitbox turns poisonous and slows anyone inside it.","Video|MTQcapture — Saint Mocianne's Arboretum Dungeon Guide (youtube.com/watch?v=5atrxrBcvgg)."]}},
 {n:"Queen Hawk",key:"Watch the bees on the walls for column attacks.",d:{normal:["Bee columns|Dodge.","Ally|Double columns.","Knight Hawks|Kill.","Stinger|Tank hit; heal through.","Apoxin|Poison puddles; avoid.","Veil|Adds tether to her, buffing her and making her nearly immune: everyone kills the adds.","Ally|Watch where the bees are; their stingers cross the room in columns.","Video|MTQcapture — Saint Mocianne's Arboretum Dungeon Guide (youtube.com/watch?v=5atrxrBcvgg)."]}},
 {n:"Belladonna",key:"Frond Fatale: look away.",d:{normal:["Opening AoE|Stand close.","Bulbs|Avoid.","Frond Fatale|Look away.","Adds|Kill.","Atropine Spore|Everyone into melee range.","Soul Vacuum|Raidwide.","Wandering adds|Move, then cast a big circle; avoid them.","Marker circle|Move away from others.","Decay flowers|Kill them before Decay finishes (big damage plus debuff).","Video|MTQcapture — Saint Mocianne's Arboretum Dungeon Guide (youtube.com/watch?v=5atrxrBcvgg)."]}}
]},
{exp:"Heavensward",type:"Dungeon",inst:"Pharos Sirius (Hard)",lv:60,il:"Drops i185",rl:["High-level Dungeons"],patch:"3.1",bosses:[
 {n:"Ghrah Luminary",key:"Pass Prey to a passive mob before Aetheric Mimicry.",d:{hard:["Corruptions|Prey.","Transformed mobs|Kill.","Spiders|Kill aside.","Cleave / Luminous Lancet|Mild cleave; large easy circles.","Prey choice|If you keep the tether, a humanoid add buffs the boss. Passing it to a spider gives a corruption that leaves poison on death; to a bird, one with a point-blank. Birds are easier.","Video|MTQcapture — Pharos Sirius (Hard) Dungeon Guide (youtube.com/watch?v=-vSr5RLUkIw)."]}},
 {n:"8th Order Patriarch Be Gu",key:"Kill Corrupted Gels on aether plumes to plug them.",d:{hard:["Fissures|Plug.","Kobolds / Alchemy Engines|Kill engines.","Strip Mine|Proximity AoE on a random spot; run away from it.","Corrupted Gels|Kill them over the aether holes to plug them; left alive too long they explode for big group damage.","Alchemy Engines|While up he stuns anyone who hits him and charges players (Loose Screw). Kill engines, then the Kobolds.","Video|MTQcapture — Pharos Sirius (Hard) Dungeon Guide (youtube.com/watch?v=-vSr5RLUkIw)."]}},
 {n:"Progenitrix & Progenitor",key:"Kill grey bombs; knock blue Remedy bombs away.",d:{hard:["Grey bombs|Kill.","Remedy bombs|Push away.","Progenitrix|Cleave and Sap puddles. Bombshell Drop: grey bombs grow then explode (kill first); lava bombs are weak. Big Burst raidwide.","Transition|Four grey bombs; kill them.","Progenitor|Blue Flame raidwides stack Fire Resistance Down, so speed matters. Hitting a Remedy bomb pushes it back; keep them off the grey bomb until it dies.","Before the boss|Kill the mobs and bombs attacking the two walls before they break through.","Video|MTQcapture — Pharos Sirius (Hard) Dungeon Guide (youtube.com/watch?v=-vSr5RLUkIw)."]}}
]},
{exp:"Heavensward",type:"Dungeon",inst:"The Antitower",lv:60,il:"Drops i195",rl:["High-level Dungeons"],patch:"3.2",bosses:[
 {n:"Zuro Roggo",key:"Frog Song: kill the Choirtoads.",d:{normal:["Water Bomb|Spread.","Bubbles|Avoid.","Odious Croak|Frontal cone.","Frog Song|Kill Choirtoads.","Toy Hammer|Stun; Esuna."]}},
 {n:"Ziggy",key:"Jittering Jounce: the marked player hides behind a rock.",d:{normal:["Gyrating Glare|Raidwide.","Stardust|Wall safe spots.","Jittering Glare|Cone.","Jittering Jounce|Rock.","Jittering Jab|Tankbuster."]}},
 {n:"Calcabrina",key:"Brace: attack only from the open side.",d:{normal:["Heat Gaze|Doll AoEs.","Terrifying Glance|Look away.","Knockout|Tankbuster.","Brace|Open side.","Dollhouse|Kill dolls."]}}
]},
{exp:"Heavensward",type:"Dungeon",inst:"The Lost City of Amdapor (Hard)",lv:60,il:"Drops i195",rl:["High-level Dungeons"],patch:"3.2",bosses:[
 {n:"Achamoth",key:"Face the walls for Enthrallment.",d:{hard:["Psycho Squamae|Cone.","Neura Squamae|Ghosts.","Toxic Squamae|Kite.","Enthrallment|Face walls."]}},
 {n:"Winged Lion",key:"Pop wind orbs with Earth-debuffed players and stone orbs with Wind-debuffed players.",d:{hard:["Ancient Aero / Stone|Orbs.","Ancient Holy|Kill the Sphere.","Ancient Libra|Debuffs."]}},
 {n:"Kuribu",key:"Check whether Reverse is active.",d:{hard:["Glory|Tank cone.","Cure IV|Circle rules.","Regen|Move her out or avoid.","Cure III|Spread.","Decoy|Puttos first.","Reverse|Swaps effects."]}}
]},
{exp:"Heavensward",type:"Dungeon",inst:"Sohr Khai",lv:60,il:"Drops i215",rl:["High-level Dungeons"],patch:"3.3",bosses:[
 {n:"Chieftain Moglin",key:"Kill Captain Mogsun first.",d:{normal:["Revived adds|Push out of circles.","Mogsun|Invincibility.","Holy|Raidwide."]}},
 {n:"Poqhiraj",key:"Place Cloud Call clouds by broken walls.",d:{normal:["Walls|Electrified pool.","Jump|Far end.","Charge|Knockback.","Quasar|Line.","Cloud Call|Away."]}},
 {n:"Hraesvelgr",key:"Glowing wing: go to the other side.",d:{normal:["Wyrmclaw|Tankbuster.","Hallowed Wings|Side cleave.","Holy Storm|Raidwide.","Hallowed / Frigid Dive|Middle line.","Akh Morn|Stack.","Diamond Storm|Ice floor.","Holy Breath|Spread."]}}
]},
{exp:"Heavensward",type:"Dungeon",inst:"Hullbreaker Isle (Hard)",lv:60,il:"Drops i215",rl:["High-level Dungeons"],patch:"3.3",bosses:[
 {n:"Sanguine Sirens",key:"Kill the healer-tethered Battle Coeurl.",d:{hard:["Waves|Dodge lines and cannons.","Battle Coeurl|Kill.","Waves|Burn each wave fast so you don't get overwhelmed; dodge the many ground AoEs.","Coeurl|Its tether on the healer can't be broken; everyone kills it immediately.","Trash note|Pull mobs out of the buffing AoE zones.","Video|MTQcapture — Hullbreaker Isle (Hard) Dungeon Guide (youtube.com/watch?v=5LD7HTcOE9k)."]}},
 {n:"Ymir",key:"Megavolt: marked players step into a slime spot.",d:{hard:["Blanket Thunder|Break tethers.","Megavolt|Slime.","Flash Freeze|Icebergs close, not overlapping.","Icebergs|Drop them along the wall before sliding to safety.","Video|MTQcapture — Hullbreaker Isle (Hard) Dungeon Guide (youtube.com/watch?v=5LD7HTcOE9k)."]}},
 {n:"Slafyrsyn & Mistbeard",key:"Poison Mist: touch potion chests, not bomb chests.",d:{hard:["Maelstrike|Raidwide.","Ghomoro Splitter|Puddles.","Poison Mist|Chests.","Bullet Hell|Raidwide.","Grenado Shot|Esuna Heavy.","Firesand Kegs|Knock away.","Phase 1|Frontal cleave plus Maelstrike raidwide.","Firesand Kegs|Hitting them punts them; send them away from the group, as a marked keg explodes and can chain.","Video|MTQcapture — Hullbreaker Isle (Hard) Dungeon Guide (youtube.com/watch?v=5LD7HTcOE9k)."]}}
]},
{exp:"Heavensward",type:"Dungeon",inst:"Xelphatol",lv:60,il:"Drops i225",rl:["High-level Dungeons"],patch:"3.4",bosses:[
 {n:"Nuzal Hueloc",key:"Hot Air: stand under Nuzal so he lands on you.",d:{normal:["Wind Blast|Path.","Lift|Adds.","Air Raid|Raidwide.","Airstones|Kill.","Long Burst|Heal."]}},
 {n:"Dotoli Ciloc",key:"On High: back to a barrier.",d:{normal:["On Low|Cleave.","On High|Knockback.","Dark Wings|Spread.","Swiftfeather|Instant On Low."]}},
 {n:"Tozol Huatotl",key:"Summon Garuda: find the safe area and spread.",d:{normal:["Ixali Aero III|Raidwide.","Ixali Aero II|Path.","Hawk|Stack or spread.","Summon Garuda|Safe area."]}}
]},
{exp:"Heavensward",type:"Dungeon",inst:"The Great Gubal Library (Hard)",lv:60,il:"Drops i225",rl:["High-level Dungeons"],patch:"3.4",bosses:[
 {n:"Demon of the Tome",key:"Dodge chained AoEs (each hit stacks vuln); Triclip hits the tank in quick succession.",d:{hard:["Edge markers|Avoid.","AoE combos|Obvious AoEs, often chained; each hit stacks Vulnerability Up.","Frightful Roar|Point-blank; get out.","Triclip|Rapid hits on the tank; mitigate.","Video|MTQcapture — The Great Gubal Library (Hard) Guide (youtube.com/watch?v=y2wp0wfMnXY)."]}},
 {n:"Liquid Flame",key:"Ferrofluid: same sign as the boss = go close, opposite = go away.",d:{hard:["Bibliocide|Raidwide.","Sea of Flames|Move.","Slosh|Run far.","Ferrofluid|Signs.","Seal of Night and Day|Matching sigil.","Searing Wind|Frontal cleave; face it away.","Forms|Becomes a hand (Seal of Night and Day) or a tornado (fire covers rim and centre; Ferrofluid).","Video|MTQcapture — The Great Gubal Library (Hard) Guide (youtube.com/watch?v=y2wp0wfMnXY)."]}},
 {n:"Strix",key:"White circle = Levitation (Quakes), black = Leaden (Tornados), green = imp toggle.",d:{hard:["Quakes|White.","Tornados|Black.","Imps|Toggle.","Thunder III|Clear imp first.","Ecliptic Meteor|Hide behind rock.","Imp then Thunder|Wait to be turned into an imp, then step into the light-blue AoE to clear it before Thunder lands. Don't step in it at random.","Behemoth (~50%)|Dodge its AoEs, then hide behind a fallen comet for the meteor.","Video|MTQcapture — The Great Gubal Library (Hard) Guide (youtube.com/watch?v=y2wp0wfMnXY)."]}}
]},
{exp:"Heavensward",type:"Dungeon",inst:"Baelsar's Wall",lv:60,il:"Drops i245",rl:["High-level Dungeons"],patch:"3.5",bosses:[
 {n:"Magitek Predator",key:"Kill adds first.",d:{normal:["Magitek Claw|Tank hit.","Magitek Ray|Line.","Magitek Missile|Spread.","Adds|Kill."]}},
 {n:"Armored Weapon",key:"Dynamic Sensory Jammer: take no actions and don't move.",d:{normal:["Launcher|Halves HP.","Sensory Jammer|Freeze.","Magitek Bits|Checkerboard.","Distress Beacon|Adds."]}},
 {n:"The Griffin",key:"Flash Powder: turn away.",d:{normal:["Beak|Raidwide.","Flash Powder|Look away.","Sanguine Blade|Chase.","Lionshead|Kill the central sword.","Restraint Collar|Free the healer.","Claw|Tankbuster."]}}
]},
{exp:"Heavensward",type:"Dungeon",inst:"Sohm Al (Hard)",lv:60,il:"Drops i245",rl:["High-level Dungeons"],patch:"3.5",bosses:[
 {n:"The Leightonward",key:"Spread away from Spore Sacs.",d:{hard:["Wild Horn|Tank hit.","Inflammable Fumes|Raidwide.","Spore Sac|Spread.","Excretion|Heavy."]}},
 {n:"Gowrow",key:"Castbars are hidden: read the boss poses or the battle log.",d:{hard:["Volcanic Howl|Buffs.","Ripper Claw|Cleave; tornado.","Tail Smash / Swing|Rear or point-blank.","Fireball / Lava Flow|Circle or cone.","Wild / Hot Charge|Line knockback.","Infirmity|Shields prevent."]}},
 {n:"Lava Scorpion",key:"Molten Silk: stand directly behind it.",d:{hard:["Molten Silk|270°.","Deadly Thrust|Tankbuster.","Hiss|Adds.","Realm Shaker|Out.","Flying Press|Away.","Claw / Tail adds|Kill."]}}
]}
]);
window.FF = (window.FF || []).concat([
/* ───────── A REALM REBORN TRIALS ───────── */
{exp:"A Realm Reborn",type:"Trial",inst:"The Bowl of Embers",lv:20,il:"Level 20 (sync 22)",rl:["Leveling"],patch:"2.0",bosses:[
 {n:"Ifrit",key:"At 50% kill the Infernal Nail before Hellfire.",d:{normal:["Incinerate|Frontal breath; face away.","Vulcan Burst|Knockback; stand at the edge.","Eruption|Glowing cracks under a player; move.","Infernal Nail|Kill or Hellfire wipes.","Radiant Plume|Four central or eight edge circles."]}}
]},
{exp:"A Realm Reborn",type:"Trial",inst:"The Bowl of Embers (Hard / Extreme)",lv:50,il:"Hard: i49 · Extreme: i70",rl:["Trials"],patch:"2.0 · Extreme 2.1",bosses:[
 {n:"Ifrit",key:"Infernal Nails: destroy every nail before Hellfire.",d:{
 hard:["Incinerate|Frontal.","Vulcan Burst|Tank at the edge.","Eruption|Stun it.","Crimson Cyclone|Dash; left Ifrit first.","Radiant Plume|Circles.","Infernal Nails|Four nails; LB.","Hellfire|Lethal if nails remain."],
 extreme:["Incinerate|Suppuration stacks; swap tanks.","Eruption|Three hits on DPS; move together.","Searing Wind|Healer to a safe spot.","Hellfire / Radiant Plume|Safe spots rotate clockwise.","Crimson Cyclone|Beside the left-most Ifrit.","Infernal Nails|4, 7, 13; kill singly; melee LB3 the big nail.","Infernal Fetters|DPS and off-tank stay close.","Enrage|Fourth Hellfire after the 10% one."]}}
]},
{exp:"A Realm Reborn",type:"Trial",inst:"The Navel",lv:34,il:"Level 34 (sync 36)",rl:["Leveling"],patch:"2.0",bosses:[
 {n:"Titan",key:"At ~50% kill Titan's Heart before the enrage.",d:{normal:["Stomp|Raidwide.","Leap (80%)|Stand at the red ring edge.","Landslide|Line knockback off the platform.","Titan's Heart|Burn it.","Granite Gaol|Free the trapped player.","Falling rocks|Dodge."]}}
]},
{exp:"A Realm Reborn",type:"Trial",inst:"The Navel (Hard / Extreme)",lv:50,il:"Hard: i57 · Extreme: i67",rl:["Trials"],patch:"2.0 · Extreme 2.1",bosses:[
 {n:"Titan",key:"Landslide knocks you off the platform: never stand in front of him.",d:{
 hard:["Landslide|Line knockback.","Tumult|Multi-hit raidwide.","Geocrush|Inside the ring, just past the line.","Weight of the Land|Move off the pool.","Bomb Boulders|Track spawn order.","Rock Throw|Free the Gaol; cleanse Damage Down.","Earthen Fury|Kill the Heart.","Mountain Buster|Tank hit."],
 extreme:["Gaol|DPS under Titan, healer at the edge.","Landslide|1, 3 then 5 directions.","Weight of the Land|Stack, then dodge.","Mountain Buster|Swap at 2–3 stacks.","Upheaval|Stack behind him or Arm's Length.","Bomb Boulders|Step into exploded spots.","Titan's Heart|Before the third Weight of the Land.","Granite Gaolers|Kill.","Soft enrage|~10 min."]}}
]},
{exp:"A Realm Reborn",type:"Trial",inst:"The Howling Eye",lv:44,il:"Level 44 (sync 46)",rl:["Leveling"],patch:"2.0",bosses:[
 {n:"Garuda",key:"Mistral Song: hide behind a pillar.",d:{normal:["Downburst|Frontal.","Friction|Spread.","Wicked Wheel|Keep her off pillars.","Slipstream|Stun line.","Mistral Song|Line of sight.","Razor Plumes|Kill.","Aerial Blast|Scales with pillar damage.","Eye of the Storm|Stay in the centre."]}}
]},
{exp:"A Realm Reborn",type:"Trial",inst:"The Howling Eye (Hard / Extreme)",lv:50,il:"Hard: i52 · Extreme: i65",rl:["Trials"],patch:"2.0 · Extreme 2.1",bosses:[
 {n:"Garuda",key:"Thermal Low wipes at 3 stacks: swap at 2 and hide under the Spiny Plume's shield.",d:{
 hard:["Downburst / Slipstream|Frontal.","Friction / Wicked Wheel|Protect pillars.","Mistral Song / Shriek|Line of sight.","Razor Plumes|AoE them.","Aerial Blast|~50%.","Great Whirlwind|Tornadoes.","Eye of the Storm|Centre.","Satin Plume|Kill first.","Suparna / Chirada|Green (heals) first."],
 extreme:["Satin Plume|Kill or Sleep.","Mistral Song|Behind pillars.","Chirada & Suparna|Separate; kill one at a time.","Reckoning|Stack centre.","Spiny Plume|Keep alive; Thermal Low.","Vanish|Kill the Spiny Plume; hide in its shield.","Whirlwinds|Intercardinal safe spots."]}}
]},
{exp:"A Realm Reborn",type:"Trial",inst:"The Whorleater (Hard / Extreme)",lv:50,il:"Hard: i60 · Extreme: i80",rl:["Trials"],patch:"2.2",bosses:[
 {n:"Leviathan",key:"Tidal Wave: activate the Elemental Converter after the dive.",d:{
 hard:["Body Slam|Move from under it.","Veil of the Whorl|Casters hit the head; physical ranged the tail.","Dread Tide / Scale Darts|Tank.","Aqua Breath|Out of head melee.","Water Spout|Spread.","Tidal Roar|Raidwide.","Sahagins / Gyre Spumes|Kill.","Spinning Dive|Opposite side.","Tidal Wave|Converter."],
 extreme:["Dread Tide|Tank head in a corner.","Tail Whip|Shared cleave.","Briny Veil|Swap before 16 stacks.","Body Slam|Knockback.","Grand Fall / Spinning Dive|Heavy; safe side.","Tidal Wave|Converter.","Wavespine / Wavetooth|Kill; avoid puddles.","Gyre Spume|Restore the converter.","Wave Spume|Tanks carry orbs to corners."]}}
]},
{exp:"A Realm Reborn",type:"Trial",inst:"The Striking Tree (Hard / Extreme)",lv:50,il:"Hard: i65 · Extreme: i85",rl:["Trials"],patch:"2.3",bosses:[
 {n:"Ramuh",key:"Grey Arbiters: kill them all before Judgment Bolt.",d:{
 hard:["Shock Strike|Untelegraphed buster.","Thunderspark|Max melee.","Thunderstorm|Frees Chaotic Strike.","Lightning Orbs|3 stacks = Surge Protection.","Chaotic Strike|Terrified.","Grey Arbiters|Kill.","Judgment Bolt|Wipe if alive.","Rolling Thunder|Orbs break it."],
 extreme:["Chaotic Strike|Get freed by Thunderstorm.","Thunderspark|Max melee.","Thunderstorm|Stay out of water.","Lightning Orbs|Tanks keep Surge Protection.","Shock Strike|Lethal without Surge Protection.","Grey Arbiters|Six; kill clockwise.","Rolling Thunder|Orbs break it.","Enrage|~11 min."]}}
]},
{exp:"A Realm Reborn",type:"Trial",inst:"The Akh Afah Amphitheatre (Hard / Extreme)",lv:50,il:"Hard: i80 · Extreme: i95",rl:["Trials"],patch:"2.4",bosses:[
 {n:"Shiva",key:"Kill all four Ice Soldiers before Diamond Dust.",d:{
 hard:["Dreams of Ice|Stacking Damage Up.","Hailstorm|Spread.","Absolute Zero|Raidwide.","Icicle Impact|Four safe spots.","Icebrand|Face away; lethal.","Glacier Bash|Stand behind.","Ice Soldiers|Kill.","Edge|Frozen boulder.","Permafrost|Stand still."],
 extreme:["Icebrand|Shared cone.","Glacier Bash|Tank runs through.","Whiteout|Donut.","Hail Storm|Spread.","Icicle Impact|Leave circles.","Ice Soldiers|Kill before Diamond Dust.","Permafrost|Stand still.","Glass Dance|Stand behind.","Avalanche|Knockback.","Enrage|11 Damage Up stacks."]}}
]},
{exp:"A Realm Reborn",type:"Trial",inst:"Thornmarch (Hard / Extreme)",lv:50,il:"Hard: no sync · Extreme: i80",rl:["Trials"],patch:"2.1 · Extreme 2.2 · Hard reworked 6.2",bosses:[
 {n:"Good King Moggle Mog XII",key:"Hard: stand in Pom Meteor circles. Extreme: bring every moogle low together, interrupt Pom Flare and Holy, and burst the King once Memento Moogle starts.",d:{
 hard:["Spinning Mogshield|Back off.","Mograin of Death|Spread.","1000 Kuporize Swipe|Cone.","Moogleday Night Fever|Line.","Pom Holy|Avoid.","Pom Meteor|Soak.","Moogle Thrust|Tankbuster.","Memento Moogle|Raidwide.","Decrees|Pom Bog, Moogle-Go-Round, Mog Comet, Pom Stone III."],
 extreme:["Targeting|Seven moogle guards plus the King; use the enemy list to switch targets, not their looks.", "Good King Moggle Mog XII|Frontal cleave that drains MP (tanks face him away) and a big frontal column. Royal Rouse buffs moogles near him (more HP and damage); keep moogles away from him.", "Tanks|Ruffletuft Kupta Kapa (Warrior) and Whiskerwall Kupdi Koop (Paladin) are the only moogles with enmity. Hold them at the outer wall and swap the King at 3 buff stacks. Their Overpower is a long frontal cone.", "Moogle-go-round (Warrior)|Marks two players; healers must cleanse it before it goes off or non-tanks die.", "Thrown for a Loop (Paladin)|Links and mind-controls the three closest players toward his green death puddle; healers cleanse them fast and stay away from him.", "Pom Flare (Black Mage)|Wipe-level AoE: everyone hits the Black Mage moogle (5+ hits) to interrupt. It also drops two sets of blue meteor circles.", "Holy (White Mage)|Furryfoot Kupli Kipp wanders and heals; interrupt Holy the same way.", "Thief / Bard|Pukna Pako stabs randomly; Pukla Puki buffs moogles and does a point-blank, so keep it away from the others.", "Ranger (most dangerous)|Woolywart Kupqu Kogi's multi-shot and Mog Rain (big AoE on a marked player; run out) scale with buffs. Mark it and keep it away from the King.", "Delta|When the Ranger moves and talks about Delta, leave the centre: Ranger, Thief and Bard form a triangle that kills anyone inside.", "P1|Burn the King to 90%; he goes invulnerable and calls the moogles.", "P2|Bring every moogle to about 10%, never kill them. The King only takes damage by healing his moogles, so the lower they are when one dies, the more it costs him.", "P3|Kill one moogle; the King heals the rest. Same again, now with combos: Holy + Moogle-go-round, and Mog Rain + Thrown for a Loop.", "Mog Meteor|After the next kill: stack centre and shield/heal through it.", "P4 / Memento Moogle|The first moogle death starts Memento Moogle, a wipe if it finishes. Either split DPS to kill the moogles together then burn the King (LB3), or caster LB3 the moogles and dump everything on the King.", "Video|MTQcapture — Thornmarch Extreme Guide (youtube.com/watch?v=h7N5XIFsJv4)."]}}
]},
{exp:"A Realm Reborn",type:"Trial",inst:"A Relic Reborn: The Chimera",lv:50,il:"i52",rl:[],patch:"2.16",bosses:[
 {n:"Chimera",key:"Dragon's Voice = get in; Ram's Voice = get out.",d:{normal:["Lion's Breath|Frontal.","Dragon's / Ram's Breath|Stun.","Scorpion's Sting|Rear poison.","Dragon's Voice|Donut.","Ram's Voice|Point-blank.","Cacophony|Lead away.","Ram's Keeper|Ice patch."]}}
]},
{exp:"A Realm Reborn",type:"Trial",inst:"A Relic Reborn: The Hydra",lv:50,il:"i52",rl:[],patch:"2.16",bosses:[
 {n:"Hydra",key:"Fear Itself: stack on Hydra.",d:{normal:["Triumvirate|Two tanks share.","Mean Thrash|Rear.","White / Radiant Breath|Infirmity.","Ball of Ice / Fire|Patches.","Fear Itself|Stack in melee.","Wyvern|Kill."]}}
]},
{exp:"A Realm Reborn",type:"Trial",inst:"Battle on the Big Bridge",lv:50,il:"i50",rl:[],patch:"2.2",bosses:[
 {n:"Gilgamesh",key:"Toad: kite Enkidu until it wears off.",d:{normal:["Bitter End|Cone.","Pradamante|Instant AoE.","Toad|Kite.","Minimum|Keep moving.","Rocket Punch|Heal the confused player.","Whirlwind Slash|Out.","Giga Jump|Spread."]}}
]},
{exp:"A Realm Reborn",type:"Trial",inst:"The Dragon's Neck",lv:50,il:"i80",rl:[],patch:"2.4",bosses:[
 {n:"Ultros & Typhon",key:"Imp Song: take Aqua Breath for Wet Plate, then Imp Punch Typhon.",d:{normal:["Megavolt|Out.","Aqua Breath|Take it as an imp.","Imp Song|Punch Typhon.","4-tonze Weight|Spread.","Tentacles|Wallop, Clearout.","Grind|Tankbuster.","Fungah / Fungahhh|Knockback cones.","Snortsault|Stay central.","FUNGAH|Leave the circle."]}}
]},
{exp:"A Realm Reborn",type:"Trial",inst:"Battle in the Big Keep",lv:50,il:"i90",rl:[],patch:"2.5",bosses:[
 {n:"Gilgamesh & Enkidu",key:"Kill Enkidu fast: White Wind heals Gilgamesh.",d:{normal:["Aero II / Web|Spread.","Eerie Soundwave|Cone.","Bitter End|Behind.","Missile|Away.","Minimum|Tethered pair moves together.","Chicken|Run through tornadoes."]}},
 {n:"Gilgamesh",sub:"Phase 2",key:"Dragon's Heads: kill at least three within 50s.",d:{normal:["Moonlight|Raidwide.","Icewind|Move square to square.","Bloomshower|Find gaps.","Iron Chain|Kill the chain.","Sword Dance|Tank combo.","Giga Jump → Masamune|Move out.","Dragon's Heads|Kill.","Lightning Orbs|Dodge."]}}
]},
{exp:"A Realm Reborn",type:"Trial",inst:"The Chrysalis",lv:50,il:"i90",rl:[],patch:"2.5",bosses:[
 {n:"Nabriales",key:"Tanks soak the meteors; kill the tear fast.",d:{normal:["Orbs|Balance stacks; 7 kills non-tanks.","Spark combos|Swap tanks.","End of Days|Line.","Quake III|Raidwide.","Meteor (20%)|Buff before the vortex.","Meteors|Tanks only.","Tear|Kill with LB."]}}
]},
{exp:"A Realm Reborn",type:"Trial",inst:"Urth's Fount",lv:50,il:"i95",rl:[],patch:"2.5",bosses:[
 {n:"Odin",key:"Shin-Zantetsuken wipes at ~15% or 6 minutes.",d:{normal:["Hall of Sorrow|Raidwide.","Hall of Lead|Cleanse Slow.","Hall of Stone|Rotate one way.","Einherjar|Cleanse Bleed.","Valknut|Out.","Sanngetal|Swap.","Gagnrath|Lines.","Gungnir|Spread.","Shin-Zantetsuken|Enrage."]}}
]},
{exp:"A Realm Reborn",type:"Trial",inst:"The Porta Decumana",lv:50,il:"Synced i60",rl:["Main Scenario"],patch:"6.1 version",note:"Main Scenario version rebuilt in 6.1.",bosses:[
 {n:"The Ultima Weapon",key:"At 30% use LB at the start of the Ultima cast.",d:{normal:["Titan (100–80%)|Earthen Fury; Geocrush; Landslide; Weight of the Land.","Garuda (80–55%)|Aerial Blast; Eye of the Storm (centre); Mistral Shriek.","Ifrit (55–20%)|Hellfire; Radiant Plume; Vulcan Burst.","Homing Lasers|Tank.","Magitek Ray / Citadel Buster|Lines.","Homing Ray|Spread.","Aetheroplasm|Absorb pairs.","Magitek Bits|Lines.","Explosion|Centre.","Ultima|Enrage."]}}
]},
{exp:"A Realm Reborn",type:"Trial",inst:"The Minstrel's Ballad: Ultima's Bane",lv:50,il:"i61",rl:["Trials"],patch:"2.1",bosses:[
 {n:"The Ultima Weapon",key:"Aetheroplasm orbs must never touch each other.",d:{extreme:["Garuda|Behind her; Eye of the Storm.","Titan|Plumes; stack for Tank Purge.","Ifrit|Eruptions round the edge.","Phase change|Magitek Ray, orbs, frontal laser.","Aetheric Boon|Stack and walk into orbs.","Magitek Bits|Kill clockwise.","Airships|Positions.","Viscous Aetheroplasm|Swap at 3.","Enrage|Ultima ~10 min."]}}
]},
/* ───────── HEAVENSWARD TRIALS ───────── */
{exp:"Heavensward",type:"Trial",inst:"Thok ast Thok (Hard / Extreme)",lv:53,il:"Hard: Lv 53 · Extreme: Lv 60, i175",rl:["Trials"],patch:"3.0",bosses:[
 {n:"Ravana",key:"Chandrahas: kill Moon Gana first; keep swords under three.",d:{
 hard:["Bloodlust|Soft enrage stacks.","Prelude to Slaughter|Safe spots then centre.","Slaughter|Lines; marked players opposite.","Swift Slaughter|Spread, ring, centre.","Surpanakha|Lines at the marked player.","Rose of Hate|Orbs.","Pillars of Heaven|Knockback.","Atma-Linga|Raidwide.","Chandrahas|Adds."],
 extreme:["Blinding Blade|Stack cleave.","Atma-Linga|Raidwide.","The Seeing|Hit the open side.","Tapasya|Cleave, then cones.","Warlord Shell|Break in 20s.","Gana|Moon first.","Bloody Fuller|Scales with swords.","Liberation / Swift / Final|Charges.","Pillars of Heaven|Hug a barrier.","Surpanakha|Prey to the MT.","Rose of Conviction|Rotate."]}}
]},
{exp:"Heavensward",type:"Trial",inst:"The Limitless Blue (Hard / Extreme)",lv:57,il:"Hard: Lv 57 · Extreme: Lv 60, i165",rl:["Trials"],patch:"3.0",bosses:[
 {n:"Bismarck",key:"Most of the fight is adds: protect the island and fire the harpoons/Dragonkillers in time.",d:{
 hard:["Vundu adds|Kill; knockback.","Cetacean Rage|Shield device on the cast.","Harpoons|Fire both.","Chitin|Only those on Bismarck can hit it.","Sanuwa|Tanks split them.","Breach Blast|Kill adds first.","Vapor Bubbles|Thunder: leave alive; rain: kill."],
 extreme:["Dragonkillers|Fire within 10s.","Magitek Field|Before the slam.","Turbulence|≤3 stacks.","Chitin Carapace|Break.","Sanuwa|Attack the opposite element.","Baleen Bomb|Avoid circles.","Nat'maii Vundu|Kill.","Shaking|Jump off.","Weather|Wind, water, thunder rules.","Corona|Melee LB."]}}
]},
{exp:"Heavensward",type:"Trial",inst:"The Singularity Reactor / Thordan's Reign",lv:60,il:"Normal: i142 · Extreme: i190",rl:["Trials"],patch:"3.0 · Extreme 3.1",bosses:[
 {n:"King Thordan & the Knights of the Round",key:"Conviction towers need a player each; Ultimate End scales with deaths.",d:{
 normal:["Lightning Storm|Spread.","Ascalon's Mercy|Gaps.","Ancient Quaga|Raidwide.","Ascalon's Might|Tankbuster.","Knights (80%)|Charges, columns, Hermenost platforms.","The Dragon's Eye|Look away.","Knights phase|Zephirin burn, Ignasse distance, Noudenet comets.","Ultimate End|Raidwide."],
 extreme:["P1|Heavenly Heel; Meteorain; Dragon's Rage stack; Gaze.","2a|Burning Chains; Conviction towers.","2b|Zephirin below 50%; Spiral Thrust.","2c|Sword knight first; Skyward Leap.","2d|Dimensional Collapse; Hiemal Storm; Spiral Pierce.","2e|Destroy comets; Holy Meteor.","Ultimate End|Shields.","P3|Combined knights.","Enrage|Final Quaga."]}}
]},
{exp:"Heavensward",type:"Trial",inst:"The Final Steps of Faith / Nidhogg's Rage",lv:60,il:"Normal: i205 · Extreme: i220",rl:["Trials"],patch:"3.3",bosses:[
 {n:"Nidhogg",key:"Akh Morn: everyone stacks until all hits land.",d:{
 normal:["Hot Wings|Safe line.","Deafening Bellow|Raidwide.","Holes|Move.","Fire trail|Centre then out.","Adds|DPS check.","Akh Morn|Tankbuster or stack.","Geirskogul|Line.","Meteors|Edges.","Fireball bombs|Safe row and column."],
 extreme:["P1|Scarlet Whisper, Cauterize + Horrid Roar, Hot Wing / Tail.","Shadow Dragons|Kill all three before Mortal Chorus.","P3|Drachenlance; High / Super Jump; Soul Tether to a tank.","Fang & Claw|Fangbound avoid damage; Clawbound take it.","Eye of the Tyrant|Stack away from the Fang.","P4|Bitter Hate swap 5–6; Akh Morn.","Flame Blast patterns|Alternate.","Enrage|11 min."]}}
]},
{exp:"Heavensward",type:"Trial",inst:"Containment Bay S1T7",lv:60,il:"Normal: i190 · Extreme: i205",rl:["Trials"],patch:"3.2",bosses:[
 {n:"Sephirot",key:"Storm of Words: kill it before Revelation.",d:{
 normal:["Fiendish Rage|Stack.","Ratzon|Spread.","Ain|Rear safe.","Binah & Cochma|Binah first.","Pillar of Mercy|Beside circles.","Storm of Words|Kill.","Red pillars|One player each."],
 extreme:["Triple Trial / Chesed|Tank.","Tifferet|Raidwide.","Ein Sof|Safe half.","Fiendish Rage|Split stacks.","Adds|Cochma and Binah before the LB.","Ein Sof Ohr|Mitigate.","Force Field|Match orbs to buffs.","Fiendish Wail|Might players in towers.","Da'at tethers|Magic players take.","Malkuth / Storm of Words|Kill.","Pillar of Severity|Enrage."]}}
]},
{exp:"Heavensward",type:"Trial",inst:"Containment Bay P1T6",lv:60,il:"Normal: i220 · Extreme: i235",rl:["Trials"],patch:"3.4",bosses:[
 {n:"Sophia",key:"Quasar: move to the lighter side, away from the blue meteor.",d:{
 normal:["Thunder II|Cone.","Thunder III|Donut; in.","Aero II|Knockback.","Light Dew|Line.","Sophia Rush|Charge.","Cloudy Heavens|Kill Demiurges.","Quasar|Tilt.","Sin & Punishment|Pair opposite colours."],
 extreme:["Thunder II / III / Aero III|Positions.","Gnosis|Toward Barbelo.","Arms of Wisdom|Swap.","Aion Teleos|Read clones.","Demiurges|Second, Third, First.","Scales of Revelation|East edge.","Quasar|Tethers set knockback.","Cintamani|Three hits.","Discordant Cleansing|Pair colours."]}}
]},
{exp:"Heavensward",type:"Trial",inst:"Containment Bay Z1T9",lv:60,il:"Normal: i235 · Extreme: i250",rl:["Trials"],patch:"3.5",bosses:[
 {n:"Zurvan",key:"Broken Seal: Fire players to red, Ice players to white.",d:{
 normal:["Metal Cutter|Cleave.","Flare Star|Circles.","Platform collapse|Counterclockwise.","Soar|Lines.","Flaming Halberd|Lead away.","Demonic Dive|Stack.","Biting Halberd|Behind.","Ciclicle|Close.","Tail End|Edges.","Adds|Wit first.","Broken Seal|Meteors.","Tyrfing|Swap."],
 extreme:["Caged|Metal Cutter; Flare Star; Purge.","Wave Cannon|Spread line.","Soar / Twin Spirit|Lines.","Flame Halberd|Edges.","Demonic Dive / Cool Flame|Stack; arrow out.","Demon's Claw|Off-tank intercepts.","Southern Cross|Behind, then rotate.","Biting Halberd / Tail End / Ciclicle|Ice attacks.","Execrated|Wit, Wile, Will, Thew.","Infinite Fire & Ice|Stay tethered.","Broken Seal|Matching towers.","Enrage|Fifth Broken Seal."]}}
]}
]);
window.FF = (window.FF || []).concat([
/* ───────── A REALM REBORN RAIDS (Binding Coil) ───────── */
{exp:"A Realm Reborn",type:"Raid",inst:"The Binding Coil of Bahamut (T1–T5)",lv:50,il:"i70–82",rl:[],patch:"2.0",note:"T3 is a dungeon-style crawl with no final boss.",bosses:[
 {n:"ADS & Caduceus",sub:"Turn 1",key:"Caduceus splits at 68%: keep copies apart and kill them together.",d:{normal:["ADS|Kill in 4 min; alternate interrupts on High Voltage; off-tank keeps nodes away.","Hood Swing / Whip Back|Face away; don't stand behind.","Regorge|Pollen puddle.","Steel Scales|Damage Up; glowing platforms.","Dark Matter Slime|Assigned ranged bring slimes to the boss.","Split|Equal HP; kill together."]}},
 {n:"ADS",sub:"Turn 2 · node gauntlet",key:"Kill at least three nodes; each one removes an ADS attack.",d:{normal:["High Voltage|Interrupt.","Repelling Cannons|Out.","Cleave|Vuln stacks.","Ballast|Safe spot behind the wave.","Chain Lightning|Spread.","Gravity Field|Move away.","Firestream|Between lines.","Allagan Rot|Pass it on."]}},
 {n:"Clockwork gauntlet",sub:"Turn 4",key:"Six timed phases: Knights reflect magic (physical DPS on them), stack behind Dreadnaughts and kill them before they eat spiders.",d:{normal:["Structure|Six phases, each about a minute before the next spawns automatically (killing everything spawns it early). Stay ahead or you'll be overwhelmed.", "P1 · Clockwork Bugs|Six spiders; tanks gather them and everyone AoEs.", "P2 · Knights & Soldiers|Two pairs, NW and NE, one tank each. Both have a ~7k Stoneskin; Knights reflect magic, so physical DPS take Knights and casters take Soldiers. Kill NW first. Point-blank spin hits melee; they pull their target in. Kill them while immobilised after Stoneskin breaks, before they recast it.", "P3 · Dreadnaught|Spawns NW with four spiders. Huge frontal cleave: stack behind it. It eats nearby spiders, healing and gaining damage stacks. Kill it before P4 or it's over; tanks and healers use cooldowns for the stacks.", "P4 · Spinner-rooks|Two rooks plus four spiders; one tank per rook, faced south away from the raid. Untelegraphed Pox cone heals-debuffs: tanks run through the rook before the cast ends. Kill rooks, then AoE spiders; enter P5 with no spiders.", "P5|New Dreadnaught NE plus a Knight and Soldier. Off-tank holds the pair; raid kills the Dreadnaught first.", "P6|Another Dreadnaught, Knight, Soldier, a Spinner-rook and two spiders. Kill the rook first (melee LB is ideal), then Knights/Soldiers by damage type, then stack behind the Dreadnaught and burn it.", "Enrage|A pulsing raidwide you can heal through for a few seconds.", "Video|MTQcapture — The Binding Coil of Bahamut Turn 4 Raid Guide (youtube.com/watch?v=pb_hDiiBOi4)."]}},
 {n:"Twintania",sub:"Turn 5",key:"Stand in a Neurolink for Aetheric Profusion and Hatch.",d:{normal:["Death Sentence / Plummet|Tank swap; cleave.","Scourges|Kill; dodge Liquid Hell.","Fireball / Conflagration|Split stack; break dome.","Divebomb|Dodge lines.","Asclepius / Hygieia|Kill.","Aetheric Profusion|Neurolink.","Twister|Move.","Dreadknight|Kill.","Hatch|Neurolink."]}}
]},
{exp:"A Realm Reborn",type:"Raid",inst:"The Second Coil of Bahamut (T6–T9)",lv:50,il:"Normal: i90–105 · Savage: i105",rl:[],patch:"2.2 · Savage 2.3",bosses:[
 {n:"Rafflesia",sub:"Turn 6",key:"Blighted Bouquet: stop moving and acting.",d:{
 normal:["Bloody Caress|Swap.","Briary Growth|Kill centre bulbs.","Thorn Whip|Stack, then spread.","Floral Trap / Devour|Stay away.","Blighted Bouquet|Freeze.","Viscid Emission|Honey + hornets.","Leafstorm|Slugs; LB.","Acid Rain|Don't hit honey.","Swarm|Tank stacks."],
 savage:["Bulbs tether|−90% damage taken; move her.","Bloody Caress|Swap every stack.","Honey & bees|One each.","Leafstorm at 65%|Earlier.","Swarm|Spread to 1 stack.","Slugs|Must kill all three."]}},
 {n:"Melusine",sub:"Turn 7",key:"Cursed Shriek: hide behind a petrified Renaud.",d:{
 normal:["Cursed Voice|Face a Renaud.","Renaud|Don't hit once stoned.","Lamia Deathdancer|Off-tank.","Cursed Shriek|Line of sight.","Discipline|Leave rings.","Fatedealer|Spread.","Prosector|Look away.","Venomous Tail|Esuna."],
 savage:["Renauds|Lethal autos; stone in order.","Petrifaction|Gaze.","Poison Floor|Step off.","Terror Sphere|Hysteria.","Enrage|11 min."]}},
 {n:"The Avatar",sub:"Turn 8",key:"Charge towers in order; never let two max at once.",d:{
 normal:["Biotowers|Dreadnaught, mines, raidwide.","Diffusion Ray|Bleed cleave.","Homing Missile|Off-tank intercepts.","Gaseous Bomb|Stack.","Ballistic Missile|2 or 3 per circle.","Brain Jack|Swap.","Allagan Field|Corner + shield."],
 savage:["Towers from pull|No cast bars.","Landmines|Tanks soak.","Languishing|3 stacks lethal.","Allagan Field|Two DPS.","Synced towers|Atomic Ray."]}},
 {n:"Nael deus Darnus",sub:"Turn 9",key:"Golems: no more than three comets each; keep them apart.",d:{
 normal:["Ravensbeak|Swap; Raven Blight.","Stardust|Spread comets.","Iron Chariot / Thermionic Beam|Stack.","Lunar Dynamo|Donut.","Meteor Stream|Spread.","Dalamud Dive|Tank away.","Golems|Feed carefully.","Megaflare|Mitigate.","Heavensfall|Avoid centre.","Garrote|White circles.","Dragons|Fire ↔ ice swap; Thunderstruck away.","Cauterize|Run.","Enrage|~13 min."],
 savage:["Stardust|Red and yellow apart.","Golems|Interrupt Earthshock.","Heavensfall pillar|Lethal touch.","Fire Breath|Burn puddles.","Fireball / Iceball|Alternate.","Enrage|13 min."]}}
]},
{exp:"A Realm Reborn",type:"Raid",inst:"The Final Coil of Bahamut (T10–T13)",lv:50,il:"i110–123",rl:[],patch:"2.4",bosses:[
 {n:"Imdugud",sub:"Turn 10",key:"Static Charge: every death powers Electric Burst.",d:{normal:["Crackle Hiss / Spike Flail|Behind, not too far.","Critical Rip|Tankbuster.","Erratic Blaster|Shield the marked player.","Wild Charge|Line up.","Sons & Daughters|Daughters first; keep apart.","Heat Lightning|Spread.","Cyclonic Chaos|Split.","Shrinking arena|Centre."]}},
 {n:"Kaliya",sub:"Turn 11",key:"Blue fireball first = stack then spread; red first = spread then stack.",d:{normal:["Resonate|Tanks share.","Nerve Gas|Never same side twice.","Barofield|Don't pass under.","Seed of the River & Sea|Stack/spread order.","Secondary Head|Provoke on cast.","Nodes|Weapons & Gravity together; Electric last.","Nerve Cloud|Mitigate.","Nanospore Jet|Keep partners close."]}},
 {n:"Phoenix",sub:"Turn 12",key:"Redfire orb must hit the Bluefire holder.",d:{normal:["Revelation|Swap.","Bennu|Kill in corners.","Blackfire / Whitefire|Space mines.","Brand of Purgatory|Pass it.","Bluefire / Redfire|Intercept.","Flames of Rebirth|Kill Bennu.","Fountain of Fire|Off-tank 4, DPS split.","Egi|Lines and tethers."]}},
 {n:"Bahamut Prime",sub:"Turn 13",key:"Teraflare: stand in Neurolink 2.0 and tank LB3 ~4s before the end.",d:{normal:["Flare Breath / Flatten|Tank.","Megaflare|Spread; crystal players stack.","Earthshaker|Marked to the edges.","Gigaflare|Raidwide.","Shadow of Meracydia|Kill.","Flare Star|Share Suffocated Will.","Megaflare tower|Soak.","Dragons|Blood, Pain, Gust, Sin, Storm.","Teraflare|Tank LB3.","Akh Morn|Grows; invuln on third.","Tempest Wing|Tanks take tethers.","Enrage|Long Gigaflare."]}}
]},
/* ───────── A REALM REBORN ALLIANCE RAIDS (Crystal Tower) ───────── */
{exp:"A Realm Reborn",type:"Alliance Raid",inst:"The Labyrinth of the Ancients",lv:50,il:"i50 · 24 players",rl:["Alliance Raids"],patch:"2.1",bosses:[
 {n:"Bone Dragon",key:"Killed three times; kill Platinal skeletons before they reach it.",d:{normal:["Skeletons|1000 damage each.","Poison pools|Stay high.","Rotting Eyes|Ignore on third life."]}},
 {n:"Thanatos",key:"Only the Astral Realignment buffed players can hurt him.",d:{normal:["Astral Realignment|Buffed tank taunts.","Cleave|Away from pots.","Magic Pots|Keep alive.","Sandman / Nemesis|Kill tethered adds."]}},
 {n:"King Behemoth",key:"Ecliptic Meteor: hide behind a comet.",d:{normal:["Iron Giants|Face away.","Puroboros|Kill.","Ecliptic Meteor|Line of sight.","Comet-breaking giant|Kill."]}},
 {n:"Phlegethon",key:"Ancient Flare: each party fills its platform.",d:{normal:["Cleave|Avoid.","Ancient Flare|Platforms.","Iron Giants / Claws|Kill.","Below 6%|Burn instead."]}}
]},
{exp:"A Realm Reborn",type:"Alliance Raid",inst:"Syrcus Tower",lv:50,il:"i70 · 24 players",rl:["Alliance Raids"],patch:"2.3",bosses:[
 {n:"Scylla",key:"Charge pillars with lightning balls; stack on the energised platform for Daybreak.",d:{normal:["Lightning balls|Into pillars.","Ice balls|Freeze; thaw with fire.","Ancient Flare|Puddle.","Daybreak|Platform."]}},
 {n:"Glasya Labolas",key:"Intercept the Squires' lines to stop the reflect.",d:{normal:["Vile Utterance|Cone.","Aura|Spread.","Deathstream|Raidwide.","Wrights / Squires|Intercept.","Intermission|Outer platforms.","Spiral Spin|Under him."]}},
 {n:"Amon",key:"Curtain Call: hide behind an ice block; toads must not melt them.",d:{normal:["Blizzaga / Thundaga / Firaga Forte|Centre, spread, heal.","Coloratura|Frontal.","Adds|Stun.","Mini orbs|Kum Kum.","Freeze & toad|Toads thaw.","Curtain Call|Ice blocks."]}},
 {n:"Xande",key:"Ancient Quaga: float in the null gravity zone.",d:{normal:["Circles|Spread.","Knuckle Press|Knockback.","Golden orbs|One player each.","70% / 40%|Kill attractors.","Stack|Per party.","Ancient Quaga|Float."]}}
]},
{exp:"A Realm Reborn",type:"Alliance Raid",inst:"The World of Darkness",lv:50,il:"i90 · 24 players",rl:["Alliance Raids"],patch:"2.5",bosses:[
 {n:"Angra Mainyu",key:"Double Vision: alternate red and white to reset stacks.",d:{normal:["Double Vision|3 stacks lethal.","Mortal Gaze|Look away.","Roulette|Hourglasses.","Flare tether|Odd count.","Death tether|Not a multiple of 3."]}},
 {n:"Five-headed Dragon",key:"Heatwave: stop all actions for 5s.",d:{normal:["Ice Floor|Run.","Poison Slimes|Kill.","Discordance|AoE heads.","Stack|3–5 players.","Prominence|Kill.","Dragonfire tether|Pass.","Heatwave|Freeze."]}},
 {n:"Cerberus",key:"With Mini, get Devoured and kill the belly adds; others re-chain him.",d:{normal:["Gastric Juice|Mini.","Belly adds|Kill.","Fetters|Re-chain.","Tail Swipe|Front.","Ululation|Group."]}},
 {n:"Cloud of Darkness",key:"Someone must stand on each comet tower.",d:{normal:["Feint Particle Beam|Run edge.","Zero-form Beam|Sides.","Comets|Towers.","Clouds|Kill before eaten.","Hypercharged Clouds|Box per alliance.","Shadowlurkers|Kill."]}}
]},
/* ───────── HEAVENSWARD RAIDS (Alexander) ───────── */
{exp:"Heavensward",type:"Raid",inst:"Alexander: Gordias (A1–A4)",lv:60,il:"Normal: i170 · Savage: i190–205",rl:["Normal Raids"],patch:"3.01 · Savage 3.05",bosses:[
 {n:"Oppressor",sub:"A1 · with Faust",key:"Kill both Oppressors together or Self Destruct wipes.",d:{
 normal:["Faust|Burn; off-tank adds.","Photon Spaser|Line.","Resin Bomb|Circles.","Alarums|Kite; Minimise puddles.","3000-tonze Missile|Puddles under lasers.","Quick Landing|Far side.","Self Destruct|Kill together."],
 savage:["Faust|~160s DPS check.","Oppressor 0.5|Keep apart; HP within 3–5%.","Hydrothermal Missile|Two Prey in P2.","Hypercompressed Plasma|Both tanks.","Emergency Liftoff|Stack, then edges."]}},
 {n:"Gobwalker waves",sub:"A2",key:"Kill order: Gobwalkers, Jagd Dolls, Hardhelm/Hardmind, small goblins, Gobwidows.",d:{
 normal:["Kill order|Red armours first.","Bombs|Drag away with Magitek armour."],
 savage:["Gobwalker energy|Pilots.","Bombs|Stickyloom away.","Charged Soldiers|Cracklyplume.","Hardmind / Hardhelm|Order by wave.","Boomcannon|Top tanks.","Enrage|10:30."]}},
 {n:"Living Liquid",sub:"A3",key:"+/− debuffs: same signs stack, opposite signs spread.",d:{
 normal:["Edge|Electrified.","Protean Wave|Cone.","Sluice|Spread.","Wash Away|Centre.","Tornado|Stun lubricants.","Orange tether|Tank.","Cascade|Swap 4–5 stacks."],
 savage:["Protean Wave|Cones then spread.","Digititis|Pass marks.","Hand of Parting / Prayer|Centre or edge.","Hand HP|Within 5%.","Ferrofluid|Like close, opposite apart.","Liquid Gaol|Esuna.","Summon Limb|Stun and slow."]}},
 {n:"The Manipulator",sub:"A4",key:"Judgement Nisi: keep healers apart.",d:{
 normal:["Legs|One at a time.","Orbs|Run into them.","Quarantine|Keep them alive.","Lasers|Intercept.","Jagd Dolls|Apart; 4 stacks lethal.","Carnage Zero|Spread.","Discoid|Spread; buster."],
 savage:["Carnage|Take tethers.","Perpetual Ray|Stun.","Jagd Dolls|To ≤25% on the Straf Doll.","Nisi|Colour juggling.","Steam Pump|Stack.","Royal Pentacle|Purge regulators.","Enrage|13:10."]}}
]},
{exp:"Heavensward",type:"Raid",inst:"Alexander: Midas (A5–A8)",lv:60,il:"Normal: i200 · Savage: i215–225",rl:["Normal Raids"],patch:"3.2",bosses:[
 {n:"Ratfinx Twinkledinks",sub:"A5",key:"Swap tanks at 4 Concussion stacks.",d:{
 normal:["Bombs|Tank in a corner.","Concussion|Swap.","Corner adds|Tank.","Red marker|Away.","Gorilla puddle|Knock bombs away.","Bird puddle|Before Boost."],
 savage:["Faust / Hummelfaust|Kill together.","Gobstraight / Gobcut|Knockback; stack.","Gobdash / Gobhook|Prey runs.","Syringes|Meter under 100.","Tetrabombs|Diagonal.","Phase 2 adds|Groper, Gawker, Minotaur, Shabti."]}},
 {n:"Blaster, Brawler, Swindler & Vortexer",sub:"A6",key:"Swindler: stand on the opposite height to your debuff.",d:{
 normal:["Blaster|Mines; charges.","Brawler|Read arms; swap at 3–4.","Swindler|Height; orb counts.","Vortexer|Freeze sprite; hide behind ice."],
 savage:["Mind Blast|Interrupt.","Mirage|Arms up face away; down face toward.","Brawler|Swap at 2.","Enumeration|2 orbs = tanks/healers; 3 = DPS.","Compressed Lightning / Water|Stacks.","Ultra Flash|Ice block."]}},
 {n:"Quickthinx Allthoughts",sub:"A7",key:"Caged players follow their cage's colour rule.",d:{
 normal:["Spikes|Avoid.","Sizzlebeam|Away.","Uplander Doom|Swap.","Cages|Red still, purple kill Alarum, white Gobwalker, green vent.","Dolls|Stun Kugelblitz.","True Heart|Kill."],
 savage:["High Wire|Deaths buff boss.","Corporal Punishment|Dodge hammers.","Sizzlespark|Raidwide.","Uplander Doom|Swap at 3.","Bombs|Clock spots.","Zoomdoom / Jails|Pass Prey.","Enrage|Sizzlespark."]}},
 {n:"Onslaughter & Brute Justice",sub:"A8",key:"Kill Steam Regulators fast.",d:{
 normal:["Hydrothermal Missile|Swap.","Mega Beam|Front.","Execution|Regulators.","Ice Missile|Drop.","Height / Enumeration|Swindler.","Apocalyptic Ray|Behind."],
 savage:["Execution|DPS corners.","Legislation|Clear Final Punishment.","Four bosses|Never all alive.","Missile Command|Prey.","Verdict|Final Judgment conditions.","Compressed Water|Share.","Final Combo|Invuln."]}}
]},
{exp:"Heavensward",type:"Raid",inst:"Alexander: The Creator (A9–A12)",lv:60,il:"Normal: i230 · Savage: i245–255",rl:["Normal Raids"],patch:"3.4",bosses:[
 {n:"Refurbisher 0",sub:"A9",key:"Kill adds before lava rises; keep Full Metal Faust out of lava.",d:{
 normal:["Scrap|Column.","Scrap Burst|Hide behind meteors.","Scrapline|Behind.","Scrapbomb|Stack.","Lava|Kill adds.","Full Metal Faust|Off-tank to SE.","Scrap Storm|Enrage."],
 savage:["Faust Z|2-min enrage.","Scrapline|MT behind.","Scrap Burst|Hide.","Stockpile|Never repaired.","Double Scrapline|Minimum puddle.","Power Generator|Carriers."]}},
 {n:"Lamebrix Strikebocks",sub:"A10",key:"Single Charge: red arrow = out, green ring = in.",d:{
 normal:["Buttons|Spikes, balls, side spikes.","Steamroller|Kill.","Saw blades|Between buttons.","Single Charge|In or out.","Prey|Line."],
 savage:["Edges|Electrified.","Slicetops|Swap; clear path.","Leghops|Stop everything.","Charge sequence|Track order.","Brighteyes|Healers split.","Gobspin|Arrow Trap.","Goblins|Weight Trap."]}},
 {n:"Cruise Chaser",sub:"A11",key:"Limit Cut: kill all orbs before Eternal Darkness.",d:{
 normal:["Optical Sight|Spread; outer ring.","Propeller Wind|Hide.","GA-100|Distance.","Flight|Duct button.","Limit Cut|Orbs.","Eternal Darkness|Raidwide.","Prey|Shield."],
 savage:["Optical Sight|Spread, stack or rotation.","Laser Sword|Opposite side.","Limit Cut|Odd face wall.","Pyretic + Photon|Freeze.","Shield|Hit from front.","Pillars|Protect all three.","Photon + Clasters|Keep everyone alive."]}},
 {n:"Alexander Prime",sub:"A12",key:"Judgement: Tank LB3 or wipe.",d:{
 normal:["Divine Spear|Cleave.","Sacrament|Diagonals.","Blazing Scourge|Spread.","Waves|Lanners, Might, Wings.","Judgement|Tank LB.","Temporal Stasis|Stack or spread.","Time Gate|Follow your add.","Gravitational Anomaly|Safe triangles."],
 savage:["Divine Spear / Punishing Heat|Mitigate.","Blazing Scourge|Short spread.","Temporal Stasis|Planned spots.","Restraining Order|North/south.","Time Gates|Assignments.","Inception|Third red dot.","Void of Repentance|Towers by role.","Holy Scourge|Invuln; swap."]}}
]},
/* ───────── HEAVENSWARD ALLIANCE RAIDS (Shadow of Mhach) ───────── */
{exp:"Heavensward",type:"Alliance Raid",inst:"The Void Ark",lv:60,il:"i175 · 24 players",rl:["Alliance Raids"],patch:"3.1",bosses:[
 {n:"Cetus",key:"Electric Whorl: stand inside the hitbox.",d:{normal:["Electric Swipe|Rear.","Body Slam|Circle.","Immersion|Dropsy puddles.","Symbiosis|Kill Hybodus.","Hydrobomb|Keep moving.","Hydrocore|Spheres first."]}},
 {n:"Irminsul & Sawtooth",key:"Shockwave Stomp: hide behind Irminsul.",d:{normal:["Life Tether|Even damage.","Resistances|Switch type.","White Breath|Cone.","Mucus|Break tethers.","Shockwave Stomp|Behind Irminsul."]}},
 {n:"Cuchulainn",key:"Bile Below: get onto a raised platform.",d:{normal:["Corrosive Bile|Cone.","Flailing Tentacles|Diagonals.","Gyrtowers|Destroy.","Foobars|Kill before Devour.","Bile Below|Platforms.","Black Lung|Touch orbs."]}},
 {n:"Echidna",key:"Split into three adds: keep them apart.",d:{normal:["Sickle Strike|Tankbuster.","Sickle Slash|Centre.","Demonic Descent|Stack or spread.","Abyssal Reaper|Knockback.","Petrifaction|Look away.","Adds|Separate."]}}
]},
{exp:"Heavensward",type:"Alliance Raid",inst:"The Weeping City of Mhach",lv:60,il:"i205 · 24 players",rl:["Alliance Raids"],patch:"3.3",bosses:[
 {n:"Arachne Eve",key:"Pitfall: stand on a web away from the centre.",d:{normal:["Dark Spike|Tankbuster.","Silken Spray|Knockback; Heavy.","Green markers|Free tethered.","Burrow|Proximity.","Web phase|Keyknots, orbs.","Fond Affeared|Gaze.","Pitfall|Webs."]}},
 {n:"Forgall",key:"Mega Death: stand in a green puddle.",d:{normal:["Talons|Kill.","Necropurge|Green puddles.","Punishing Ray|Towers.","Megiddo Flame|Columns.","Brand of the Fallen|Matching stack.","Adds|Succubus first.","Mega Death|Zombify."]}},
 {n:"Ozma",key:"Acceleration Bomb: stop everything.",d:{normal:["Sphere|Spread; tornadoes.","Meteor|Stack.","Pyramid|Sides; Acceleration Bomb.","Cube|Donut; tanks soak orbs.","Holy|Stay close.","Ozmashade|Destroy before Doomsday."]}},
 {n:"Calofisteri",key:"Penetration: looking pulls you in.",d:{normal:["Haircut|Watch the blade.","Extension|Kill tentacles.","Bijous|Small first.","Chasing AoE|Edge.","Axe flower|Close.","Penetration|Facing.","Depth Charge|Then Haircut."]}}
]},
{exp:"Heavensward",type:"Alliance Raid",inst:"Dun Scaith",lv:60,il:"i235 · 24 players",rl:["Alliance Raids"],patch:"3.5",bosses:[
 {n:"Deathgaze Hollow",key:"Void Aero III: stand against a purple wall.",d:{normal:["Void Death|Move away.","Void Aero II|Spread tornadoes.","Void Blizzard II|Gaps.","Doomsay|Esuna.","Void Aero III|Wall.","Void Blizzard IV|Ice block.","Bolt of Darkness|Wall.","Sprites|Kill."]}},
 {n:"Ferdiad Hollow",key:"Wormhole: yellow ring = under, blue ball = avoid.",d:{normal:["Abyssal Scythe|Place away.","Wormhole|Atomos colours.","Debilitator|Flip puddles.","Adds|Kill all.","Jester's Reward|Half room.","Jester's Jig|Raidwide."]}},
 {n:"Proto Ultima",key:"Destroy the three Aether Collectors before Supernova.",d:{normal:["Magitek Ray|Three lasers.","Diffractive Laser|Frontal.","Light Pillar|Move.","Eikonizer|Flare Stars.","Dreadnaughts|Tank.","Proto Bits|Kill.","Aether Collectors|Destroy."]}},
 {n:"Scathach",key:"Connla must die or the raid wipes.",d:{normal:["Thirty Thorns|Out after.","Shadespin|Open quadrant.","Shadow Links|Stop moving.","Shadethrust|Line.","Connla|Kill away.","Nox|Bait away.","Shadow Limbs|Face them.","Cocoon|Towers."]}},
 {n:"Diabolos & Diabolos Hollow",key:"Diabolic Gate: enter and kill the add.",d:{normal:["Nightmare|Look away.","Ultimate Terror|Close or far.","Night Terror|Stack.","Lifegate|Kill five times.","Hollow Camisado|Big buster.","Hollow Night|Line stack.","Particle Beam|Towers.","Critical Gravity|Edge orbs."]}}
]}
]);

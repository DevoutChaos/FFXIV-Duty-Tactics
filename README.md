# FFXIV Duty Briefings: phone app

An offline app for your Galaxy Z Flip 5 with boss-by-boss strategy for 232 duties and 800 bosses (Patch 7.56).
It needs no log-in, sends nothing anywhere, and works in airplane mode once it's installed.

## What's in this folder

| File | What it does |
|---|---|
| `index.html` | The single page the app lives in. |
| `styles.css` | Colours, layout, dark mode, and the compact cover-screen layout. |
| `app.js` | Every page, the search, and search history. Each function has a comment explaining it. |
| `data.js` | All the duty and boss information, copied from your Duty Briefings page. |
| `sw.js` | The "service worker". It saves the app on your phone so it works offline. |
| `manifest.webmanifest` | Tells Android the app's name, icon and colours so it can be installed. |
| `icons/` | The home-screen icon. |

## Getting it onto your phone (one time, about 10 minutes)

An installable web app has to be opened once from a real web address. GitHub Pages hosts it for free.

1. Create a free account at **github.com**.
2. Click **+** (top right), then **New repository**. Name it `duty-briefings`, set it to **Public**, and click **Create repository**.
   GitHub Pages is only free for public repositories, so anyone with the link could see the app. Nothing personal is in it.
3. On the new repository page, click **uploading an existing file**. Drag in **everything inside this folder**, including the `icons` folder. Click **Commit changes**.
4. Go to **Settings → Pages**. Under *Branch*, choose **main** and **/ (root)**, then click **Save**.
5. Wait 1–2 minutes. The page will show your address, for example `https://yourname.github.io/duty-briefings/`.
6. On your Flip 5, open that address in **Chrome**. Tap **⋮ → Add to Home screen → Install**.
7. Open the app once from the new icon while you're online. After that it works offline.

### Using it on the cover screen (Flex Window)

Samsung only lets certain apps run on the cover screen. To add this one:

1. Install **Good Lock** from the Galaxy Store, then install its **MultiStar** module.
2. In MultiStar, open **I ♡ Galaxy Foldable → Launcher Widget**, and turn on **Duty Briefings**.
3. Add the *Launcher* widget to the cover screen in **Settings → Cover screen → Widgets**.

When the screen is short (the cover screen, or the phone turned sideways), the app automatically switches to a compact layout.

## Search history

- A search is saved when you press **Search/Enter** on the keyboard, tap a result, or tap a mechanic tag.
  It is not saved on every letter you type, so half-typed words don't fill up the list.
- Only the last **10** searches are kept, with the newest first. A repeated search moves to the top instead of appearing twice.
- To see them, tap the search box, then tap the **clock** button. **Clear history** deletes them.
- History is stored only in the app's storage on your phone. Uninstalling the app or clearing Chrome's site data deletes it.

## Updating the app later (e.g. when new duties are added)

1. Replace `data.js` with the new version. Keep the comment block at the top.
2. Open `sw.js` and change `CACHE_VERSION = 'duty-briefings-v1'` to `v2` (then `v3` next time, and so on).
   **If you skip this step, phones will keep showing the old version.**
3. Upload the changed files to your GitHub repository, overwriting the old ones.
4. Open the app while online. It downloads the update and shows **"App updated. Tap to reload."**

## Testing on your PC before uploading (optional)

Opening `index.html` by double-clicking it mostly works, but offline mode and history won't, because browsers restrict files opened directly.
To test properly, use a small local web server, such as the *Live Server* extension in VS Code.

# HabitQuest Complete PWA
This version includes:
- Good/bad habits with 5/10/15 difficulty rewards
- Edit any habit (name, Good/Bad, Easy/Medium/Hard) and archive/restore habits; edits affect future answers only, history is preserved
- One answer per habit per day with persistent local storage
- Daily score, calendar, daily/weekly/monthly analytics
- XP, levels, titles, HP and coins
- Achievements and personal records
- Daily quest and weekly challenge
- Reward shop with streak shields, XP boosts, healing and cosmetics
- Avatar/hero profile
- Boss battle
- Missions
- Notifications permission
- PWA manifest + offline service worker
- Export/reset data

## Install
Host the folder on HTTPS (GitHub Pages, Netlify, Vercel, Cloudflare Pages, or your own HTTPS server).
Open the site on Android Chrome and choose Add to Home screen / Install app.

## Updating
If you change any file, bump CACHE in service-worker.js (e.g. habitquest-complete-v3) so installed copies refresh.

## Important
Progress is stored locally in the browser. Export a backup from Settings.
Notifications are browser/device dependent; exact scheduled delivery while the app is completely closed is not guaranteed without a push notification backend.

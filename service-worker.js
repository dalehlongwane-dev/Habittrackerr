const CACHE='habitquest-complete-v2';
const ASSETS=['./','./index.html','./manifest.json','./service-worker.js','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
// Remove caches from older versions so an installed copy picks up the new files.
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
// Offline-first with background refresh: answer from cache instantly, update the cache from the network for next time.
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  e.respondWith(caches.match(e.request).then(cached=>{
    const net=fetch(e.request).then(x=>{
      if(x&&x.ok&&new URL(e.request.url).origin===self.location.origin){const copy=x.clone();caches.open(CACHE).then(c=>c.put(e.request,copy))}
      return x;
    }).catch(()=>cached||caches.match('./index.html'));
    return cached||net;
  }));
});
self.addEventListener('message',e=>{if(e.data?.type==='DAILY_NOTIFICATION')self.registration.showNotification('HabitQuest',{body:e.data.body||'Your daily quests are waiting!',icon:'icons/icon-192.png',badge:'icons/icon-192.png',tag:'habitquest-daily'});});
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(clients.matchAll({type:'window'}).then(cs=>{for(const c of cs)if('focus'in c)return c.focus();if(clients.openWindow)return clients.openWindow('./')}))});

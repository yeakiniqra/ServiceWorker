let timer;

self.addEventListener('message', event => {
  if (event.data.action === 'start-timer') {
    if (Math.random() > 0.5) {
      clients.matchAll().then(clients => {
        clients.forEach(client => {
          client.postMessage({ action: 'open-timer-window' });
        });
      });
    }
  }
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

(function () {
  if (!('serviceWorker' in navigator)) return;

  let waitingWorker = null;

  function showUpdateBanner(worker) {
    waitingWorker = worker;
    if (document.getElementById('pwa-update-banner')) return;

    const isAr = document.documentElement.lang !== 'en';
    const banner = document.createElement('div');
    banner.id = 'pwa-update-banner';
    banner.setAttribute('dir', document.documentElement.dir || 'rtl');
    banner.style.cssText = 'position:fixed;bottom:90px;left:50%;transform:translateX(-50%);z-index:9999;background:var(--gradient-primary);color:white;padding:12px 24px;border-radius:50px;box-shadow:0 4px 20px rgba(0,0,0,0.25);display:flex;align-items:center;gap:12px;font-family:Tajawal,sans-serif;font-size:0.9rem;cursor:pointer;transition:opacity 0.3s;';
    banner.innerHTML =
      '<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2v10M5 8l4 4 4-4" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 12v3c0 .6.4 1 1 1h12c.6 0 1-.4 1-1v-3" stroke="white" stroke-width="1.8" stroke-linecap="round" fill="none"/></svg>' +
      '<span>' + (isAr ? 'تحديث متاح' : 'Update Available') + '</span>';
    banner.addEventListener('click', function () {
      if (waitingWorker) {
        waitingWorker.postMessage('skipWaiting');
      }
    });
    document.body.appendChild(banner);
  }

  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').then((reg) => {
      if (reg.waiting) {
        showUpdateBanner(reg.waiting);
      }
      reg.addEventListener('updatefound', () => {
        const newWorker = reg.installing;
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            showUpdateBanner(newWorker);
          }
        });
      });
    }).catch(() => {});

    navigator.serviceWorker.addEventListener('controllerchange', () => {
      window.location.reload();
    });
  });
})();

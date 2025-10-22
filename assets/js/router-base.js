// Align page.js routing with the directory where the bundle is served.
(function(){
  if (!window.page || typeof window.page.base !== 'function') {
    return;
  }
  var appScript = document.querySelector('script[src*="assets/js/app.bundle.js"]');
  var basePath = '/';
  if (appScript) {
    try {
      var appUrl = new URL(appScript.getAttribute('src'), window.location.href);
      basePath = appUrl.pathname.replace(/assets\/js\/app\.bundle\.js$/, '');
    } catch (error) {
      var segments = window.location.pathname.split('/').filter(Boolean);
      basePath = segments.length ? '/' + segments[0] + '/' : '/';
    }
  }
  if (!basePath.endsWith('/')) {
    basePath += '/';
  }
  window.page.base(basePath.replace(/\/+/g, '/'));
})();

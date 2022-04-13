if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/js/sw.js').then(
      function (register) {
        console.log('success');
      },
      function (err) {
        console.log('error', err);
      }
    );
  });
}

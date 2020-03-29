(function() {
  // 非开发环境启用
  if (process.env.NODE_ENV === 'development') {
    const isMobile = navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    );
    if (isMobile) {
      import('vconsole').then(module => {
        const VConsole = module['default'];
        const vConsole = new VConsole();
        vConsole.setOption('maxLogNumber', 5000);
      });
    }
  }
})();

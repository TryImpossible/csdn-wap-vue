import VConsole from 'vconsole';

// 正式环境不启用
if (process.env.NODE_ENV !== 'production') {
  const vConsole = new VConsole();
  vConsole.setOption('maxLogNumber', 5000);
  console.warn('hello world');
}

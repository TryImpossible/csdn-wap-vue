// 设置 rem 函数
function setRem() {
  // 750 默认大小7.5px; 750px = 100rem ;每个元素px基础上/100
  let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  //得到html的Dom元素
  let htmlDom = document.getElementsByTagName('html')[0];
  //设置根元素字体大小
  window.fontSize = htmlWidth > 750 ? 750 / 7.5 : htmlWidth / 7.5;
  htmlDom.style.fontSize = window.fontSize + 'px';
}
// 初始化
setRem();
// 改变窗口大小时重新设置 rem
window.onresize = function() {
  setRem();
};

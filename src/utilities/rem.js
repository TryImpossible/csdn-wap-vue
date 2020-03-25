/* eslint-disable */
(function(win) {
  var doc = win.document;
  var docEl = doc.documentElement;
  var metaEl = doc.querySelector('meta[name="viewport"]');
  var dpr = win.devicePixelRatio || 1;

  // 设置data-dpi属性，留作的css hack之用
  docEl.setAttribute('data-dpr', dpr);

  if (!metaEl) {
    metaEl = doc.createElement('meta');
    metaEl.setAttribute('name', 'viewport');
    metaEl.setAttribute(
      'content',
      'width=device-width' +
        ', initial-scale=1.0' +
        ', maximum-scale=1.0' +
        ', minimum-scale=1.0' +
        ', user-scalable=no'
    );
    if (docEl.firstElementChild) {
      docEl.firstElementChild.appendChild(metaEl);
    } else {
      var wrap = doc.createElement('div');
      wrap.appendChild(metaEl);
      doc.write(wrap.innerHTML);
    }
  }

  // set 1rem = viewWidth / 10
  function setRemUnit() {
    var width = docEl.clientWidth;
    var rem = width / 7.5;
    docEl.style.fontSize = rem + 'px';
    win.rem = rem;
  }

  setRemUnit();

  win.addEventListener('resize', setRemUnit, false);
  win.addEventListener(
    'pageshow',
    function(e) {
      if (e.persisted) {
        setRemUnit();
      }
    },
    false
  );

  // adjust body font size
  function setBodyFontSize() {
    if (document.body) {
      document.body.style.fontSize = 12 * dpr + 'px';
    } else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize, false);
    }
  }
  setBodyFontSize();

  // detect 0.5px supports
  if (dpr >= 2) {
    var fakeBody = document.createElement('body');
    var testElement = document.createElement('div');
    testElement.style.border = '.5px solid transparent';
    fakeBody.appendChild(testElement);
    docEl.appendChild(fakeBody);
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines');
    }
    docEl.removeChild(fakeBody);
  }

  // inject global function
  win.dpr = dpr;
  win.setRemUnit = setRemUnit;
  win.rem2px = function(d) {
    var val = parseFloat(d) * this.rem;
    if (typeof d === 'string' && d.match(/rem$/)) {
      val += 'px';
    }
    return val;
  };
  win.px2rem = function(d) {
    var val = parseFloat(d) / this.rem;
    if (typeof d === 'string' && d.match(/px$/)) {
      val += 'rem';
    }
    return val;
  };
})(window);

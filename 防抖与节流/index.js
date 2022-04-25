// 防抖
function debounce(fn, time) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, time);
  };
}

// 节流
// 时间戳版
function throttleByTimestamp(fn, time) {
  let timer = null;
  let priTime = Date.now();
  return function () {
    timer && clearTimeout(timer);
    const nowTime = Date.now();
    if (nowTime - priTime >= time) {
      fn.apply(this, arguments);
      priTime = nowTime;
    } else {
      timer = setTimeout(() => {
        fn.apply(this, arguments);
      }, time);
    }
  };
}

// 定时器版
function throttleByTimer(fn, time) {
  let timer = null;
  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, arguments);
        timer = null;
      }, time);
    }
  };
}

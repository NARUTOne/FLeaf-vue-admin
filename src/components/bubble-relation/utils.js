/**
 * Fisher–Yates 洗牌算法
 */

/** 
 * @export
 * @param {any} arr 
 */
export function shuffle (arr) {
  const newArr = [...arr];
  let i = newArr.length;
  while (i) {
    const j = Math.floor(Math.random() * i--);
    [newArr[j], newArr[i]] = [newArr[i], newArr[j]];
  }

  return newArr;
}

/* dom event on */
export const on = (function () {
  if (document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler);
      }
    };
  }
})();

/* dom event off */
export const off = (function () {
  if (document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler);
      }
    };
  }
})();
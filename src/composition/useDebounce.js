/**
 * @param {Function} fn
 * @param {Number} delay
 * @returns
 */
export default function (fn, delay) {
  let timeout;

  return (...args) => {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }

    timeout = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

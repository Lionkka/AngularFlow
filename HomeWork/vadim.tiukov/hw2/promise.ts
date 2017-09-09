// tslint:disable-next-line max-line-length
function timeout<T>(fn: () => T, delay: number = 0): Promise<T> {
  return new Promise((reslove, reject) => {
    let res;
    setTimeout(() => {
      try {
        res = fn();
      } catch (err) {
        return reject(err);
      }

      reslove(res);
    }, delay);
  });
}

export default timeout;

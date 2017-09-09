// tslint:disable-next-line max-line-length
function timeout<T>(fn: (callback: (err: Error | undefined, res: T) => void) => void, timeout: number = 0): Promise<T> {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      fn((err, res): void => {
        if (err) {
          reject(err);
        } else {
          reslove(res);
        }
      });
    }, timeout);
  });
}

export default timeout;

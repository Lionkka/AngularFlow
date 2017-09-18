// Create three asynchronous(special for Anton/Alyona - invoke two async timeout in paralel when the first finish run third and when all finish console log 'Done!') timeout request to paralel. And When it all done log to console 'DONE!'(Use p)

function getFirstPromise(): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('first promise');
    }, 1000);
  });
}

function getSecondPromise(): Promise<number> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(1000);
    }, 3000);
  });
}

function getThirdPromise(): Promise<Date> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(new Date());
    }, 2000);
  });
}


// general part
Promise.all([
  getFirstPromise(),
  getSecondPromise(),
  getThirdPromise()
])
.then(res => {
  console.log('DONE!');
});

// special part
Promise.all([
  getFirstPromise().then((res1: string) => {
    return getThirdPromise().then((res2: Date) => {
      console.log('Done!');
      return [res1, res2];
    });
  }),
  getSecondPromise()
])
.then((res: any[]) => {
  console.log('DONE!');
});

import customDelay from './utils/customDelay'

function customAsync (): void {
     const promiseFirst = customDelay(3)
     const promiseSecond = customDelay(4)
     const promiseThird = customDelay(5)

     // SZ you should start second promise only when first is finished
     Promise.all([promiseFirst, promiseSecond, promiseThird]).then((values): string => {
         return 'DONE!'
     })
 }

export default customDelay

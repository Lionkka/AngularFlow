/**
 *- Create three asynchronous(special for Anton/Alyona - invoke two async timeout in paralel when the first finish run 
 * third and when all finish console log 'Done!') timeout request to paralel. And When it all
 * done log to console 'DONE!'(Use p)
 * @param ms
 * @param data
 * @returns {Promise<T>}
 */
function actionTimeOut<T>(ms:number, data:T):Promise<T> {

    return new Promise<T>(
        (resolve) => setTimeout(()=> {
            resolve(data);
        }, ms)
    );
}

let p1 = actionTimeOut<string>(3000, 'Test1');
let p2 = actionTimeOut<string>(2000, 'Test2');
let p3 = actionTimeOut<string>(1000, 'Test3');

Promise.all([p1, p3]).then((success) => {
    console.log(success[0]);
    console.log(success[1]);
    p2.then((success) => {
        console.log(success);
    });
}).then(() => {
    console.log('DONE!');
});

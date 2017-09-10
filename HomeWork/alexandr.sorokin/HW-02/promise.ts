/**
 * Create three asynchronous timeout request to paralel.
 * And When it all done log to console 'DONE!'(Use p)
 */

function createPromise(value: string): Promise<string>{
    return new Promise<string>(function (resolve: (string) => void, reject: (string) => void): void{
        setTimeout((): void => {
            resolve(value);
        },  1000);
    });
}

Promise.all([
    createPromise('promise #1'),
    createPromise('promise #2')

]).then(function (results: string[]) {
    console.log('DONE!');
});
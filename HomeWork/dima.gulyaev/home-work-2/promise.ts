function createPromise(value: string): Promise<string>{
    return new Promise<string>((resolve: (string) => void, reject: (string) => void) => {
        setTimeout((): void => {
            return resolve(value);
        },  1000);
    });
}

Promise.all([
    createPromise('promise #1'),
    createPromise('promise #2'),
    createPromise('promise #3')
]).then(function (results: string[]) {
    console.log('DONE!');
});

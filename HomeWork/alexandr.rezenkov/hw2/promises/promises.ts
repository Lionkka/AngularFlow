function Run<T>(timeout:number, data:T): Promise<T> {
    return new Promise<T>((resolve) => setTimeout(() => { resolve(data); }, timeout * 1 * 1000));
}

function RunInParalell() {
    const promise1 = Run<string>(2, 'promise 1');
    const promise2 = Run<number>(4, 344);
    const promise3 = Run<string>(5, 'promise 2');


    Promise.all([promise1, promise2, promise3]).then( (values) => console.log('DONE!'))
}

RunInParalell();
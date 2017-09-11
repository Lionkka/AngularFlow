const delay = function(time: number):Promise<string> {
    return new Promise<string>((res: (string) => void, rej: (string) => void) => {
        setTimeout(():void=>{
            return res('Done');
        }, time * 1000);
    });
}

// SZ according to task description, you should start second promise only when first is finished.

Promise.all([
    delay(3),
    delay(1),
    delay(2)
]).then((results:Array<string>) => {
    console.log('DONE with results: ', results)
});


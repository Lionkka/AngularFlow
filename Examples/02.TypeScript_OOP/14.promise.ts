const delay = function(time: number):Promise<string> {
    return new Promise<string>((res: (string) => void, rej: (string) => void) => {
        setTimeout(():void=>{
            return res('Done');
        }, time * 1000);
    });
}

delay(1)
    .then((data: string):Promise<string> => {
        console.log(data);
        return delay(2);
    })
    .then((data: string):Promise<string> => {
        console.log(data);
        return delay(0.5);
    })
    .then((data: string) => {
        console.log(data);
        console.log('Completely done!');
    });
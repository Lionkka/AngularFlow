const delay = function(time: number, message: string):Promise<string> {
    return new Promise<string>((res: (string) => void, rej: (string) => void) => {
        setTimeout(():void=>{
            return res(message);
        }, time * 1000);
    });
}

delay(1, 'Hello')
    .then((data: string):Promise<string> => {
        console.log(data);
        return delay(2, 'Hi');
    })
    .then((data: string):Promise<string> => {
        console.log(data);
        return delay(0.5, 'How are you');
    })
    .then((data: string) => {
        console.log(data);
        console.log('Completely done!');
    });
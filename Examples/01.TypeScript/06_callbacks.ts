function sayHello(text: string, cb: (err: Error, message:string) => void): void {
    cb(null, text);
};

function callback(err: Error, message:string):void {
    if(!err){
        console.log(message);
    } else {
        throw err;
    }
}

sayHello('Hello world', callback);
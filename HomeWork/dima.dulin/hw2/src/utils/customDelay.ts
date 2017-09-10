const customDelay = (time: number):Promise<string> => {
    return new Promise<string>((resolve: (string) => void, reject: (string) => void) => {
        setTimeout(():void => {
            return resolve('Promise resolved!')
        }, time * 1000)
    });
}

export default customDelay

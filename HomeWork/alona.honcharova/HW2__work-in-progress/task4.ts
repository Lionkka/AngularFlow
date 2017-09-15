//  invoke two async timeout in paralel when the first finish run third and when all finish console log 'Done!'

const delay = function (time: number, message: string): Promise<null> {
    return new Promise<string>((resolve: () => void) => {
        setTimeout((): void => {
            console.log(message);
            return resolve();
        }, time * 1000);
    });
};


const firstPromise = delay(2, 'First promise was end');
const secondPromise = delay(1, 'Second promise was end');
const thirdPromise = delay(1, 'Third promise was end');

Promise.race([firstPromise, secondPromise])
    .then(thirdPromise);

Promise.all([firstPromise, secondPromise, thirdPromise])
    .then(() => {
        console.log('Done!');
    });


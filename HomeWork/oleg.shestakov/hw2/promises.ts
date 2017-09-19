const one = new Promise((res, rej) => {
    setTimeout(res, Math.random() * 100);
});
const two = new Promise((res, rej) => {
    setTimeout(res, Math.random() * 100);
});
const three = new Promise((res, rej) => {
    setTimeout(res, Math.random() * 100);
});

Promise.all([one, two, three]).then(() => {
    console.log('Done!');
})


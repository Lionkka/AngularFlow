// #4 - Create three asynchronous
// timeout request to paralel. 
// And When it all done log to console 'DONE!'(Use p)

function setPromise(val: number): Promise<string> {
	return new Promise((resolve) => {
			setTimeout(() => resolve("DONE"), val);
		});
}

let promise1 = setPromise(1000);
let promise2 = setPromise(2000);
let promise3 = setPromise(1000);

Promise.all([promise1, promise2, promise3]).then(values => { 
	console.log(values);
});
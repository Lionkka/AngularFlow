function setPromise(delay: number): Promise<string> {
	return new Promise((resolve) => {
			setTimeout(() => resolve("DONE"), delay*1000);
		});
}

let prom1 = setPromise(1);
let prom2 = setPromise(2);
let prom3 = setPromise(1);

Promise.all([prom1, prom2, prom3]).then(values => { 
	console.log(values);
});
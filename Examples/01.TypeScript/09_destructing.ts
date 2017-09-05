const u2 = {a1:{ss:23, jj:55}, b1: 'str'}

let { a1:{ss}, b1 } = u2;

let a233 = {xCoordinate: 1, yCoordinate: 2, nameS: 'Shape', x:1, y:12.34,}
let z = [1,2,3,4,5,6,7];

let {yCoordinate, nameS, xCoordinate} = a233;

console.log(xCoordinate, yCoordinate, nameS);

let [firstElement, secondElement,,foursElement, ...restElements] = z;

console.log(firstElement, secondElement, foursElement, restElements);

let r = 123, dd = 23, yy = 'str';
let x = {r, dd, yy};
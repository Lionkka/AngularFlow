const u2 = {a1:{ss:{tt:12, zz:78}, jj:55}, b1: 'str'}

let { a1:{ss, jj}, b1, a1:{ss:{tt, zz}} } = u2;

console.log(tt, b1, zz);

let a233 = {xCoordinate: 1, yCoordinate: 2, nameS: 'Shape', x:1, y:12.34,}
let z = [1,2,3,4,5,6,7];

let {yCoordinate, nameS, xCoordinate} = a233;

console.log(xCoordinate, yCoordinate, nameS);

let [firstElement, secondElement,,foursElement, ...restElements] = z;//restElements === [5,6,7]

console.log(firstElement, secondElement, foursElement, restElements);

let r = 123, dd = 23, yy = 'str';
let x = {r, dd, yy};

module AA {
    export class A{

    }
    export class B {

    }
}

let { A } = AA;
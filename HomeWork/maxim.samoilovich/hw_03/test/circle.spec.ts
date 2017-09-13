import {} from 'jest';
import { assert } from 'chai';
import { Circle } from '../src/circle';

test('Radius is 0, length expected 0', () => {
    const x: number = 0;
    const y: number = 0;
    const radius: number = 0;
    let circle: Circle = new Circle(x, y, radius);

    const value: number = circle.calcLength().toFixed(2);

    assert.equal(value, 0, 'Wrong length calculating');
});

test('Radius is 50, length expected 314.16', () => {
    const x: number = 0;
    const y: number = 0;
    const radius: number = 50;
    let circle: Circle = new Circle(x, y, radius);

    const value: number = circle.calcLength().toFixed(2);

    assert.equal(value, 314.16, 'Wrong length calculating');
});

test('Radius is 0, square expected 0', () => {
    const x: number = 1;
    const y: number = 1;
    const radius: number = 0;
    let circle: Circle = new Circle(x, y, radius);

    const value: number = circle.calcSquare().toFixed(2);

    assert.equal(value, 0, 'Wrong square calculating');
});

test('Radius is 1, square expected 3.14', () => {
    const x: number = 1;
    const y: number = 1;
    const radius: number = 1;
    let circle: Circle = new Circle(x, y, radius);

    const value: number = circle.calcSquare().toFixed(2);

    assert.equal(value, 3.14, 'Wrong square calculating');
});

test('Radius is 100, square expected 31416', () => {
    const x: number = 1;
    const y: number = 1;
    const radius: number = 100;
    let circle: Circle = new Circle(x, y, radius);

    const value: number = circle.calcSquare().toFixed(0);

    assert.equal(value, 31416, 'Wrong square calculating');
});

test('Radius is less than 0, expected more', () => {
    const x: number = 1;
    const y: number = 1;
    const radius: number = -1;
    let circle: Circle = new Circle(x, y, radius);

    assert.throws(()=>{
        circle.calcSquare();
    }, 'Wrong parameter range');
});

test('Radius more than 100, expected less', () => {
    const x: number = 1;
    const y: number = 1;
    const radius: number = 101;
    let circle: Circle = new Circle(x, y, radius);

    assert.throws(()=>{
        circle.calcSquare();
    }, 'Wrong parameter range');
});
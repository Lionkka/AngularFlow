import Circle from './../src/hw3/Circle';
import {} from 'jest';
import {assert} from 'chai';

const calcSquareOfCircle = (r:number):number => {
    return Math.PI * r * r;
}

const calcCircleLength = (r:number) => {
    return 2 * Math.PI * r;
}

test('Calculate square of cirle with radius 1.', () => {
    //Arrange
    const x = 0;
    const y = 0;
    const r = 1;
    const circle: Circle = new Circle(x, y, r);

    //Act
    const square:number = circle.calculateSquare();

    //Assert
    assert.equal(square, calcSquareOfCircle(r), 'Actual count is not equals 1');
});

test('Calculate square of cirle with radius 0.', () => {
    //Arrange
    const x = 0;
    const y = 0;
    const r = 0;
    const circle: Circle = new Circle(x, y, r);

    //Act
    const square:number = circle.calculateSquare();

    //Assert
    assert.equal(square, calcSquareOfCircle(r), 'Actual count is not equals 1');
});

test('Calculate square of circle with radius 100.', () => {
    //Arrange
    const x = 0;
    const y = 0;
    const r = 100;
    const circle: Circle = new Circle(x, y, r);

    //Act
    const square:number = circle.calculateSquare();

    //Assert
    assert.equal(square, calcSquareOfCircle(r), 'Actual count is not equals 100');
});

test('Calculate square of cirle with radius -1.', () => {
    //Arrange
    const x = 0;
    const y = 0;
    const r = -1;
    const circle: Circle = new Circle(x, y, r);

    //Act
    assert.throw(()=>{
        circle.calculateSquare();
    }, 'Out of radius range');
});

test('Calculate square of cirle with radius 101.', () => {
    //Arrange
    const x = 0;
    const y = 0;
    const r = -1;
    const circle: Circle = new Circle(x, y, r);

    //Act
    assert.throw(()=>{
        circle.calculateSquare();
    }, 'Out of radius range');
});

test('Calculate length of circle with radius 1.', () => {
    //Arrange
    const x = 0;
    const y = 0;
    const r = 1;
    const circle: Circle = new Circle(x, y, r);

    //Act
    const length:number = circle.calculateLength();

    //Assert
    assert.equal(length, calcCircleLength(r), 'Actual count is not equals 1');
});

test('Calculate length of circle with radius 0.', () => {
    //Arrange
    const x = 0;
    const y = 0;
    const r = 0;
    const circle: Circle = new Circle(x, y, r);

    //Act
    const length:number = circle.calculateLength();

    //Assert
    assert.equal(length, calcCircleLength(r), 'Actual count is not equals 0');
});

test('Calculate length of circle with radius -1.', () => {
    //Arrange
    const x = 0;
    const y = 0;
    const r = -1;
    const circle: Circle = new Circle(x, y, r);

    //Act
    assert.throw(()=>{
        circle.calculateLength();
    }, 'Out of radius range');
});

test('Calculate length of circle with radius 101.', () => {
    //Arrange
    const x = 0;
    const y = 0;
    const r = 101;
    const circle: Circle = new Circle(x, y, r);

    //Act
    assert.throw(()=>{
        circle.calculateLength();
    }, 'Out of radius range');
});
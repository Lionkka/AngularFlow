import { Circle } from '../src/Circle';
import { } from 'jest';
import { assert } from 'chai';

test('Create circle with radius 20. Expect should create circle', () => {
    //Arange and Act
    const radius: number = 20;
    const circle: Circle = new Circle(0, 0, radius);

    //Assert
    assert.equal(radius, circle.Radius, 'Actual radius is not equals 20');
});

test('Create circle with radius more than 100. Expect should throw Exception', () => {
    //Arange and Act
    const radius: number = 120;
    let circle: Circle = null;

    // Act
    assert.throw(() => {
        circle = new Circle(0, 0, radius);
    }, 'Radius should be between 0 and 100');
});

test('Create circle with radius less than 0. Expect should throw Exception', () => {
    //Arange and Act
    const radius: number = -2;
    let circle: Circle = null;

    // Act
    assert.throw(() => {
        circle = new Circle(0, 0, radius);
    }, 'Radius should be between 0 and 100');
});

test('Calculate circle square with radius 30. Expect square should be 2827.43', () => {
    //Arange 
    const radius: number = 30;
    const expectedSquare: number = 2827.43;
    const circle: Circle = new Circle(0, 0, radius);
    let actualSquare: number = 0;

    //Act
    actualSquare = circle.calculateSquare();


    //Assert
    assert.equal(actualSquare, expectedSquare, "Wrong square calculation")
});

test('Calculate circle circumference with radius 30. Expect circumference should be 188.5', () => {
    //Arange 
    const radius: number = 30;
    const expectedCircumference: number = 188.5;
    const circle: Circle = new Circle(0, 0, radius);
    let actualCircumference: number = 0;

    //Act
    actualCircumference = circle.calculateCircumference();


    //Assert
    assert.equal(actualCircumference, expectedCircumference, "Wrong circumference calculation")
});
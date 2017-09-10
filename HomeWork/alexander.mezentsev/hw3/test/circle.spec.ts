/*
## Homework 3 ##
- Create Circle class. It contains three properties x, y and radius. 
Create method calculate circle square. Create method calculate circle length. 
If radius will be more that 100 and less than 0 throw exception. 
Use TDD paradigm and jest framework.
*/

import {} from 'jest';
import { assert } from 'chai';
import { Circle } from '../src/classes/circle';

function getCircle (radius: number): Circle {
    const x: number = 5;
    const y: number = 5;
   return new Circle(x, y, radius);
}

test('Calculate circle square with radius 5. Expect circle square calculated correctly', () => {
    // Arrange
    const radius: number = 5;
    const expectedSquare: number = Math.PI * Math.pow(radius, 2);
    const circle: Circle = getCircle(radius);            
    //Act
    const currentSquare: number = circle.calculateSquare();
    //Assert
    assert.equal(expectedSquare, currentSquare, 'Wrong circle square');
});

test('Calculate circle length with radius 5. Expect circle length calculated correctly', () => {
    // Arrange
    const radius: number = 5;
    const expectedLenght: number = 2 * Math.PI * radius;
    const circle: Circle = getCircle(radius);
    //Act
    const currentLength: number = circle.calculateLength(); 
    //Assert
    assert.equal(expectedLenght, currentLength, 'Wrong circle length');
});

test('Calculate circle square with negative radius. Expect exception should be thrown', () => {
    // Arrange
    const radius: number = -5;
    const expectedSquare: number = Math.PI * Math.pow(radius, 2);
    const circle: Circle = getCircle(radius);
    // Act
    assert.throw(() => {
        circle.calculateSquare();
    }, 'Invalid radius range');

});

test('Calculate circle length with negative radius. Expect exception should be thrown', () => {
    // Arrange
    const radius: number = -5;
    const expectedSquare: number = Math.PI * Math.pow(radius, 2);
    const circle: Circle = getCircle(radius);
    // Act
    assert.throw(() => {
        circle.calculateLength();
    }, 'Invalid radius range');

});

test('Calculate circle square with radius more than 100. Expect exception should be thrown', () => {
    // Arrange
    const radius: number = 101;
    const expectedSquare: number = Math.PI * Math.pow(radius, 2);
    const circle: Circle = getCircle(radius);
    // Act
    assert.throw(() => {
        circle.calculateSquare();
    }, 'Invalid radius range');

});

test('Calculate circle length with with radius more than 100. Expect exception should be thrown', () => {
    // Arrange
    const radius: number = 101;
    const expectedSquare: number = Math.PI * Math.pow(radius, 2);
    const circle: Circle = getCircle(radius);        
    // Act
    assert.throw(() => {
        circle.calculateLength();
    }, 'Invalid radius range');

});


import {} from 'jest';
import { assert } from 'chai';

import { Circle } from "../src/circle";

test('test circle', () => {

    // Arrangement
    const circle = new Circle();

    // Act
    circle.radius = 1.6;
    const actualSquare = circle.square();
    const expectedSquare = 8.042;

    // Assert
    assert.equal(actualSquare, expectedSquare, 'Squares are not equal!!!');
});

test('circle length functionality', () => {
    // Arrangement
    const circle = new Circle();
    
    // Act
    circle.radius = 1.6;
    
    const actualLength = circle.length();
    const expectedLength = 10.053;
    
    // Assert
    assert.equal(actualLength, expectedLength, 'Lengths are not equal!!!');
});

test('circle first exceptions', () => {
    const circle = new Circle();

    assert.throws(() => {
        circle.radius = 101;
    }), 'Wrong parameter range';
});

test('circle second exceptions', () => {
    const circle = new Circle();
    
        assert.throws(() => {
            circle.radius = -101;
        }), 'Wrong parameter range';
});
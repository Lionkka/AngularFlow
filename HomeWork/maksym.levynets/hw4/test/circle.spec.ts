// - Create Circle class. It contains three properties x, y and radius. 
// Create method calculate circle square. 
// Create method calculate circle length. 
// If radius will be more that 100 and less than 0 throw exception. 
// Use TDD paradigm and jest framework.

import {} from 'jest';
import { assert } from 'chai';
import { Circle } from '../src/circle';

describe('Test for Circle class.', ():void => {
	// Arrange
	const checkMethodsX: number = 2;
	const checkMethodsY: number = 5;
	const checkMethodsRadius: number = 5;
	const PI = Math.PI;
	const circle: Circle = new Circle();
	
	test('If radius will be more that 100 and less than 0 throw exception', ():void => {
		expect(() => {
			circle.addRadius(100);
			circle.addRadius(-1);
		}).toThrow();
	});
	
	test('Should have method calcSquare.', ():void => {
		//circle.addRadius(checkMethodsRadius);
		const expectedSquare: number = PI*Math.pow(checkMethodsRadius,2);
		const actualSquare: number = circle.calcSquare();
		assert.equal(actualSquare, expectedSquare, 'Wrong Square value');
	});
	
	test('Should have method calcLength.', ():void => {
		circle.addRadius(checkMethodsRadius);
		const expectedLength: number = 2*PI*checkMethodsRadius;
		const actualLength: number = circle.calcLength();
		assert.equal(actualLength, expectedLength, 'Wrong Length value');
	});
})
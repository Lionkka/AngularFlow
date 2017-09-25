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
	const x: number = 3;
	const y: number = 6;
	const radius: number = 6;
	const PI = Math.PI;
	const circle: Circle = new Circle();
	
	test('If radius will be more that 100 and less than 0 throw exception', ():void => {
		expect(() => {
			circle.radius = 100;
			circle.radius = -1;
		}).toThrow();
	});
	
	test('Check method getSquare.', ():void => {
		circle.radius = radius;
		const expectedSquare: number = PI*Math.pow(radius,2);
		const actualSquare: number = circle.getSquare();
		assert.equal(actualSquare, expectedSquare, 'Wrong Square value');
	});
	
	test('Check method getLength.', ():void => {
		circle.radius = radius ;
		const expectedLength: number = 2*PI*radius;
		const actualLength: number = circle.getLength();
		assert.equal(actualLength, expectedLength, 'Wrong Length value');
	});
})
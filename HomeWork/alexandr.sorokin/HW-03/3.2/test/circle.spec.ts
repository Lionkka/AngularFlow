import {} from 'jest';
import { assert} from 'chai';
import {Circle} from "../src/circle";


function createCircle(radius:number): Circle {
    const x = 5;
    const y = 5;
    return new Circle(x, y, radius);
}

describe('Test circle square method', () => {
    test('Calculate with radius equal 80. Expect correct calculation.', () => {
        //Arrange
        const radius = 80;
        const expectedResult: number = Math.PI * Math.pow(radius, 2);
        const circle:Circle = createCircle(radius);
    
        //Act
        const actualResult: number = circle.calculateSquare();
    
        //Assert
        assert.equal(actualResult, expectedResult, 'Wrong calculation in circle square method');
    });
    
    test('Calculate with radius more than 100. Expect throw exception.', () => {
        //Arrange
        const radius = 180;
        const circle:Circle = createCircle(radius);
    
        //Assert
        assert.throw(() => {
            circle.calculateSquare();
        }, 'Invalid radius range');
    });
    
    test('Calculate with radius less than 0. Expect throw exception.', () => {
        //Arrange
        const radius = -2;
        const circle:Circle = createCircle(radius);
    
        //Assert
        assert.throw(() => {
            circle.calculateSquare();
        }, 'Invalid radius range')
    });
});

describe('Test circle length method', () =>{
    test('Calculate with radius equal 80. Expect correct calculation.', () => {
        //Arrange
        const radius = 80;
        const expectedResult: number = 2 * Math.PI * radius;
        const circle:Circle = createCircle(radius);
    
        //Act
        const actualResult: number = circle.calculateLength();
    
        //Assert
        assert.equal(actualResult, expectedResult, 'Wrong calculation in circle length method');
    });
    
    test('Calculate with radius more than 100. Expect throw exception.', () => {
        //Arrange
        const radius = 120;
        const circle:Circle = createCircle(radius);
    
        //Assert
        assert.throw(() => {
            circle.calculateLength();
        }, 'Invalid radius range');
    });
    
    test('Calculate with radius less than 0. Expect throw exception.', () => {
        //Arrange
        const radius = -5;
        const circle:Circle = createCircle(radius);
    
        //Assert
        assert.throw(() => {
            circle.calculateLength();
        }, 'Invalid radius range');
    });
});
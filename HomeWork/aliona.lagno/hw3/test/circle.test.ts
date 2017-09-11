import {} from 'jest';
import { assert } from 'chai';
import Circle from '../src/circle';


describe('Test suite for Circle class methods', () => {
    it('length should return correct circle length', () => {
        const circle = new Circle(10, 20, 80);
        const expectedCircleLength = 2 * Math.PI * circle.radius;

        const actualCircleLength = circle.circleLength();

        assert.equal(actualCircleLength, expectedCircleLength, 'Circle length was calculated wrong');
    });

    it('area should calculate and return correct circle area', () => {
        const circle = new Circle(10, 20, 80);
        const expectedCircleArea = Math.pow(circle.radius, 2) * Math.PI;

        const actualCircleArea = circle.circleArea();

        assert.equal(actualCircleArea, expectedCircleArea, 'Circle area was calculated wrong');
    });

    it('should throw error if circle radius is less then 0', () => {
        const wrongRadius: number = -30;

        const constructCircle = (): void => {
            new Circle(2, 2, wrongRadius);
        };

        assert.throw(constructCircle, 'Can\'t construct circle. Wrong radius');
    });

    it('should throw error if circle radius is more than 100', () => {
        const wrongRadius: number = 200;

        const constructCircle = (): void => {
            new Circle(2, 2, wrongRadius);
        };

        assert.throw(constructCircle, 'Can\'t construct circle. Wrong radius');
    });
});

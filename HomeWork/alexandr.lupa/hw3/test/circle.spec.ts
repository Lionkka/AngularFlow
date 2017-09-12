import { Circle } from '../src/circle';
import {} from 'jest';
import { assert } from 'chai';

test('Test circle. If radius is more than 100, should be returns throw Exception', () => {
  // aragne
  const radius: number = 101;

  // act
  assert.throw(() => {
    const circle: Circle = new Circle(0, 0, radius);
  }, 'Invalid radius range');
});

test('Test circle radius. If radius is less than 0, should be returns throw Exception', () => {
  // aragne
  const radius: number = -1;

  // act
  assert.throw(() => {
    const circle: Circle = new Circle(0, 0, radius);
  }, 'Invalid radius range');
});

test('Test circle radius. If radius 50, square should be 7853.98', () => {
  // aragne
  const radius: number = 50;
  const circle: Circle = new Circle(0, 0, radius);
  const expectedResult: number = 7853.98;

  // act
  const actualResult: number = circle.getCircleSquare();

  // assert
  assert.equal(actualResult, expectedResult, 'Wrong square calculation');
});

test('Test getCircumference. If radius 50, circumference should be 314.16', () => {
  // aragne
  const radius: number = 50;
  const circle: Circle = new Circle(0, 0, radius);
  const expectedResult: number = 314.16;

  // act
  const actualResult: number = circle.getCircumference();

  // assert
  assert.equal(actualResult, expectedResult, 'Wrong square calculation');
});




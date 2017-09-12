export class Circle {

  constructor(
    public x: number,
    public y: number,
    public radius: number
  ) {
    if (radius < 0 || radius > 100) {
      throw new Error('Invalid radius range');
    }
  }

  getCircleSquare(): number {
    const square: number = Math.PI * this.radius * this.radius;
    return parseFloat(square.toFixed(2));
  }

  getCircumference(): number {
    const circumference: number = 2 * this.radius * Math.PI;
    return parseFloat(circumference.toFixed(2));
  }

}
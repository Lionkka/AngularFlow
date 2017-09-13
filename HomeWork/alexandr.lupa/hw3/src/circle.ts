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
    return Math.PI * this.radius * this.radius;
  }

  getCircumference(): number {
    return Math.PI * 2 * this.radius;
  }

}
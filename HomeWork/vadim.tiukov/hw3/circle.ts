// Functionality related to x,y axis was not implemented cuz it didn't influence the end result
export default class Circle {
  public x: number = 0;
  public y: number = 0;
  protected _radius: number;

  constructor(radius: number = 0) {
    this.radius = radius;
  }

  public set radius(radius: number) {
    if (radius < 0 || radius > 100) {
      throw new Error("Radius should be positive and less 100");
    }

    this._radius = radius;
  }

  public get radius(): number {
    return this._radius;
  }

  public get circumference(): number {
    return 2 * Math.PI * this.radius;
  }

  public get square(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

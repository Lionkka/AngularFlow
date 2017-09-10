import handleError from './utils/handleError'

class Circle {
  private _x: number
  private _y: number
  private _radius: number

  constructor (x:number, y:number, radius:number) {
    this._x = x
    this._y = y
    this._radius = radius
  }
  calculateSquare (): number {
    this.checkRadius(this._radius)
    return Math.PI * this._radius * this._radius
  }
  calculatePerimeter (): number {
    this.checkRadius(this._radius)
    return Math.PI * 2 * this._radius
  }
  checkRadius (radius: number): number {
    if (radius > 0 && radius < 100) {
      return radius
    }
    handleError(`Invalid number of ${radius}`)
  }
}

export default Circle

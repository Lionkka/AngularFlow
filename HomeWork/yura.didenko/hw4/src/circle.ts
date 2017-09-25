/**
 * Home Work  4
 * Create Circle class. It contains three properties x, y and radius. 
 * Create method calculate circle square. Create method calculate circle length. 
 * If radius will be more that 100 and less than 0 throw exception. 
 * Use TDD paradigm and jest framework.
 */

export class Circle {
	private _radius: number;
	public x: number;
	public y: number;
	
	public get radius(): number {
		return this.radius;
	}
	
	public set radius(value) {
		if (value > 100 || value < 0) {
			this._radius = 0;
			throw 'Error';
		} else {
			this._radius = value;
		}
	}
	
	getSquare(): number {
		if (this._radius) {
			return Math.PI*Math.pow(this._radius,2);
		} else return 0;
	}
	getLength(): number {
		if(this._radius) {
			return 2*Math.PI*this._radius;
		} else return 0;
	}
}

const circle = new Circle();

circle.radius = 10;
console.log(circle.getSquare());
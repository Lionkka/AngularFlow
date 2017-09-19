// - Create Circle class. It contains three properties x, y and radius. 
// Create method calculate circle square. 
// Create method calculate circle length. 
// If radius will be more that 100 and less than 0 throw exception. 
// Use TDD paradigm and jest framework.

export class Circle {
	private radius: number;
	public x: number;
	public y: number;
	
	public get Radius(): number {
		return this.radius;
	}
	
	public set Radius(value) {
		this.radius = value;
	}
	
	addRadius(value: number): void {
		if (value > 100 || value < 0) {
			this.radius = 0;
			throw 'Error';
		} else {
			this.radius = value;
		}
	}
	
	calcSquare(): number {
		if (this.radius) {
			return Math.PI*Math.pow(this.radius,2);
		} else return 0;
	}
	calcLength(): number {
		if(this.radius) {
			return 2*Math.PI*this.radius;
		} else return 0;
	}
}
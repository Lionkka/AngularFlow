/**
 * Create Circle class. It contains three properties x, y and radius.
 * Create method calculate circle square. Create method calculate circle length.
 * If radius will be more that 100 and less than 0 throw exception.
 * Use TDD paradigm and jest framework.
 */

export class Circle {
    constructor(public x: number, public y: number, public radius: number) {}

    public calculateSquare():number {
        this.checkRadius();
        return Math.PI * Math.pow(this.radius, 2)
    }

    public calculateLength(): number{
        this.checkRadius();
        return 2 * Math.PI * this.radius;
    }

    private checkRadius(): void {
        if(this.radius > 100 || this.radius < 0) {
            throw new Error('Invalid radius range');
        }
    }
}
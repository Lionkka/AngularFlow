export class Circle {
    x: number;
    y: number;
    radius: number;

    constructor(x: number, y: number, radius: number) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    public calcSquare(): number {
        if( this.radius < 0 || this.radius > 100) {
            throw new Error ('Wrong parameter range');
        }

        return Math.PI * Math.pow(this.radius, 2);
    }
    
    public calcLength(): number {
        return 2 * Math.PI * this.radius;
    }
}
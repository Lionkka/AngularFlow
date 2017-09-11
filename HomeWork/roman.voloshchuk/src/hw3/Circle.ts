export default class Circle {
    constructor(x:number, y:number, r:number) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    x:number;
    y:number;
    r:number;

    calculateSquare():number {
        this.checkConstraints();
        return Math.PI * Math.pow(this.r, 2);
    }

    calculateLength(): number {
        this.checkConstraints();
        return 2 * Math.PI * this.r;
    }

    private checkConstraints():void {
        if (this.r < 0 || this.r > 100) {
            throw new Error('Out of radius range');
        }
    }
}
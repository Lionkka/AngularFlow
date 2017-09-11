export class Circle {
    private _radius: number;
    private _x: number;
    private _y: number;

    constructor(x: number, y: number, radius: number) {
        // SZ method and properties names should start from lower case character
        // SZ underscore is ok for private methods and properties. NOT for rework.
        this.Radius = radius;
        this.Y = y;
        this.X = x;
    }

    public get Radius(): number {
        return this._radius;
    }

    public set Radius(val: number) {
        if (val < 0 || val > 100) {
            throw new Error("Radius should be between 0 and 100");
        }

        this._radius = val;
    }

    public set X(val: number) {
        this._x = val;
    }

    public get X(): number {
        return this._x;
    }

    public set Y(val: number) {
        this._y = val;
    }

    public get Y(): number {
        return this._y;
    }

    public calculateSquare(): number {
        return +(Math.PI * this._radius * this._radius).toFixed(2);
    }

    public calculateCircumference(): number {
        return +(2 * Math.PI * this._radius).toFixed(2);
    }
}
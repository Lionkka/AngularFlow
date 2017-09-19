export class Circle {

    x : number;
    y: number;
    private _radius: number;

    set radius(rad: number) {
        if(rad > 100 || rad < 0) {
            throw new Error('invalid radius');
        }
        this._radius = rad;
    }

    get radius() {
        return this._radius;
    }

    square() {
        return (Math.PI * this.radius * this.radius).toFixed(3);
    }

    length () {
        return (2 * Math.PI * this.radius).toFixed(3);
    }




}
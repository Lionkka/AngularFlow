/*
Create Circle class. It contains three properties x, y and radius. Create method calculate circle square.
Create method calculate circle length. If radius will be more that 100 and less than 0 throw exception.
Use TDD paradigm and jest framework.
*/

class Circle {
    x: number;
    y: number;
    radius: number;

    constructor(x: number, y: number, radius: number) {
        this.x = x;
        this.y = y;
        if (radius > 100 || radius < 0) {
            throw Error('Can\'t construct circle. Wrong radius');
        } else {
            this.radius = radius;
        }
    }

    public circleLength(): number {
        // 2πr
        return 2 * Math.PI * this.radius;
    }

    public circleArea(): number {
        // πr^2
        return Math.pow(this.radius, 2) * Math.PI;
    }
}

export default Circle;
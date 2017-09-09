/*
## Homework 3 ##
- Create Circle class. It contains three properties x, y and radius. 
Create method calculate circle square. Create method calculate circle length. 
If radius will be more that 100 and less than 0 throw exception. 
Use TDD paradigm and jest framework.
*/
export class Circle {

    constructor(x: number, y: number, radius: number) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    private x: number;
    private y: number;
    private radius: number;

    private calculate(calculateFn: Function): number {
        if(this.radius < 0 || this.radius > 100){
            throw new Error('Invalid radius range');
        }
        return calculateFn();
    }
    
    public calculateSquare(): number {
       return this.calculate(() => {
            return Math.PI * Math.pow(this.radius, 2);
       });
    }

    public calculateLength(): number {
        return this.calculate(() => {
            return 2 * Math.PI * this.radius;
       });        
    }
}
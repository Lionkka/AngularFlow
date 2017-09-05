function MyFunction(name:string, age:number, isActive: boolean):void{
    if(isActive){
        console.log(`This is ${name}. I'm ${age}`);
    } else {
        console.log(`User ${name} is inactive`);
    }
}

MyFunction('Nick', 37, true);
MyFunction('Nick', 37);

const AnotherFunction = function(name:string):string {
    return name.toUpperCase();
}

const ArrowFunction = (numbers: number[]): number => {
    return numbers.reduce((reducer, val) => {
        return reducer += val;
    })
}

ArrowFunction([1,2,3]);

const OptionalFunction = function(name:string, age?: number):string {
    if(age){
        return `Users age is ${age}`;
    } else {
        return `Unknown ${name}'s age`;
    }
}


const defaultSettings = function(name:string, isActive: boolean = true): void {
    console.log(`User - ${name} : Active - ${isActive}`)
}

defaultSettings('Nick', false);
defaultSettings('Alex');

const manyParameters = function(... aLotOfParams: number[]):number {
    return aLotOfParams.reduce((reducer, val) => {
        return reducer += val;
    });
}
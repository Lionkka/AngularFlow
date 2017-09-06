class MyFirstClass {
   static PI: number = 3.14
   count: number;
    
    constructor(count:number = 10.00){
        this.count = count;
    }

    getTotalCount(): number {
        return this.count + MyFirstClass.PI;
    }
}

const myClassInstance = new MyFirstClass(12.00);
myClassInstance.getTotalCount();
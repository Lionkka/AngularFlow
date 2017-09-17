function notifyBefore(funs: Function[]) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const oldValue = descriptor.value;
        descriptor.value = function() {
            funs.forEach(fun => fun());
            oldValue.call(this, arguments);
        }
    }
}

function notifyAfter(funs: Function[]) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const oldValue = descriptor.value;
        descriptor.value = function() {
            oldValue.call(this, arguments);
            funs.forEach(fun => fun());
        }
    }
}

function first() {
    console.log('first');
}

function second() {
    console.log('second');
}


export class ClassWithDecoratedMethod {

    name: string = "sdsdsdsd";

    @notifyBefore([first, second])
    test1() {
        console.log(`test ${this.name}`);   
    }

    @notifyAfter([first, second])
    test2() {
        console.log(`test ${this.name}`);   
    }

}


let t = new ClassWithDecoratedMethod();

t.test1();

t.test2();
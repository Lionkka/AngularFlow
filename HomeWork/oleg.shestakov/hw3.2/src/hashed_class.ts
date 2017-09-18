function hashed() {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const oldValue = descriptor.value;
        descriptor.value = function() { 
            let tempThis = <any>this; // SZ this is a deprecated form of explicit type conversion
            // SZ please use this
            // SZ let tempThis = this as any; - NOT for rework
            tempThis.hash = tempThis.id + " " + tempThis.constructor.name;
            oldValue.call(this, arguments);
        }
    }
}


export class ClassWithDecoratedMethod {

    id: string = "some_id";

    @hashed()
    test1() {
        console.log(`test ${(<any>this).hash}`);   
    }

}


let t = new ClassWithDecoratedMethod();

t.test1();
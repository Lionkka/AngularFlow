// N3 Add decorator notify. Decorator before invoke the method should be invoke all methods from input array of callbacks.
function notifyBeforeDecorator(callbackFunctions: Function[]) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const oldValue = descriptor.value;
        descriptor.value = function() {
            // callbackFunctions.forEach(callbackFunction => callbackFunction());
            return oldValue.call(this, arguments);
        };
        callbackFunctions.forEach(callbackFunction => callbackFunction());
        return descriptor;
    }
}


function firstCallback() {
    console.log('firstCallback');
}

function secondCallback() {
    console.log('secondCallback');
}


export class ClassBeforeDecoratedMethod {

    public afterDecorator: string = "After Decorator";

    @notifyBeforeDecorator([firstCallback, secondCallback])
    public initAfterDecorator() {
        return `Init ${this.afterDecorator}`;
    }


}


let notify = new ClassBeforeDecoratedMethod();

console.log(notify.initAfterDecorator());
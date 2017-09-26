/**
 *  Add decorator notify. Decorator before invoke
 *  the method should be invoke all methods from
 *  input array of callbacks.
 */
function notifyDecorator(target, propertyKey: string, descriptor: PropertyDescriptor): any {
    descriptor.value = function(args) :void{
        args.forEach(function(arg) {
            arg();
        });
    };
}

function callbackOne(){
    console.log('Callback One')
}

function callbackTwo(){
    console.log('Callback Two')
}


class ThirdExampleComponent {
    @notifyDecorator
    invokeMethod(args){
        return args;
    }
}
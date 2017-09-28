// N 2 - Create decorator for method that before method invoke fill field hash of class (get name and class id and put to added field name)
function hashDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

    let oldValue = descriptor.value;
    descriptor.value = function () {
        let id = Object.getOwnPropertyDescriptor(this, 'id').value;
        let className = target.constructor.name;
        let value = oldValue.apply(this, arguments);
        return value + ': ' + className + ' #' + id;
    };

    return descriptor;
}

class HashClass<T> {

    public id: T;

    constructor(id: T) {
        this.id = id;
    }

    @hashDecorator
    public getName(name: string): string {
        return name;
    }

}

let hash: HashClass<number> = new HashClass<number>(7);

console.log(hash.getName('Class name'));
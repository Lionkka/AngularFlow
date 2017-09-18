/**
 * Create decorator for method that before method invoke
 * fill field hash of class (get name and class id and 
 * put to added field name)
 */
function fillHash() {
    return function (target:any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.value = function(){
            return this.hash = this.name + ' ' + this.id;
        }
    }
}

class SecondExampleComponent {
    public name: string = 'Name';
    public id: number = 1;
    public hash: string;

    @fillHash()
    getHash(): string {
        return this.hash;
    }
}
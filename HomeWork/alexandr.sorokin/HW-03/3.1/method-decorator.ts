/**
 * Create decorator for method that before method invoke
 * fill field hash of class (get name and class id and 
 * put to added field name)
 */
function fillHash<T extends {new(...args:any[]):{}}>(constructor:T) {
    return class extends constructor {
        public name: string;
        public id: number;
        public hash: string;

        getHash():string {
            this.hash = this.name + this.id;
            return this.hash;
        }
    }
}

@fillHash
class SecondExampleComponent {
    public name: string = 'Name';
    public id: number = 1;
    public hash: string;

    getHash(): void {}
}
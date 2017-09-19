type con = {new(...args: any[]): {}};

function ClassDecorator<T extends con>(constructor: T) {
    return class extends constructor {
        name: string;
        componentDidMount () {
            console.log(`Component ${this.name} was mounted!`);
        }
    }
}

@ClassDecorator
export class Component {
}

let comp = new Component();
(<any>comp).componentDidMount();
// N 1 Create decorator for class. Decorator should add method componentDidMount that console log 'Component ${name} was mounted'.

function ClassDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
    return class extends constructor {
        componentDidMount = () => {
            console.log("Component DidMount was mounted")
        };
    }
}

@ClassDecorator
class Greeter {
    property = "property";
    hello: string;
    constructor(m: string) {
        this.hello = m;
    }
}

console.log(new Greeter("world"));
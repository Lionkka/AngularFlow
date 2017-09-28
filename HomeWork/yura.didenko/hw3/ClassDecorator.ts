// N 1 Create decorator for class. Decorator should add method componentDidMount that console log 'Component ${name} was mounted'.
function ClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor implements setMethod {

        public componentDidMount(name: string): void {
            console.log(`component ${name} was mounted`);
        }
    }
}

@ClassDecorator
class ClassComponent {
}

interface setMethod {

    componentDidMount(name: string): void;
}

const meetup = new ClassComponent() as ClassComponent & setMethod;
console.log(meetup.componentDidMount('componentDidMount'));
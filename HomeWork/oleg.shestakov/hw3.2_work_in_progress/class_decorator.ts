function ClassDecorator<T extends {new (...args: any[]):{}}>(constructor: T) {
    return class extends constructor{
        componentDidMount(name: string) {
            console.log(`componennt ${name} mount`);
            
        }
    }
}

@ClassDecorator
class Component {
    name = 'Simple component';
}

const comp = new Component();
(<any>comp).componentDidMount(comp.name);

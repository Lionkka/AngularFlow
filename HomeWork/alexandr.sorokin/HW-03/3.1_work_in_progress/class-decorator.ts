/**
 * Create decorator for class. Decorator should add method
 * componentDidMount that console log 'Component ${name} was mounted'.
 */
function ClassDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
    return class extends constructor {
        name: string;
        componentDidMount():void {
          console.log(`Component ${this.name} was mounted`);
        }
    }
}

@ClassDecorator
class FirstExampleComponent {
    public name:string = 'One';
}

import { Component } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `
        <h1>This is child component</h1>
        <h3>{{greeting}}</h3>
        <button [disabled]='isDisabled' (click)='changeGreeting()'>Click Me</button>
        <input type='text' [(ngModel)]='greeting' />
    `,
    styles: [
        `
        h1 {
            color: magenta
        }
        `
    ]
})
export class ChildComponent {
    public greeting: string = 'I like angular';
    public isDisabled: boolean = false;

    public sayHello(): string {
        return 'I like angular';
    }

    public changeGreeting(): void {
        this.greeting = 'I hate angular';
    }
}

import { Component } from '@angular/core';

@Component({
    selector: 'app-my-component',
    template: `
        <h1>Hello Angular</h1>
        <app-child></app-child>
    `
})
export class MyComponent {
}

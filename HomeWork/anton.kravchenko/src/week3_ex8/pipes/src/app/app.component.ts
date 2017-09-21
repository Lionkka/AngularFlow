import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Password directive</h1>
    <input [ngModel]="password | password"
           (ngModelChange)="password=$event" name="inputField" type="text" />

    <h1>Translate directive(enter: one, two, three, four)</h1>
    <input type="text" [(ngModel)]="textToTranslate">
    <h2 *ngIf="textToTranslate">{{textToTranslate | translate}}</h2>

    <h1>OrderBy pipe</h1>
    <textarea [(ngModel)]="toSort"></textarea>
    <div>Ordered in asc order {{toSort | split:',' | orderBy:'asc'}}</div>
    <div>Ordered in desc order {{toSort | split:',' | orderBy:'desc'}}</div>
  `
})
export class AppComponent {
    public textToTranslate: string = '';
    public password: string = '';
    public toSort: string = '';

}

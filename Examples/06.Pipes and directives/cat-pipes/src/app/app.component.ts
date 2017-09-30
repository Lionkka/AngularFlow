import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { User } from './user';

@Component({
  selector: 'app-root',
  template: `
    <h1 appCustom>Directives demo</h1>
    <ul>
      <li appHighlight *ngFor='let user of users; let i = index'>{{i + 1}}. Name: {{user.name}} - Age: {{user.age}}</li>
    </ul>
    <h1>Pipe demo</h1>
    <h2>{{modifyDate}}</h2>
    <h3>{{str | slice: 7}}</h3>
    <h3>{{obj | json}}</h3>
    <input type='text' [(ngModel)]='password' />
    <h4>{{password | pure}}</h4>
    <h4>{{password | impure}}</h4>
    <h3>{{password | asterics : '-' }}</h3>
  `,
})
export class AppComponent {
  public password = '';
  public now: Date = new Date();
  public modifyDate = new DatePipe('ru-RU').transform(this.now, 'yyyy-MMM-dd');
  public str = 'I hate Angular';

  public obj = { a: { a: 2 , str: 'string'}, b: 1, c: true };

  public users: Array<User> = [
    {name: 'Nick', age: 37},
    {name: 'John', age: 22},
    {name: 'Garry', age: 21},
    {name: 'Ruby', age: 26},
  ];
}

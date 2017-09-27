/*
## Homework 9 ##
- Given two buttons - Increment and decrement.(3 different component two buttons and one counter title)
- Given counter - After starting application it disabled. After two seconds after app start it enabled to increase/decrease
- Counter decrease/increase appear to counter after 1 second delay.
- Use redux components architecture.
- Enjoy!
*/
import {Component, Input, OnInit} from '@angular/core';
import {Action, Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {App, Button} from '../../interfaces';
import {AppState} from '../../reducers';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
})
export class CounterButtonComponent implements Button, OnInit {
  @Input()
  public title: string;
  @Input()
  public action: Action;
  private appEnabled: boolean = false;

  constructor(private store: Store<AppState>) {
  }

  public ngOnInit(): void {
    const appEnable: Observable<App> = this.store.select('app');
    appEnable.subscribe(val => {
      this.appEnabled = val.enable;
    });
  }

  public handler(): void {
    if (this.appEnabled) {
      this.store.dispatch(this.action);
    }
  }
}

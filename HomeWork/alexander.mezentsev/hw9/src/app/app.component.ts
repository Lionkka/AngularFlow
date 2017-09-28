/*
## Homework 9 ##
- Given two buttons - Increment and decrement.(3 different component two buttons and one counter title)
- Given counter - After starting application it disabled. After two seconds after app start it enabled to increase/decrease
- Counter decrease/increase appear to counter after 1 second delay.
- Use redux components architecture.
- Enjoy!
*/
import {Component, OnInit} from '@angular/core';

import {Store} from '@ngrx/store';

import {AppState} from './reducers';
import {AppActions} from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private store: Store<AppState>, private appActions: AppActions) {
  }

  public ngOnInit(): void {
    setTimeout(() => {
      this.store.dispatch(this.appActions.enable());
    }, 2000);
  }
}

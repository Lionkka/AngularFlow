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
import {Observable} from 'rxjs/Rx';

import {Counter} from '../../interfaces';
import {AppState} from '../../reducers';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html'
})
export class CountComponent implements OnInit {
  public counter: number = 0;

  constructor(private store: Store<AppState>) {
  }

  public ngOnInit(): void {
    const counter: Observable<Counter> = this.store.select('counter');
    const delayedUpdate: Observable<number> = counter.flatMap(x => Observable.timer(1000));
    const bufferedUpdate: Observable<Counter[]> = counter.buffer(delayedUpdate);

    bufferedUpdate.subscribe(val => {
      if (val.length) {
        this.counter = val[val.length - 1].counter;
      }
    });
  }
}

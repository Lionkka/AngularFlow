/*
## Homework 9 ##
- Given two buttons - Increment and decrement.(3 different component two buttons and one counter title)
- Given counter - After starting application it disabled. After two seconds after app start it enabled to increase/decrease
- Counter decrease/increase appear to counter after 1 second delay.
- Use redux components architecture.
- Enjoy!
*/
import {Component} from '@angular/core';
import {Action} from '@ngrx/store';
import {CounterActions} from '../../actions';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {

  constructor(private counterAction: CounterActions) {
  }

  public get ActionIncrement(): Action {
    return this.counterAction.increment();
  }

  public get ActionDecrement(): Action {
    return this.counterAction.decrement();
  }

  public get ActionReset(): Action {
    return this.counterAction.reset();
  }

  public get IncrementTitle(): string {
    return 'Increment';
  }

  public get DecrementTitle(): string {
    return 'Decrement';
  }

  public get ResetTitle(): string {
    return 'Reset';
  }
}

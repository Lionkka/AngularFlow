import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';

@Injectable()
export class CounterActions {
  static INCREMENT = '[Counter] Increment';
  static DECREMENT = '[Counter] Decrement';
  static RESET = '[Counter] Reset';

  public increment(): Action {
    return {
      type: CounterActions.INCREMENT
    };
  }

  public decrement(): Action {
    return {
      type: CounterActions.DECREMENT
    };
  }

  public reset(): Action {
    return {
      type: CounterActions.RESET
    };
  }
}

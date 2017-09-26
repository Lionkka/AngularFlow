import {Action} from '@ngrx/store';

import {Counter} from '../interfaces';
import {CounterActions} from '../actions';

export type CounterState = Counter;

const initialState: CounterState = {
  counter: 0
};

export default function counterReducer(state: CounterState = initialState, action: Action): CounterState {
  switch (action.type) {
    case CounterActions.INCREMENT:
      return {
        counter: state.counter + 1
      };
    case CounterActions.DECREMENT:
      return {
        counter: state.counter - 1
      };
    case CounterActions.RESET:
      return initialState;
    default:
      return state;
  }
}

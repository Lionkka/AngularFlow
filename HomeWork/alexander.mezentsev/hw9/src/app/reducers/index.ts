import '@ngrx/core/add/operator/select';
import {compose} from '@ngrx/core/compose';
import {combineReducers} from '@ngrx/store';

import appReducer, * as fromApp from './app.reducer';
import counterReducer, * as fromCounter from './counter.reducer';

export interface AppState {
  app: fromApp.AppState;
  counter: fromCounter.CounterState;
};

export default compose(combineReducers)({
  app: appReducer,
  counter: counterReducer
});

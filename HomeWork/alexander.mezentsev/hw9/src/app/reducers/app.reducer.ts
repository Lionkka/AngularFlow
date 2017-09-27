import {Action} from '@ngrx/store';
import {App} from '../interfaces';
import {AppActions} from '../actions';

export type AppState = App;

const initialState: AppState = {
  enable: false
};

export default function appStateReducer(state: AppState = initialState, action: Action): AppState {
  switch (action.type) {
    case AppActions.ENABLE:
      return {
        enable: true
      };

    case AppActions.DISABLE:
      return {
        enable: false
      };

    default:
      return state;
  }
}

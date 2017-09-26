import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';

@Injectable()
export class AppActions {
  static ENABLE = '[App] Enable';
  static DISABLE = '[App] Disable';

  public enable(): Action {
    return {
      type: AppActions.ENABLE
    };
  }

  public disable(): Action {
    return {
      type: AppActions.DISABLE
    };
  }
}

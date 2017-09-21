import {Component, Input, Output, EventEmitter} from '@angular/core';
import {TimeParams} from '../../types/timeParams'

@Component({
  selector: 'app-show-time',
  templateUrl: './show-time.component.html',
  styleUrls: ['./show-time.component.css']
})
export class ShowTimeComponent {
  @Input()
  private timeParams: TimeParams;

  public get localeTime(): string {
    return new Date(this.timeParams.time).toLocaleTimeString();
  }
}

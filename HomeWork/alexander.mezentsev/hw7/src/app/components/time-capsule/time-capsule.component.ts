import {Component, Input, Output, EventEmitter} from '@angular/core';
import {TimeParams} from '../../types/timeParams'

@Component({
  selector: 'app-time-capsule',
  templateUrl: './time-capsule.component.html',
  styleUrls: ['./time-capsule.component.css']
})
export class TimeCapsuleComponent {
  @Input()
  public time: TimeParams;
  @Output()
  public timeCapsuledTime: EventEmitter<TimeParams> = new EventEmitter<TimeParams>();

  public showRememberTime(): void {
    if(this.time) {
      this.timeCapsuledTime.emit(this.time);
    }
  }
}

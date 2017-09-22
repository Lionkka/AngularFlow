import {Component} from '@angular/core';
import {TimeParams} from './types/timeParams'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public timeToShow: TimeParams = {time: 0};
  public timeToRemember: TimeParams;

  public rememberTime($event: TimeParams): void {
    this.timeToRemember = $event;
  }

  public showTime($event: TimeParams): void {
    this.timeToShow = {time: $event.time};
  }
}

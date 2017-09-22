import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <clock [triggeredTime]="triggeredTime" (timeToShow)="saveTimeToShow($event)"></clock>
    <time-capsule (triggerTime)="saveTriggeredTime($event)"[timeToShow]="timeToShow"></time-capsule>
  `
})
export class AppComponent {
  public timeToShow: string;
  public triggeredTime: string;

  public saveTimeToShow(time: string): void {
    this.timeToShow = time;
  }

  public saveTriggeredTime(time: string): void {
    this.triggeredTime = time;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <clock [triggeredTime]="triggeredTime" (timeToShow)="saveTimeToShow($event)"></clock>
    <time-capsule (triggerTime)="saveTriggeredTime($event)"[timeToShow]="timeToShow"></time-capsule>
  `
})
export class AppComponent {
  title = 'app';
  timeToShow: string;
  triggeredTime: string;

  saveTimeToShow(time: string): void {
    this.timeToShow = time;
  }

  saveTriggeredTime(time): void {
    this.triggeredTime = time;
  }
}


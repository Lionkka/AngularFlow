import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'clock',
  template: `
    <show-time [triggeredTime]="triggeredTime" (timeToShow)="passTimeToShow($event)"></show-time>
  `
})
export class ClockComponent {
    @Output() timeToShow = new EventEmitter<string>();
    @Input() triggeredTime: string;

    passTimeToShow(time): void {
        this.timeToShow.emit(time);
    }
}


import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'clock',
  template: `
    <show-time [triggeredTime]="triggeredTime" (timeToShow)="passTimeToShow($event)"></show-time>
  `
})
export class ClockComponent {
    @Output() public timeToShow: EventEmitter<string> = new EventEmitter<string>();
    @Input() public triggeredTime: string;

    public passTimeToShow(time: string): void {
        this.timeToShow.emit(time);
    }
}

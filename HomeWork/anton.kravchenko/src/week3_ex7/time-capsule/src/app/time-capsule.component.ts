import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'time-capsule',
  template: `
    <trigger (triggerTime)="passTriggerTime()" [timeToTrigger]="timeToShow"></trigger>
  `
})
export class TimeCapsuleComponent {
  @Input() public timeToShow: string;
  @Output() public triggerTime: EventEmitter<string> = new EventEmitter<string>();

  public passTriggerTime(): void {
    this.triggerTime.emit(this.timeToShow);
  }
}

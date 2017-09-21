import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'time-capsule',
  template: `
    <trigger (triggerTime)="passTriggerTime()" [timeToTrigger]="timeToShow"></trigger>
  `
})
export class TimeCapsuleComponent {
  @Input() timeToShow;
  @Output() triggerTime = new EventEmitter<string>();

  passTriggerTime(): void {
    this.triggerTime.emit(this.timeToShow);
  }
}


import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'trigger',
  template: `
    <button (click)="passTriggeredTime()">Trigger time: {{timeToTrigger}}</button>
  `
})
export class TriggerComponent {
  @Input() timeToTrigger: string;
  @Output() triggerTime = new EventEmitter<void>();

  passTriggeredTime(): void {
    this.triggerTime.emit();
  }
}


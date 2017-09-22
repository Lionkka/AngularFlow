import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'trigger',
  template: `
    <button (click)="passTriggeredTime()">Trigger time: {{timeToTrigger}}</button>
  `
})
export class TriggerComponent {
  @Input() public timeToTrigger: string;
  @Output() public triggerTime: EventEmitter<void> = new EventEmitter<void>();

  public passTriggeredTime(): void {
    this.triggerTime.emit();
  }
}

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html'
})
export class ControlsComponent {

  @Output('increase')
  public onIncrease: EventEmitter<void> = new EventEmitter<void>();

  @Output('decrease')
  public onDecrease: EventEmitter<void> = new EventEmitter<void>();

  public increase(): void {
    this.onIncrease.emit();
  }

  public decrease(): void {
    this.onDecrease.emit();
  }

}

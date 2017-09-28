import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent {

  @Input('step')
  private _step: number;

  @Output()
  public changeStep: EventEmitter<number> = new EventEmitter<number>();

  public set step(value: number) {
    if (!isNaN(value)) {
      this._step = value;
      this.changeStep.emit(this._step);
    }
  }

  public get step(): number {
    return this._step;
  }

  public change(value: number | string): void {
    this.step = Number(value);
  }

  public increase(): void {
    this.step++;
  }

  public decrease(): void {
    this.step--;
  }

}

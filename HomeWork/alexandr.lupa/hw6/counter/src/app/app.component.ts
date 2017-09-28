import { OnInit, Component } from '@angular/core';

const global: Window = window;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  public counter: number = 0;
  public step: number = 1;
  public error: boolean = false;
  private timer: number;
  private timeout: number = 20000;

  public ngOnInit(): void {
    this.setTimer();
  }

  public increase(): void {
    this.counter += this.step;

    this.setTimer();
  }

  public decrease(): void {
    this.counter -= this.step;

    this.setTimer();
  }

  public setStep(value: number): void {
    this.step = value;
  }

  public setTimer(): void {
    clearTimeout(this.timer);

    this.error = false;

    this.timer = global.setTimeout(() => {
      this.counter += this.step;
      this.error = true;
    }, this.timeout);
  }

}

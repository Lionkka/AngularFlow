import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private generalCount: number = 0;
  private counter: number = 0;
  private counterState: string = 'blue';
  private timer: number;

  private initTimer(): void {
    this.timer = window.setTimeout(() => {
      this.counterState = 'red';
      this.counter += 1;
      this.initTimer();
    }, 20 * 1000); // 20 seconds
  }

  private resetTimer(): void {
    clearTimeout(this.timer);
  }

  private updateCounter(step: number): void {
    this.resetTimer();
    this.initTimer();
    this.counter += step;
    this.counterState = 'blue';
  }

  private submit(): void {
    this.generalCount += this.counter;
    this.counter = 0;
  }

  public ngOnInit(): void {
    this.initTimer();
  }

  public ngOnDestroy(): void {
    this.resetTimer();
  }
}

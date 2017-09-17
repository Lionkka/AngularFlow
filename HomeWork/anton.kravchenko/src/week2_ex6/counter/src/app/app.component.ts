import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  generalCount = 0;
  counter = 0;
  counterState = 'blue';
  timer;

  ngOnInit() {
    this.initTimer();
  }

  initTimer(): void {
    this.timer = setTimeout(() => {
      this.counterState = 'red';
      this.counter += 1;
      this.initTimer();
    }, 20 * 1000); // 20 seconds
  }

  resetTimer(): void {
    clearTimeout(this.timer);
  }

  updateCounter(step: number): void {
    this.resetTimer();
    this.initTimer();
    this.counter += step;
    this.counterState = 'blue';
  }

  submit(): void {
    this.generalCount += this.counter;
    this.counter = 0;
  }
}

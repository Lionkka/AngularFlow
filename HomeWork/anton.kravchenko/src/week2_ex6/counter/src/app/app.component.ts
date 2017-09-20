import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // SZ all properties should have access modifier and type
  generalCount = 0;
  counter = 0;
  counterState = 'blue';
  timer;

  // SZ Please use tslint file
  // https://github.com/NickolayLototskiyDevPro/AngularFlow/blob/master/tslint.json
  // SZ all methods shold have access modifier
  ngOnInit() {
    this.initTimer();
  }

  initTimer(): void {
    // SZ you implemented OnInit interface, but didn't implement OnDestroy
    // SZ if you didn't learn it ignore this comment
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

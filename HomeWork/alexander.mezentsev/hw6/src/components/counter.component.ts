/*
## Homework 6 ##
 - Create counter component.
Second substract 1 from general count. Count should be shown pretty. Html should be in separate file.
We need to set counter step.
If I do not push the button after each 20 seconds counter increase by 1 point and if it increase automatically counter should be colored by red.
If I increase/decrease by button counter should be colored blue(pretty blue). Second component should contains number only.
* */

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: '../content/views/counter.component.html',
  styleUrls: ['../content/styles/counter.component.css']
})
export class CounterComponent implements OnInit {
  private _timeout: number = 5; // 20 seconds
  // SZ please use window.setTimteout(...);
  // SZ it returns number
  // Fixed (SZ it returns number)
  private timer: number;
  public delta: string = '1';
  public count: number = 0;
  public countColor: string = 'blue';

  public ngOnInit(): void {
    this.startTimer();
  }

  private startTimer(): void {
    clearTimeout(this.timer);
    // Fixed (SZ please use window.setTimteout(...);)
    this.timer = window.setTimeout(() => {
      this.setCountAutomatically(true);
    }, this._timeout * 1000);
  }

  private setCount(direction: boolean, delta: number): void {
    if (direction) {
      this.count += delta;
    } else {
      this.count -= delta;
    }
    this.startTimer();
  }

  public setCountManually(direction: boolean): void {
    const delta: number = Number(this.delta);
    if (isNaN(delta)) {
      return;
    }
    this.countColor = 'blue';
    this.setCount(direction, delta);
  }

  public setCountAutomatically(direction: boolean): void {
    this.countColor = 'red';
    const delta: number = Number(this.delta);
    this.setCount(direction, isNaN(delta) ? 1 : delta);
  }
}

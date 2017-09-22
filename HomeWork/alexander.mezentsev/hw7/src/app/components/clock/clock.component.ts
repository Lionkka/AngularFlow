/*
## Homework 7 ##
Create root component container.
As its first child element create clock container(has clock but not show it).
As clock container timer child create show-time component (It shows time and has button - remember time).
As root container child create element time-capsule.
It can remember time from show-time container.
This container contains element that has button thats trigger event that forced show time container show remembered time for 5 seconds.
After this it has to show time as usually.
*/

import {Component, OnInit, OnDestroy, Input, Output, EventEmitter} from '@angular/core';
import {TimeParams} from '../../types/timeParams'

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnDestroy {
  private timer: number;
  private timestamp: number;

  @Output()
  public rememberedTime: EventEmitter<TimeParams> = new EventEmitter<TimeParams>();

  @Input()
  public get time(): TimeParams {
    return {time: this.timestamp};
  }

  public set time(params: TimeParams) {
    this.startTimer(5);
    this.timestamp = params.time;
  }

  public ngOnInit(): void {
    this.updateTime();
    this.startTimer();
  }

  public rememberTime($event: boolean): void {
    console.log(`clock emitTime ${$event}`);
    this.rememberedTime.emit(this.time);
  }

  private startTimer(timeOut: number = 1): void {
    clearTimeout(this.timer);
    this.timer = window.setTimeout(() => {
      this.updateTime();
      this.startTimer();
    }, timeOut * 1000);
  }

  private updateTime(): void {
    this.timestamp = (new Date()).getTime();
  }

  public ngOnDestroy(): void {
    clearTimeout(this.timer);
  }
}

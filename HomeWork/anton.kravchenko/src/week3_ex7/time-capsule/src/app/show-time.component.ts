import { Component, OnInit, OnChanges, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'show-time',
    template: `
      <h1>Time: {{currentTime}}</h1>
      <button (click)="passTimeToShow()">Remember Me</button>
    `
  })
  export class ShowTimeComponent implements OnInit, OnChanges {
    currentTime: string = new Date().toString();
    private updateTimeInterval;

    @Input() triggeredTime: string;
    @Output() timeToShow = new EventEmitter<string>();

    passTimeToShow(): void {
      this.timeToShow.emit(this.currentTime);
    }

    private setUpTimeUpdate(): void {
      this.updateTimeInterval = setInterval(() => this.currentTime = new Date().toString(), 1000);
    }

    private resetTimer(): void {
        clearTimeout(this.updateTimeInterval);
    }

    ngOnInit(): void {
      this.setUpTimeUpdate();
    }

    ngOnChanges(): void {
      if(this.triggeredTime){
        new Promise((resolve) => {
          this.resetTimer();
          this.currentTime = this.triggeredTime;
          /* Timer will update after 5 seconds (4 seconds for timeout and 1 seconds for setInterval*/
          setTimeout(() => resolve(), 5000 - 1000);
        }).then(() => {
          this.setUpTimeUpdate();
        })
      }
    }
  }

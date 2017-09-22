import { Component, OnInit, OnChanges, Output, EventEmitter, Input, OnDestroy } from '@angular/core';

@Component({
    selector: 'show-time',
    template: `
      <h1>Time: {{currentTime}}</h1>
      <button (click)="passTimeToShow()">Remember Me</button>
    `
  })
  export class ShowTimeComponent implements OnInit, OnChanges, OnDestroy {
    private currentTime: string = new Date().toString();
    private updateTimeInterval: number;

    @Input() public triggeredTime: string;
    @Output() private timeToShow: EventEmitter<string> = new EventEmitter<string>();

    private setUpTimeUpdate(): void {
      this.updateTimeInterval = window.setInterval(() => this.currentTime = new Date().toString(), 1000);
    }

    private resetTimer(): void {
        clearInterval(this.updateTimeInterval);
    }

    public passTimeToShow(): void {
      this.timeToShow.emit(this.currentTime);
    }

    public ngOnInit(): void {
      this.setUpTimeUpdate();
    }

    public ngOnDestroy(): void {
      this.resetTimer();
    }

    public ngOnChanges(): void {
      if (this.triggeredTime) {
        new Promise((resolve) => {
          this.resetTimer();
          this.currentTime = this.triggeredTime;
          /* Timer will update after 5 seconds (4 seconds for timeout and 1 seconds for setInterval*/
          window.setTimeout(() => resolve(), 5000 - 1000);
        }).then(() => {
          this.setUpTimeUpdate();
        });
      }
    }
  }

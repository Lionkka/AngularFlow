import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: [ './timer.component.scss' ]
})
export class TimerComponent implements OnInit {
    @Output()
    public outTimer: EventEmitter<number> = new EventEmitter<number>();

    public timer: number;

    public get time(): number {
        return this.timer;
    }

    public set time(value: number) {
        this.timer = parseFloat(value.toFixed(1));
    }

    public ngOnInit(): void {
        this.time = 0.0;
        this.timerStart();
    }

    public timerStart(): void {
        setInterval(() => {
            this.time = this.time + .1;
        }, 100);
    }

    public inTimer(value: number): void {
        this.outTimer.emit(value);
    }
}

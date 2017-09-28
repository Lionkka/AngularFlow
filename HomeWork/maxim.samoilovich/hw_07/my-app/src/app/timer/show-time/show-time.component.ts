import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-show-time',
    templateUrl: './show-time.component.html',
    styleUrls: [ './show-time.component.scss' ]
})
export class ShowTimeComponent implements OnInit {
    @Output()
    public outTimer: EventEmitter<number> = new EventEmitter<number>();

    @Input()
    public set value(value: number) {
        if (this.isWorking === true) {
            this.timer = value;
        }
    }

    public get value(): number {
        return this.timer;
    }

    private timer: number;

    private isWorking: boolean;

    public ngOnInit(): void {
        this.isWorking = true;
    }

    public stop(): void {
        this.isWorking = false;
        this.delay().then((result) => {
            this.isWorking = true;
        });
        this.outTimer.emit(this.timer);
    }

    public delay(): Promise<number> {
        return new Promise((resolve: Function, reject: Function): void => {
            setTimeout(() => {
                resolve();
            }, 5000);
        });
    }
}

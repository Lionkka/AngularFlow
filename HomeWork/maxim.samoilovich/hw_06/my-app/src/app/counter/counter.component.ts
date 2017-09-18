import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
    @Input()
    private counter: number;
    private isTerminated: boolean;
    private isRevived: boolean;
    private timer: number;

    constructor() {
        this.counter = 0;
        this.isTerminated = this.isRevived = false;
        this.manageTimer(false);
    }

    incCounter(val: number): void {
        this.counter += val;
        clearInterval(this.timer);
        this.manageTimer();
    }

    decCounter(val: number) {
        this.counter -= val;
        clearInterval(this.timer);
        this.manageTimer();
    }

    startTimer() {
        const that = this;
        return new Promise(function(resolve, reject) {
            that.timer = setInterval(() => {
                resolve();
            }, 20000);
        });
    }

    manageTimer(auto = true) {
        if (auto) {
            this.allIsOk();
        }
        this.startTimer().then((result) => {
            this.alert();
            this.counter += 1;
        });
    }

    alert(): void {
        this.isTerminated = true;
        this.isRevived = !this.isTerminated;
    }

    allIsOk(): void {
        this.isTerminated = false;
        this.isRevived = !this.isTerminated;
    }
}

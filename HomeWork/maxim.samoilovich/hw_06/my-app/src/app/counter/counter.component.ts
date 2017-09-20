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

    // SZ methods should have access modifier
    incCounter(val: number): void {
        this.counter += val;
        clearInterval(this.timer);
        this.manageTimer();
    }

    // SZ missed access modifier and return type
    decCounter(val: number) {
        this.counter -= val;
        clearInterval(this.timer);
        this.manageTimer();
    }

    startTimer() {
        // SZ you won't need this if you are use arrow function
        // SZ arrow function doesn't has own context, it use context of scope
        // where it was declared
        const that = this;

        // SZ please use arrow function
        return new Promise(function(resolve, reject) {
            that.timer = setInterval(() => {
                // SZ there is no sence to resolve a promise more than onece
                resolve();
            }, 20000);
        });
    }

    // SZ parameters should have type too
    // SZ auto: boolean = true
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

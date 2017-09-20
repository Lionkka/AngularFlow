import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-manager',
    templateUrl: 'manager.component.html',
    styleUrls: ['manager.component.scss']
})
export class ManagerComponent {
    // SZ this.mutator has type number
    // SZ so event emiters should have type number, not any
    @Output() increase = new EventEmitter<number>();
    @Output() decrease = new EventEmitter<number>();

    private mutator: number;

    constructor() {
        this.mutator = 1;
    }

    public onIncrease(): void {
        this.increase.emit(this.mutator);
    }

    public onDecrease(): void {
        this.decrease.emit(this.mutator);
    }
}

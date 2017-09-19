import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-manager',
    templateUrl: 'manager.component.html',
    styleUrls: ['manager.component.scss']
})
export class ManagerComponent {
    @Output() increase = new EventEmitter<any>();
    @Output() decrease = new EventEmitter<any>();

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

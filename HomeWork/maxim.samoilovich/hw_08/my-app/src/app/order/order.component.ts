import { Component, OnInit } from '@angular/core';
// import { OrderByPipe } from './../pipes/orderby.pipe';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: [ './order.component.scss' ]/*,
    providers: [ OrderByPipe ]*/
})
export class OrderComponent implements OnInit {
    private dataStore: string[] | number[];
    private data: string | number;
    private order: string;

    public tmp: string;

    constructor() {}

    private push(item: number | string): void {
        this.dataStore[this.dataStore.length] = item;
    }

    public ngOnInit(): void {
        this.dataStore = [];
        this.data = null;
        this.order = 'asc';
    }

    public asc(): void {
        this.order = 'asc';
    }

    public desc(): void {
        this.order = 'desc';
    }

    public onInput($e: string | number): void {
        this.data = $e;
    }

    public onAdd(): void {
        if (this.dataStore[0] !== undefined) { // if first array element type is Number then add ONLY numbers
           if (typeof this.dataStore[0] === 'number') {
                if (!isNaN(Number(this.data))) {
                    this.push(Number(this.data.valueOf()));
                } else {
                    //
                }
           } else {
                this.push(this.data.valueOf());
           }
        } else {
            if (!isNaN(Number(this.data))) {
                this.push(Number(this.data.valueOf()));
            } else {
                this.push(this.data.valueOf());
            }
        }
        this.data = '';
    }

    public clearData(): void {
        this.dataStore = [];
    }

}

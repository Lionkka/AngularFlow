import { Component, ViewChild } from '@angular/core';
import { CounterComponent } from './counter/counter.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    @ViewChild(CounterComponent) counter: CounterComponent;

    public title: string = 'app';

    onIncrease(event): void {
      this.counter.incCounter(event);
    }

    onDecrease(event): void {
      this.counter.decCounter(event);
    }
}

import { Component } from '@angular/core';
import { TimeCapsuleComponent } from './time-capsule/time-capsule.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public timer: number;

  public inTimer(value: number): void {
    // SZ please use inputs and outputs for solving this task
    this.timer = value;
  }
}

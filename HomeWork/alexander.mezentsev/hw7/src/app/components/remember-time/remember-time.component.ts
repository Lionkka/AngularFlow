import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-remember-time',
  templateUrl: './remember-time.component.html',
  styleUrls: ['./remember-time.component.css']
})
export class RememberTimeComponent {
  @Output()
  public remember: EventEmitter<boolean> = new EventEmitter<boolean>();
  public remembered: boolean;

  public rememberTime(): void {
    this.remembered = !this.remembered;
    console.log(`show rememberTime ${this.remembered}`);
    this.remember.emit(this.remembered);
  }
}

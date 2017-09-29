import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html'
})
export class DisplayComponent {

  @Input()
  public counter: number;

  @Input()
  public error: boolean;

}

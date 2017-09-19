import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: '../content/views/count.component.html',
  styleUrls: ['../content/styles/count.component.css']
})
export class CountComponent {
  @Input()
  public count: number;
  @Input()
  public countColor: string;
}

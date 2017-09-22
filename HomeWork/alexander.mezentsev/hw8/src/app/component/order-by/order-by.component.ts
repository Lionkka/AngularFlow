import {Component} from '@angular/core';
import {tryParse} from "selenium-webdriver/http";

@Component({
  selector: 'app-order-by',
  templateUrl: './order-by.component.html',
  styleUrls: ['./order-by.component.css']
})
export class OrderByComponent {
  public stringArr: string[] = ['word', 'cherries', 'Word', '1 Word', 'apples', '2 Words', 'bananas'];
  public numberArr: number[] = [4, 2, 5, 1, 3, 1, 10, 21, 2];
}

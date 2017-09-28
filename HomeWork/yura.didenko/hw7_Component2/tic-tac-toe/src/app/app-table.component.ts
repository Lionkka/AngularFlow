import {Component} from '@angular/core';

@Component({
    selector: 'app-table-component',
    templateUrl: './app-table.component.html',
    styleUrls: ['./app-table.component.css']
})
export class AppTableComponent {
    public setXmarker(event): void {
        if (event.target.tagName === 'TD') {
            event.target.setAttribute('class', 'X-marker');
        }
    }

    public setOmarker(event): void {
        if (event.target.tagName === 'TD') {
            event.target.setAttribute('class', 'O-marker');
        }
    }
}

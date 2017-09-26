import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-time-capsule',
    templateUrl: './time-capsule.component.html',
    styleUrls: [ './time-capsule.component.scss' ]
})
export class TimeCapsuleComponent {
    @Input()
    public timer: number;
}

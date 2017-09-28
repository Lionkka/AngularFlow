import { Component } from '@angular/core';

@Component({
    selector: 'app-password',
    templateUrl: './password.component.html',
    styleUrls: [ './password.component.scss' ]
})
export class PasswordComponent {
    private pass: string = '';

    public onInput($e: KeyboardEvent): void {
        if ($e.key.length === 1) {
            this.pass += $e.key;
        }
        if ($e.keyCode === 8) {
            this.pass = this.pass.slice(0, -1);
        }
        if ($e.keyCode === 46) {
            this.pass = this.pass.slice(1);
        }
    }
}

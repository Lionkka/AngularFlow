import { Component } from '@angular/core';

@Component({
    selector: 'app-translator',
    templateUrl: './translator.component.html',
    styleUrls: [ './translator.component.scss' ]
})
export class TranslatorComponent {
    public data: string = '';

    public onInput($e: string): void {
        // console.log($e);
        this.data = $e;
    }
}

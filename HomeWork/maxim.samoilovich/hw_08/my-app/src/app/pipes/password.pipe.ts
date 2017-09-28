import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'password'
})
export class PasswordPipe implements PipeTransform {
    public transform(value: string): string {
        let out: string = '';
        for (let i = 0; i < value.length; i++) {
            out += '*';
        }
        return out; // value.replace(/.*/, '*');
        // SZ here is more semantic way. NOT for rework.
        // SZ '*'.repeat(value.length);
    }
}

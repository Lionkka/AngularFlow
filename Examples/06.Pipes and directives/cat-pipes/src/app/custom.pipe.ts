import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'asterics'
})
export class CustomPipe implements PipeTransform {
    transform(value: string, char: string = '*'): string {
        return char.repeat(value.length);
    }

}

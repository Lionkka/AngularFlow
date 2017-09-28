import { Pipe, PipeTransform } from '@angular/core';
import { dictionary } from '../../assets/translates';

@Pipe({
    name: 'translate'
})
export class TranslatePipe implements PipeTransform {
    public transform(value: string): string {
        if (value in dictionary) {
            return dictionary[value];
        } else {
            return '';
        }
        // console.log(dictionary);
        // return value;
    }
}

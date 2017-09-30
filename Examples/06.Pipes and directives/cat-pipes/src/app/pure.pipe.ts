import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'pure',
    pure: true
})
export class PurePipe implements PipeTransform {
    transform(value: string): string {
        console.log('Pure pipe invoke');
        return `**${value}**`;
    }

}

@Pipe({
    name: 'impure',
    pure: false
})
export class ImpurePipe implements PipeTransform {
    transform(value: string): string {
        console.log('Impure pipe invoke');
        return `--${value}--`;
    }
}

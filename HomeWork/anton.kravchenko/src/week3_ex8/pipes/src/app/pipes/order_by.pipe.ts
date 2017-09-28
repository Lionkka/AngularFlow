import { Pipe, PipeTransform } from '@angular/core';

const asc = (a: string | number, b: string | number): number => a > b ? 1 : -1;
const desc = (a: string | number, b: string | number): number => b < a ? -1 : 1;
const toNumberOrString = (val: string): string | number => Number.isNaN(Number(val)) ? val : Number(val);

@Pipe({
    name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  public transform(values: string [], order: string): string {
    return values
        .filter(val => '' !== val)
        .map(toNumberOrString)
        .sort('asc' === order ? asc : desc).join(',');
  }
}

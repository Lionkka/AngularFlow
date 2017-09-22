import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'orderby'
})
export class OrderBy implements PipeTransform {
  public transform(arr: string[] | number[], desc?: boolean): string[] | number[] {
   const result: string[] | number[] = arr.slice();
    if (typeof result[0] === 'number') {
      (<number[]>result).sort((a: number, b: number) => {
        return a - b;
      });
    } else {
      (<string[]>result).sort();
    }
    if (desc) {
      result.reverse();
    }
    return result;
  }
}

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'password'
})
export class Password implements PipeTransform {
  public transform(val: string): string {
    return val
      ? '*'.repeat(val.length)
      : val;
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split'
})
export class SplitPipe implements PipeTransform {
  public transform(input: string, sep: string): string [] {
    return input.split(sep);
  }
}

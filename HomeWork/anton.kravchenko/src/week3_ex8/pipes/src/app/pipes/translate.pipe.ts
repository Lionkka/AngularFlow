import { Pipe, PipeTransform } from '@angular/core';
import { DICT_EN_RU } from '../dictionary';

@Pipe({
    name: 'translate'
})
export class TranslatePipe implements PipeTransform {
  public transform(text: string): string {
    return DICT_EN_RU[text] || 'translation not found';
  }
}

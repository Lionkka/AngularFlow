import {Pipe, PipeTransform} from '@angular/core';
import {TranslationDictionary} from '../interfaces/translationDictionary';
import {EN_RU_Dictionary} from '../translations/EN-RU';

@Pipe({
  name: 'translate'
})
export class Translate implements PipeTransform {
  public transform(val: string, locale: string = 'EN-RU', dictionary: TranslationDictionary = EN_RU_Dictionary): string {
    if (dictionary[locale]) {
      return dictionary[locale][val] || val;
    }
    return val;
  }
}

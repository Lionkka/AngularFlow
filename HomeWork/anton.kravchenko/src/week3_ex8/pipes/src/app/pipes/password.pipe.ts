import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'password'
})
export class PasswordPipe implements PipeTransform {
  public transform(password: string): string {
    let result = [];
    for ( let i = 0; i < password.length; i++ ) {
        result.push('*');
    }
    return result.join('');
  }
}

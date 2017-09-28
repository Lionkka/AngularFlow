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

    // SZ here is more semantic way. NOT for rework
    // SZ '*'.repeat(password.length); 
  }
}

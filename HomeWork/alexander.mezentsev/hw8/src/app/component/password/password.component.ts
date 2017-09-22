import {Component} from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html'
})
export class PasswordComponent {
  public password: string = '';
  public newPassword: string = '';

  public updatePassword(newVal: string): void {
    this.password = this.newPassword;
  }

  public onKeyPress(eventArgs: KeyboardEvent): void {
    if (!eventArgs) {
      return;
    }
    if (eventArgs.charCode) {
      const inp: string = String.fromCharCode(eventArgs.charCode);
      this.newPassword = `${this.password}${inp}`;
    } else if (eventArgs.keyCode === 46 || eventArgs.keyCode === 8) {
      const input: HTMLInputElement = <HTMLInputElement>eventArgs.target;
      this.newPassword = input.selectionStart !== input.selectionEnd
        ? this.getNewPass(input.selectionStart, input.selectionEnd)
        : eventArgs.keyCode === 46
          ? this.getNewPass(input.selectionStart, input.selectionEnd + 1)
          : this.getNewPass(input.selectionStart - 1, input.selectionEnd);
    }
  }

  private getNewPass(removeFrom: number, removeTo: number): string {
    return `${this.password.substr(0, removeFrom)}${this.password.substr(removeTo, this.password.length)}`;
  }
}

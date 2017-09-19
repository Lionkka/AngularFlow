import { StringValidator } from './stringValidator';
export class EmailValidator implements StringValidator {
    public getReg(): RegExp {
        return /^[a-z-0-9_+.-]+\@([a-z0-9-]+\.)+[a-z0-9]{2,7}$/i;
    }

    public isValid(val: string): boolean {
        return this.getReg().test(val);
    };
}
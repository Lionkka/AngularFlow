import { StringValidator } from './stringValidator';
export class NameValidator implements StringValidator {
    public getReg(): RegExp {
        return /^[a-zA-Z]{2,20}$/;
    }

    public isValid(val: string): boolean {
        return this.getReg().test(val);
    };
}
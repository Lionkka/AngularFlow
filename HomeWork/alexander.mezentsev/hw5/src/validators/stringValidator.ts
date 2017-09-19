export interface StringValidator {
    getReg(): RegExp;

    isValid(val: string): boolean;
}

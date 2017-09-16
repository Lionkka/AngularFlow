import { ValidationObj } from '../types/validationObj';

export class FormValidator {
    constructor(vObjects: ValidationObj[]) {
        this.validationObjects = vObjects;
        for (let vObj of this.validationObjects) {
            vObj.control.on('keyup blur', () => {
                let isValid: boolean = this.validateControl(vObj);
                this.visualizeControl(vObj.control, isValid);
            })
        }
    }

    private validationObjects: ValidationObj[];

    private validateControl(vObj: ValidationObj): boolean {
        let textToValidate: string = String(vObj.control.val()).toString();
        let isValid: boolean = vObj.validator.isValid(textToValidate);
        return isValid;
    }

    private visualizeControl(control: JQuery, isValid: boolean): void {
        let formGroup: JQuery = control.closest('.form-group');
        if (isValid) {
            formGroup.removeClass('has-error');
        } else {
            formGroup.addClass('has-error');
        }
    }

    public get isFormValid(): boolean {
        for (let vObj of this.validationObjects) {
            if(!this.validateControl(vObj)){
                return false;
            }
        }
        return true;
    }

    public validateForm(): void {
        for (let vObj of this.validationObjects) {
            let isValid: boolean = this.validateControl(vObj);
            this.visualizeControl(vObj.control, isValid);
        }        
    }
}
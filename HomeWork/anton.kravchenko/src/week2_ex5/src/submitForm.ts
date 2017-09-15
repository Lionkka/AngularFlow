
import * as $ from "jquery";
import NameInput from "./nameInput";
import EmailInput from "./emailInput";
import SubmitButton from "./submitButton";


class SubmitForm {
    rootEl: string;
    el: any;
    nameInput: NameInput;
    emailInput: EmailInput;
    submitButton: SubmitButton;

    constructor(rootEl: string) {
        this.rootEl = rootEl;
        this.nameInput = new NameInput();
        this.emailInput = new EmailInput();
        this.submitButton = new SubmitButton();
    }

    public setUpListeners(): void {
        $("#nameInput").on("input", this.validateForm.bind(this));
        $("#emailInput").on("input", this.validateForm.bind(this));
    }

    public validateForm() {
        if (this.nameInput.isValid() && this.emailInput.isValid()) {
            this.submitButton.enable();
        } else {
            this.submitButton.disable()
        }
    }

    public render() {
        $(this.rootEl).append(this.nameInput.render());
        $(this.rootEl).append(this.emailInput.render());
        $(this.rootEl).append(this.submitButton.render());
        this.setUpListeners();
        this.submitButton.disable();
    }
}

export default SubmitForm;
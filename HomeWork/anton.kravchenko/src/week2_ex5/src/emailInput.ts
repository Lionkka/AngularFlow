import * as $ from "jquery";

class EmailInput {
    el: any;
    emailRegExp: RegExp;

    constructor() {
        this.emailRegExp = /\S+@\S+\.\S+/;
    }
    generateComponent() {
        return $(`  <div class="input-group">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
                        <input type="text" class="form-control" name="email" placeholder="Email" id="emailInput">
                    </div>`);
    }

    public isValid(): boolean {
        return this.emailRegExp.test($("#emailInput").val().trim());
    }

    public render() {
        this.el = this.generateComponent();
        return this.el;
    }
}

export default EmailInput;
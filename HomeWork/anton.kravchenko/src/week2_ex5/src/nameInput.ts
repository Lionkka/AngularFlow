import * as $ from "jquery";

class NameInput {
    el: any;

    generateComponent() {
        return $(`  <div class="input-group">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                        <input type="text" class="form-control" name="email" placeholder="Name" id="nameInput">
                    </div>`);
    }

    public isValid(): boolean {
        return $("#nameInput").val().trim().length > 5;
    }

    public render() {
        this.el = this.generateComponent();

        return this.el;
    }
}

export default NameInput;
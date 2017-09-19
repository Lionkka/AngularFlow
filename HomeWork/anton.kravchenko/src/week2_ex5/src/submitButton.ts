import * as $ from "jquery";

class SubmitButton {
    el: any;

    generateComponent() {
        return $(`<button type="button" class="btn btn-info" data-toggle="modal" id="submit" data-target="#myModal">Submit</button>
                      <div class="modal fade" id="myModal" role="dialog">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-body">
                              <img src="./images/ang.png">
                              <img src="./images/wp.png">
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                          </div>

                        </div>
                      </div>
            `);
    }

    public render() {
        this.el = this.generateComponent();
        return this.el;
    }

    public disable(){
        $("#submit").prop( "disabled", true );
    }

    public enable() {
        $("#submit").prop( "disabled", false );
    }
}

export default SubmitButton;
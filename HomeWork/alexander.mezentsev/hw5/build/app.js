webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ## Homework 5 ##
// - Create application on type script. Application use jquery library, bootstrap scss library and contains few png on the page. 
//   Application should be contains two input fields (email and name). 
//   If email and name is valid and button pressed should be show pop-up window with png picture on the background.
// - all ts should be bundled with web pack.
// - All scripts should use OOP style
// - scss should be transpile into css
// - jquery should be included in common chunk(CommonChunk Plugin)
// - scripts add to html automatically.
// - on the page we should show version of the script(version define by webpack)
// - version has to be shown only for development version of build
// - images included and put to the sources via webpack
Object.defineProperty(exports, "__esModule", { value: true });
const $ = __webpack_require__(0);
const emailValidator_1 = __webpack_require__(4);
const nameValidator_1 = __webpack_require__(5);
const formValidator_1 = __webpack_require__(6);
const titles = {
    prod: 'Homework 5 App',
    dev: `Homework 5 App (v.${"0.0.0.1"})`
};
$(document).ready(function () {
    console.log(`Running app version - (${"0.0.0.1"}). Env -  ${titles["prod"]}`);
    $(this).find('#app-title').text(titles["prod"]);
    let form = $(this).find('#form');
    let submit = form.find('span.btn-primary');
    let modalWindow = $('#myModal');
    let controlsToValidate = [{
            control: form.find('input#email'),
            validator: new emailValidator_1.EmailValidator()
        }, {
            control: form.find('input#name'),
            validator: new nameValidator_1.NameValidator()
        }
    ];
    let formValidator = new formValidator_1.FormValidator(controlsToValidate);
    submit.on('click', (e) => {
        e.preventDefault();
        formValidator.validateForm();
        if (!formValidator.isFormValid) {
            return;
        }
        modalWindow.modal({
            show: true
        });
    });
});


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class EmailValidator {
    getReg() {
        return /^[a-z-0-9_+.-]+\@([a-z0-9-]+\.)+[a-z0-9]{2,7}$/i;
    }
    isValid(val) {
        return this.getReg().test(val);
    }
    ;
}
exports.EmailValidator = EmailValidator;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class NameValidator {
    getReg() {
        return /^[a-zA-Z]{2,20}$/;
    }
    isValid(val) {
        return this.getReg().test(val);
    }
    ;
}
exports.NameValidator = NameValidator;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class FormValidator {
    constructor(vObjects) {
        this.validationObjects = vObjects;
        for (let vObj of this.validationObjects) {
            vObj.control.on('keyup blur', () => {
                let isValid = this.validateControl(vObj);
                this.visualizeControl(vObj.control, isValid);
            });
        }
    }
    validateControl(vObj) {
        let textToValidate = String(vObj.control.val()).toString();
        let isValid = vObj.validator.isValid(textToValidate);
        return isValid;
    }
    visualizeControl(control, isValid) {
        let formGroup = control.closest('.form-group');
        if (isValid) {
            formGroup.removeClass('has-error');
        }
        else {
            formGroup.addClass('has-error');
        }
    }
    get isFormValid() {
        for (let vObj of this.validationObjects) {
            if (!this.validateControl(vObj)) {
                return false;
            }
        }
        return true;
    }
    validateForm() {
        for (let vObj of this.validationObjects) {
            let isValid = this.validateControl(vObj);
            this.visualizeControl(vObj.control, isValid);
        }
    }
}
exports.FormValidator = FormValidator;


/***/ })
],[3]);
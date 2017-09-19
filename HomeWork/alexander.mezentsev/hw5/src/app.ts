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

import * as $ from 'jquery';
import { ValidationObj } from './types/validationObj';
import { EmailValidator } from './validators/emailValidator';
import { NameValidator } from './validators/nameValidator';
import { FormValidator } from './classes/formValidator';

declare let VER: string;
declare let ENV: string;

const titles = {
    prod: 'Homework 5 App',
    dev: `Homework 5 App (v.${VER})`
};

$(document).ready(function () {
    
    console.log(`Running app version - (${VER}). Env -  ${titles[ENV]}`);

    $(this).find('#app-title').text(titles[ENV]);

    let form: JQuery = $(this).find('#form');
    let submit: JQuery = form.find('span.btn-primary');
    let modalWindow: JQuery = $('#myModal');

    let controlsToValidate: ValidationObj[] = [{
        control: form.find('input#email'),
        validator: new EmailValidator()
    }, {
        control: form.find('input#name'),
        validator: new NameValidator()
    }
    ];

    let formValidator: FormValidator = new FormValidator(controlsToValidate);
    submit.on('click', (e) => {
        formValidator.validateForm();
        if (!formValidator.isFormValid) {
            return;
        }
        modalWindow.modal({
            show: true
        })
    })
});
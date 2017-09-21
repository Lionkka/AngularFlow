if (!ENV_PRODUCTION) {
  $('.page-header h1').append(` <small>${version}</small>`)
}

const validationOptions: JQueryValidation.ValidationOptions = {
  rules: {
    username: {
      required: true,
      minlength: 2
    },
    email: {
      required: true,
      email: true
    }
  },
  messages: {
    username: {
      required: 'Please enter a username',
      minlength: 'Your username must consist of at least {0} characters'
    },
    email: 'Please enter a valid email address'
  },
  errorElement: 'em',
  errorPlacement(error: JQuery<HTMLElement>, element: JQuery<HTMLElement>) {
    error.addClass('help-block');

    if (element.prop('type') === 'checkbox') {
      error.insertAfter(element.parent('label'));
    } else {
      error.insertAfter(element.closest('.input-group'));
    }
  },
  highlight(element: HTMLElement, errorClass: string, validClass: string) {
    $(element).closest('.form-group').addClass('has-error').removeClass('has-success');
  },
  unhighlight(element: HTMLElement, errorClass: string, validClass: string) {
    $(element).closest('.form-group').addClass('has-success').removeClass('has-error');
  },
  submitHandler(form: HTMLFormElement, event: JQueryEventObject | undefined) {
    form.reset();
    $('#modal').modal();
  }
};

const validator: JQueryValidation.Validator = $('#form').validate(validationOptions);

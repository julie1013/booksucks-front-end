'use strict';

const getFormFields = require('../../lib/get-form-fields');
const api = require('./site-api');
const ui = require('./ui');

const onSignUp = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
  .done(ui.onSignUpSuccess)
  .fail(ui.onError);
};

const onSignIn = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  // $('#sign-in').hide();
  // $('#sign-up').hide();
  // $('#sign-out').show();
  // $('#change-password').show();
  api.signIn(data)
    .done(ui.onSignInSuccess)
    .fail(ui.onError);
};

module.exports = {
  onSignUp,
  onSignIn,
};

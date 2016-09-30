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
  api.signIn(data)
    .done(ui.onSignInSuccess)
    .fail(ui.onError);
};

const onSignOut = function(event){
  event.preventDefault();
    api.signOut()
    .done(ui.onSignOutSuccess)
    .fail(ui.onError);
};

const onChangePassword = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
    .done(ui.onChangePasswordSuccess)
    .fail(ui.onError);
};

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
};
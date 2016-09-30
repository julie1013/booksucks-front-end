'use strict';

const app = require('./app');

const onSignUpSuccess = function (data) {
  if (data) {
    console.log("You have signed up successfully");
  }
};

const onSignInSuccess = function (data) {
    app.user = data.user;
    console.log("You are now signed in");
    $('#book-burn-pic').hide();
    $('#sign-in').hide();
    $('#sign-up').hide();
    $('#sign-out').show();
    $('#change-password').show();
};

const onSignOutSuccess = function (){
  $('#sign-out').hide();
  $('#change-password').hide();
  app.user = null;
  console.log("You are now signed out.");
  $('#sign-out').hide();
  $('#change-password').hide();
  $('#sign-in').show();
  $('#sign-up').show();
  $('#book-burn-pic').show();
};

const onChangePasswordSuccess = function (){
  $('.display-stats').html("Password successfully changed.");
  console.log("Password successfully changed.");
};

const onError = function (response) {
  $('.display-stats').html(response);
};

module.exports = {
  onSignUpSuccess,
  onError,
  onSignInSuccess,
  onSignOutSuccess,
  onChangePasswordSuccess,
};

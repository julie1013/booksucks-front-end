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
    // $('#sign-out').show();
    // $('#change-password').show();
};

const onError = function (response) {
  $('.display-stats').html(response);
};

module.exports = {
  onSignUpSuccess,
  onError,
  onSignInSuccess,
};

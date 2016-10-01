'use strict';

const events = require('./events');

$(document).ready(function () {
  $('#sign-up').on('submit', events.onSignUp);
  $('#sign-in').on('submit', events.onSignIn);
  $('#sign-out').on('submit', events.onSignOut);
  $('#change-password').on('submit', events.onChangePassword);
  $('#add-to-my-to-read-list').on('submit', events.onAddToMyToReadList);
  $('#sign-out').hide();
  $('#change-password').hide();
  $('#to-read-list').hide();
});

'use strict';

const events = require('./events');

$(document).ready(function () {
  $('#sign-up').on('submit', events.onSignUp);
  $('#sign-in').on('submit', events.onSignIn);
  $('#sign-out').on('submit', events.onSignOut);
  $('#change-password').on('submit', events.onChangePassword);
  $('#to-read-list').on('submit', 'form', events.onRemoveBookFromMyToReadList);
  $('#show-my-to-read-list').hide();
  $('#sign-out').hide();
  $('#change-password').hide();
  events.onShowMasterList();
  $('.master-list ol').on('submit', 'li form', events.onAddToMyToReadList);
  $('#master-book-list').hide();
  $('#to-read-list').hide();
});

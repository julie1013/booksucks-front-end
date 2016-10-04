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
  $('#review-form').hide();
  events.onShowMasterList();
  $('.master-list ol').on('submit', 'li #add-to-my-to-read-list', events.onAddToMyToReadList);
  $('.master-list ol').on('submit', 'li #read', events.onReadReviews);
  $('.master-list ol').on('click', 'li #write', function(event){
    event.preventDefault();
    $('#review-form').show();
  });
  $('#master-book-list').hide();
  $('#to-read-list').hide();
});

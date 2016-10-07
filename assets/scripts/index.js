'use strict';

const events = require('./events');

$(document).ready(function () {
  $('#sign-up').on('submit', events.onSignUp);
  $('#sign-in').on('submit', events.onSignIn);
  $('#sign-out').on('submit', events.onSignOut);
  $('#change-password').on('submit', events.onChangePassword);
  $('body').on('click', '#remove-from-my-to-read-list', events.onRemoveBookFromMyToReadList);
  $('#show-my-to-read-list').on('submit', events.onShowMyToReadList);
  $('#show-my-to-read-list').hide();
  $('#sign-out').hide();
  $('#change-password').hide();
  $('#review-form').hide();
  $('#master-book-list').hide();
  $('.master-list ol').on('submit', 'li #add-to-my-to-read-list', events.onAddToMyToReadList);
  $('#to-read-list').hide();
  // $('.master-list ol').on('submit', 'li #read', events.onReadReviews);
  // $('.master-list ol').on('click', 'li #write', function(event){
  //   event.preventDefault();
  //   let bookID = $(this).closest('li').attr('id');
  //   let bookIDField = $('<book-id-field>').
  //   attr('type', 'hidden').attr('name', 'bookIDNum').val(bookID);
  //   $('write-a-review').children().append($(bookIDField));
  //   console.log($('write-a-review'));
  //   $('#review-form').show();
  //   $('#write-a-review').on('submit', events.onSubmitReview);
  // });
});

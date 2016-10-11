'use strict';

const events = require('./events');

$(document).ready(function () {
  $('#signUp').on('submit', events.onSignUp);
  $('#signIn').on('submit', events.onSignIn);
  $('#signOut').on('submit', events.onSignOut);
  $('#changePassword').on('submit', events.onChangePassword);
  $('body').on('click', '#removeFromMyToReadList', events.onRemoveBookFromMyToReadList);
  $('#signOut').hide();
  $('#changePassword').hide();
  $('#reviewForm').hide();
  $('#masterBookList').hide();
  $('#masterBookList ol').on('submit', 'li #addToMyToReadList', events.onAddToMyToReadList);
  $('#toReadListDiv ol li').on('submit', '#removeNote', events.onRemoveNote);
  $('#toReadListDiv').on('submit', 'li #addNote', events.onAddNote);
  $('#toReadListDiv').hide();
  $('h3').hide();
  $('#addNote').hide();

  // $('.master-list ol').on('submit', 'li #read', events.onReadReviews);
  // $('.master-list ol').on('click', 'li #write', function(event){
  //   event.preventDefault();
  //   let bookID = $(this).closest('li').attr('id');
  //   let bookIDField = $('<book-id-field>').
  //   attr('type', 'hidden').attr('name', 'bookIDNum').val(bookID);
  //   $('write-a-review').children().append($(bookIDField));
  //   console.log($('write-a-review'));
  //   $('#reviewForm').show();
  //   $('#write-a-review').on('submit', events.onSubmitReview);
  // });
});

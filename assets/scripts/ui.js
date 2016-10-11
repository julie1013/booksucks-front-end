'use strict';

const app = require('./app');
const masterList = require('./masterlist');
const showToReadList = require('./showToReadList.js');

const onSignUpSuccess = function (data) {
  if (data) {
    $('#signUpInOut').html("You are signed up! Now sign in!");
  }
};

const onError = function () {
  $('signupInOut').html("Sorry, there was an error");
};

const onAddToMyToReadListSuccess = function (){
  showToReadList.onShowMyToReadList();
};

const onRemoveBookFromMyToReadListSuccess = function(){
  console.log("Book removed!");
};

const onAddNoteSuccess = function(data){
    $('#noteSpace').remove();
    $('#to-read-list [data-id="'+ data.qualified_book.id +'"]').append(data.qualified_book.notes);
};

// const onRemoveNoteSuccess = function(){
//   console.log("Hi");
// };

const onSignInSuccess = function (data) {
    app.user = data.user;
    $('#signUpInOut').html("You are now signed in!")
    $('#master-ordered-list').empty();
    masterList.onShowMasterList();
    $('#book-burn-pic').hide();
    $('#sign-in').hide();
    $('#sign-up').hide();
    $('#sign-out').show();
    $('#change-password').show();
    showToReadList.onShowMyToReadList();
    $('#to-read-list-div').show();
    $('#to-read-list-div').children().show();
    $('#master-book-list').show();
    $('h3').show();
    $('#show-my-to-read-list').show();
    $('#review-prompt').show();
    $('#addNote').show();
};

const onSignOutSuccess = function (){
  $('#signUpInOut').html("Bye!");
  $('#sign-out').hide();
  $('#change-password').hide();
  $('#sign-out').hide();
  $('#change-password').hide();
  $('#to-read-list').children(':not("h4")').remove();
  $('#to-read-list-div').hide();
  $('#show-my-to-read-list').hide();
  $('#master-book-list').hide();
  $('#review-form').hide();
  $('#review-prompt').hide();
  $('#sign-in').show();
  $('#sign-up').show();
  $('#book-burn-pic').show();
};

const onChangePasswordSuccess = function (){
  $('#signUpInOut').html("Password successfully changed!");
};

// const onReadReviewSuccess = function(data){
//   // data.user_id;
//   // console.log(id);
//   // $('.to-read ol').html('');
//   // $('.to-read ol').append(data.)
// };
//
// const onSubmitReviewSuccess = function(data){
//   // console.log(data);
// };




module.exports = {
  onSignUpSuccess,
  onError,
  onSignInSuccess,
  onSignOutSuccess,
  onChangePasswordSuccess,
  onAddToMyToReadListSuccess,
  onRemoveBookFromMyToReadListSuccess,
  onAddNoteSuccess,
  // onRemoveNoteSuccess,
  // onReadReviewSuccess,
  // onSubmitReviewSuccess,
};

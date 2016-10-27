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
  $('#signUpInOut').html("Sorry, there was an error");
};

const onRemoveBookFromMyToReadListSuccess = function(){
  $('#signUpInOut').html("Yeah, that book sucks too much!");
};

const onSignInSuccess = function (data) {
    app.user = data.user;
    $('#signUpInOut').html("You are now signed in!");
    $('#masterOrderedList').empty();
    masterList.onShowMasterList();
    showToReadList.onShowMyToReadList();
    $('#book-burn-pic').hide();
    $('#signIn').hide();
    $('#signUp').hide();
    $('#signOut').show();
    $('#changePassword').show();
    $('body').addClass('list-view');
    $('#toReadListDiv').show();
    $('#toReadListDiv').children().show();
    $('#masterBookList').show();
    $('h3').show();
    $('#show-my-to-read-list').show();
    $('.add-note').show();
    // $('#review-prompt').show();
};

const onSignOutSuccess = function (){
  $('#signUpInOut').html("Bye!");
  $('#signOut').hide();
  $('#changePassword').hide();
  $('#signOut').hide();
  $('#changePassword').hide();
  $('#to-read-list').children(':not("h4")').remove();
  $('#toReadListDiv').hide();
  $('#show-my-to-read-list').hide();
  $('#masterBookList').hide();
  $('#reviewForm').hide();
  $('#review-prompt').hide();
  $('#signIn').show();
  $('#signUp').show();
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
  onSignInSuccess,
  onSignOutSuccess,
  onChangePasswordSuccess,
  onRemoveBookFromMyToReadListSuccess,
  onError,
  // onRemoveNoteSuccess,
  // onReadReviewSuccess,
  // onSubmitReviewSuccess,
};

'use strict';

const app = require('./app');
const masterList = require('./masterlist');
const showToReadList = require('./showToReadList.js');


const onSignUpSuccess = function (data) {
  if (data) {
    console.log(data);
  }
};

const onError = function () {
  console.log("Error");
};

const onAddToMyToReadListSuccess = function (data){
  console.log("This data is ", data);
  let book = data.book;
  let id = data.id;
  $('.to-read ol').append('<li>' + '<span class=title>' + book.title +
  '</span>' + ' , by ' + '<span class=author>' +  book.author + '</span>' +
  '<form>'+ '<input type=submit value="Remove from your list" data-id=' + id + ' class=remove-from-my-to-read-list-button>' +
   '</form>' + '</li>');
};

const onRemoveBookFromMyToReadListSuccess = function(data){
  console.log(data);
};

const onSignInSuccess = function (data) {
    app.user = data.user;
    $('#master-ordered-list').empty();
    masterList.onShowMasterList();
    $('#book-burn-pic').hide();
    $('#sign-in').hide();
    $('#sign-up').hide();
    $('#sign-out').show();
    $('#change-password').show();
    showToReadList.onShowMyToReadList();
    $('#to-read-list').show();
    $('#to-read-list h4').show();
    $('#to-read-list').children().show();
    $('#master-book-list').show();
    $('#show-my-to-read-list').show();
    $('#review-prompt').show();
};

const onSignOutSuccess = function (){
  $('#sign-out').hide();
  $('#change-password').hide();
  app.user = null;
  console.log("You are now signed out.");
  $('#sign-out').hide();
  $('#change-password').hide();
  $('#to-read-list').children(':not("h4")').remove();
  $('#to-read-list').hide();
  $('#show-my-to-read-list').hide();
  $('#master-book-list').hide();
  $('#review-form').hide();
  $('#review-prompt').hide();
  $('#sign-in').show();
  $('#sign-up').show();
  $('#book-burn-pic').show();
};

const onChangePasswordSuccess = function (){
  console.log("Password successfully changed.");
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
  // onReadReviewSuccess,
  // onSubmitReviewSuccess,
};

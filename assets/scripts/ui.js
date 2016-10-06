'use strict';

const app = require('./app');
const masterList = require('./masterlist');
const addBackend = require('./backendtoread');

const onSignUpSuccess = function (data) {
  if (data) {
    console.log(data);
  }
};

const onError = function (response) {
  $('.display-stats').html(response);
};

const onShowMyToReadListSuccess = function (data){
  $('#to-read-list').children(':not("h4")').remove();
  let bookID;
  for(let i = 0; i < data.books.length; i++){
    bookID = parseFloat(data.books[i].id);
    $('#to-read-list').append('<li id=' + bookID + '>' +
    '<span class=title>' + data.books[i].title +'</span>' + ' , by ' +
    '<span class=author>' +  data.books[i].author + '</span>'+
    '<input type=submit value="Remove from your list" id=remove-from-my-to-read-list class=remove-from-my-to-read-list-button>' +
    '</form>' + ' </li>');
  }
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
    $('#to-read-list').show();
    $('#to-read-list h4').show();
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
  $('#to-read-list').hide();
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

const onAddToMyToReadListSuccess = function (data){
  $('.to-read ol').append('<li>' + '<span class=title>' + data.book.title +
  '</span>' + ' , by ' + '<span class=author>' +  data.book.author + '</span>' +
  '<form>'+ '<input type=submit value="Remove from your list" id=remove-from-my-to-read-list class=remove-from-my-to-read-list-button>' +
   '</form>' + '</li>');
   addBackend.onAddBackendToReadList(data);
};

const onReadReviewSuccess = function(data){
  // data.user_id;
  // console.log(id);
  // $('.to-read ol').html('');
  // $('.to-read ol').append(data.)
};

const onSubmitReviewSuccess = function(data){
  // console.log(data);
};

const onRemoveBookFromMyToReadListSuccess = function(data){
  console.log(data);
};



module.exports = {
  onSignUpSuccess,
  onError,
  onSignInSuccess,
  onSignOutSuccess,
  onChangePasswordSuccess,
  onAddToMyToReadListSuccess,
  onReadReviewSuccess,
  onShowMyToReadListSuccess,
  onRemoveBookFromMyToReadListSuccess,
  onSubmitReviewSuccess,
};

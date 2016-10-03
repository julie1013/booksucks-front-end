'use strict';

const app = require('./app');

const onSignUpSuccess = function (data) {
  if (data) {
    console.log("You have signed up successfully");
  }
};

const onShowMasterListSuccess = function (data){
  let id;
  for (let i = 0; i < data.length; i++){
    id = i + 1;
    $('.master-list ol').append('<li id=' + id + '>' + data[i].title + '<form>'+
      '<input type=submit value="Add to your to-read list" id=add-to-my-to-read-list class=add-to-my-to-read-list-button>' + '</form></li>');
  }
};

const onSignInSuccess = function (data) {
    app.user = data.user;
    console.log("You are now signed in");
    $('#book-burn-pic').hide();
    $('#sign-in').hide();
    $('#sign-up').hide();
    $('#sign-out').show();
    $('#change-password').show();
    $('#to-read-list').show();
    $('#to-read-list h4').show();
    $('#master-book-list').show();
};

const onSignOutSuccess = function (){
  $('#sign-out').hide();
  $('#change-password').hide();
  app.user = null;
  console.log("You are now signed out.");
  $('#sign-out').hide();
  $('#change-password').hide();
  $('#to-read-list').hide();
  $('#sign-in').show();
  $('#sign-up').show();
  $('#book-burn-pic').show();
};

const onChangePasswordSuccess = function (){
  $('.display-stats').html("Password successfully changed.");
  console.log("Password successfully changed.");
};

const onAddToMyToReadListSuccess = function (data){
  $('.to-read ol').append('<li>' + data.title + '<form>'+
    '<input type=submit value="Remove from your list" id=remove-from-my-to-read-list class=remove-from-my-to-read-list-button>' + '</form>' + '</li>');
};

// const onRemoveBookFromMyToReadListSuccess = function (){
//   $('.to-read ol li').html('');
// };

const onError = function (response) {
  $('.display-stats').html(response);
};

module.exports = {
  onSignUpSuccess,
  onError,
  onSignInSuccess,
  onSignOutSuccess,
  onChangePasswordSuccess,
  onAddToMyToReadListSuccess,
  onShowMasterListSuccess,
  // onRemoveBookFromMyToReadListSuccess,
};

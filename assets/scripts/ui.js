'use strict';

const app = require('./app');

const onSignUpSuccess = function (data) {
  if (data) {
    console.log("You have signed up successfully");
  }
};

const showMasterList = function (){
  let masterList = $('#master-ordered-list');
  for (let i = 0; i < masterList.length; i++){
    $('li').append('<form>'+
      '<input type=submit value="Add to your list" id=add-to-my-to-read-list class=add-to-my-to-read-list-button>' + '</form>');
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
    $('#show-my-to-read-list').show();
    showMasterList();
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
  $('.to-read').append(data.title);
};


const onShowMyToReadListSuccess = function (data){
  for(let i = 0; i < data.length; i++){
    $('.to-read').append(data[i].title);
  }
};

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
  onShowMyToReadListSuccess,
};

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
    id = parseFloat(data[i].id);
    $('.master-list ol').append('<li id=' + id + '>' + '<span class=title>' + data[i].title +'</span>' + ' , by ' + '<span class=author>' +  data[i].author + '</span>' + '<form>'+
      '<input type=submit value="Add to your to-read list" id=add-to-my-to-read-list class=add-to-my-to-read-list-button>' + '</form>' +
      '<form>' + '<input type=submit value="Read reviews!" id=read class=read-button>' + '</form>' + '<form>' + '<input type=submit value="Write a scathing review!" id=write class=write-button' + '</form>'+ '</li>');
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
    // $('#review-form').show();
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
  $('.display-stats').html("Password successfully changed.");
  console.log("Password successfully changed.");
};

const onAddToMyToReadListSuccess = function (data){
  $('.to-read ol').append('<li>' + '<span class=title>' + data.title +'</span>' + ' , by ' + '<span class=author>' +  data.author + '</span>' + '<form>'+
    '<input type=submit value="Remove from your list" id=remove-from-my-to-read-list class=remove-from-my-to-read-list-button>' + '</form>' + '</li>');
};

// const onRemoveBookFromMyToReadListSuccess = function (){
//   $('.to-read ol li').html('');
// };

const onReadReviewSuccess = function(data){
  let id = data.user_id;
  console.log(id);
  // $('.to-read ol').html('');
  // $('.to-read ol').append(data.)
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
  onShowMasterListSuccess,
  onReadReviewSuccess,
  // onRemoveBookFromMyToReadListSuccess,
};

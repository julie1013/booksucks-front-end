'use strict';

const getFormFields = require('../../lib/get-form-fields');
const api = require('./site-api');
const ui = require('./ui');

const onSignUp = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
  .done(ui.onSignUpSuccess)
  .fail(ui.onError);
};

const onSignIn = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
    .done(ui.onSignInSuccess)
    .fail(ui.onError);
};

const onSignOut = function(event){
  event.preventDefault();
    api.signOut()
    .done(ui.onSignOutSuccess)
    .fail(ui.onError);
};

const onChangePassword = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
    .done(ui.onChangePasswordSuccess)
    .fail(ui.onError);
};

const onAddToMyToReadList = function (event) {
  event.preventDefault();
  let bookID = $(this).parent().data('id');
  api.addToMyToReadList(bookID)
    .done(ui.onAddToMyToReadListSuccess)
    .fail(ui.onError);
  };

  const onRemoveBookFromMyToReadList = function(event) {
    event.preventDefault();
    let qualifiedBookID = $(this).parents('[data-id]').attr('data-id');
    $(this).parent().remove();
    ui.onRemoveBookFromMyToReadListSuccess();
    api.removeBookFromMyToReadList(qualifiedBookID)
    .done(ui.removeBookFromMyToReadList)
    .fail(ui.onError);
  };

  // const onReadReviews = function (){
  //   let id = $(this).parent().attr('id');
  //   api.readReviews(id)
  //   .done(ui.onReadReviewsSuccess)
  //   .fail(ui.error);
  // };

  // const onSubmitReview = function (event){
  //   event.preventDefault();
  //   let data = getFormFields(event.target);
  //   api.submitReview(data)
  //     .done(ui.onSubmitReviewSuccess)
  //     .fail(ui.onError);
  // };


  // const onWriteReviews = function(event){
  //   event.preventDefault();
  //
  // };


module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onAddToMyToReadList,
  onRemoveBookFromMyToReadList,
  // onReadReviews,
  // onSubmitReview,
};

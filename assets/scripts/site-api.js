'use strict';

const app = require('./app');

const signUp = function (data) {
  return $.ajax({
    url: app.host + '/sign-up',
    method: 'POST',
    data: data,
  });
};

const signIn = function(data) {
  return  $.ajax({
    url: app.host + '/sign-in',
    method: "POST",
    data: data,
  });
};

const signOut = function() {
  let id = app.user.id;
  return  $.ajax({
    url: app.host + '/sign-out/' + id,
    method: "DELETE",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const changePassword = function(data){
  let id = app.user.id;
  return  $.ajax({
    url: app.host + '/change-password/' + id,
    method: "PATCH",
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: data,
  });
};

const addToMyToReadList = function(id){
  return $.ajax({
    url: app.host + '/books/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const showMasterList = function(){
  return $.ajax({
  url: app.host + '/books',
  method: 'GET',
  });
};

const showMyToReadList = function(){
  let id = app.user.id;
  return $.ajax({
    url: app.host + '/users/' + id + '/books',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const readReviews = function(id){
  return $.ajax({
    url: app.host + '/reviews',
    method: 'GET',
  });
};

const submitReview = function(data){
  return  $.ajax({
    url: app.host + '/reviews',
    method: "POST",
    data: data,
  });
};





module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  addToMyToReadList,
  showMasterList,
  readReviews,
  showMyToReadList,
  submitReview,
};

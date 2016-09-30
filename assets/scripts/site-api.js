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


module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
};
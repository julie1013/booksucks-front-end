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
  console.log(id);
  return $.ajax({
    url: app.host + '/books/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};
//Grabs book from master list on server and transfers it to front-end
//to-read-list

const showMasterList = function(){
  return $.ajax({
  url: app.host + '/books',
  method: 'GET',
  headers: {
    Authorization: 'Token token=' + app.user.token,
    },
  });
};

const showMyToReadList = function(){
  return $.ajax({
    url: app.host + '/my_books',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};


const addBackendToReadList = function(data){
  return $.ajax({
    url: app.host + '/qualified_books/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: { qualified_book: {
      user_id: app.user.id,
      book_id: data.book.id
      }
    },
    dataType: 'json'
  });
};

const removeBookFromMyToReadList = function(){
  return  $.ajax({
    url: app.host + '/qualified_books/',
    method: "DELETE",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};


// const readReviews = function(id){
//   return $.ajax({
//     url: app.host + '/reviews',
//     method: 'GET',
//   });
// };
//
// const submitReview = function(data, bookID){
//   let id = app.user.id;
//   return  $.ajax({
//     url: app.host + '/users/' + id + '/reviews/' + bookID,
//     method: "POST",
//     headers: {
//       Authorization: 'Token token=' + app.user.token,
//     },
//     data: data,
//   });
// };




module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  addToMyToReadList,
  showMasterList,
  showMyToReadList,
  addBackendToReadList,
  removeBookFromMyToReadList,
  // readReviews,
  // submitReview,
};

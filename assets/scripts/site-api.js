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

const addToMyToReadList = function(bookID) {
  return $.ajax({
    url: app.host + '/qualified_books',
    method: 'POST',
    data: {
      qualified_book : { book_id: bookID }
    },
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const showMyToReadList = function(){
    return $.ajax({
        url: app.host + '/qualified_books',
        method: 'GET',
        headers: {
            Authorization: 'Token token=' + app.user.token,
        },
    });
};

const removeBookFromMyToReadList = function(qualifiedBookID){
  return  $.ajax({
    url: app.host + '/qualified_books/' + qualifiedBookID,
    method: "DELETE",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const addNote = function(params, qualifiedBookID){
  return $.ajax({
    url: app.host + '/qualified_books/' + qualifiedBookID,
    method: 'PATCH',
    data: {
      qualified_book : params
    },
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};


const showMasterList = function(){
  return $.ajax({
  url: app.host + '/books',
  method: 'GET',
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
  removeBookFromMyToReadList,
  addNote,
  // readReviews,
  // submitReview,
};

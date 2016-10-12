'use strict';

const onAddRead = require('./onAddRead');

const onShowMasterListSuccess = function (data){
  let id;
  for (let i = 0; i < data.books.length; i++){
    id = data.books[i].id;
    $('.master-list ol').append('<li data-id=' + id + '>' +
    '<span class=title>' + data.books[i].title +'</span>' +
    '<span class=author>' +  data.books[i].author + '</span>' +
    '<form id=addToMyToReadList' + i + ' class=add-to-my-to-read-list>'+
    '<input type=submit value="Add to your to-read list">' + '</form>' +
    '</li>');
    $('#addToMyToReadList' + i).on('submit', onAddRead.onAddToMyToReadList);
  }
};

const onError = function () {
  $('#signUpInOut').html("Sorry, there was an error");
};

module.exports = {
  onShowMasterListSuccess,
  onError,
};

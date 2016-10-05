'use strict';

const onShowMasterListSuccess = function (data){
  let id;
  for (let i = 0; i < data.books.length; i++){
    id = parseFloat(data.books[i].id);
    $('.master-list ol').append('<li id=' + id + '>' +
    '<span class=title>' + data.books[i].title +'</span>' + ' , by ' +
    '<span class=author>' +  data.books[i].author + '</span>' +
    '<form id=add-to-my-to-read-list class=add-to-my-to-read-list-button>'+
      '<input type=submit value="Add to your to-read list">' + '</form>' +
      '<form id=read class=read-button>' +
      '<input type=submit value="Read reviews!">' + '</form>' +
      '<button id=write class=write-button>' + 'Write a scathing review!' +
      '</button>' + '</li>');
  }
};

const onError = function (response) {
  $('.display-stats').html(response);
};

module.exports = {
  onShowMasterListSuccess,
  onError,
};

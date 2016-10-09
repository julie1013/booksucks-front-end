'use strict';

const onShowMasterListSuccess = function (data){
  let id;
  for (let i = 0; i < data.books.length; i++){
    id = data.books[i].id;
    $('.master-list ol').append('<li data-id=' + id + '>' +
    '<span class=title>' + data.books[i].title +'</span>' + ' , by ' +
    '<span class=author>' +  data.books[i].author + '</span>' +
    '<form id=add-to-my-to-read-list class=add-to-my-to-read-list-button>'+
      '<input type=submit value="Add to your to-read list">' +
      '<form id="notes" class="notes-field">' + "Add a note:" +
      '<input name=notes' + 'value=""' + '</li>');
  }
};

const onError = function (response) {
  $('.display-stats').html(response);
};

module.exports = {
  onShowMasterListSuccess,
  onError,
};

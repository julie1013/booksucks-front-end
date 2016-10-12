'use strict';

const api = require('./site-api');
const onAddSuccess = require('./onAddSuccess');

const onAddToMyToReadList = function (event) {
  event.preventDefault();
  let bookID = $(this).parent().data('id');
  api.addToMyToReadList(bookID)
    .done(onAddSuccess.onAddToMyToReadListSuccess)
    .fail(onAddSuccess.onErrorBook);
  };


module.exports = {
  onAddToMyToReadList,
};

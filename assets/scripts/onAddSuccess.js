'use strict';

const showToReadList = require('./showToReadList');

const onAddToMyToReadListSuccess = function (){
  showToReadList.onShowMyToReadList();
  $('#signUpInOut').html("You really want to read that?? OK...");
};

const onErrorBook = function () {
  $('#signUpInOut').html("You've already added that book!");
};

module.exports = {
  onAddToMyToReadListSuccess,
  onErrorBook,
};

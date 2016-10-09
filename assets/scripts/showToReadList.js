'use strict';

const api = require('./site-api');
const uiToReadList = require('./ui-showToReadList');


const onShowMyToReadList = function (){
  api.showMyToReadList()
  .done(uiToReadList.onShowMyToReadListSuccess)
  .fail(uiToReadList.onError);
};

const onError = function () {
  console.log("Error");
};


module.exports = {
  onShowMyToReadList,
  onError,
};

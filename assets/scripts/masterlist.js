'use strict';

const uiMasterList = require('./ui-masterlist');
const api = require('./site-api');

const onShowMasterList = function (){
  api.showMasterList()
  .done(uiMasterList.onShowMasterListSuccess)
  .fail(uiMasterList.error);
};


module.exports = {
  onShowMasterList,
};

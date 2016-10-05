'use strict';


const addBackendUi = require('./addbackendui');
const api = require('./site-api');


const onAddBackendToReadList = function (data){
  event.preventDefault();
  api.addBackendToReadList(data)
    .done(addBackendUi.onAddToMyToReadListSuccess)
    .fail(addBackendUi.onError);
};

module.exports = {
  onAddBackendToReadList,
};

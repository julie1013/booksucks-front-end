'use strict';

const api = require('./site-api');
const uiAddNote = require('./ui-addNote');
const getFormFields = require('../../lib/get-form-fields');

const onAddNote = function(event){
  event.preventDefault();
  let qualifiedBookID = $(this).parents().attr('id');
  let params = getFormFields(event.target);
  api.addNote(params, qualifiedBookID)
    .done(uiAddNote.onAddNoteSuccess)
    .fail(uiAddNote.onError);
};

module.exports = {
  onAddNote,
};

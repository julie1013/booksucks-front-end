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

const onRemoveNote = function(event){
  event.preventDefault();
  let qualifiedBookID = $(this).parents().attr('id');
  console.log(qualifiedBookID);
  let params = {notes: "Your note shows here!"};
  api.removeNote(params, qualifiedBookID)
  .done(uiAddNote.onRemoveNoteSuccess)
  .fail(uiAddNote.onError);
};

module.exports = {
  onAddNote,
  onRemoveNote,
};

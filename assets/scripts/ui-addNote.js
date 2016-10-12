'use strict';

const api = require('./site-api');

const onRemoveNoteSuccess = function(data){
  let qualifiedBookID = data.qualified_book.id;
  $('#addNote'+ qualifiedBookID).show();
  $('#removeNote'+ qualifiedBookID).hide();
  $('#noteSpace' + qualifiedBookID).html("Your note shows here!");
};

const onError = function () {
  $('#signUpInOut').html("Sorry, there was an error");
};

const onAddNoteSuccess = function(data){
  let qualifiedBookID = data.qualified_book.id;
    $('#noteSpace' + qualifiedBookID).html(data.qualified_book.notes);
    $('#addNote'+ qualifiedBookID).hide();
    $('#removeNote'+ qualifiedBookID).show();
    $('#removeNote' + qualifiedBookID).on('submit', function(event){
      event.preventDefault();
      let qualifiedBookID = $(this).parents().attr('id');
      let params = {notes: "Your note shows here!"};
      api.removeNote(params, qualifiedBookID)
      .done(onRemoveNoteSuccess)
      .fail(onError);
    });
};






module.exports = {
  onAddNoteSuccess,
  onRemoveNoteSuccess,
  onError,
};

'use strict';

const onAddNoteSuccess = function(data){
  console.log('#noteSpace' + data.qualified_book.id);
    $('#noteSpace' + data.qualified_book.id).html(data.qualified_book.notes);
    $('#addNote'+ data.qualified_book.id).hide();
    $('#removeNote'+ data.qualified_book.id).show();
};

const onError = function () {
  $('#signUpInOut').html("Sorry, there was an error");
};




module.exports = {
  onAddNoteSuccess,
  onError,
};

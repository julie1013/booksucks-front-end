'use strict';

const onAddNoteSuccess = function(data){
    $('#toReadList [id="'+ data.qualified_book.id +'"]').append(data.qualified_book.notes);
    $('.add-note').hide();
    $('.remove-note').show();
};

const onError = function () {
  $('#signUpInOut').html("Sorry, there was an error");
};




module.exports = {
  onAddNoteSuccess,
  onError,
};

'use strict';
const events = require('./events');


const onShowMyToReadListSuccess = function (data){
  $('#toReadList').children(':not("h3")').remove();
  //Empty previous to-read list so it's not duplicated
  let qualifiedBookID;
  //initialize variable for qualifiedBookId
  for(let i = 0; i < data.length; i++){
    if (data[i].notes === null){
      data[i].notes = "Your note shows here!";
      //if the notes in qualified_books is null, reassign to "Your note here!"
    }
    qualifiedBookID = data[i].id;
    //qualifiedBookId is assigned the id of a qualified_books entry
    $('#toReadList').append('<li data-id=' + qualifiedBookID + '>' +
    //append list items to to-read list
    '<span class=title>' + data[i].book.title +'</span>' +
    //each list item has a title...
    '<span class=author>' +  data[i].book.author + '</span>'+ '<p data-id=noteSpace' + i +
     'class="note-space-here">Notes:</p>' + data[i].notes +
    //...and an author... and a space where you can see a note...
    '<form data-id=removeFromMyToReadList' + i + ' class=remove-from-my-to-read-list>' +
    //...and each note is given a form button to enable removal
    '<input type=submit value="Remove Book">' + '</form>' +
    //...and each book on the list has a removal option...
    '<form data-id=addNote' + i + ' class="add-note">' + '<input type=submit value="Write a note?">' +
    //...and this is the field in which you can type your note; field button included
    '<input name="notes"' + 'input type="text"'+ 'value="">' + '</form>' +
    //...the rest of the notes form
    '<form data-id=removeNote' + i + ' class="remove-notes">' + '<input type=submit value="Remove Note">' +
    //...option to remove note
    '</form>' + '</li>');
    //...list item closed
    if (data[i].notes === "Your note shows here!"){
      $('#removeNote' + i).hide();
      $('#addNote' + i).show();
      $('#addNote').on('submit', events.onAddNote);
    } else {
      $('#removeNote' + i).show();
      $('#addNote' + i).hide();
      $('#removeNote' + i).on('click', events.onRemoveNote);
    }
  }
};

module.exports = {
  onShowMyToReadListSuccess,
};

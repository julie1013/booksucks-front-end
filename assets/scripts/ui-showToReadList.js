'use strict';



const onShowMyToReadListSuccess = function (data){
  $('#to-read-list').children(':not("h4")').remove();
  let qualifiedBookID;
  for(let i = 0; i < data.length; i++){
    if (data[i].notes === null){
      data[i].notes = "Your note here!";
    }
    qualifiedBookID = data[i].id;
    $('#to-read-list').append('<li data-id=' + qualifiedBookID + '>' +
    '<span class=title>' + data[i].book.title +'</span>' + ' , by ' +
    '<span class=author>' +  data[i].book.author + '</span>'+ '<p id="noteSpace">Notes:</p>' +
    data[i].notes +
    '<form id=remove-from-my-to-read-list class=remove-from-my-to-read-list-button>' +
    '<input type=submit value="Remove" >' + '</form>' +
    '<form id="addNote" class="notes-field">' + '<input type=submit value="Write a note?">' +
    '<input name="notes"' + 'input type="text"'+ 'value="">' + '</form>' +
    '<form id="removeNote" class="notes-field">' + '<input type=submit value="Remove Note">' +
    '</form>' + '</li>');
    if (data[i].notes === "Your note here!"){
      $('#removeNote').hide();
      $('#addNote').show();
    } else {
      $('#removeNote').show();
      $('#addNote').hide();
    }
  }
};

module.exports = {
  onShowMyToReadListSuccess,
};

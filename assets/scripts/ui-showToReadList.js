'use strict';

const onShowMyToReadListSuccess = function (data){
  $('#to-read-list').children(':not("h4")').remove();
  let qualifiedBookID;
  console.log(data);
  for(let i = 0; i < data.length; i++){
    qualifiedBookID = data[i].id;
    $('#to-read-list').append('<li data-id=' + qualifiedBookID + '>' +
    '<span class=title>' + data[i].book.title +'</span>' + ' , by ' +
    '<span class=author>' +  data[i].book.author + '</span>'+
    '<input type=submit value="Remove from your list" id=remove-from-my-to-read-list class=remove-from-my-to-read-list-button>' +
    '</form>' + ' </li>');
  }
};

module.exports = {
  onShowMyToReadListSuccess,
};

'use strict';

const onSignUpSuccess = function (data) {
  if (data) {
    console.log("You have signed up successfully");
  }
};

const onError = function (response) {
  $('.display-stats').html(response);
};

module.exports = {
  onSignUpSuccess,
  onError,
};

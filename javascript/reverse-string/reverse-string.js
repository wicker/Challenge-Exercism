// This solution does not work for
// characters represented by two bytes
// or combined characters
// but it would work great for hex strings

var ReversedString = function (str) {

  return str.split('').reverse().join('')

};

module.exports = ReversedString;

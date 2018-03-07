var DnaTranscriber = function () {};

// Not a great solution in terms of
// human readability and maintainability

DnaTranscriber.prototype.toRna = function (str) {

  if (str) {
    arr = str.split('');

    for (var i = 0; i < arr.length; i++) {
      switch (arr[i]) {
        case 'G':
          arr[i] = 'C';
          break
        case 'C':
          arr[i] = 'G';
          break
        case 'T':
          arr[i] = 'A';
          break
        case 'A':
          arr[i] = 'U';
          break
        default:
          throw Error('Invalid input');
      }
    }
    arr = arr.join('');

    return arr
  }

};

module.exports = DnaTranscriber;


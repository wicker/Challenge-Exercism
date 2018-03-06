var reverseString = require('./reverse-string');

describe('ReverseString', function () {
  it('empty string', function () {
    var expected = '';
    var actual = reverseString('');
    expect(actual).toEqual(expected);
  });

  // tests for handling of surrogate pairs
  xit('foo 𝌆 bar mañana mañana', function () {
    var expected = 'anañam anañam rab 𝌆 oof';
    var actual = reverseString('foo 𝌆 bar mañana mañana');
    expect(actual).toEqual(expected);
  });

  it('a word', function () {
    var expected = 'tobor';
    var actual = reverseString('robot');
    expect(actual).toEqual(expected);
  });

  it('a capitalized word', function () {
    var expected = 'nemaR';
    var actual = reverseString('Ramen');
    expect(actual).toEqual(expected);
  });

  it('a sentence with punctuation', function () {
    var expected = '!yrgnuh ma I';
    var actual = reverseString('I am hungry!');
    expect(actual).toEqual(expected);
  });

  it('a palindrome', function () {
    var expected = 'racecar';
    var actual = reverseString('racecar');
    expect(actual).toEqual(expected);
  });
});

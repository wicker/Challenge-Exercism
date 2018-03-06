var TwoFer = function () {};

TwoFer.prototype.twoFer = function (who) {

  // Uses a template literal, which is a string
  // allowing embedded expressions. Used to be
  // called template strings.
  //
  // $ is a valid identifier in JS
  // which returns equivalent to
  //   (who === undefined || who === null || who === '')

  return `One for ${who || "you"}, one for me.`;

}

module.exports = TwoFer;

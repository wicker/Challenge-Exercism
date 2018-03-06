var Year = function (year) {

  this.year = year;

};


Year.prototype.isLeap = function () {

  // returns true (leap year) or false (not a leap year)
  //
  // returns leap year if year divides evenly by four
  //   except if also divisible evenly by 100
  //     unless divisible by 100 and 400;

  return (this.year % 4 === 0
          && (this.year % 100 !== 0 || this.year % 400 === 0)
  )

}

module.exports = Year;

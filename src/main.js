(function() {
  'use strict';

  // MODULE
  var TurkishId = function() {};

  TurkishId.prototype = {
    validate: function(id) {
      if (id) {
        id = id + '';

        if (id.length === 11 && id[0] !== '0') {
          var sumOdd = 0, sumEven = 0, tenthDigit, i;

          for (i = 0; i < 9; i++) {
            if (i % 2 === 0) {
              sumOdd += parseInt(id[i]);
            } else {
              sumEven += parseInt(id[i]);
            }
          }

          tenthDigit = ((sumOdd * 7) - sumEven) % 10;
          if (id[9] == tenthDigit) {
            return id[10] == (sumOdd + sumEven + tenthDigit) % 10;
          }
        }
      }

      return false;
    },
    generate: function() {
      var id = [], sumEven = 0, sumOdd, digit, tenthDigit, i;

      sumOdd = Math.floor(Math.random() * 9) + 1;
      id.push(sumOdd);

      for (i = 1; i < 9; i++) {
        digit = Math.floor(Math.random() * 10);
        id.push(digit);

        if (i % 2 === 0) {
          sumOdd += digit;
        } else {
          sumEven += digit;
        }
      }

      tenthDigit = ((sumOdd * 7) - sumEven) % 10;
      id.push(tenthDigit, (sumOdd + sumEven + tenthDigit) % 10);

      return parseInt(id.join(''));
    }
  };

  var turkishId = new TurkishId();

  // EXPORT
  var root = this;

  /* istanbul ignore next */
  if (typeof exports !== 'undefined' && typeof module !== 'undefined' && module.exports) {
      module.exports = turkishId;

  } else {
    if (typeof define === 'function' && define.amd) {
      define('turkishId', [], function() {
        return turkishId;
      });

    } else {
      root.turkishId = turkishId;
    }
  }

}).call(this);

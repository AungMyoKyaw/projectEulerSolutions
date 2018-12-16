/**
 * smallestMultiple function calculate smallest Number divided by given range
 * @param  {Number} start start Number
 * @param  {Number} end   end Number
 * @return {Number}       smallest Number divisible by given range
 */
const smallestMultiple = (start, end) => {
  let smallestMultiple = start;
  for (let i = start + 1; i <= end; i++) {
    smallestMultiple = (smallestMultiple * i) / gcd(smallestMultiple, i);
  }
  return smallestMultiple;
};

/**
 * Greatest Common Divisor
 * @param  {Number} x 	Number
 * @param  {Number} y 	Number
 * @return {Number}   	The Greatest Common Divisor
 */
function gcd(x, y) {
  //num/denom
  let numerator = y;
  let denominator = x;
  let temp = 1;
  while (denominator) {
    temp = denominator;
    denominator = numerator % denominator;
    numerator = temp;
  }
  return numerator;
}

module.exports = smallestMultiple;

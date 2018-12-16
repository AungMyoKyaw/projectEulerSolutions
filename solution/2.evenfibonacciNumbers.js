/**
 * sum of even fibonacci numbers
 * @param  {Number} number the last number must be less than given number
 * @return {Number}        sum of even fibonacci number
 */
const evenfibonacciNumbers = number => {
  let fibonacciSequence = [1, 1];

  do {
    fibonacciSequence.unshift(fibonacciSequence[0] + fibonacciSequence[1]);
  } while (fibonacciSequence[0] < number);

  fibonacciSequence[0] > number && fibonacciSequence.shift();

  return fibonacciSequence.reduce((cur, prev) => {
    let x, y;
    !(cur % 2) ? (x = cur) : (x = 0);
    !(prev % 2) ? (y = prev) : (y = 0);
    return x + y;
  }, 0);
};

module.exports = evenfibonacciNumbers;

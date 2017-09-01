/**
 * The difference between the sum of the square of numbers and
 * the square of the sum.
 * @param  {Number} number The max number
 * @return {Number}        sumSquareDifference
 */
const sumSquareDifference = (number)=>{
	let squareOfSum = Math.pow(sumOfArithmeticSeries(1,1,number),2);
	let sumOfSquare = sumOfSquareOfNumbers(number);
	return squareOfSum - sumOfSquare;
}

/**
 * sumOfArithmeticSeries
 * @param  {Number} a the first term
 * @param  {Number} d the common difference
 * @param  {Number} n number of terms
 * @return {Number}   sumOfArithmeticSeries
 */
function sumOfArithmeticSeries(a,d,n){
	return (n/2)*(2*a+(n-1)*d);
}

/**
 * sumOfSquareOfNumbers
 * @param  {Number} n number of terms
 * @return {Number}   sumOfSquareOfNumbers
 */
function sumOfSquareOfNumbers(n){
	return (n*(n+1)*(2*n+1))/6;
}

module.exports = sumSquareDifference;

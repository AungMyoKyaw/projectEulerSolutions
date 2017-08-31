/**
 * sum of multiple of 3 and 5 below given number
 * @param  {Number} number	The multiples must less then the given number
 * @return {Number}        Sum of multiples;
 */
const multiplesOf3and5 = (number)=>{
	let multiplesOf3and5 = [];
	let multiplierof3and5 = Math.floor(number/3);

	for(let i = 1;i<=multiplierof3and5;i++){
		i*3 < number && multiplesOf3and5.indexOf(i*3) == -1 && multiplesOf3and5.unshift(i*3);
		i*5 < number && multiplesOf3and5.indexOf(i*5) == -1 && multiplesOf3and5.unshift(i*5);
	}

	return multiplesOf3and5.reduce((prev,cur)=>{
		return prev+cur;
	},0);
}

module.exports = multiplesOf3and5;

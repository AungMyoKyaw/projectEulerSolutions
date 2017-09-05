/**
 * nthPrime
 * @param  {Number} number nth
 * @return {Number}        nth Prime Number
 */
const nthPrime = (number)=>{
	let pN = 2;
	let step = 0;
	while (step<number) {
		let isPrime = true;
		for(let i = 2;i<pN;i++){
			if(!(pN%i)){
				isPrime = false;
				break;
			}
		}
		isPrime ? step++ : '';
		pN++;
	}
	return pN-1;
}

module.exports = nthPrime;

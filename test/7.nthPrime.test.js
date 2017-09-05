const nthPrime = require('../solution/7.nthPrime.js')
const chai = require('chai');
const should = chai.should();

describe('nthPrime',()=>{
	it('should return nthPrime',done=>{
		nthPrime(6).should.equal(13);
		nthPrime(10).should.equal(29);
		nthPrime(100).should.equal(541);
		nthPrime(1000).should.equal(7919);
		nthPrime(10001).should.equal(104743);
		done();
	})
})

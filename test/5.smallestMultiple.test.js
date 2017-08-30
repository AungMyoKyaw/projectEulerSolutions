const smallestMultiple = require('../solution/5.smallestMultiple.js')
const chai = require('chai');
const should = chai.should();

describe('smallestMultiple',()=>{
	it('should return smallestMultiple',done=>{
		smallestMultiple(1,10).should.equal(2520)
		smallestMultiple(1,20).should.equal(232792560)
		done();
	})
})

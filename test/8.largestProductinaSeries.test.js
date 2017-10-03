const largestProductinaSeries = require('../solution/8.largestProductinaSeries.js')
const chai = require('chai');
const should = chai.should();

describe('largestProductinaSeries',()=>{
	it('should return largestProductinaSeries',done=>{
		largestProductinaSeries(4).should.equal(5832);
		largestProductinaSeries(13).should.equal(23514624000);
		done();
	})
})

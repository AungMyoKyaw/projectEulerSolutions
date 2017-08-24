const helloworld = require('../solution/helloworld.js')
const chai = require('chai');
const should = chai.should();

describe('Hello World',()=>{
	it('should return helloworld',done=>{
		helloworld().should.equal(`Hello World!`);
		done();
	})
})

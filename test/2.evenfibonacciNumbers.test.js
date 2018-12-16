const evenfibonacciNumbers = require('../solution/2.evenfibonacciNumbers.js');
const chai = require('chai');
const should = chai.should();

describe('evenfibonacciNumbers', () => {
  it('should return evenfibonacciNumbers', done => {
    evenfibonacciNumbers(10).should.equal(10);
    evenfibonacciNumbers(40).should.equal(44);
    evenfibonacciNumbers(4e6).should.equal(4613732);
    done();
  });
});

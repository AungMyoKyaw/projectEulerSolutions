const largestPrimeFactor = require('../solution/3.largestPrimeFactor.js');
const chai = require('chai');
const should = chai.should();

describe('largestPrimeFactor', () => {
  it('should return largestPrimeFactor', done => {
    largestPrimeFactor(2).should.equal(2);
    largestPrimeFactor(3).should.equal(3);
    largestPrimeFactor(5).should.equal(5);
    largestPrimeFactor(7).should.equal(7);
    largestPrimeFactor(147).should.equal(7);
    largestPrimeFactor(13195).should.equal(29);
    largestPrimeFactor(600851475143).should.equal(6857);
    done();
  });
});

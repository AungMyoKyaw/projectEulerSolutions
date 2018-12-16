const multiplesOf3and5 = require('../solution/1.multiplesOf3and5.js');
const chai = require('chai');
const should = chai.should();

describe('multiplesOf3and5', () => {
  it('should return multiplesOf3and5', done => {
    multiplesOf3and5(10).should.equal(23);
    multiplesOf3and5(20).should.equal(78);
    multiplesOf3and5(1000).should.equal(233168);
    done();
  });
});

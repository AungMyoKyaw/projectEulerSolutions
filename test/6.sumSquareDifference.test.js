const sumSquareDifference = require('../solution/6.sumSquareDifference.js');
const chai = require('chai');
const should = chai.should();

describe('sumSquareDifference', () => {
  it('should return sumSquareDifference', done => {
    sumSquareDifference(10).should.equal(2640);
    sumSquareDifference(20).should.equal(41230);
    sumSquareDifference(100).should.equal(25164150);
    done();
  });
});

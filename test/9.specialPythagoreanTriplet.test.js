const specialPythagoreanTriplet = require('../solution/9.specialPythagoreanTriplet.js');
const chai = require('chai');
const should = chai.should();

describe('specialPythagoreanTriplet', () => {
  it('should return specialPythagoreanTriplet', done => {
    specialPythagoreanTriplet().should.equal(31875000);
    done();
  });
});

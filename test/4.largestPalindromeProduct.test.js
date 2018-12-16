const largestPalindromeProduct = require('../solution/4.largestPalindromeProduct.js');
const chai = require('chai');
const should = chai.should();

describe('largestPalindromeProduct', () => {
  it('should return largestPalindromeProduct', done => {
    largestPalindromeProduct(2).should.equal(9009);
    largestPalindromeProduct(3).should.equal(906609);
    done();
  });
});

/**
 * Pythagorean triplet for which a + b + c = 1000
 * @return {Number} Product of a,b and c
 */
const specialPythagoreanTriplet = () => {
  let sumOfabc = 1000;
  let a, b, c;
  for (a = 1; a <= sumOfabc / 3; a++) {
    for (b = a + 1; b <= sumOfabc / 2; b++) {
      c = Math.sqrt(a * a + b * b);
      if (a + b + c == sumOfabc) {
        return a * b * c;
      }
    }
  }
};

module.exports = specialPythagoreanTriplet;

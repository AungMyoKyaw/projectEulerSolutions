const largestPrimeFactor = number => {
  let largestFactor = number;

  for (let i = 2; i < largestFactor; i++) {
    if (!(largestFactor % i)) {
      largestFactor = largestFactor / i;
      largestPrimeFactor(largestFactor);
    }
  }

  return largestFactor;
};

module.exports = largestPrimeFactor;

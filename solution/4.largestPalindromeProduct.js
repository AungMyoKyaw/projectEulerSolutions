const largestPalindromeProduct = digit => {
  let start = 1;
  let end = Number(`1e${digit}`) - 1;
  let palindrome = [];
  for (let i = start; i <= end; i++) {
    for (let j = start; j <= end; j++) {
      let product = i * j;
      let palindromeRegex = /\b(\d)(\d?)(\d?).?\3\2\1\b/gi;
      palindromeRegex.test(product) && palindrome.push(product);
    }
  }
  return Math.max(...palindrome);
};

module.exports = largestPalindromeProduct;

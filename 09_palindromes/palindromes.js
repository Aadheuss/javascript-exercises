const palindromes = (string) => {
  let pureString = string.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
  let reverseString = pureString.toLowerCase().split('').reverse().join('');
  if (pureString === reverseString) {
    return true;
  }else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;

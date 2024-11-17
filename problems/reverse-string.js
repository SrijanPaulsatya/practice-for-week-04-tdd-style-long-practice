module.exports = function reverseString(string) {
  // Your code here

  if (typeof string !== 'string') {
    throw new TypeError("Parameter is not a string!");
  }

  let reversedWord = "";
  
  for(let i = string.length - 1; i >= 0; i--) {
    reversedWord += string[i];
  }

  return reversedWord;

};

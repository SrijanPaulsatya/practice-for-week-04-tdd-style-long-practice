function returnsThree() {
  // Your code here
  return 3;
}

function reciprocal(n) {
  // Your code here

  if(n <= 0 || n > 1000000) {
    throw new TypeError("Parameter can't be less than 0 or greater than 1000000");
  }

  return (1 / n);
}

module.exports = {
  returnsThree,
  reciprocal
};

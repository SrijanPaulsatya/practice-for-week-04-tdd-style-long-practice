function myMap(inputArray, callback) {
  // Your code here
  let newArray = [];

  for (let i = 0; i < inputArray.length; i++) {

    let el = inputArray[i];
    let callbackResult = callback(el);
    newArray.push(callbackResult);

  }

  return newArray;

}

let arr = [1,2,3];
let doubler = (el) => el * 2; 

console.log(arr);
console.log(myMap(arr, doubler));

module.exports = myMap;

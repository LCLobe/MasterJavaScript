function addToFront(arr, elm) {
  // your code here
  arr.unshift(elm);
  return arr;
}

const myArray = [1,2];
addToFront(myArray, 3);
console.log("Direct: ", myArray); // -> [3, 1, 2]
console.log("Function ouput: ", addToFront(myArray, 4));

//Hint: you can use unshift
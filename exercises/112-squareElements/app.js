function squareElements(arr) {
  // your code here
  const squareArray = arr.map((element)=> element*element);
  return squareArray;
}

let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]
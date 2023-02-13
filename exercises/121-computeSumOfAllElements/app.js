function computeSumOfAllElements(arr) {
  // your code here
  if (arr.length ===0) return "Empty array."
  let sumOfAllElements = 0;
  for (i=0; i<= arr.length-1;i++){
    sumOfAllElements+= arr[i];
  }
  return sumOfAllElements;

}

let output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6
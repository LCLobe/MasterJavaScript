function getLargestElement(arr) {
  // your code here
  if (arr.length === 0 ) return 0;
  let largestElement = arr[0];

  for (let i = 1; i<= arr.length-1; i++  ){
      if (arr[i]>largestElement) largestElement = arr[i];
  }
return largestElement;
  
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;
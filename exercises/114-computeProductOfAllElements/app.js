function computeProductOfAllElements(arr) {
  // your code here
  if (arr.length===0) return 0;
  let totalArrayProduct = arr[0];
  for (let i=1; i<= arr.length-1; i++){
    totalArrayProduct *=arr[i];
  }
  return totalArrayProduct;
}

let output = computeProductOfAllElements([2,5,6]);
console.log(output); // --> 60


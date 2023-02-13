function joinThreeArrays(arr1, arr2, arr3) {
  // your code here
  //puedes también meter todos los elementos de ambas arrays usando arr1.push()
  
  arr=arr1.concat(arr2,arr3);
  return arr;
// return [...arr1,...arr2,...arr3];
}
let output = joinThreeArrays([1, 2], [3, 4], [5, 6]);
console.log(output); // --> [1, 2, 3, 4, 5, 6]
function joinArrayOfArrays(arr) {
  // your code here
  let concatArray = [];

  for (let i=0; i<= arr.length-1; i++){
    if (Array.isArray(arr[i]) && arr[i].length !==0) {
      for (let j=0; j<= arr[i].length-1;j++){
        concatArray.push(arr[i][j]);
      }
    }
    else {
      concatArray.push(arr[i]);
    }
  }

  return concatArray;
}
let output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']
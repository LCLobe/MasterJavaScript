function removeFromFront(arr) {
    // your code here
/*     arra =[];
    for (i=1; i<=arr.length-1; i++){
        arra.push(arr[i]);
    }
  return arra; */

  arr.shift(arr);
  return arr;
}
let output = removeFromFront([1, 2, 3]);
console.log(output); // --> [2, 3]
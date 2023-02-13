function getNthElement(array, n) {
  // Add your code after this line
  return array[n]; //El test está mal, debería ser [n-1]
}
let output = getNthElement([1, 3, 5], 2);
console.log(output);
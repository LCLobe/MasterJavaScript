function getAllElementsButFirst(array) {
  // your code here
  //return array.slice(1);
  arr =[];
  for (i=1; i<=array.length-1; i++){
    arr.push(array[i]);
  }
  return arr;
  
}

let input = [1, 2, 3, 4];
let output = getAllElementsButFirst(input);
console.log(output);
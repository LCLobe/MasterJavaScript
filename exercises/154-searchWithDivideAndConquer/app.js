function search(array, value) {
  // your code here

  return recursivityStringSearch( array, value,  0,  array.length-1);
}

let arr = [1, 3, 16, 22, 31, 33, 34]
console.log(search(arr, 34)); // => 4

function recursivityStringSearch(array, value, bottomSearchIndex,topSearchIndex){

  let searchIndex =Math.floor((bottomSearchIndex+topSearchIndex)/2);

  if (array[searchIndex] === value) return searchIndex;
  if (array[searchIndex] !== value && bottomSearchIndex===topSearchIndex-1) {
    if (array[topSearchIndex]===value) return topSearchIndex;
    else return null
  };
  if (array[searchIndex] !== value && bottomSearchIndex===topSearchIndex) return null;
  if (value > array[searchIndex]) bottomSearchIndex = searchIndex;
  if (value < array[searchIndex]) topSearchIndex = searchIndex;

  console.log ("Trace: ",value,array[searchIndex],bottomSearchIndex,topSearchIndex);
  const recursive = recursivityStringSearch(array, value, bottomSearchIndex, topSearchIndex);
  return recursive;
}
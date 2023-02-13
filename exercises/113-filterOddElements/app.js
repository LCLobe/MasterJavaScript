function filterOddElements(arr) {
  // your code here
  const oddElementsArray = arr.filter((element)=>{
    if (element %2 !==0) return true;
  })
  return oddElementsArray;
}

let output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]
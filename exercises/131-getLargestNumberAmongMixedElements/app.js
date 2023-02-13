function getLargestNumberAmongMixedElements(arr) {
    // your code here
    if (arr.length === 0) return 0;
  const mapedStrings = arr.filter((element)=> {if (typeof(element)==="number") return true;});
  if (mapedStrings.length === 0) return 0;

  let largestElement = mapedStrings[0];
  //let shortestlengthIndex = 0;

  for (let i=1; i<=mapedStrings.length-1; i++){
      if (mapedStrings[i] > largestElement) {
        largestElement = mapedStrings[i];
          //shortestlengthIndex = i;
      }
  }

  return largestElement;
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
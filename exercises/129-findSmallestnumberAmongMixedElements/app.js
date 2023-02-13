function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  if (arr.length === 0) return 0;
  const mapedStrings = arr.filter((element)=> {if (typeof(element)==="number") return true;});
  if (mapedStrings.length === 0) return 0;

  let smallestElement = mapedStrings[0];
  //let shortestlengthIndex = 0;

  for (let i=1; i<=mapedStrings.length-1; i++){
      if (mapedStrings[i] < smallestElement) {
        smallestElement = mapedStrings[i];
          //shortestlengthIndex = i;
      }
  }

  return smallestElement;
}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
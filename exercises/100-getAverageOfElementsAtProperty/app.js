function getAverageOfElementsAtProperty(obj, key) {
  // your code here
    if (!obj?.[key]) return 0;
    return computeAverageOfNumbers(obj[key]);

}

function computeAverageOfNumbers (arrayOfNumbers) {
  let averageOfNumer =  0;
       if (Array.isArray(arrayOfNumbers)){
          if (arrayOfNumbers.length ===0) return 0;
          
          for (let i=0; i<= arrayOfNumbers.length-1; i++) {
              averageOfNumer += arrayOfNumbers[i];
          }
          return averageOfNumer/arrayOfNumbers.length;
       }
  return averageOfNumer;
}

let obj = {
  key: [1, 2, 3]
};
let output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2  
// Write your function here !
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

let input = [];
let output = computeAverageOfNumbers(input);
console.log(output); // --> 3
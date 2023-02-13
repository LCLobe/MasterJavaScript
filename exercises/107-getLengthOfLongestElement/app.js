function getLengthOfLongestElement(arr) {
    // Your code here
    let output = 0;
    for (let i=0; i<= arr.length-1; i++){
        if (typeof(arr[i])==="string"){
            if (output < arr[i].length) {
                output = arr[i].length;
            }
        }
    }
    return output; 
}

let output = getLengthOfLongestElement(['one', 'two', 'three', 'maravilla']);
console.log(output); // --> 5
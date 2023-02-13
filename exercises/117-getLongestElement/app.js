function getLongestElement(arr) {
    // your code here
    if (arr.length === 0) return "";
    let maximumLength = arr[0].length;
    let longestElementIndex=0;

    for (let i= 1; i<= arr.length-1; i++){
        if (arr[i].length > maximumLength) {
            maximumLength = arr[i].length;
            longestElementIndex = i;
        }
    }
    return arr[longestElementIndex];
}
let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'
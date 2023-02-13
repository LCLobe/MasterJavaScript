function getLengthOfShortestElement(arr) {
    // your code here
    if (arr.length === 0) return 0;
    let minimumLength = arr[0].length;

    for (let i= 1; i< arr.length-1; i++){
        if (arr[i].length < minimumLength) minimumLength = arr[i].length;
    }
    return minimumLength;
}
let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
function findShortestElement(arr) {
    // your code here
    if (arr.length === 0) return "";
    let minimumLength = arr[0].length;
    let shortestElementIndex=0;

    for (let i= 1; i<= arr.length-1; i++){
        if (arr[i].length < minimumLength) {
            minimumLength = arr[i].length;
            shortestElementIndex = i;
        }
    }
    return arr[shortestElementIndex];

}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'
function findSmallestElement(arr) {
    // your code here
    if (arr.length === 0 ) return 0;
    let smalestElement = arr[0];

    for (let i = 1; i<= arr.length-1; i++  ){
        if (arr[i]<smalestElement) smalestElement = arr[i];
    }
return smalestElement;

}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1
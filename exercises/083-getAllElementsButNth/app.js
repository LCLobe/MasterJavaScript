function getAllElementsButNth(array, n) {
    // Write your function here
    let arr2=[];
    for (i=0; i<array.length; i++){
        if (i!=n){
            arr2.push(array[i]);
        }
    }
    return arr2;
}
let output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']
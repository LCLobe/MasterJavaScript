function addToFrontOfNew(arr, element) {
    // Write your function here
    //arr.unshift(element);  //Esto modifica el array original pasado por referencia.
    arr2 =[element];
    //arr2=arr2.concat(arr);
    return arr2.concat(arr);
}

let input = [1, 2];
let output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); // --> [1, 2]
console.log(input); // los arrays también se pasan por referencia.

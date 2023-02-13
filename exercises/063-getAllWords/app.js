function getAllWords(str) {
    // your code here
    //console.log(str.length);
    let arr =[];
    if (str.length === 0) {arr =[];}
    else{
        arr = str.split(" ");
    }
    return arr;
}
let output = getAllWords('The supreme warrior.');
console.log(output); // --> ['Radagast', 'the', 'Brown']
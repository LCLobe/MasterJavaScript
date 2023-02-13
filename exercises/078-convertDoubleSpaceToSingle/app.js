function convertDoubleSpaceToSingle(str) {
    // your code here
    str=str.replace(/  /g, " ");
    return str;
}
let string = "string  with  double  spaces";
let output = convertDoubleSpaceToSingle(string);
console.log(output); // --> "string with double spaces"
console.log(string);
function getStringLength(string) {
    // your code here
    let stringIndex = 0;
    let charCount = 0;
    if (string.charAt(stringIndex)){
        do{
            charCount ++;
            stringIndex ++;
        }while(string.charAt(stringIndex)!=="")
    }
    return charCount;
}

let output = getStringLength('hello');
console.log(output); // --> 5
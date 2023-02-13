function isOddWithoutModulo(num) {
    // your code here
    const numString = num.toString();
    
    const lastDigit = numString.charAt(numString.length-1);
    
    if ( lastDigit == "0" || lastDigit == "2" || lastDigit == "4"|| lastDigit == "6"|| lastDigit == "8"){
        return false;
    }
    return true;
}
let output = isOddWithoutModulo(4);
console.log(output); // --> true
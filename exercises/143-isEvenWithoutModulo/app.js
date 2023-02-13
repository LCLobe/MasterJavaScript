function isEvenWithoutModulo(num) {
    // your code here
    const numString = num.toString();
    
    const lastDigit = numString.charAt(numString.length-1);
    
    if ( lastDigit == "0" || lastDigit == "2" || lastDigit == "4"|| lastDigit == "6"|| lastDigit == "8"){
        return true;
    }
    return false;
}
let output = isEvenWithoutModulo(8);
console.log(output); // --> true
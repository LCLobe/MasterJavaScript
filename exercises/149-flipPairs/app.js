function flipPairs(input){
    // your code here
    
    // stringTest = "string";
    // console.log(stringTest.charAt(2));

    let arrayString = input.split("");
    //console.log("arrayString: ", arrayString);

    let flipedString ="";
    
    for (let i=1; i<input.length; i=i+2){
        flipedString += arrayString[i] + arrayString[i-1];

    }
    if (input.length %2 !==0) flipedString += arrayString[arrayString.length-1];

    return flipedString;
}

let input = 'check out how interesting this problem is, it\'s insanely interesting!';
let output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!

console.log(input.length);

        // tempChar = input.charAt(i-1);
        // input.charAt(i-1)=input.charAt(i);
        // input.charAt(i)=tempChar;

        // console.log(input);
        //tempChar.charAt(i) = "a";

function flipPairsByCharacter(input){
    // your code here

    // let arrayString = input.split("");
    // console.log("arrayString: ", arrayString);

    let flipedString ="";
    
    for (let i=1; i<input.length; i=i+2){
        flipedString += input.charAt(i) + input.charAt(i-1);

    }
    if (input.length %2 !==0) flipedString += input.charAt(input.length-1);

    return flipedString;
}
output = flipPairsByCharacter(input);
console.log(output);
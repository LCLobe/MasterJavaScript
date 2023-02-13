function flipEveryNChars(input, n) {
    // your code here
    let tempString = "";
    let flipNString ="";
    let workString = input;
    
    //console.log("7: ", workString);
    
    while(workString.length >= n){
        tempString = workString.slice(0,n);
        //console.log("15: ", tempString);
        flipNString += reverseString(tempString);
        workString = workString.slice(n, workString.length);

        //console.log("18: ", workString); 
    }
    console.log("20: Rest of characters", input.length % n);
    if (input.length % n !== 0) {
        flipNString += reverseString(workString); 
    }        
       
    return flipNString;
}

let input = 'a short example ab ';
let output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma


function reverseString (string) {
    let invertedString = "";

    for (let i = string.length-1; i>=0; i --){
        invertedString += string.charAt(i);

    }
    return invertedString;
}

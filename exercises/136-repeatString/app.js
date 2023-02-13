function repeatString(string, num) {
    // your code here
    if (typeof(string)=== "string" && typeof(num)==="number"){
        let repeatedString ="";
        for (let i=1; i<=num; i++){
            repeatedString += string;
        }
        return repeatedString;
    }
}

let output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'
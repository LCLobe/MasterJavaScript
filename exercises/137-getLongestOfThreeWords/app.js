function getLongestOfThreeWords(word1, word2, word3) {
    // your code here
    let longestLengthIndex = 1;
    let longestlength = word1.length;

    if (word2.length>longestlength) {
        longestLengthIndex =2;
        longestlength = word2.length;
    }
    if (word3.length > longestlength){
        longestLengthIndex =3;
    }
    switch (longestLengthIndex){
        case 1: return word1;
        case 2: return word2;
        case 3: return word3;
    }
}

let output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'
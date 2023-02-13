function findShortestOfThreeWords(word1, word2, word3) {
    // your code here
    let shortestLengthIndex = 1;
    let shortestLength = word1.length;

    if (word2.length<shortestLength) {
        shortestLengthIndex =2;
        shortestLength = word2.length;
    }
    if (word3.length < shortestLength){
        shortestLengthIndex =3;
    }
    switch (shortestLengthIndex){
        case 1: return word1;
        case 2: return word2;
        case 3: return word3;
    }
}
let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'
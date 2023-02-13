// Write your function here
const countAllCharacters = (stringToCount) => {
    let stringLowerCase = stringToCount.toLowerCase();
    const characterCount = {};

    stringLowerCase.replace(/\S/g, function(p) {
        characterCount[p] = (isNaN(characterCount[p]) ? 1 : characterCount[p]+1);
    });
    console.log("Internal object: ", characterCount);

    return characterCount;

}
let output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}
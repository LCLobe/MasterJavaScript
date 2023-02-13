function countCharacter(str, char) {
    // your code here
    let stringLowerCase = str.toLowerCase();
    let characterCount = {};

    stringLowerCase.replace(/\S/g, function(p) {
        characterCount[p] = (isNaN(characterCount[p]) ? 1 : characterCount[p]+1);
    });
    console.log("Internal object: ", characterCount);
    
    if (isNaN(characterCount[char])){
        return 0;
    }
    else{
        return characterCount[char];
    }
    
}
let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
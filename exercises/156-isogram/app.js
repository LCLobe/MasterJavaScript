function isIsogram(text) {
  // add each char to a set
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  // note: a set drops dup values
  // thus, to see if all the chars were unique,
  // check length of text and the size of the set 

  const setOfLettersObject = countAllCharacters (text);
  //console.log("isIsogram: ", setOfLettersObject);
  
  //Study why next one does not work:
  //const result = Object.keys(setOfLettersObject).every((element) => {setOfLettersObject[element]===1});
  
  const wordLettersFromObject= Object.keys(setOfLettersObject);
  //console.log("isIsogram-wordLettersFromObject: ", wordLettersFromObject);

  for (let i=0; i<wordLettersFromObject.length; i++){
    if (setOfLettersObject[wordLettersFromObject[i]]>1) return false;
  }

//return result;
return true;
}
{}

console.log(isIsogram("Camile")) // => true
console.log(isIsogram("Camille")) // => false

function countAllCharacters (stringToCount) {
  let stringLowerCase = stringToCount.toLowerCase();
  //let stringLowerCase = stringToCount;
   characterCount = {};

  stringLowerCase.replace(/\S/g, function(p) {
      characterCount[p] = (isNaN(characterCount[p]) ? 1 : characterCount[p]+1);
  });
  //console.log("Internal object: ", characterCount);

  return characterCount;

}
function isRotated(str1, str2) {
    // your code here
    
    if (str1.length !== str2.length) return false;

    const str1CharacterCountObject = countAllCharacters(str1);
    const str2CharacterCountObject = countAllCharacters(str2);

    const areObjectsEqual = compareObj(str1CharacterCountObject,str2CharacterCountObject)

    return areObjectsEqual; 

}

const countAllCharacters = (stringToCount) => {
    //let stringLowerCase = stringToCount.toLowerCase();
    let stringLowerCase = stringToCount;
     characterCount = {};

    stringLowerCase.replace(/\S/g, function(p) {
        characterCount[p] = (isNaN(characterCount[p]) ? 1 : characterCount[p]+1);
    });
    //console.log("Internal object: ", characterCount);

    return characterCount;

}

function compareObj(a, b) {
    var aKeys = Object.keys(a).sort();
    var bKeys = Object.keys(b).sort();
    if (aKeys.length !== bKeys.length) {
        return false;
    }
    if (aKeys.join('') !== bKeys.join('')) {
        return false;
    }
    for (var i = 0; i < aKeys.length; i++) {
        if ( a[aKeys[i]]  !== b[bKeys[i]]) {
            return false;
        }
    }
    return true;
}

function sortObjectProperties(object){
    const orderedObject ={};

    let objectKeys = Object.keys(object).sort();
    
    objectKeys.forEach((element)=>{
        orderedObject[element] = object[element];
    });

    return orderedObject;
}

// console.log(isLiterallyRotated('hello world', 'orldhello w')) // => true
// console.log(isLiterallyRotated('hello world', 'omrel wp')) // => false
// console.log(isLiterallyRotated('Work from Home', 'kfmoemro Hor W')) // => true
// console.log(isLiterallyRotated('Learning is fun', 'Lr aen ngiiufs')) // => true

// console.log(isRotated('hello world', 'orldhello w')) // => true
// console.log(isRotated('hello world', 'omrel wp')) // => false
// console.log(isRotated('Work from Home', 'kfmoemro Hor W')) // => true
console.log(isRotated('Learning is fun', 'Lr aen ngiiufs')) // => false

function isLiterallyRotated(str1, str2) {
    // your code here
    
    if (str1.length !== str2.length) return false;

    //console.log(str2);
    for (let i = 0; i<str1.length; i++){
        //Compare all rotations until one match
        if (str1 === str2) return true;
        str2 = rotateStringOnePositionLeft(str2);
        //console.log(str2);

    }

    return false; 

}

function rotateStringOnePositionLeft (string) {
    let rotatedString ="";
    rotatedString = string.slice(1) + string.charAt(0);
    return rotatedString;
}
//console.log(rotateStringOnePositionLeft("hola"));

console.log(sortObjectProperties(countAllCharacters('Learning is fun')));
console.log(sortObjectProperties(countAllCharacters('Lr aen ngiiufs')));
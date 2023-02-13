function filterEvenLengthWords(arrayOfWords) {
    // your code here
    let resultArray = arrayOfWords.filter((element)=>{
        if (typeof(element)==="string"){
            if (element.length %2 ===0) return true;
        }
    });
    return resultArray;
}

let output = filterEvenLengthWords(['word', 'horse', 'car', 'computer']);
console.log(output); // --> ['word', 'computer']
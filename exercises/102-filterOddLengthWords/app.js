function filterOddLengthWords(arrayOfWords) {
    // your code here

    let resultArray = [];
      if (Array.isArray(arrayOfWords)){
          resultArray = arrayOfWords.filter((element)=>{
              if (typeof(element === "string")){
                  //console.log("typeof: ", typeof(element));
                  if (element.length%2 !==0) return true;
              }
          })  
      }
      return resultArray;


}

let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']
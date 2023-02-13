let obj = {
  key: ['a', 'long', 'game']
};
function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
      let resultArray = [];
      if (Array.isArray(obj[key])){
          resultArray = obj[key].filter((element)=>{
              if (typeof(element === "string")){
                  //console.log("typeof: ", typeof(element));
                  if (element.length%2 ===0) return true;
              }
          })  
      }
      return resultArray;
  }

let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
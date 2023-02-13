// Write your function here
function getOddLengthWordsAtProperty (obj, key){
    let resultArray = [];
    if (Array.isArray(obj[key])){
        resultArray = obj[key].filter((element)=>{
            if (typeof(element === "string")){
                //console.log("typeof: ", typeof(element));
                if (element.length%2 !==0) return true;
            }
        })  
    }
    return resultArray;
}

let obj = {
    key: ['It', 'has', 'some', 'words']
  };
  let output = getOddLengthWordsAtProperty(obj, 'key');
  console.log(output); // --> ['has', 'words']
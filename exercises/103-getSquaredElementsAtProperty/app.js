let obj = {
  key: [2, 1, 5]
};

function getSquaredElementsAtProperty(obj, key) {
    // your code here

    let resultArray = [];
      if (Array.isArray(obj[key])){
          resultArray = obj[key].map((element)=>{
              if (typeof(element === "number")){
                  //console.log("typeof: ", typeof(element));
                  return element*element;
              }
          })  
      }
      return resultArray;


}

let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
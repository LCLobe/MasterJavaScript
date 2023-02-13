let obj = {
  key: [1, 2, 3, 4, 5]
};

function getOddElementsAtProperty(obj, key) {
    // your code here
    let resultArray = [];
    if (Array.isArray(obj[key])){
        resultArray = obj[key].filter((element)=>{
            if (typeof(element === "number")){
                //console.log("typeof: ", typeof(element)); 
                if (element %2 !==0){
                  //console.log("numberOdd: ", element)
                  return true;
                } 
            }
        })  
    }
    return resultArray;
}

let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]
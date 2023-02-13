
let obj = {
  key: [1000, 11, 50, 17]
};

function getEvenElementsAtProperty(obj, key) {
    // your code here
    let resultArray =[];
    if (isPropertyArray(obj[key])){
      resultArray = obj[key].filter((element)=>{
          if (isElementANumber(element)){
              return isNumberEven(element);
          }
          //return isElementANumber(element) && isNumberEven (element); 
      });  
  }  
    //if (doesKeyExistsAndHasValue(obj[key]) && isPropertyArray(obj[key])){
      // resultArray = obj[key].filter((element)=>{
      //   if (isElementANumber(element)) {
      //     console.log("Number: ", element);
      //     return isNumberEven(element);
      //   }
      // });
    //}
    return resultArray;
}
function isNumberEven (number) {
  return number %2 === 0 ? true : false;
}
function doesKeyExistsAndHasValue (element){
  if (!element) return false;
}
function isPropertyArray (element){
  if (Array.isArray(element)) return true;
}
function isElementANumber (element){
  if (typeof(element==="number")) return true;
}

let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
// Write your function here
function getAverageOfElementsAtProperty (obj, key){
    //key must be defined
    // if (obj[key]===undefined){
    //     return 0;
    // }
    
    //key does not exist === no property at given key (replacing before)
    if (!(Object.keys(obj).includes(key))) return 0; 
    
    //property at key is not array (podria usarse else en siguiente if. Mala práctica)
    if (!Array.isArray(obj[key])) return 0; 
    
    //return 0 if property is array with length 0.
    if (obj[key].length === 0) return 0;

    //if (Array.isArray(obj[key])){
        let partialArraySum = 0;
         obj[key].forEach(element => {
            if (typeof (element) === "number"){
                partialArraySum+=element;
            }
        });
        const meanOfNumericValuesAtArray =partialArraySum/obj[key].length;
        return meanOfNumericValuesAtArray;
    //}
}



let obj = {
    keys: [1, 2, 3],
    noLength : [],
    notArray : "Not array"
  };
  let output = getAverageOfElementsAtProperty(obj, 'keys');
  console.log("keys", output); // --> 2
  output = getAverageOfElementsAtProperty(obj, 'noLength');
  console.log("noLength", output); // --> 0
  output = getAverageOfElementsAtProperty(obj, 'kenotArrayys');
  console.log("notArray", output); // --> 0
  output = getAverageOfElementsAtProperty(obj, 'noKey');
  console.log("noKey", output); // --> 0
let obj = {
  key: [1, 2, 3, 4]
};

function getProductOfAllElementsAtProperty(obj, key) {
    // your code here
    if (!obj?.[key] || Array.isArray(obj[key])===false || obj[key].length ===0) return 0;
    
    let productOfAllElementsAtProperty = obj[key][0];
    
    for (let i = 1; i<= obj[key].length-1; i++){
      productOfAllElementsAtProperty*=obj[key][i];
    }
    
    return productOfAllElementsAtProperty
}
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
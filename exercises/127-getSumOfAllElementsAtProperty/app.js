let obj = {
    key: [4, 1, 8]
};

function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    if (!obj?.[key] || Array.isArray(obj[key])===false || obj[key].length ===0) return 0;
    
    let sumOfAllElementsAtProperty = obj[key][0];
    
    for (let i = 1; i<= obj[key].length-1; i++){
        sumOfAllElementsAtProperty+=obj[key][i];
    }
    
    obj[key].push(sumOfAllElementsAtProperty);
    return sumOfAllElementsAtProperty;



}
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
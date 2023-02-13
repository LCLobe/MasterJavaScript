let obj = {
    key: ['Jamil', 'Albrey'],
};

function getElementOfArrayProperty(obj, key, index) {
    // your code here
    //if (!obj?.[key] ===0) return obj[key][index];
    return obj?.[key]?.[index];

}

let output = getElementOfArrayProperty(obj, 'key', 0); 
console.log(output); // --> 'Jamil'
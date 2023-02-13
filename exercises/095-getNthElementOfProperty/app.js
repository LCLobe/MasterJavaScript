// Write your function here
function getNthElementOfProperty (obj, key, arrayElement){

    if (Array.isArray(obj[key])) {
        return obj[key][arrayElement];
    }
}

let obj = {
    key: [1, 2, 6]
  };
  let output = getNthElementOfProperty(obj, 'key', 1);
  console.log(output); // --> 2
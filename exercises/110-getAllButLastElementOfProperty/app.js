let obj = {
  key: [1, 2, 3]
};
function getAllButLastElementOfProperty(obj, key) {
    // your code here

    if (obj?.[key]){

        if (Array.isArray(obj[key]) && obj?.[key].length !==0){

          const resultArray = [...obj[key]];
          resultArray.pop();
          return resultArray;

        }
    }
    return [];

}

let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]
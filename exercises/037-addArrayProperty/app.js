function addArrayProperty(obj, key, arr) {
  // Add your code after this line
    obj[key]=arr;
    return obj;
  
  }
  let myObj = {};
let myArray = [1, 3];
addArrayProperty(myObj, 'myProperty', myArray);
console.log(myObj.myProperty);

let myObj2 = {};
let myArray2 = [1, 3, 5];
const addArrayProperty2 = (obj, key, arr) => obj[key]=arr; //Arrow function
console.log(addArrayProperty2(myObj2,`myProperty`,myArray2 ));
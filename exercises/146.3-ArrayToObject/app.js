function transformEmployeeData(array) {
  // your code here
  console.log("inicio funcion");
  if (Array.isArray(array) && array.length){
    // console.log("entra en if");
    const arrayOfObjects=[];
    // console.log(arrayOfObjects);
    for (let i=0; i<array.length; i++){
      // console.log("entra en for");
        arrayOfObjects.push(fromListToObject(array[i]));
        // console.log(arrayOfObjects);
      }
      return arrayOfObjects; 
    }

  
}
function fromListToObject(array) {
  // your code here
  if (Array.isArray(array) && array.length){
    const createdObject = {}
    
    for (let i=0; i<array.length; i++){
      if (Array.isArray(array[i]) && array.length){
        createdObject[array[i][0]] = array[i][array[i].length-1];
      } 
    }

    console.log("fromListToObject: ",createdObject);
    return createdObject;

  }
}


let output = transformEmployeeData([[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']],[['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]]);
console.log(output); // [{firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'}, {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}]
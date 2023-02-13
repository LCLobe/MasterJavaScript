function listAllValues(obj) {
  // your code here
  const objectProperties =[];
  Object.keys(obj).forEach(element => {objectProperties.push(obj[element]);
    
  });
  return objectProperties;
}
let output = listAllValues({name: "Krysten", age: 33, hasPets: false});
console.log(output); // ['Krysten', 33, false]
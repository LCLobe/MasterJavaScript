function convertObjectToList(obj) {
  // your code here
  const objectList =[];
  Object.keys(obj).forEach(element => {
    //const objectPair =[element, obj[element]];
    objectList.push([element, obj[element]]);
    
  });
  return objectList;
}
let output = convertObjectToList({name: "Holly", age: 35, role: "producer"});
console.log(output); // [['name', 'Holly'], ['age', 35], ['role', 'producer']]
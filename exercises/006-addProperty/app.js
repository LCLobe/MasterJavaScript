function addProperty(obj, key) {
  // your code here
  //obj.prototype.key = null;
  if (!obj.hasOwnProperty(key)){
      obj[key] = true;
      return obj; //No es necesario porque los objetos se pasan por referencia.
  }
  console.log(`Object already contains property "${key}"`)
}
let myObj = {};
addProperty(myObj, 'myProperty');
console.log(myObj.myProperty);
console.log(myObj);
addProperty(myObj, 'myProperty');
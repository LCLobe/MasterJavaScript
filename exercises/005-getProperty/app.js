function getProperty(obj, key) {
  // your code here
  //return obj[`${key}`];
  return obj[key];
  //return obj.hasOwnProperty(key)? obj[key] : `Provided object does not have property "${key}".`;
  
}

let car = {
  model: 'Toyota'
};
let output = getProperty(car, 'model');
console.log(output);

output = getProperty(car, 'plate');
console.log(output);
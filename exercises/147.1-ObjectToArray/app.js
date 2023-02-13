function getAllKeys(obj) {
  // your code here
  let arrayOfKeys =[]

  for (const key in obj) {
    // if (Object.hasOwnProperty.call(object, key)) {
    //   const element = object[key];
      
    // }
    arrayOfKeys.push(key);

  }
  return arrayOfKeys
}
function removeStringValuesLongerThan(num, obj) {
  // your code here
  for (key in obj){
    //console.log(obj[key]);
    if (typeof (obj[key]) == "string"){
      if (obj[key].length > num){
        delete obj[key];
      }
    }
  }
console.log(obj);


}

let obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas',
};
removeStringValuesLongerThan(6, obj);

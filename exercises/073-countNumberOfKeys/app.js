function countNumberOfKeys(obj) {
    // your code here
    let num =0;
    for (key in obj){
        num+=1;
    }
    return num;
}
//------
function countNumberOfKeysAlternative(obj){
    //arr=object.keys(obj);
   const arr=Object.keys(obj);
    return arr.length;
 }

let obj = {
    a: 1,
    b: 2,
    c: 3
  };
  let output = countNumberOfKeys(obj);
  console.log("For in: ", output); // --> 3
  console.log("Object.keys(): ", countNumberOfKeysAlternative(obj));
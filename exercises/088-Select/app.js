// Write your function here
function select (arr, obj){
    let obj2 = {};
    //let keys = obj.keys();

    for (key in obj){
        if (arr.includes(key)){
            obj2[key]=obj[key];
        }
    }
return obj2;
}
let arr = ['a', 'c', 'e'];
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
let output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }
function joinArrays(arr1, arr2) {
  // your code here
    arr2.forEach(element => {
      arr1.push(element);
    });
    return arr1;
}
let output = joinArrays([1, 2], [3, 4]);
console.log("ferEach+push: ",output);

function joinArrays2(arr1, arr2) {
  // your code here
    const arr =[...arr1, ...arr2];  
    return arr;
}
const myArray1 = [1,2,3,4,5];
const myArray2 = [6,7,8,9,10];
let output2 = joinArrays2(myArray1, myArray2)
console.log("Spread Operator: ", output2);

function joinArrays3(arr1, arr2) {
  // your code here
    arr =arr1.concat(arr2);  
    return arr;
}
const myArray3 = ["a",2,3,4,5];
const myArray4 = ["b",7,8,9,10];
let output3 = joinArrays2(myArray3, myArray4)
console.log("Concat: ", output3);
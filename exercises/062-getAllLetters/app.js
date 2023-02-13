function getAllLetters(str) {
    // your code here
 /*   let count = {};
    str.replace(/\S/g, function(p) {
        count[p] = (isNaN(count[p]) ? 1 : count[p]+1);
    });
    return count; */
  let arr = str.split("");
  return arr;
}
let output = getAllLetters('hola');
console.log(output);
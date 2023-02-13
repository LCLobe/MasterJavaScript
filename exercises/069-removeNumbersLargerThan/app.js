let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
function removeNumbersLargerThan(num, obj) {
    // your code here
    for (key in obj){
       // if (!obj[key]===NaN){
            if (obj[key]>num){
                //delete obj['${key}'] -- Como era la comilla especial?
                delete obj[key];
            }
       // }
    }
    
}
removeNumbersLargerThan(5, obj);
console.log(obj); // --> { b: 2, c: 'montana' }
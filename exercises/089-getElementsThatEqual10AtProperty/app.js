let obj = {
    key: [1000, 10, 50, 10]
  };

// Write your function here
function getElementsThatEqual10AtProperty (obj, key){
    let solution = [];
    if (obj[key] == undefined || !Array.isArray(obj[key]) || obj[key]==null){console.log("error"); return solution;}
    else {
        for (let i =0; i<obj[key].length;i++){
            if (obj[key][i]===10){
                solution.push(obj[key][i]);
            }
        }
    }
    return solution;
}

 // Write your function here
 function getElementsThatEqual10AtProperty2(obj, key){
    if(!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])){
        return []
    }
    let arr = obj[key]
    let newArr = []
    arr.forEach(e=>{
        if(e === 10){
            newArr.push(e)
        }
    })
    return newArr;
}
console.log(`2ª`);
console.log(getElementsThatEqual10AtProperty2(obj, "key"))


  console.log(`1ª`);
  let output = getElementsThatEqual10AtProperty(obj, 'key');
  console.log(output); // --> [10, 10]
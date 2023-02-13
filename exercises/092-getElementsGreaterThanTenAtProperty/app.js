// Write your function here
function getElementsGreaterThan10AtProperty (obj, key) {
    let arr =[];
    if (!Array.isArray(obj[key]) || obj[key] == undefined || obj[key] == null) {return arr;}
    
    if (obj[key].length===0) {return arr;}

    // obj[key].forEach(element => {
    //     //element > 10 ? arr.push(element) : "";
    //     if (element > 10) {arr.push(element);}
    // });

    arr=obj[key].filter(filterNumberGreaterThanTenInArray);

    return arr;
    
}
function filterNumberGreaterThanTenInArray (element){
    if (!isNaN(element) && element>10) return true;
}

let obj = {
    key: [1, 20, 30]
  };
  let output = getElementsGreaterThan10AtProperty(obj, 'key');
  console.log(output); // --> [20, 30]
let obj = {
    key: [1000, 20, 50, 500]
  };

// Write your function here
function getElementsLessThan100AtProperty (obj,key){
    let arr =[];
    if (!Array.isArray(obj[key]) || obj[key] == undefined || obj[key] == null) {return arr;}
    else {
        obj[key].forEach(element => {
            //element > 100 ? arr.push(element) : "";
            if (element < 100) {arr.push(element);}
        });
        return arr;
    }
}


let output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]
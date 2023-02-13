
function filterEvenElements(arr) {
    // your code here
    const evenElementsArray = arr.filter((element)=>{
        if (element %2 ===0) return true;
    })
    return evenElementsArray;
}

let output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]

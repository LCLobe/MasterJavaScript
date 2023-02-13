// Write your function here
function removeElement (myArray, discarder) {

    const resultArray = myArray.filter((element) => {
        return element === discarder?  false :  true;
    })

    return resultArray;
}

let output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]
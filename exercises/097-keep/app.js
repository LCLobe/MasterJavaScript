// Write your function here
function keep (myArray, keepElement) {

    const resultArray = myArray.filter((element) => {
        return element === keepElement?  true :  false;
    })

    return resultArray;
}

let output = keep([1, 2, 3, 2, 1], 2)
console.log(output); // --> [2, 2]

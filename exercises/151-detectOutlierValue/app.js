function detectOutlierValue(string) {
    // your code here
    //Evaluate break cases for lengths of 1,2 numbers.
    //It is asumed there is only 1 outlier value.

    const arrayOfNumbers = string.split(" ");
    const booleanArray = arrayOfNumbers.map((element)=>{
        const booleanToNumber = isNumberEven(element)? 0 :1;
        return booleanToNumber;
    });
    const reducedBooleanfromArray = booleanArray.reduce((accumulator, currentValue) => accumulator + currentValue);

    if (reducedBooleanfromArray === 1) {
        //Then there is only one odd number.

        const literalPositionOfOddNumber = booleanArray.indexOf(1)+1; 

        return literalPositionOfOddNumber;

    }

    //if !== 1 odd number, then there is only 1 even number:

    const literalPositionOfEvenNumber = booleanArray.indexOf(0)+1; 

    return literalPositionOfEvenNumber;
}

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // => 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  //=> 2

function isNumberEven (num) {
    return num % 2 ===0? true : false; 
}


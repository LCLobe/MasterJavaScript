function sumDigits(num) {
    // your code here
    let partialSum = 0;
    let stringIndex =0;
    let tempNumber =0;

    const numString = num.toString(10);
    console.log(numString);



    if (numString.charAt(0)!=="-"){
        do{
            tempNumber = parseInt(numString.charAt(stringIndex));
            console.log("tempNumber: ",tempNumber);
            partialSum += tempNumber;
            stringIndex ++;

        }while(numString.charAt(stringIndex)!=="")
        return partialSum;
    }

    if (numString.charAt(stringIndex)==="-"){
        
        partialSum=parseInt(numString.charAt(1),10)*-1;
        console.log("partialSum Init: ",partialSum);
        stringIndex=2;
        while(numString.charAt(stringIndex)!==""){
            tempNumber = parseInt(numString.charAt(stringIndex),10);
            partialSum += tempNumber;
            // console.log("partialSum buc: ",partialSum);
            stringIndex ++;

        }
        return partialSum;
    }

    
}
let output = sumDigits(-316);
console.log(output); // --> 4

// let num = 13;
// let stringN =num.toString(10)
// console.log (num, " :" , stringN);
// console.log (num)
// console.log(typeof(parseInt("3")));
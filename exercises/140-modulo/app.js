function modulo(num1, num2) {
    // your code here 

    const num1neg= num1<0? true :false;    
    const num2neg= num2<0? true :false;    
    
    const num1Abs= Math.abs(num1);
    const num2Abs= Math.abs(num2);

    const floorResult = Math.floor(num1Abs/num2Abs);
    const resultAbs=  num1Abs - floorResult*num2Abs;

    if (num1neg === num2neg ) return resultAbs;
 
    console.log("neg");
    return resultAbs*-1;
}

let output = modulo(-25, 4);
console.log(output); // --> 1
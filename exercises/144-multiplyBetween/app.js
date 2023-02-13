function multiplyBetween(num1, num2) {
    // Your code here
    if (typeof(num1)==="number" && typeof(num2)==="number" && Number.isInteger(num1)&& Number.isInteger(num2)){
        if (num2<=num1) return 0;
        let partialProduct = num1;
        for (let i=num1+1; i< num2; i++){
            partialProduct =partialProduct*i;
        }
        return partialProduct;
    }
}

let output = multiplyBetween(2, 5);
console.log(output); // --> 24
function multiply(num1, num2) {
    // your code here
    if (Number.isInteger(num1) && Number.isInteger(num2)){
        let product = num1;
        //Averiguar signo de num1
        if (num1===0 || num2 ===0) return 0;
        if (num2>0){
            console.log("num2>0");
            for (let i=2; i<= num2; i++){
                product += num1;
            }
        }
        if (num2<0){
            console.log("num2<0");
            console.log(product);
            for (let i=2; i<= Math.abs(num2)+2; i++){
                product -= num1;
                console.log(product);
            }
        }
        return product;
    }
}

let output = multiply(-3, 4);
console.log(output); // --> 28
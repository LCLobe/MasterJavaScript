function computeFactorialOfN(n) {
    // your code here
    if (typeof(n)==="number" && Number.isInteger(n)){
        let factorial =1;
        for (let i=1; i<=n; i++){
            factorial *= i;
        }
        return factorial;
    }
}

let output = computeFactorialOfN(3); console.log(output); // --> 6
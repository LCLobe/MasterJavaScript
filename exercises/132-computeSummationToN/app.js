function computeSummationToN(n) {
  // your code here
  if (typeof(n) === "number"){
    let partialSum = 0;
    for (let i=1; i<=n; i++){
      partialSum +=i;
    }
    return partialSum;
  }
  return 0;
}

let output = computeSummationToN(6);
console.log(output); // --> 21


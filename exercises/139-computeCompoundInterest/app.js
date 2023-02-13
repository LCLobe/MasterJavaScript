function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
  // your code here

  const relation = interestRate/compoundingFrequency+1;
  const exponent = compoundingFrequency*timeInYears;
  const multiplicationFactor = Math.pow(relation,exponent);
  const accumulatedValue = principal*multiplicationFactor;

  const generatedInterest = accumulatedValue-principal;
  return generatedInterest;
}

let output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output); // --> 438.83682213410543
function calculateBillTotal(preTaxAndTipAmount) {
    // your code here
    const taxes = preTaxAndTipAmount*0.095;
    const tip = preTaxAndTipAmount*0.15;
    const dueQuantity= preTaxAndTipAmount+ taxes + tip;

    return dueQuantity;
}
let output = calculateBillTotal(20);
console.log(output); // --> 24.9
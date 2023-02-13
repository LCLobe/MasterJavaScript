function or(expression1, expression2) {
  // your code here

  //return expression1 != expression2? true : expression1 ;
  const A = !(expression1&&expression1);
  const B = !(expression2&&expression2);
  const C = !(A&&B);
  return C;
  
}
let output = or(true, false);
console.log(output);
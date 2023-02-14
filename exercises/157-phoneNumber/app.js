function PhoneNumberFormatter(arrayOfNumbers) {
  this.numbers = arrayOfNumbers;
 
}

PhoneNumberFormatter.prototype.render = function() {
  let string = '';
  // your code here
  // let phoneNumber1 = new   PhoneNumberFormatter(this.numbers);
  
  string += this.parenthesize(this.getAreaCode());
  
  string += " ";
  // // string += phoneNumber.getExchangeCode();
  string += this.getExchangeCode();
 
  string += "-";
  // // string +=phoneNumber.getLineNumber();
  string +=this.getLineNumber();

  return string;
};

PhoneNumberFormatter.prototype.getAreaCode = function() {
  // your code here
   return this.slice(0,3);

};

PhoneNumberFormatter.prototype.getExchangeCode = function() {
  // your code here
  return this.slice(3,6);
};

PhoneNumberFormatter.prototype.getLineNumber = function() {
  // your code here
  return this.slice(6);
};

PhoneNumberFormatter.prototype.parenthesize = function(string) {
  return '(' + string + ')';
};

PhoneNumberFormatter.prototype.slice = function(start, end) {
  return this.numbers.slice(start, end).join('');
};

let output = new PhoneNumberFormatter([6, 5, 0, 8, 3, 5, 9, 1, 7, 2]);
console.log("output: ",output.render()); // "(650) 835-9172"

let customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  let greeting = ``;
  // your code here
	  
  if (!customerData?.[firstName]) return greeting = `Welcome! Is this your first time?`;
  
  if (customerData?.[firstName].visits===1) return greeting =`Welcome back, ${firstName}! We're glad you liked us the first time!`;
  
  if (customerData?.[firstName].visits>1) return greeting =`Welcome back, ${firstName}! So glad to see you again!`;

  //return greeting;
}
let output = greetCustomer('Joe');
console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'
function transformFirstAndLast(array) {
  // your code here
  if (Array.isArray(array) && array.length){
    const createdObject = {}
    createdObject[array[0]] = array[array.length-1];
    return createdObject;
  }
}

let output = transformFirstAndLast(['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'])
console.log(output); // { Queen: "Beyonce" }

output = transformFirstAndLast(['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey'])
console.log(output); // { Kevin: "Spacey" }
function fromListToObject(array) {
  // your code here
  if (Array.isArray(array) && array.length){
    const createdObject = {}
    
    for (let i=0; i<array.length; i++){
      if (Array.isArray(array[i]) && array.length){
        createdObject[array[i][0]] = array[i][array[i].length-1];

      } 
    }

    return createdObject;
  }
}

let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
console.log(output) // => { make: 'Ford', model: 'Mustang', year: 1964 }
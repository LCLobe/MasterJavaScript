function average(array_of_numbers) {
  // process array of numbers
  const average = sum(array_of_numbers)/array_of_numbers.length;
  return average;

}

function sum(numbers) {
    let partialSum = 0;
    numbers.forEach(element => {partialSum += element
      
    });
    console.log(partialSum);
    return partialSum;
}
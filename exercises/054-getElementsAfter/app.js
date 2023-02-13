function getElementsAfter(array, n) {
  // your code here
    /* if (n<<array.length){
      return array.slice(n+1);
    } */
    arr2=[];
    if (n <= array.length){
      for (i=n+1; i<=array.length; i++){
        arr2.push(array[i-1]);
      }
      return arr2;
    }
    
}
let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 5); 
console.log(output); 
function getElementsUpTo(array, n) {
  // your code here
  //No me gusta que el usuario tenga que saber que el 0 es el primer elemento.
  arr=[];
  if (n<=array.length){
    for (i=0; i<=n-1;i++){
      arr.push(array[i]);
    }
    return arr;
  }
}

let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 5) 
console.log(output);
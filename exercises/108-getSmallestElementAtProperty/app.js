let obj = {
  key: [45, ,"hola",3,7] //45, ,"hola",3,7
};
function getSmallestElementAtProperty(obj, key) {
  // your code here
  
  if (obj?.[key]){
    //console.log("key exist");
      if (Array.isArray(obj[key]) && obj?.[key].length !==0){
        //console.log("key is array");


        const arrayOfNumbersOnly = obj[key].filter((element)=>{
          return typeof(element)==="number" ? true : false;
        })
        //console.log ("Noblacnks: ", arrayOfNumbersOnly);

        // const isArrayFullOfNumbers = obj[key].every((element) => {
        //   return typeof(element)==="number"});
        //   console.log("isArrayFullOfNumbers: ", isArrayFullOfNumbers);
        
        //if (isArrayFullOfNumbers && obj[key].length>0){
          //console.log("key array is all numbers")

          let minimumNumber = arrayOfNumbersOnly[0];
          
          for (let i=1; i<=arrayOfNumbersOnly.length-1; i++){
            if (minimumNumber > arrayOfNumbersOnly[i]) minimumNumber = arrayOfNumbersOnly[i];
          }
        
          return minimumNumber;
        //} 
      }
  }
  return [];
}
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 
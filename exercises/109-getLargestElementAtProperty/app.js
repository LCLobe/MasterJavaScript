let obj = {
  key: [1, 2, 4]
};
function getLargestElementAtProperty(obj, key) {
    // your code here

    if (obj?.[key]){
      //console.log("key exist");
        if (Array.isArray(obj[key]) && obj?.[key].length !==0){

          const arrayOfNumbersOnly = obj[key].filter((element)=>{
            return typeof(element)==="number" ? true : false;
          })
 
          let maximumNumber = arrayOfNumbersOnly[0];
            
           for (let i=1; i<=arrayOfNumbersOnly.length-1; i++){
            if (maximumNumber < arrayOfNumbersOnly[i]) maximumNumber = arrayOfNumbersOnly[i];
           }
          
          return maximumNumber;

        }
    }
    return [];

}
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
function removeEvenValues(obj) {
    // your code here
    // for (key in obj){
    //      if (!isNaN(obj[key])){
    //             if (obj[key]%2===0){
                 
    //                 delete obj[key];
    //             }
    //      }
    // }

    // for (key in obj){
    //     !isNaN(obj[key]) && (obj[key]%2===0) ? delete obj[key] : "" ;
    // }
    for (key in obj){
        if (!(isNaN(obj[key])) && (obj[key]%2===0)) delete obj[key];
    }
}
let obj = {
    a: 2,
    b: 3,
    c: 4
  };
  removeEvenValues(obj);
  console.log(obj); // --> { b: 3 }
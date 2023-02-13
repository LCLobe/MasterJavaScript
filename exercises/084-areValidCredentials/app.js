// Write your function here
function areValidCredentials (str1, str2){
    if (str1.length>3 && str2.length>=8){
        return true;
    }
    else{return false;}
}


let output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output); // --> true
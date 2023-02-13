// Write your function here
function findMinLengthOfThreeWords (wd1, wd2, wd3) {
    return Math.min(wd1.length, wd2.length, wd3.length);
}

let output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1

function findMinLengthOfThreeWords (wd1, wd2, wd3) {
    if (wd1.length-wd2.length>0){
        if (wd1.length-wd3.length>0){
            return wd1.length;
        }
        else if (wd1.length-wd3.length<0){
            return wd3.length;
        }
        else {return "Empate.";}
    }
    //...
    
    return Math.min(wd1.length, wd2.length, wd3.length);
}
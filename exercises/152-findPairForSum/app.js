function findPairForSum(array, number){
    for (let i = 0; i<array.length; i++){
        for (let j = 0; j<array.length; j++){
            if (array[i]+array[j]===number){
                return [array[i],array[j]];
            }
        }
    }
    return "No match found.";
}

let pair = findPairForSum([3, 34, 5, 12, 5, 2], 7);
console.log(pair); // --> [4, 5]
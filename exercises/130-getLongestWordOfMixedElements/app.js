function getLongestWordOfMixedElements(arr) {
    // your code here
    if (arr.length === 0) return "";
    const mapedStrings = arr.filter((element)=> {if (typeof(element)==="string") return true;});
    if (mapedStrings.length === 0) return "";

    let longestlength = mapedStrings[0];
    let longestlengthIndex = 0;

    for (let i=1; i<=mapedStrings.length-1; i++){
        if (mapedStrings[i].length > longestlength) {
            longestlength = mapedStrings[i].length;
            longestlengthIndex = i;
        }
    }

    return mapedStrings[longestlengthIndex];

}

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
function findShortestWordAmongMixedElements(arr) {
    // your code here
    if (arr.length === 0) return "";
    const mapedStrings = arr.filter((element)=> {if (typeof(element)==="string") return true;});
    if (mapedStrings.length === 0) return "";

    let shortestlength = mapedStrings[0];
    let shortestlengthIndex = 0;

    for (let i=1; i<=mapedStrings.length-1; i++){
        if (mapedStrings[i].length < shortestlength) {
            shortestlength = mapedStrings[i].length;
            shortestlengthIndex = i;
        }
    }

    return mapedStrings[shortestlengthIndex];

}
let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
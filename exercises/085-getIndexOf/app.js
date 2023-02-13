// Write your function here
const characterToSearch = 'a';
const stringToSearch = 'I am a hacker';

function getIndexOf (characterToSearch, stringToSearch){
    return stringToSearch.search(characterToSearch);
}


let output = getIndexOf(characterToSearch, stringToSearch);
console.log(output); // --> 2
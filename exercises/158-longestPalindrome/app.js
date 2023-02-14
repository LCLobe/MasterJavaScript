function findLongestPalindrome(sentence) {
  // split sentence into words
  // iterate words and collect the palindromes
  // sort the list of palindromes by word length
  // return the largest item in the sorted list

  //LLoredo: no point on deviding into words if longest palindrome may have combined words.

  let arrayOfPalindromes =[];

  let beginIndexToEvaluateString =0;
  let endIndexToEvaluateString = sentence.length-1;
  let partialString = "";

  for (beginIndexToEvaluateString =0 ; beginIndexToEvaluateString <sentence.length; beginIndexToEvaluateString++){
    for (endIndexToEvaluateString = beginIndexToEvaluateString; endIndexToEvaluateString <sentence.length; endIndexToEvaluateString++){
      partialString = sentence.slice(beginIndexToEvaluateString, endIndexToEvaluateString);
      if (isPalindrome(partialString.toLowerCase())) arrayOfPalindromes.push(partialString);
    }
  }
  
 
  let longestPalindrome = findLongestString(arrayOfPalindromes);
  return longestPalindrome;

}

function reverseString(string) {
  
  const stringArray = string.split("");

  const reverseString =stringArray.reverse().join("");

  return reverseString;
}

function isPalindrome(word) {
  // hint: you can detect palindromes by comparing a string to its reverse
  
  return word === reverseString(word) ? true : false; 

}

function findLongestString (array){

  let maxFoundLength = 0;
  let maxFoundLengthIndex = -1; 

  for (let i = 0; i< array.length; i++){
    //console.log ("findLongestString-index: ", maxFoundLength, maxFoundLengthIndex);
    if (array[i].length > maxFoundLength){
      maxFoundLength = array[i].length;
      maxFoundLengthIndex = i; 
    }
  }
  
  // console.log("findLongestString-index/length: ",maxFoundLengthIndex, maxFoundLength); // Good until here.
  // console.log("findLongestString-longestString: ",array[maxFoundLengthIndex]);
  return array[maxFoundLengthIndex];
}

//let output = findLongestPalindrome("My dad is a racecar athlete");
let output = findLongestPalindrome("Madam, i'm adam");

console.log(output); // "a racecar a"

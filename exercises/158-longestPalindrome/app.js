function findLongestPalindrome(sentence) {
  // split sentence into words
  // iterate words and collect the palindromes
  // sort the list of palindromes by word length
  // return the largest item in the sorted list

  //no point on deviding into words if longest palindrome may have combined words.

  let arrayOfPalindromes =[];

  let beginIndexToEvaluateString =0;
  let endIndexToEvaluateString = sentence.length-1;
  let partialString = "";

  for (beginIndexToEvaluateString =0 ; beginIndexToEvaluateString <sentence.length; beginIndexToEvaluateString++){
    for (endIndexToEvaluateString = beginIndexToEvaluateString; endIndexToEvaluateString <sentence.length; endIndexToEvaluateString++){
      partialString = sentence.slice(beginIndexToEvaluateString, endIndexToEvaluateString);
      if (isPalindrome(partialString)) arrayOfPalindromes.push(partialString);
    }
  }
  
  //console.log("findLongestPalindrome: ",arrayOfPalindromes );
  //console.log("findLongestPalindrome: ", findLongestString([arrayOfPalindromes]));
  let longestPalindrome = findLongestString([arrayOfPalindromes]);
  //console.log ("findLongestPalindrome: ",longestPalindrome);
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
  
  console.log("findLongestString-index/length: ",maxFoundLengthIndex, maxFoundLength); // Good until here.
  console.log("findLongestString-longestString: ",array[maxFoundLengthIndex]);
  return array[maxFoundLengthIndex];
}

// let output = findLongestString ([
//   '',          'M',           '',      'y',
//   '',          ' ',           ' dad ', '',
//   'd',         'dad',         '',      'a',
//   '',          'd',           '',      ' ',
//   '',          'i',           '',      's',
//   '',          ' ',           ' a ',   '',
//   'a',         'a racecar a', '',      ' ',
//   ' racecar ', '',            'r',     'racecar',
//   '',          'a',           'aceca', '',
//   'c',         'cec',         '',      'e',
//   '',          'c',           '',      'a',
//   '',          'r',           '',      ' ',
//   '',          'a',           '',      't',
//   '',          'h',           '',      'l',
//   '',          'e',           '',      't',
//   ''
// ]);
//let output = reverseString("memola");
//let output = isPalindrome("madaam");


let output = findLongestPalindrome("My dad is a racecar athlete");
console.log(output); // "a racecar a"

//findLongestPalindrome("My dad is a racecar athlete");
// PROBLEM:

// Given a string, write a function changeMe which returns the same
// string but with all the words in it that are palindromes uppercased.



// Palindrome = a word that reads same forwards and backwards.

// PROBLEM
/*
* input : string
* output : string (not the same object)
* rules: 
*   Explicit requriements:
        - every palindrome in the string must be converted to uppercase.
        - Palindromes are case-sensitive (Dad is not palindrome, but dad is)
    Implicit Requirement:
        - if the string is empty string, result should also be an empty string
*/

// EXMAPLES
// changeMe("We will meet at noon") === "We will meet at NOON"
// changeMe("No palindromes here") === "No palindromes here"
// changeMe("") === ""
// changeMe("I LOVE my mom and dad equally") === "I LOVE my MOM and DAD equally"

// DATA STRUCTURE



// ALGORITHM:
//  - declare a result variable and initialize it to an empty array
//  - create an array named substrArray that contains all of the
//    substrings of the input string that are at least 2 characters long.
//  - implementation of the substrArray function:
//      - for each starting index from 0 to n-1 position
//          - for each substring from length 2 till no more substrings left
//          - extract the substring and insert it into substrArray 
//          - end of inner loop
//      - end of outer loop
//  - loop through the words in the substrArray array.
//  - if the word is a palindrome, append it to the result
//    array
//  - return the result array


// implementing the substrings(str) function
function substrings(str) {
    let substringArr = [];
    for (let index = 0; index < str.length - 1; index++) {
        let subIndexStart = index;
        let subIndexEnd = index + 1;
        while (subIndexEnd < str.length ) {
            let substring = str.slice(subIndexStart, subIndexEnd + 1);
            substringArr.push(substring);
            subIndexEnd += 1; 
        }   
    }
    return substringArr;
}

function isPalindrome(str) {
    let strArray = str.split('');
    let status = true;
    // check for even/odd length of the array
    let strLength = strArray.length;
    //console.log("this is the length if string ", strLength);
    let middleIndex = parseInt(strLength / 2);
    //console.log("this is the middleIndex ", middleIndex);
    for (let index = 0; index <  middleIndex; index ++) {
        //console.log("the values to be compared are " , str[index] , " and " , str[strLength -1 -index]);
        if (str[index] !== str[strLength - 1 - index]) status = false;
    }
    //console.log("The status of palindrome is " , status);
    if (status) return str;
}



function palindromeSubstrings(str) {
    let result = [];
    let substringsArr = substrings(str);

    substringsArr.forEach(substring => {
        if (isPalindrome(substring)) {
            result.push(substring);
        }
    });
    return result;
}

function changeMe(str) {
    if (!str) {
        return "";
    }
    let strArray = str.split(' ');
    let palindromes = palindromeSubstrings(str);

    for (let index = 0; index < strArray.length; index++) {
        if (palindromes.includes(strArray[index])) {
            strArray[index] = strArray[index].toUpperCase();
        }
    }
    return strArray.join(' ');
}


console.log(changeMe("No palindromes here"));
console.log(changeMe("We will meet at noon"));
console.log(changeMe("I LOVE my mom and Dad equally"));
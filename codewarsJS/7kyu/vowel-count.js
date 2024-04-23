/*
DESCRIPTION:
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/

//SOLUTION:

function getCount(str) {
    let primer = 'aeiou';
    let result = 0;
    for(let i = 0; i < str.length; i++){
      if(primer.indexOf(str[i]) != -1){
        result++;
      }
    }
    return result;
  }
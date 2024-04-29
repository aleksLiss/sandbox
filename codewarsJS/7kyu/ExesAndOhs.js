/*
DESCRIPTION:

Check to see if a string has the same amount of 'x's and 'o's. 
The method must return a boolean and be case insensitive. 
The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false



SOLUTION:
*/

function XO(str) {
  
    let setX = "";
    let setO = "";
    
    for(let i = 0; i < str.length; i++){
      let letter = str[i].toLowerCase();
      if(letter.codePointAt() === 111){
        setO += letter;
      }else if(letter.codePointAt() === 120){
        setX += letter;
      }
    }
    return setX.length == setO.length ? true: false;
  }
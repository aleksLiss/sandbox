/*
DESCRIPTION:

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.


SOLUTION:
*/

function findShort(s){
    let arr = s.split(' ');
    let min = 99_999;
    
    for(let i = 0; i < arr.length; i++){
      if(arr[i].length < min){
        min = arr[i].length;  
      }
    }
    return min;
  }
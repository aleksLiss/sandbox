/*
DESCRIPTION:

Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. 
Essentially, rearrange the digits to create the highest possible number.

Examples:

Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321


SOLUTION:
*/

function descendingOrder(n){
    let str = String(n);
    let arr = new Array();
    let res = "";
    for(let i = 0; i < str.length; i++){
      arr.push(str[i]);  
    }
    arr.sort((a, b) => b-a);
    for(let i = 0; i<arr.length;i++){
      res += arr[i];    
    }
    return Number(res); 
  }
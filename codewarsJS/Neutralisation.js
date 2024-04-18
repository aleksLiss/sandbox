function neutralise(s1, s2) {
    let res = "";
    for(let i = 0; i < s1.length; i++){
      let s = "";
      if(s1[i] == '+' && s2[i] == '+'){
        s = "+";      
      } else if(s1[i] == '-' && s2[i] == '-'){
        s = "-";
      } else{
        s = "0";
      }
      res += s;  
    }
    return res;
  }
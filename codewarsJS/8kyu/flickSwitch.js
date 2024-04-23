function flickSwitch(arr){
    if(arr.length === 0){
      return [];
    }else{
      let resultArray = new Array();
      let flag = 0;
      for(let i = 0; i < arr.length; i++){
        if(arr[i] == 'flick' &&  flag === 0){
          flag += 1;   
        }else if (arr[i] == "flick" && flag >= 1){
          flag = 0;      
        }
        if(flag > 0){
          resultArray[i] = false;     
        }else{
          resultArray[i] = true;
        }
    }
    return resultArray;
  }
};
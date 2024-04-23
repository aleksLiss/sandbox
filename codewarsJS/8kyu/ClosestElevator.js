function elevator(left, right, call){
    let l = call - left;
    let r = call - right;
    
    if(l < 0){
      l *= -1;
    }
    if(r < 0){
      r *= -1;
    }
    if(l < r){
      return "left";
    }else{
      return "right";
    }
}
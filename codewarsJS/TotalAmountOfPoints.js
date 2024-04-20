function points(games) {
    let result = 0;
    for(let i = 0; i < games.length; i++){
      let x = Number(games[i][0]);
      let y = Number(games[i][2]);
      if(x > y){
        result += 3;
      }else if(x === y){
        result += 1;
      }
    }
    return result;
  }
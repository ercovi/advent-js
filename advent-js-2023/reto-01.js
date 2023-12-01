function findFirstRepeated(gifts) {
    const empty = [];
    for(let i = 0; i<gifts.length;i++){
      if(empty.includes(gifts[i])){
        return gifts[i];
      }
      empty.push(gifts[i])
    }
    return -1
  }
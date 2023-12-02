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

// RESULTS
// Puntos conseguidos: 250
// 3373 ops/s (Más alto es mejor)
// Complejidad cognitiva: 3 (Más bajo es mejor)

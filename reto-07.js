function getGiftsToRefill(a1, a2, a3) {
  const a1unique = [...new Set(a1)],
        a2unique = [...new Set(a2)],
        a3unique = [...new Set(a3)],
        toRefill = [];
        
  
  a1unique.forEach((gift) => {
    if(!a2unique.includes(gift) && !a3unique.includes(gift)){
      toRefill.push(gift);
    }
  })
  a2unique.forEach((gift) => {
    if(!a1unique.includes(gift) && !a3unique.includes(gift)){
      toRefill.push(gift);
    }
  })
  a3unique.forEach((gift) => {
    if(!a1unique.includes(gift) && !a2unique.includes(gift)){
      toRefill.push(gift);
    }
  })
  
  return toRefill;
}

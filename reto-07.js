function getGiftsToRefill(a1, a2, a3) {
  const uniques = [...new Set([...a1, ...a2, ...a3])],
        toRefill = [];

  uniques.filter((gift) => {
    // suma de trues (true = 1)
    //Per tant, si entre tots els regals només n'hi ha un que torni 1, aquest és el que només està a un magatzem i és el que hem de reemplenar
    if(a1.includes(gift) + a2.includes(gift) + a3.includes(gift) === 1) {
      toRefill.push(gift)
    }
  })
  
  return toRefill;
}

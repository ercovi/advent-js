const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

function manufacture(gifts, materials) {
  const giftsAvailable = []

  const splitted = gifts.map(gift => {
    const giftLetters = gift.split('');
    let included = true;
    giftLetters.forEach((letter, i) => {
      if(!included) return
      if(!materials.includes(letter)){
        included = false;
        return
      }
    })
    if(included) giftsAvailable.push(gift)
  })
  return giftsAvailable
}

manufacture(gifts, materials)

// Puntos conseguidos: 240
// 2628 ops/s (Más alto es mejor)
// Complejidad cognitiva: 6 (Más bajo es mejor)

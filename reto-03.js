function distributeGifts(packOfGifts, reindeers) {
  let giftsWeight = 0,
    reindeersMaximum = 0;
  
  packOfGifts.forEach((gift) => {
    giftsWeight += gift.length
  })
  
  reindeers.forEach((reindeer) => {
    reindeersMaximum += reindeer.length * 2
  })
  
  return Math.floor(reindeersMaximum / giftsWeight)
}

function wrapping(gifts) {
  const wrap = [];
  gifts.forEach((gift) => {
    const paper = '*'.repeat(gift.length+2);
    wrap.push(`${paper}\n*${gift}*\n${paper}`);
  })
  return wrap;
}

function decode(message) {
  if(!message.includes('(') || !message.includes(')')) return;

  const parts = [];
  let endingResult = '';
  
  const reverseWord = (word) => word.split('').reverse().join('');

  for (let i = 0; i < message.length; i++) {
    const char = message[i];
    
    if (char === '(') {
      parts.push(endingResult);
      endingResult = '';
    } else if (char === ')') {
      const lastArrayChar = parts.pop()
      endingResult = lastArrayChar + reverseWord(endingResult);
    } else {
      endingResult += char;
    }
  }

  return endingResult;
} 
decode('sa(u(cla)atn)s')

// Puntos conseguidos: 220
// 2210 ops/s (Más alto es mejor)
// Complejidad cognitiva: 8 (Más bajo es mejor)

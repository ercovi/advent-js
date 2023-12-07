function decode(message) {
  if(!message.includes('(') || !message.includes(')')) return;

  const parts = [];
  let endingResult = '';
  
  const reverseWord = (word) => word.split('').reverse().join('');

  for (let i = 0; i < message.length; i++) {
    const char = message[i];
    console.log({char})
    
    if (char === '(') {
      parts.push(endingResult);
      endingResult = '';
    } else if (char === ')') {
      console.log({parts}, {endingResult})
      const lastArrayChar = parts.pop()
      endingResult = lastArrayChar + reverseWord(endingResult);
      console.log({parts}, {endingResult})
    } else {
      endingResult += char;
      console.log({endingResult})
    }
  }

  return endingResult;
} 
decode('sa(u(cla)atn)s')

// Puntos conseguidos: 10
// 578 ops/s (Más alto es mejor)
// Complejidad cognitiva: 8 (Más bajo es mejor)
// 1 usos de console detectados
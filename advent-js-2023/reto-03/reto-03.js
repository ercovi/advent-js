const original = 'stepfor'
const modified = 'stepor'

function findNaughtyStep(original, modified) {
  if(original === modified) return '';
  
  const originalChars = original.split('');
  const modifiedChars = modified.split('');
  
  if(original.length > modified.length){
    return originalChars.filter((char, i) => char !== modifiedChars[i])[0]
  } else {
    return modifiedChars.filter((char, i) => char !== originalChars[i])[0]
  }
}

findNaughtyStep(original, modified);

// Puntos conseguidos: 250
// 2684 ops/s (Más alto es mejor)
// Complejidad cognitiva: 5 (Más bajo es mejor)

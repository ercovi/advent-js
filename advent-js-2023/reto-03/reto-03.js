const original = 'stepfor'
const modified = 'stepor'

function findNaughtyStep(original, modified) {
  if(original === modified) return '';

  if(original.length > modified.length){
    const originalChars = original.split('');
    return originalChars.filter((char, i) => char !== modified[i])[0]
  } else {
    const modifiedChars = modified.split('');
    return modifiedChars.filter((char, i) => char !== original[i])[0]
  }
}

findNaughtyStep(original, modified);

// Puntos conseguidos: 250
// 2950 ops/s (Más alto es mejor)
// Complejidad cognitiva: 5 (Más bajo es mejor)

const original = 'stepfor'
const modified = 'stepor'

function findNaughtyStep(original, modified) {
  if(original === modified) return '';

  if(original.length > modified.length){
    return original?.split('')?.filter((char, i) => char !== modified[i])[0]
  }
  else return modified?.split('')?.filter((char, i) => char !== original[i])[0]
}

findNaughtyStep(original, modified);

// Puntos conseguidos: 350
// 3150 ops/s (Más alto es mejor)
// Complejidad cognitiva: 5 (Más bajo es mejor)

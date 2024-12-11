function prepareGifts(gifts) {
    const uniqueGifts = new Set([...gifts]);
    return Array.from(uniqueGifts).sort((a, b) => a - b)
}


// RESULTS
// Puntos conseguidos: 5 estrellas
//2117 ops/s (Más alto es mejor)
//Complejidad cognitiva: 2 (Más bajo es mejor)

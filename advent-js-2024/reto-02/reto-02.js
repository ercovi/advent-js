function createFrame(names) {
    const largestName = Math.max(...names.map(name => name.length));
    //console.log({largestName})
    const yBorderLength = largestName + 4;
    //console.log({yBorderLength})
    const border = '*'.repeat(yBorderLength);
    //console.log({border})
    const namesWithAsterisk = names.map(name => {
      //const distance = yBorderLength - name.length;
      //console.log({distance})
      //const stringWithSpaces = name.padEnd(distance, ' ');
      const stringWithSpaces = name.padEnd(largestName, ' ');
      console.log({stringWithSpaces})
      return `* ${stringWithSpaces} *`;
      
    });
  
    return [border, ...namesWithAsterisk, border].join('\n');
}

// RESULTS
// Puntos conseguidos: 5 estrellas
//1898 ops/s (Más alto es mejor)
//Complejidad cognitiva: 3 (Más bajo es mejor)
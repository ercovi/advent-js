function cyberReindeer(road, time) {
  const timeline = [road];
  let iteration = 1;
  let lastChar = '';
  
  const sentence = road.split('');

  for(let i = 0; i < time - 1; i++ ){
    console.log(road[i], road[iteration-1], lastChar,  lastChar === "|")
    if(road[iteration] === '|'){
      if(i > 3){
        sentence[iteration] = 'S';
        sentence[iteration - 1] = '.';
        
        const barriers = sentence.filter(char => char === '|');

        if(barriers.length > 0){
          sentence.forEach((char, i) => sentence[i] === '|' ? sentence[i] = '*' : char = '');
        }
        timeline.push(sentence.join(''));
        iteration++;
      } else {
        timeline.push(sentence.join(''));
      }
    } else if(road[iteration] === '.') {
      sentence[iteration] = 'S';
      if(lastChar === "|") sentence[iteration - 1] = '*';
      else sentence[iteration - 1] = '.';
      timeline.push(sentence.join(''));
      iteration++;
    }
    
    lastChar = road[iteration-1];

  }
  
  return timeline;
}


cyberReindeer('S.||.|..', 10)
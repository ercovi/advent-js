function cyberReindeer(road, time) {
    const timeline = [];
    let iteration = 0;
    let counter = 0;
    
    const sentence = road.split('');
    const timer = setInterval(() => {
      
      if(road[iteration] === '|'){
        if(counter > 4){
          sentence[iteration] = 'S';
          sentence[iteration - 1] = '*';
  
          const barriers = sentence.filter(char => char === '|');
  
          if(barriers.length > 0){
            sentence.forEach((char, i) => sentence[i] === '|' ? sentence[i] = '*' : char = '');
          }
          timeline.push(sentence.join(''));
        } else {
          counter++;
          return
        }
      } else if(road[iteration] === '.') {
        sentence[iteration] = 'S';
        sentence[iteration - 1] = '.';
        timeline.push(sentence.join(''));
      }
      
      if(counter === time) {
        clearInterval(timer);
        return timeline;
      }
      iteration++;
      counter++;
    }, 1000)
  }
  
  
  cyberReindeer('S..|...|..', 10)
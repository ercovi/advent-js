function decode(message) {
    if(!message.includes('(') || !message.includes(')')) return;
    
    const words = message.split(' ');
    console.log({words})
    const reverseWord = (word) => word.split('').reverse().join('');
    
    let sentence = '';
    words.forEach((word, i) => {
      // console.log({word})
      if(word.includes('(')){     
        const open = message.indexOf('(') + 1;
        const close = message.indexOf(')');
        const open2 = message.lastIndexOf('(') + 1;
        const close2 = message.lastIndexOf(')');
        
        const sliced = i == 0 ? message.slice(open, close) : message.slice(open2, close2);
        // console.log({sliced})
        // const sliced = message.substring(open, close);
        const reversed = reverseWord(sliced)
        sentence = sentence + ' ' + reversed
      } else {
        sentence = word;
      }
      
      
      // const toReverse = message.substring(open, close);
      // console.log(toReverse, sliced)
    })
    return sentence.trim()
    // const open = message.indexOf('(') + 1;
    // const close = message.indexOf(')');
    // console.log(message.substring(open, close))
  //   const split = message.split('(')
  //   const regex = /[^\w\s']/g;
  }
  
  // Paso a paso:
  // 1. Invertimos el anidado -> sa(ualcatn)s
  // 2. Invertimos el que queda -> santaclaus
  
  
  // const a = decode('hola (odnum)')
  // console.log(a) // hola mundo
  
  // const b = decode('(olleh) (dlrow)!')
  // console.log(b) // hello world!
  
  const c = decode('sa(u(cla)atn)s')
  console.log(c) // santaclaus
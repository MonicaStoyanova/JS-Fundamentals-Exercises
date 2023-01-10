function race(array) {
    let participants = array.shift().split(', ');
   
    let object = {};
   
    for (let i = 0; i < array.length; i++) {
   
      let current = array[i];
   
      if (current === 'end of race') {
          break;
        }
   
      if (current !== 'end of race') {
   
        let extracted = current.match(/\d/g).map(Number);
        let currentName = current.match(/[A-Z]+/gi).join("");
        let currentDistance = 0;
   
       extracted.forEach(x => currentDistance += x)
   
        if (participants.includes(currentName)) {
   
          if (object[currentName]) {
   
            object[currentName] += currentDistance;
          } else {
   
            object[currentName] = currentDistance;
          }
   
        }
      } 
   
    }
    let sorted = Object.keys(object).sort((a, b) => object[b] - object[a]);
    
    const first = sorted[0];
    const second = sorted[1];
    const third = sorted[2];
   
    console.log(`1st place: ${first}`);
    console.log(`2nd place: ${second}`);
    console.log(`3rd place: ${third}`);
  }
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
])
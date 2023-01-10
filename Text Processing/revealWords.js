function revealWords(words, sentance) {
    let splitedWords = words.split(', ');
    let result = sentance.split(' ');

    for (const el of result) {
        if (el.startsWith('*')) {
            let index = result.indexOf(el);
            let length = result[index].length;
            for (const w of splitedWords) {

                let replacement = w.length;
                if (replacement === length) {
                    let hidden = result[index];
                    result.splice(index, 1, w);
                    let j = splitedWords.indexOf(w);
                    splitedWords.splice(j, 1);
                    break;
                }

            }
        }
    }
    console.log(result.join(' '));
}
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages'

)

// better solution
/*
function solve(words, text) {
    const wordsToReplace = words.split(', ');
   
    for (const word of wordsToReplace) {
      text = text.replace('*'.repeat(word.length), word);
    }
    console.log(text);
  }
   
  solve(
    'great, learning',
    'softuni is ***** place for ******** new programming languages'
  );
  */
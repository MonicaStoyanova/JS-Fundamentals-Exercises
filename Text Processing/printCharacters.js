function printCharacters(word){
    for (let index = 0; index < word.length; index++) {
        const ch = word[index];
        console.log(ch);
    }
}
printCharacters('AWord')
function countStringOccurrences(sentance, word) {
    let splited = sentance.split(' ');
    let count = 0;
    for (const el of splited) {
        if (el === word) {
            count++;
        }
    }
    console.log(count);

}
countStringOccurrences('This is a word and it also is a sentence',
    'is'
)
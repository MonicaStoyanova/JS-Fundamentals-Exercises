function wordOccurrences(wordsInput) {
    let words = {};
    for (let word of wordsInput) {
        if (!words[word]) {
            words[word] = 0;
        }
        words[word]++;
    }
    let sortedWords = Object.entries(words).sort((a, b) => b[1] - a[1]);

    for (let [word, count] of sortedWords) {
        console.log(`${word} -> ${count} times`);
    }
}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])
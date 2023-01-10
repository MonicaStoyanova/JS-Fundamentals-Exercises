function charactersInRange(firstChar, secondChar) {

    let startChar = Math.min(firstChar.charCodeAt(0), secondChar.charCodeAt(0)); // ot bukva kum chislo
    let endChar = Math.max(firstChar.charCodeAt(0), secondChar.charCodeAt(0));

    let charsInRangeArray = []; // moje i v string no iskame da uprajnim masivi

    for (let current = startChar + 1; current < endChar; current++) {
        let currentChar = String.fromCharCode(current); // ot chislo kum bukva
        charsInRangeArray.push(currentChar);

    }
    console.log(charsInRangeArray.join(' '));
}
charactersInRange('a', 'd')
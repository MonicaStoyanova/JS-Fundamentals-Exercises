function searchForANumber(numbers, param) {
    let newArrayCount = param[0];
    let elementsToDelete = param[1];
    let numToseek = param[2];

    let myArray = numbers.slice(0, newArrayCount);
    let modified = myArray.splice(0, elementsToDelete);

    let count = 0;
    while (myArray.includes(numToseek)) {
        let index = myArray.indexOf(numToseek);
        myArray.splice(index, 1)
        count++;
    }
    console.log(`Number ${numToseek} occurs ${count} times.`);
}
searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3])
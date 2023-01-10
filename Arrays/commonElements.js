function commonElements(firstArr, secondArr) {

    for (const element of firstArr) {
        if (secondArr.includes(element)) {
            console.log(element);
        }

    }

}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2'])

// 
function commonElements(firstArr, secondArr) {

    for (let i = 0; i < firstArr.length; i++) {
        for (let j = 0; j < secondArr.length; j++) {
            let element = firstArr[i];
            let element2 = secondArr[j];

            if (element === element2) {
                console.log(element);
            }
        }
    }

}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2'])
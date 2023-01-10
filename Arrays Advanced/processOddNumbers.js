function processOddNumbers(numbers) {

    let filteredElements = numbers.filter((el, i) => i % 2 == 1);
    let doubled = filteredElements.map(x => x * 2);
    let reversed = doubled.reverse();
    console.log(reversed.join(' '));

}
processOddNumbers([10, 15, 20, 25])

//(numbers) => numbers.filter((el, i) => i % 2 == 1) // funkcionalno programirane resheenie tuk ni e anonimna funkciq koqto izvushva vs nujno
//    .map(x => x * 2)
//    .reverse()
//    .join(' ')
function printAndSum(a, b) {

    let sum = 0;
    let result = '';

    for (let n = a; n <= b; n++) {
        sum += n;
        result += n + " ";
    }
    console.log(result);
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10)
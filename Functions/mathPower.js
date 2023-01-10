function mathPower(number, stepen) {
    // bez da polzvame math inache math pow sushto taka moje 2**8
    let result = 1;

    for (let a = 0; a < stepen; a++) {
        result = result * number
    }
    console.log(result);
}
mathPower(2, 8)
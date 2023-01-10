function sorting(array) {

    let fromSmall = [...array] = array.sort((a, b) => a - b);
    let fromBig = [...array] = array.sort((a, b) => b - a);
    let result = [];
    let l = fromBig.length;

    for (let i = 0; i < l / 2; i++) {
        let big = fromBig[i];
        let small = fromSmall[i];

        result.push(big, small)
    }
    result.length = array.length;
    console.log(result.join(' '));
}
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47,19])
function repeatString(string, n) {

    let buff = '';

    for (let i = 0; i < n; i++) {
        buff += string;
    }
    return buff

}
console.log(repeatString("abc", 3))
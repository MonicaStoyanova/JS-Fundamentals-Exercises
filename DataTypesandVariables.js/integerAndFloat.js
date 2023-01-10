function integerAndFloat(a, b, c) {
    let res = a + b + c;
    let resToString = String(res);
    let isFloat = false;
    for (let i = 0; i < resToString.length; i++) {
        if (resToString[i] === ".") {
            isFloat = true;
        }
    }
    console.log(`${res} - ${isFloat? "Float" : "Integer"}`);
}
integerAndFloat(9, 100, 1.1)
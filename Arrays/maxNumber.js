function maxNumber(array) {

    let newArray = [];
    let arrayL = array.length;

    for (let index = 0; index < arrayL; index++) {
        let number1 = array[index];
        let isBigger = true;

        for (let j = index + 1; j < arrayL; j++) {
            let number2 = array[j];

            if (number1 <= number2) {
                isBigger = false;
            }
        }
        if (isBigger) {
            newArray.push(number1)
        }
    }
    console.log(newArray.join(' '));



}
maxNumber([1, 4, 3, 2])
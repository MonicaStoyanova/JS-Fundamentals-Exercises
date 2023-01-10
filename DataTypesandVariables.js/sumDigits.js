function sumDigits(num){

    let numString = num.toString();
    let sumOfAll = 0;

    for(let index = 0; index < numString.length; index++ ){
        let currentDigit = Number(numString[index]);
        sumOfAll += currentDigit;

    }
console.log(sumOfAll);
}
sumDigits(245678)
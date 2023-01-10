function sumEvenNumbers(numbers){
let result = 0;

    for(let i = 0; i<= numbers.length - 1; i++){
        let a = Number(numbers[i]);
if(a % 2 === 0){
    result+=a;
}
    }
console.log(result);
}
sumEvenNumbers(['2','4','6','8','10'])
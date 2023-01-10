function evenAndOddSubtraction(numbers){
    let resultEven = 0;
    let resultOdd = 0;

    for(let i = 0; i<= numbers.length - 1; i++){
        let a = Number(numbers[i]);
if(a % 2 === 0){
    resultEven+=a;
}else{
resultOdd += a;
}
    }
    console.log(resultEven - resultOdd);
}
evenAndOddSubtraction([2,4,6,8,10])
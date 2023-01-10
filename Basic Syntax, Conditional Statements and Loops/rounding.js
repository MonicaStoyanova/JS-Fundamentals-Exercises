function rounding(num, decimal){

    if(decimal > 15){
        decimal = 15;
    }
    let result = num.toFixed(decimal)
    console.log(parseFloat(result));
}
rounding(3.1415926535897932384626433832795,2)
function reverseAnArrayOfNumbers(n, numbers){
let result = [];
    
    for(let r = n -1; r >=0; r--){
result.push(numbers[r])
    }
    console.log(result.join(' '));
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])
// obqsneniq ot lekciqta - includes kak raboti otdolufunction solve(arr, value){

let myArr = [10, 20, 30, 40, 50, 60, 70];

let res = mySlicer(myArr, 2 , 4);
let res2 = myArr.slice(2,4)
console.log(res);

console.log(myIncludes(myArr, 20));
console.log(myIncludes(myArr, -20));
console.log(myArr.includes(20));
console.log(myArr.includes(-20));
+
console.log(myIndexOf(myArr, -100));
console.log(myIndexOf(myArr, 40));


function myIncludes(arr, value) {
    for (let el of arr) {
        if (el === value) {
            return true;
        }
    }
    return false;

}

// razpiswame indexOf

function myIndexOf(arr, value){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === value){
            return i
        }
    }
    return -1
}

// slice trqbva da imame i edna proverka dali podadenite start i end sa pozitivni chisla tui kato s otricatelni ne raboti as intended
function mySlicer(arr, startIndex, endIndex){
    let result = [];
    if(startIndex && endIndex){
        for(let i = startIndex; i < endIndex; i++){
            result.push(arr[i])
        }
    }else if (!startIndex && !endIndex){
        for(let el of arr){
            result.push(el);
        }
    }else if(startIndex && !endIndex){
        for(let i = startIndex; i< arr.length; i++){
            result.push(arr[i]);
        }
    }
    return result
}
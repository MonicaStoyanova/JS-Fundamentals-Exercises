function addAndSubtract(first, second, third) {

    let sum = (first, second) => {
        return first + second;
    };

    let subtract = (sumOfTwo, thirdNum) => {
        return sumOfTwo - thirdNum;
    };
    let sumOfTwo = sum(first, second);
    let finalResult = subtract(sumOfTwo, third);

    console.log(finalResult);


    //    let sumOfTwo = sum(first, second);
    //    let finalResult = subtract(sumOfTwo, third)
    //    console.log(finalResult);
    //
    //    function sum(first, second) {
    //        return first + second;
    //    }
    //
    //    function subtract(sumOfTwo, thirdNum) {
    //        return sumOfTwo - thirdNum
    //    }
    //
}
addAndSubtract(23, 6, 10)
function factorialDivision(n, d) {

    if (n === 0 || n === 1 || d === 0 || d === 1) {
        console.log(1);
    }
    let resultN = 1;
    for (let a = 1; a <= n; a++) {
        resultN = resultN * a;
    }
    let resultD = 1;
    for (let b = 1; b <= d; b++) {
        resultD = resultD * b;
    }

    let final = resultN / resultD;
    console.log(final.toFixed(2));

}
factorialDivision(6, 2);

//function factorialDivision(firstNum, secondNum) {
//    return (factorial(firstNum) / factorial(secondNum)).toFixed(2);

//   function factorial(num) {
//       let factorial = 1;
//       for (let i = 1; i <= num; i++) {
//           factorial *= i;
//      }
//      return factorial;
//  }
//}
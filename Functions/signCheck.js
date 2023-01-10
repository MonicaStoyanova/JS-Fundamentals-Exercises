function signCheck(a, b, c) {

  let arr = [];
  arr.push(a, b, c);
  let negativeCounter = 0;


  for (let el of arr) {
    if (el >= 0 || el === 1) {
      continue;
    } else if (el < 0) {
      negativeCounter++;
    }
  }

  if (negativeCounter % 2 === 0 || negativeCounter === 0) {
    console.log('Positive');
  } else {
    console.log('Negative');
  }
}
signCheck(0, 1, 2)
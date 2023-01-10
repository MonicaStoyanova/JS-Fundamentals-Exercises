function arrays(arr1, arr2) {
  const firstArr = arr1;
  const secondArr = arr2;

  let sum = 0;
  let arraysAreEqual = true;

  for (let i = 0; i < firstArr.length; i++) {

    if (firstArr[i] !== secondArr[i]) {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      arraysAreEqual = false;
      break;
    }
    sum += Number(firstArr[i]);
  }

  if (arraysAreEqual) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}

arrays(["10", "20", "30"], ["10", "20", "30"]);
arrays(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
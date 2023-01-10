function arrayManipulations(array) {

    let myArray = array.shift().split(' ').map(Number);

    for (let i = 0; i < array.length; i++) {
        let [currentCommand, value, secondValue] = array[i].split(" ");

        if (currentCommand === "Add") {
            myArray.push(Number(value));

        } else if (currentCommand === "Remove") {
            myArray = myArray.filter(item => item !== Number(value));

        } else if (currentCommand === "RemoveAt") {
            myArray.splice(Number(value), 1);

        } else if (currentCommand === "Insert") {
            myArray.splice(Number(secondValue), 0, Number(value));
        }
    }
    console.log(myArray.join(' '));

}
arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'
])
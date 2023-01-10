function convertToJSON(name, lastName, hairColor){
let result = {
    name,
    lastName,
    hairColor,
}
let resultAsString = JSON.stringify(result);
console.log(resultAsString);
}
convertToJSON('George', 'Jones', 'Brown')
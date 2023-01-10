function app(prop){
let person = {name: 'Peter', age: 20};
person.sayHello = () => console.log('Hi, guys');

let keys = Object.keys(person);
console.log(person[keys[1]]); // tova e interesnoto tuk

}
app('name')


// iteraciq po obekt
for(let key of Object.keys(person)){
    console.log(key);
    console.log(person[key]) // sushtoto kato person['name'] -> Peter // person['age'] -> 20
}


function primer(data){
    let phoneBooks = new Map();

    for(let line of data){
        let [name, phoneNumber] = line.split(' ');
        phoneBooks.set(name, phoneNumber)
    }
    for(let key of phoneBooks.keys()){
        console.log(key, '->', phoneBooks.get(key));
    }
}primer(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'
])
//------------------------------
function solve(){
    let myMap = new Map();

    myMap.set('name', 'Monica');

    console.log(myMap.has('name'));
    myMap.set('age', 30);
    myMap.delete('name');
    myMap.clear();
    myMap.set('weight',39)
    console.log(Array.from(myMap.keys()));
}solve()
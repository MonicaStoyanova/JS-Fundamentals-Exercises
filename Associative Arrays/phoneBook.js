function phoneBook(data) {
    let contacts = {};

    for (const line of data) {
        let tokens = line.split(' ');
        let name = tokens[0];
        let phoneNumber = tokens[1];
        contacts[name] = phoneNumber;
    }
    for (const key in contacts) {
        console.log(key, '->', contacts[key]);
    }
}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
])
function personInfo(firstName, lastName, age) {
    let res = {};
    res.firstName = firstName;
    res.lastName = lastName;
    res.age = age;
    return res

}
personInfo("Peter",
    "Pan",
    "20"
)


//another way of solving

let res2 = {
    firstName: firstName,
    lastName: lastName,
    age: age,

}
//another way
let res3 = {
    firstName,
    lastName,
    age,

}

// another way
return {
    firstName,
    lastName,
    age,
};

let myobject = personInfo('Peter', 'Pan', '20')
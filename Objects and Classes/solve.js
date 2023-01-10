function myFirstObj() {
    let myObj = {
        "name": 'Monica',
         // moje name i age da ne sa v kavichki nqma znachenie, te vinagi 'otdolu' sa si stringove
        'age': 29, 
        // ako go poglednem kato masiv, Monica se namira na index name
        // moje da se izpulnqwat i funkcii koito sa zakacheni kato propartita na obekta
        // funkciqta nqma ime zashtoto kato reshim da q polzwame shte izvikame kliucha - sayHello
        sayHello: function() { 
           
            console.log("Hello")
        }
    }
    myObj.town = "Sofia" // procheti redovete sled kraq na funkciqta
    let key = 'name';
    console.log(myObj);
    console.log(myObj.name); // vlez obekta i na kliucha name mi dai stoinostta TOZI E NAI CHESTO IZPOLZWANIQ SINTAKSIS
    console.log(myObj['name']); // vtori nachin za dostupvane na stoinostta Monica; kliucha se podava kato string
    console.log(myObj[key]); // taka sushto shte otpechata Monica
    console.log(myObj.name, myObj.age);
    console.log(myObj['sayHello']);

    myObj.name = 'Marissa'; // mojem da podmenqme stoinostite
    console.log(myObj.name);

}
myFirstObj()

// mojem da dobavqme propartita dinamichno, demek ne e nujno da se vurnem v obekta i da dobavim town naprimer(no e vuzmojno);
// vuv vurveja na koda mojem da napishem myObj.town = "Sofia"

//name, age sa propartita   , a funkciqta v obekt se naricha metod
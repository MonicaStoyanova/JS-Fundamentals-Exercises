function matchNames(input){

    let pattern = /\b[A-Z]{1}[a-z]+ [A-Z]{1}[a-z]+\b/g;
    /*
    let names = input.match(pattern);
    console.log(names.join(' '));
    */
    let validNames = [];
   
    while((validName = pattern.exec(input))!== null){
        validNames.push(validName[0]);
    }
    console.log(validNames.join(' '));
}
matchNames("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")
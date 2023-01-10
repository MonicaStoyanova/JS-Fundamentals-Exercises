function loadingBar(number){
    let completed = '%'.repeat(number /10);
    let incomplete = '.'.repeat(10 - completed.length);

    if(number == 100){
        console.log(`${number}% Complete!`);
    }else{
        console.log(`${number}% [${completed}${incomplete}]`);
        console.log('Still loading...');
    }

}
loadingBar(30)
function echoType(par){

    let a = typeof (par);
    console.log(a);
    if(a === "string" || a ==="number"){

console.log(par);
    }else {
        console.log('Parameter is not suitable for printing');

    }

}echoType(18)
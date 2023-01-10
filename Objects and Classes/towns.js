function towns(input){
    let currentTown ={};

    for (const city of input){
        let cityElements = city.split(' | ');
        let townName = cityElements[0];
        let townLatitude = Number(cityElements[1]);
        let townLon = Number(cityElements[2]);
        currentTown.town = townName;
        currentTown.latitude = townLatitude.toFixed(2);
        currentTown.longitude = townLon.toFixed(2);
        console.log(currentTown);
    }

}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])
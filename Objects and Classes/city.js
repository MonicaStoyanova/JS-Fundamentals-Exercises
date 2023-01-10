function city(cityInfo) {
    for (let key of Object.keys(cityInfo)) { // returns array [name,area,population,country,postcode]
        console.log(`${key} -> ${cityInfo[key]}`);
    }
}
city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})
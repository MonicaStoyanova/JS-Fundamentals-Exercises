function orders(drink, quantity) {
    let price;

    switch (drink) {
        case 'water':
            price = 1;
            break;
        case 'coffee':
            price = 1.50;
            break;
        case 'coke':
            price = 1.40;
            break;
        case 'snacks':
            price = 2;
            break;
    }

    console.log((price * quantity).toFixed(2));

}
orders("water", 5)
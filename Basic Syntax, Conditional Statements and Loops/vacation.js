function vacation(peopleCount, type, day) {

    let price = 0;
    switch (type) {
        case 'Students':
            if (day === 'Friday') {
                price = 8.45 * peopleCount;
            } else if (day === 'Saturday') {
                price = 9.80 * peopleCount;
            } else if (day === 'Sunday') {
                price = 10.46 * peopleCount;
            }
            if (peopleCount >= 30) {
                price = price * 0.85;
            }
            break;
        case 'Business':
            if (peopleCount >= 100) {
                peopleCount = peopleCount - 10;
            }
            if (day === 'Friday') {
                price = 10.90 * peopleCount;
            } else if (day === 'Saturday') {
                price = 15.60 * peopleCount;
            } else if (day === 'Sunday') {
                price = 16 * peopleCount;
            }

            break;
        case 'Regular':
            if (day === 'Friday') {
                price = 15 * peopleCount;
            } else if (day === 'Saturday') {
                price = 20 * peopleCount;
            } else if (day === 'Sunday') {
                price = 22.50 * peopleCount;
            }
            if (peopleCount >= 10 && peopleCount <= 20) {
                price = price * 0.95;
            }
            break;
           

    }

    console.log(`Total price: ${price.toFixed(2)}`);
}
vacation(40,
    "Regular",
    "Saturday"

)
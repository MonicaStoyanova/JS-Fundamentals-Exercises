function solve(currentStock, orderedStock) {

    let res = {}; 
    let l = currentStock.length; 
    for (let i = 0; i < l; i+=2) {
            let stock = currentStock[i];   
            let q = currentStock[i + 1]; 
            res[stock] = Number(q); 
    }

    for (let i = 0; i < orderedStock.length; i+=2) {
            let stock = orderedStock[i];
            let q = orderedStock[i + 1]; 
            if (res.hasOwnProperty(stock)) { 
                res[stock] += Number(q);
            } else {   
                res[stock] = q;
                // V REZ MI ZAPAZI KLUCH KOITO SE PRIEMA OT STOCK KOITO E PROMENLIWA PO NAGORE, TOZI KLIUCH '=' SHTE IMA STOINOST Q, KOQTO SUSHTO E PROMENLIWA PO GORE
            }
    }
    for (const key in res) {
        console.log(`${key} -> ${res[key]}`);
    }

}
solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
], [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
])
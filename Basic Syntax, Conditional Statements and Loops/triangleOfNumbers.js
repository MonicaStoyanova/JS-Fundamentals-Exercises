function triangleOfNumbers(n) {

    for (let i = 1; i <= n; i++) {
        let stars = '';
        for (let j = 1; j <= i; j++) {


            stars += `${i} `;
        }
        console.log(stars);

    }
}
triangleOfNumbers(5)
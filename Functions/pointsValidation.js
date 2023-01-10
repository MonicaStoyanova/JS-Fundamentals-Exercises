function pointsValidation(array) {

    let x1 = Number(array[0]);
    let y1 = Number(array[1]);
    let x2 = Number(array[2]);
    let y2 = Number(array[3]);
    let b1 = 0;
    let e2 = 0;

    let distance1To0 = Math.sqrt((b1 - x1) * (b1 - x1) + (e2 - y1) * (e2 - y1));
    if (Number.isInteger(distance1To0)) {
        console.log(`{${x1}, ${y1}} to {${b1}, ${e2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${b1}, ${e2}} is invalid`);
    }

    let distance2To0 = Math.sqrt((b1 - x2) * (b1 - x2) + (e2 - y2) * (e2 - y2));
    if (Number.isInteger(distance2To0)) {
        console.log(`{${x2}, ${y2}} to {${b1}, ${e2}} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {${b1}, ${e2}} is invalid`);
    }

    let distanceBetweenPointsXY = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    if (Number.isInteger(distanceBetweenPointsXY)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}
pointsValidation([2, 1, 1, 1])
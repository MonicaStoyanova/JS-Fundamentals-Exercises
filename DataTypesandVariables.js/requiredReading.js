function requiredReading(pagesPerBook, pagesPerHour, days){

    let bookTime = pagesPerBook / pagesPerHour;
    let neededHoursPerDay = bookTime / days;

    console.log(neededHoursPerDay);
}
requiredReading(212,
    20 ,
    2 
    )
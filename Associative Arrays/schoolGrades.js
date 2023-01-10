function schoolGrades(data) {
    let result = new Map();
    for (let line of data) {
        let tokens = line.split(' ');

        let name = tokens.shift();
        let setOfGrades = tokens;

        if (!result.has(name)) {
            result.set(name, setOfGrades)
        } else {
            let oldSet = result.get(name);
            for (let grade of setOfGrades) {
                oldSet.push(grade);
            }
            result.set(name, oldSet);
        }
    }
    let sortEntries = Array.from(result.entries()).sort(([keyA], [keyB]) => {
        return keyA.localeCompare(keyB)
    });
    for (let [k, v] of sortEntries) {
        let sumGrade = 0;
        for (grade of v) {
            sumGrade += Number(grade);
        }
        let avg = sumGrade / v.length;
        console.log(`${k}: ${avg.toFixed(2)}`);
    }
}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
])
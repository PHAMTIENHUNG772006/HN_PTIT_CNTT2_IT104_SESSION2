let student = {
    name: "Dev",
    age: 20,
    listMonhoc: [
        {subject: "Math", score : 9},
        {subject: "English", score : 7.5},
        {subject: "physics", score : 6},
        {subject: "Literature", score : 8.5},
    ]
}

let listSubject = student.listMonhoc;

let result = listSubject.reduce((sum, itemp) => sum + itemp.score, 0)


let averageScore = result / listSubject.length;

listSubject.sort((a,b) => a.score - b.score);

let lengths = listSubject.length


console.log(`${student.name} is ${student.age} years old
    Averge score : ${averageScore}
    Best Subject :  ${listSubject[lengths - 1].score}
    Weakest Subject : ${listSubject[0].score}
    `);

    


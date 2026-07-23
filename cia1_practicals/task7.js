const students = [
    { id: 101, name: "Shrayana", marks: 95 },
    { id: 102, name: "Bob", marks: 35 },
    { id: 103, name: "Alice", marks: 88 },
    { id: 104, name: "David", marks: 99 },
    { id: 105, name: "Eve", marks: 70 }
];

for (let i = 0; i < students.length; i++) {
    if (students[i].marks < 40) {
        continue;
    }

    if (students[i].marks >= 99) {
        break;
    }

    console.log(students[i].id, students[i].name, students[i].marks);
}

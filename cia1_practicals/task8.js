const students = [
    { id: 101, name: "Alice", marks: 88 },
    { id: 102, name: "Bob", marks: 62 },
    { id: 103, name: "Charlie", marks: 90 }
];

students.push({ id: 104, name: "Shrayana", marks: 98 });
console.log("Total students:", students.length);

let highestStudent = students[0];

for (let i = 1; i < students.length; i++) {
    if (students[i].marks > highestStudent.marks) {
        highestStudent = students[i];
    }
}

console.log("Highest:", highestStudent.name, highestStudent.marks);

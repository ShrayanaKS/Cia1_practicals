let students = [
    { id: 101, name: "Shrayana", marks: 98 },
    { id: 102, name: "Alice", marks: 88 },
    { id: 103, name: "Bob", marks: 62 },
    { id: 104, name: "Charlie", marks: 74 }
];

const removedStudent = students.pop();
console.log("Removed:", removedStudent);

students.sort((a, b) => b.marks - a.marks);

console.log("Sorted:", students);

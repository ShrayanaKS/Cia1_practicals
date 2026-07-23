let studentName = "Shrayana";
let studentMarks = 85;
let passingMarks = 40;
let distinctionMarks = 75;

console.log(studentName, studentMarks);

if (studentMarks >= distinctionMarks) {
    console.log("Pass with Distinction");
} else if (studentMarks >= passingMarks) {
    console.log("Pass");
} else {
    console.log("Fail");
}

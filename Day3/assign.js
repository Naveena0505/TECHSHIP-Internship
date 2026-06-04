const students = [
    {id: 111,name: "Evelin",age: 20,course: "BCA",marks: [75, 80, 60, 85, 90]},
    {id: 112, name: "Anna", age: 21,course: "BSc CS",marks: [50, 66, 65, 70, 80]},
    {id: 113, name: "Janet",age: 21, course: "BTech CSE",marks: [90, 95, 92, 88, 91]},
    {id: 114,name: "Kelna",age: 22,course: "BTech CSE",marks: [75, 70, 68, 72, 80]},
    {id: 115,name: "Diya",age: 21,course: "BCom",marks: [78, 80, 75, 82, 79]}
];
// Calculate average for each student
const studentAverages = students.map(student => {
    const total = student.marks.reduce(
        (sum, mark) => sum + mark,
        0
    );
    const average = total / student.marks.length;
    return {
        ...student,
        average: average
    };
});
// Students scoring above 75%
const topStudents = studentAverages.filter(
    student => student.average > 75
);
// Find top performer
const topper = studentAverages.reduce(
    (highest, student) =>
        student.average > highest.average
            ? student
            : highest
);
console.log("=================================");
console.log("STUDENT MANAGEMENT REPORT");
console.log("=================================");
// Display all students with report
studentAverages.forEach(student => {
    let status;
    if (student.average >= 80) {
        status = "Excellent";
    } else if (student.average >= 70) {
        status = "Good";
    } else {
        status = "Needs Improvement";
    }
    console.log(`ID: ${student.id}
Name: ${student.name}
Course: ${student.course}
Average Marks: ${student.average.toFixed(2)}
Status: ${status}`);
});
// Students above 75%
console.log("---------------------------------");
console.log("Students Scoring Above 75%:");

topStudents.forEach(student => {
    console.log(
        `${student.name} - ${student.average.toFixed(2)}`
    );
});
// Top performer
console.log("---------------------------------");
console.log(`Top Performer: ${topper.name}`);
console.log(`Highest Mark: ${topper.average.toFixed(2)}`);
console.log("=================================");
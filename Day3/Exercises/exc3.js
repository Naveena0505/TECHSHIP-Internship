const students = [
    "Janet",
    "Jeeva",
    "Kelna",
    "Milin",
    "Nourin",
    "Evelin",
    "Lakshmi",
    "Merin",
    "Joseph",
    "Sandra"
];
console.log("All Students:");
students.forEach(student => {
    console.log(student);
});
console.log("Total Students:", students.length);
console.log("First Student:", students[0]);
console.log("Last Student:", students[students.length - 1]);

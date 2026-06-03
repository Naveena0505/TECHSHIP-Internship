const student = {
    name: "Janet",
    course: "BTech CSE",
    age: 21
};
console.log(
`Hi, I am ${student.name}.
I am studying ${student.course}.`
);
const { name, course } = student;

console.log(name);
console.log(course);
const newStudent = {
    ...student,
    college: "ABC College"
};

console.log(newStudent);

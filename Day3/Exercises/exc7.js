const student = {
    name: "Janet Naveena",
    course: "BTech CSE",
    age: 21
};
//Template Literal
console.log(
`Hi, I am ${student.name}.
I am studying ${student.course}.`
);
//Destructuring
const { name, course } = student;
console.log(name);
console.log(course);
//Spread Operator
const newStudent = {
    ...student,
    college: "Aisat Engineering College"
};
console.log(newStudent);

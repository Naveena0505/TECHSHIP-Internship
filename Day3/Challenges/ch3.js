const employees = [
    {
        id: 123,
        name: "Jeeva",
        department: "IT"
    },
    {
        id: 234,
        name: "Kelna",
        department: "HR"
    },
    {
        id: 323,
        name: "Joseph",
        department: "IT"
    }
];
employees.forEach(employee => {
    console.log(employee.name);
});
const itEmployees =
    employees.filter(
        employee => employee.department === "IT"
    );
console.log(itEmployees);
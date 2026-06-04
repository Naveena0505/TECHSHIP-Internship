let name="Janet Naveena", roll=31, maths=80, science=90, english=95, computer=100, social=81;
let total = maths + science + english + computer + social;
let average = total / 5, percentage=average, grade;

if(average >= 90) grade = "A";
else if(average >= 80) grade = "B";
else if(average >= 70) grade = "C";
else if(average >= 60) grade = "D";
else grade = "F";

console.log("STUDENT RESULT REPORT");
console.log("Name:", name);
console.log("Roll No:", roll);
console.log("Maths:", maths);
console.log("Science:", science);
console.log("English:", english);
console.log("Computer:", computer);
console.log("Social:", social);
console.log("Total:", total);
console.log("Average:", average);
console.log("Percentage:", percentage + "%");
console.log("Grade:", grade);
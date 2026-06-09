import StudentCard from "../../components/StudentCard";

export default function StudentDirectory() {
  const students = [
    {
      name: "Janet",
      course: "Btech CSE",
      college: "Aisat College",
      skills: "C++, React",
    },
    {
      name: "Maria",
      course: "BSc Computer Science",
      college: "St.Paul's College",
      skills: "Python, HTML",
    },
    {
      name: "Donald",
      course: "BTech CSE",
      college: "KTU University",
      skills: "C++, Next.js",
    },
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
        Student Directory
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {students.map((student, index) => (
          <StudentCard
            key={index}
            name={student.name}
            course={student.course}
            college={student.college}
            skills={student.skills}
          />
        ))}
      </div>
    </div>
  );
}
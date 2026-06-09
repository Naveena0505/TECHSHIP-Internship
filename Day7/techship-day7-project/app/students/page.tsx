import StudentCard from "../../components/StudentCard";

export default function StudentsPage() {
  const students = [
    {
      id: 101,
      name: "John",
      course: "BCA",
      college: "Aisat College",
      skills: "Java, React",
    },
    {
      id: 102,
      name: "Maria",
      course: "BSc CS",
      college: "St.Paul's College",
      skills: "Python, HTML",
    },
    {
      id: 103,
      name: "Janet",
      course: "BTech CSE",
      college: "KTU University",
      skills: "Next.js, TypeScript",
    },
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
        Student Listing
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {students.map((student) => (
          <StudentCard
            key={student.id}
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
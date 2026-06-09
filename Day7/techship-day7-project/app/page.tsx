import StudentCard from "../components/StudentCard";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">TECHSHIP Day 7</h1>

        <div className="space-x-4">
          <a href="#" className="hover:text-yellow-300">
            Home
          </a>
          <a href="#" className="hover:text-yellow-300">
            About
          </a>
          <a href="#" className="hover:text-yellow-300">
            Contact
          </a>
        </div>
      </nav>

      {/* Heading Section */}
      <div className="text-center py-10">
        <h1 className="text-5xl font-bold text-blue-700">
          Tailwind CSS Practice Page
        </h1>

        <p className="mt-4 text-lg text-gray-700">
          Activity 1 - Day 7
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid md:grid-cols-3 gap-6 px-8">
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800">
            Card 1
          </h2>

          <p className="mt-3 text-gray-600">
            This is the first card.
          </p>

          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            View
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800">
            Card 2
          </h2>

          <p className="mt-3 text-gray-600">
            This is the second card.
          </p>

          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            View
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800">
            Card 3
          </h2>

          <p className="mt-3 text-gray-600">
            This is the third card.
          </p>

          <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            View
          </button>
        </div>
      
      </div>
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-4">
         Student Profile
        </h2>

       <StudentCard
    name="John"
    course="BCA"
    college="ABC College"
    skills="Java, React"
  />
</div>

    </div>
  );
}
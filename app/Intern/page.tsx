import Link from "next/link";

export default function Intern() {
  return (
   <section id="internship" className="min-h-screen bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400 p-8"
    style={{ fontFamily: "Times New Roman, Times, serif" }}>
        <div className="bg-white rounded-3xl shadow  p-8">
      <h2 className="text-2xl font-bold mb-6">Internship</h2>


      <div className="p-4">
        <span className="font-semibold">SBS Technologies</span>

        <Link
          href="/internshipvideos"
          className="ml-4 text-blue-500 hover:underline"
        >
          Video
        </Link>
      </div>
      </div>
    </section>
  );
}
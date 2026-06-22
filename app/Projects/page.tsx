import Link from "next/link";

export default function Projects() {
  return (
   <section id="projects" className="min-h-screen bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400 p-8"
    style={{ fontFamily: "Times New Roman, Times, serif" }}>
        <div className="bg-white rounded-3xl shadow  p-8">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>


      <div className="grid md:grid-cols-2 gap-4">

        <Link href="/counterapp">
          <div className="bg-slate-400 text-white rounded-xl p-4 cursor-pointer hover:bg-slate-500">
            <h3 className="font-semibold ">
              Counter App
            </h3>
          </div>
        </Link>

        <Link href="/todo">
          <div className="bg-slate-400 text-white rounded-xl p-4 cursor-pointer hover:bg-slate-500">
            <h3 className="font-semibold">
              To Do
            </h3>
          </div>
        </Link>

        <Link href="/searchfilter">
          <div className="bg-slate-400 text-white rounded-xl p-4 cursor-pointer hover:bg-slate-500">
            <h3 className="font-semibold">
              Search Filter
            </h3>
          </div>
        </Link>

      </div>
      </div>
    </section>
  );
}
import Link from "next/link";

export default function Intern() {
  return (
    <section id="internship"
      className="bg-white rounded-3xl shadow p-8"
      style={{ fontFamily: "Times New Roman, Times, serif" }}
    >
      <h2 className="text-2xl font-bold mb-6">
        Internship
      </h2>
      
      <div className="grid md:grid-cols-2 gap-4">
        {/* SBS Technologies Link */}
        <Link href="https://www.sbstechnologies.in/sbs/home/">
          <div className="text-blue-400 p-4 cursor-pointer hover:underline">
            <h3 className="font-semibold">
              SBS Technologies
            </h3>
          </div>
        </Link>
      </div>

      {/* Video link section placed underneath */}
      <div className="mt-4 p-4">
        <Link href="/video.mp4" target="_blank" rel="noopener noreferrer">
          <div className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-700 cursor-pointer group">
            {/* Play Icon */}
            <svg 
              className="w-6 h-6 fill-current text-blue-500 group-hover:scale-110 transition-transform" 
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z"/>
            </svg>
            <span className="font-semibold group-hover:underline">
              Watch Internship Video
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
export default function InternshipVideos() {
  return (
    <div className="min-h-screen bg-blue-500 p-8">
      <h1 className="text-3xl font-bold text-white mb-8 text-center">
        Internship Videos
      </h1>

      {/* Video 1 - Smaller Size */}
      <div className="flex justify-center mb-8">
        <video controls className="w-full max-w-md rounded-lg shadow-lg">
          <source src="/video1.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Video 2 & Video 3 - Same Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <video controls className="w-full rounded-lg shadow-lg">
          <source src="/video2.mp4" type="video/mp4" />
        </video>

        <video controls className="w-full rounded-lg shadow-lg">
          <source src="/video3.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
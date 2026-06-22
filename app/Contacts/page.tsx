import { res } from "../data/res";

export default function Contacts() {
  return (
   <section id="contact" className="min-h-screen bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400 p-8"
    style={{ fontFamily: "Times New Roman, Times, serif" }}>
        <div className="bg-white rounded-3xl shadow  p-8">
      <h2 className="text-2xl font-bold mb-6">Contact</h2>


      <div className="mt-4 space-y-2">
        <p className=" text-red-200">
          ✉️{" "}
          <a
            href={`mailto:${res.email}`}
            className="hover:underline"
          >
            {res.email}
          </a>
        </p>
<div>
        <p className=" text-red-200">
          📱{" "}
          <a
            href={`tel:${res.phone}`}
            className=" hover:underline"
          >
            {res.phone}
          </a>
        </p>
        </div>

        <p>📍 {res.location}</p>
      </div>
      </div>
    </section>
  );
}
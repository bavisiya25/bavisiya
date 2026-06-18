import { res } from "../data/res";

export default function Contacts() {
  return (
    <section id="contact" className="bg-slate-500 text-white rounded-3xl p-8"
    style={{ fontFamily: "Times New Roman, Times, serif" }}>
      <h2 className="text-2xl font-bold">
        Contact
      </h2>

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
    </section>
  );
}
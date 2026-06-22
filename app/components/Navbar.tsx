import Link from "next/link";

export default function Navbar() {
  return (
<nav className="bg-blue-900 p-4 text-white sticky top-0 z-50 w-full">
  <div className="mx-auto flex flex-col md:flex-row max-w-6xl items-center justify-between gap-4">
    
    {/* Menu */}
    <ul className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-base">          <li>
            <a href="#hero">Home</a>
          </li>

          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a href="#education">Education</a>
          </li>

          <li>
            <a href="#internship">Internship</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Login & Register Buttons */}
        <div className="flex gap-3">
          <Link
            href="/admin/login"
            className="rounded bg-white px-4 py-2 text-blue-600 font-semibold"
          >
            Login
          </Link>

          <Link
            href="/admin/registration"
            className="rounded bg-green-500 px-4 py-2 text-white font-semibold"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
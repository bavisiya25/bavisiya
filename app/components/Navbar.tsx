import Link from "next/link";

export default function Navbar() {
  return (
  <nav className="fixed top-0 left-0 w-full bg-blue-900 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Menu */}
        <ul className="flex gap-6">
          <li>
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
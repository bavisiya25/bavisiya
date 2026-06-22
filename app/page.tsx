import Link from "next/link";
import Hero from "./components/Hero";  
import Navbar from "./components/Navbar";
 
export default function Home() { 
  return ( 
    <main className="min-h-screen bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400 p-8"> 
      <div className="max-w-6xl mx-auto p-6 space-y-6"> 
        <Navbar />
         <Hero /> 
     <div className=" grid md:grid-cols-2 gap-4">  
     <Link href="/Skills">
          <div className="bg-white text-black text-align-center rounded-xl p-4 cursor-pointer hover:bg-slate-500">
            <h3 className="font-semibold ">
              Skills
            </h3>
          </div>
        </Link>

         <Link href="/Education">
          <div className="bg-white text-black text-align-center rounded-xl p-4 cursor-pointer hover:bg-slate-500">
            <h3 className="font-semibold ">
              Education
            </h3>
          </div>
        </Link>

         <Link href="/Intern">
          <div className="bg-white text-black text-align-center rounded-xl p-4 cursor-pointer hover:bg-slate-500">
            <h3 className="font-semibold ">
            Internship
            </h3>
          </div>
        </Link>

         <Link href="/Projects">
          <div className="bg-white text-black text-align-center rounded-xl p-4 cursor-pointer hover:bg-slate-500">
            <h3 className="font-semibold ">
             Projects
            </h3>
          </div>
        </Link>

        <Link href="/Contacts">
          <div className="bg-white text-black text-align-center rounded-xl p-4 cursor-pointer hover:bg-slate-500">
            <h3 className="font-semibold ">
           Contact
            </h3>
          </div>
        </Link>
</div>  
 
      </div> 
    </main> 
  ); 
} 
 

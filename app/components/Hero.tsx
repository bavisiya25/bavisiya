import Image from "next/image";
import { res } from "../data/res"; 
 
export default function Hero() { 
  return ( 
    <section id="hero" className="bg-white rounded-3xl shadow p-8 text-center"
    style={{ fontFamily: "Times New Roman, Times, serif" }}>
      <div className="flex justify-center"> 
        <Image
        src="/profile.jpeg"
        alt="Profile Photo"
        width={240}
        height={380}
        className="rounded-full border-4 border-blue-500"
      />
      </div>
      <h1 className="text-5xl font-bold">{res.name}</h1> 
 
      <p className="text-xl text-blue-600 mt-2"> 
        {res.role} 
      </p> 
 
      <p className="mt-4 text-gray-600"> 
        {res.summary} 
      </p> 
    </section> 
  ); 
} 
 

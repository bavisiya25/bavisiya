import Hero from "./components/Hero"; 
import Skills from "./components/Skills";
import Education from "./components/Education"; 
import Intern from "./components/Intern";
import Projects from "./components/Projects"; 
import Contacts from "./components/Contacts"; 

 
export default function Home() { 
  return ( 
    <main className="min-h-screen bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400 p-8"> 
      <div className="max-w-6xl mx-auto p-6 space-y-6"> 
        <Hero /> 
        <Skills />
        <Education /> 
         <Intern /> 
        <Projects /> 
        <Contacts /> 
      </div> 
    </main> 
  ); 
} 
 

import { res } from "../data/res"; 
 
export default function Education() { 
  return ( 
    <section id="education" className="bg-white rounded-3xl shadow p-8"
    style={{ fontFamily: "Times New Roman, Times, serif" }}> 
      <h2 className="text-2xl font-bold mb-6"> 
        Education 
      </h2> 
 
      {res.education.map((item, index) => ( 
        <div key={index}> 
          <h3 className="font-semibold"> 
            {item.degree} 
          </h3> 
          <h6 className="text-gray-600"> 
            {item.cgpa} 
          </h6>
          <div>
         <a
  href="https://www.mitindia.edu/"
  target="_blank"
  rel="noopener noreferrer"
>
  <p className="text-blue-600 hover:text-blue-600 hover:underline">
    {item.institution}
  </p>
</a> 
</div>
        </div> 
      ))} 
    </section> 
  ); 
} 
 

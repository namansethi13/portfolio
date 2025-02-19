import { useEffect, useRef } from "react";


const experiences = [
    { 
      year: "2024 - Present", 
      role: "Full Stack Developer", 
      company: "Tranasha.in", 
      description: "Designed , engineered and developed a scalable web platform with SvelteKit, Django, and GCP from ground up. Implemented search, authentication, notifications, and AI-powered recommendations."
    },
    { 
      year: "2023", 
      role: "Intern Engineer", 
      company: "Publicis Sapient", 
      description: "Developed a platform for streamlined AI chatbot deployment, reducing setup time significantly. Built APIs and analytics dashboards with FastAPI and Grafana."
    },
    { 
      year: "2023", 
      role: "Backend Mentor", 
      company: "Melius: The Consultancy Club", 
      description: "Guided students in building scalable backend systems with Flask. Conducted workshops on RESTful APIs and database design."
    },
  ];
export default function TechMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (marquee) {
      const clone = marquee.innerHTML;
      marquee.innerHTML += clone;
    }
  }, []);

  return (
    <div className="relative w-full overflow-hidden from-[#212121] via-[#212121] to-[#333333] bg-gradient-to-r py-6" id="experience">
      
      {/* Experience Section */}
      <div className="mt-16 w-full max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">Experience</h2>
        <div className="relative border-l-4 border-whte pl-6 space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="relative bg-black p-6 rounded-lg shadow-lg text-white">
              <div className="absolute -left-6 top-1/2 w-4 h-4 bg-black rounded-full transform -translate-y-1/2"></div>
              <h3 className="text-xl md:text-2xl font-semibold text-highlight">{exp.role} @ {exp.company}</h3>
              <p className="text-sm md:text-lg text-gray-300">{exp.year}</p>
              <p className="text-gray-400 mt-2 text-lg">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

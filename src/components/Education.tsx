const education = [
    {
      institution: "Guru Gobind Singh Indraprastha University",
      degree: "Master of Computer Applications (Software Engineering)",
      duration: "Aug. 2024 - Jul. 2026",
      cgpa: "8.5/10",
    },
    {
      institution: "Maharaja Surajmal Institute",
      degree: "Bachelor of Computer Applications (Hons.), Minor in Data Science",
      duration: "Dec. 2021 - Jul. 2024",
    cgpa: "9.56/10",
    },
  ];
  
  export default function Education() {
    return (
        <div className="bg-gradient-to-r w-full h-full  overflow-hidden " id="education">
      <div className="mt-16 w-full max-w-4xl mx-auto px-6 ">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="bg-black p-6 rounded-lg shadow-lg">
              <h3 className="text-xl md:text-2xl font-semibold text-highlight">{edu.degree}</h3>
              <p className="text-gray-300 mt-1">{edu.institution}</p>
              <p className="text-gray-300 mt-1">CGPA: {edu.cgpa}</p>
              <p className="text-gray-400 mt-1">{edu.duration}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    );
  }
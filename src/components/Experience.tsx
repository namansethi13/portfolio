const experiences = [
  { 
    year: "November 2025 - Present", 
    role: "SDE Intern", 
    company: "Adbrew", 
    description: [
      "Contributing to the development and enhancement of Adbrew's core advertising platform, focusing on implementing new features and optimizing existing functionalities to improve user experience and performance.",
    ]
  },
  { 
    year: "August 2024 - August 2025", 
    role: "Full Stack Developer (Part-Time)", 
    company: "Tranasha.in", 
    description: [
      "As the sole developer architected and developed a full-stack web application, from initial design to production deployment on GCP using Docker, serving 200+ monthly users .",
      " Engineered core features including an AI-powered search with OpenAI embeddings, a real-time chat system, a Redis-backed notification service, and a PhonePe payment integration."
    ]
  },
  { 
    year: "July 2023 - Sep 2023", 
    role: "Intern Engineer", 
    company: "Publicis Sapient", 
    description: [
      "Developed a platform to deploy, analyze, and manage RASA AI chatbots, reducing deployment time by 50% by automating manual processes.",
      " Created analytics APIs and streamlined the deployment workflow into a user-friendly interface, enhancing operational efficiency."
    ]
  },
];
export default function TechMarquee() {
 return (
    <div className="relative w-full py-16" id="experience">
      <div className="w-full max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">Experience</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-600"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start gap-6">
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0 w-8 h-8 bg-white rounded-full border-4 border-gray-800 flex items-center justify-center">
                  <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                </div>

                {/* Content card */}
                <div className="flex-1 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-900/70 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                    <span className="text-sm text-gray-400 font-medium">{exp.year}</span>
                  </div>

                  <p className="text-gray-300 font-medium mb-2">{exp.company}</p>

                  <div className="text-gray-400 leading-relaxed">
                    {exp.description.map((desc, i) => (
                      <p key={i} className="mb-2">{desc}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

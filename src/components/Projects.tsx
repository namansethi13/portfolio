import {faGithub} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const projects = [
    {
      name: "ShareAid",
      description: "A sustainable hub for donating and receiving old items, making a difference for both people and the planet.",
      techStack: ["Django REST Framework", "SQLite"],
      link: "https://project-shareaid.vercel.app/",
      image: "/shareaid-ui.PNG"
    },
    {
      name: "Save-My-Text",
      description: "An encrypted online secure notepad that allows users to store text at a unique URL and access it from anywhere.",
      techStack: ["HTML", "CSS", "JavaScript", "Django"],
      link: "https://save-my-text.vercel.app/",
      image: "/save-my-text-ui.PNG",
      github: "https://github.com/namansethi13/SaveMyText"
    },
    {
      name: "ZenCity",
      description: "Agentic AI system with Google ADK and Vertex AI within a 30-hour hackathon. The system synthesizes real-time city data to generate a continuous stream of tweets with near 100% uptime also developed predictive agents using Gemini to create summaries and mood scores from geo-tagged data, visualized on Google Maps",
      techStack: ["Google ADK", "Vertex AI", "Gemini", "React", "Firebase", "GCP"],
      link: "https://zen-frontend-five.vercel.app/",
      image: "/zencity-ui.jpeg",
      github: "https://github.com/namansethi13/zentrixel_ps1"
    },

  ];
  
  export default function ProjectsSection() {
    return (
        <div className="w-full h-full  " id="projects">
      <div className="mt-16 w-full max-w-4xl mx-auto px-6 ">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-black p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 overflow-hidden"
            >
              <div className="relative w-full h-40 md:h-48 rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"  
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl md:text-2xl font-semibold text-white">{project.name} {project?.github && ( 
                  <button onClick={(e) => {
                    e.preventDefault();
                    window.open(project.github, "_blank");
                  }} className="float-right">
                   <FontAwesomeIcon icon={faGithub} className="text-3xl text-light cursor-pointer" />
                  </button>
                )}</h3>
                <p className="text-gray-300 mt-2">{project.description}</p>
                <div className="flex flex-wrap mt-4">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      </div>
    );
  }
  
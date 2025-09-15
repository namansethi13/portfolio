
const techs = [
  {
    name: "Svelte",
    logo:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
  },
  {
    name: "Django",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  },
  {
    name: "LangChain",
    logo: "https://cdn.simpleicons.org/langchain",
  },
  {
    name: "LangGraph",
    logo: "https://cdn.simpleicons.org/langgraph",
  },
  {
    name: "FastAPI",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg"
  },
  {
    name: "Tailwind CSS",
    logo:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Firebase",
    logo:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    name: "PostgreSQL",
    logo:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Nginx",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  },
  {
    name: "MongoDB",
    logo:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "React",
    logo:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
];

export default function TechList() {
  return (
    <div className="relative w-full py-16" id="technologies">
      <div className="w-full max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">Technologies</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {techs.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:bg-gray-900/70 hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 mb-4 flex items-center justify-center">
                <img
                  src={tech.logo || "/placeholder.svg"}
                  alt={tech.name}
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-white text-sm md:text-base font-medium text-center leading-tight">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}
  
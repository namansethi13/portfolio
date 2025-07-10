import { useRef, useState } from "react";

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
    <div className="w-full flex flex-col">
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">Technologies</h2>
    <div className="w-full max-w-[2560px] mx-auto px-4 py-8 bg-black rounded-lg shadow-lg">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {techs.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center justify-center p-4 bg-gray-900 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 cursor-pointer"
          >
            <img
              src={tech.logo}
              alt={tech.name}
              className="h-12 w-12 md:h-16 md:w-16 object-contain mb-2"
            />
            <span className="text-white text-lg md:text-xl font-semibold text-center">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
      <div
        className="relative w-full overflow-hidden bg-highlight py-6 overflow-x-hidden "
      ></div>
    </div>

  );
}
  
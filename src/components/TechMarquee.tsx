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

export default function TechMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [marqueeStop, setMarqueeStop] = useState(false);

  // useEffect(() => {
  //   if (!marqueeRef.current) return;
  //   const marquee = marqueeRef.current;
  //   const clone = marquee.innerHTML;
  //   marquee.innerHTML += clone;
  // }, []);


  return (
    <div className="relative w-full h-full overflow-hidden py-10 max-w-[2560px]">
     
      <div
        className="relative w-full overflow-hidden bg-black py-6 overflow-x-hidden"
        onMouseEnter={() => setMarqueeStop(true)}
        onMouseLeave={() => setMarqueeStop(false)}
      >
     
        <div
          ref={marqueeRef}
          className={`flex whitespace-nowrap text-white font-bold text-2xl md:text-3xl w-max animate-marquee ${
            marqueeStop ? "marquee-animation-pause" : ""
          }`}
        >
          {techs.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-16 pl-16 shadow-xl transform hover:scale-110 transition duration-300"
            >
              <div className="flex gap-2 items-center">

                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="h-10 w-10 md:h-14 md:w-14"
                  />
                <span>{tech.name}</span>

              </div>
            </div>
          ))}
          {techs.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-16 pl-16 shadow-xl transform hover:scale-110 transition duration-300"
            >
              <div className="flex gap-2 items-center">
              <img
                src={tech.logo}
                alt={tech.name}
                className="h-10 w-10 md:h-14 md:w-14"
              />
              <span>{tech.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="relative w-full overflow-hidden bg-highlight py-6 overflow-x-hidden "
        onMouseEnter={() => setMarqueeStop(true)}
        onMouseLeave={() => setMarqueeStop(false)}
      >
        </div>
    </div>
  );
}

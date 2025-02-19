import Navbar from "./Navbar";
import {
  faLinkedinIn,
  faXTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CTA from "./CTA";
import { useRef, useEffect } from "react";

function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    interface DrawLightEvent extends MouseEvent {
      clientX: number;
      clientY: number;
    }

    const drawLight = (e: DrawLightEvent) => {
      const mouseX = e.clientX + window.scrollX;
      const mouseY = e.clientY + window.scrollY;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const light = ctx.createRadialGradient(
      mouseX,
      mouseY,
      0,
      mouseX,
      mouseY,
      100
      );
      light.addColorStop(0, "rgba(255,255,255,0.2)");
      light.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = light;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    setCanvasSize();

    window.addEventListener("resize", setCanvasSize);
    window.addEventListener("mousemove", drawLight);

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      window.removeEventListener("mousemove", drawLight);
    };
  }, []);

  const text = "Contact Me!";
  const onClick = () => {
    window.open("mailto:namansethi1328@gmail.com");
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/namansethi13/",
      icon: faLinkedinIn,
    },
    {
      name: "Github",
      href: "https://www.github.com/namansethi13",
      icon: faGithub,
    },
    {
      name: "Twitter",
      href: "https://www.twitter.com/namansethiyt",
      icon: faXTwitter,
    },
    {
      name: "Resume",
      href: "https://drive.google.com/file/d/1CcOgGPGOZcob0HWAx8xiAzPLN4p6VLdx/view?usp=sharing",
      icon: faFilePdf,
    },
  ];

  return (
    <div id="hero" className="relative bg-gradient-to-r from-[#212121] via-[#212121] to-[#333333] w-full h-full flex flex-col min-w-screen min-h-[80vh] justify-start items-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 z-0 pointer-events-none w-full h-full"
      ></canvas>
      <Navbar />
      <div
        className="flex flex-col items-center justify-center w-full md:mt-20 max-w-[1600px] px-8 mt-16 pb-[10rem] lg:mt-20 "
        
      >
        <div className="text-light w-full flex md:flex-row flex-col-reverse items-center justify-end">
          <div className="flex flex-col justify-center h-full p-4 md:w-4/5">
            <h1 className="text-5xl font-bold text-left md:text-6xl mb-20">
              Hello👋, I'm <span className="text-highlight">Naman Sethi</span>
            </h1>
            <h2 className="text-2xl text-left md:text-4xl text-gray-300">
              a problem solver at heart who loves building things that
              ✨click✨(both literally and figuratively). Fueled by caffeine, I
              turn{" "}
              <span className="text-highlight">
                ideas into smooth and meaningful experiences. 🚀
              </span>
            </h2>
            <div className="flex gap-2 mt-6">
              {socialLinks.map(({ name, href, icon }) => (
                <a
                  href={href}
                  key={name}
                  className="p-4"
                  title={name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={icon} className="text-3xl text-light" />
                  {name === "Resume" && (
                    <span className="ml-2 text-sm ">View Resume</span>

                  )}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-8 w-2/5 h-full md:w-1/3 flex justify-center items-center">
            <img
              src="/xprofile.jpg"
              alt="profile"
              className="h-full object-cover rounded-full"
            />
          </div>
        </div>
        <div className="w-full flex justify-center items-center mt-10 lg:justify-end lg:mr-16">
          {/* Aligned to the right on larger screens */}
          <CTA text={text} onClick={onClick} />
        </div>
      </div>
    </div>
  );
}

export default Hero;

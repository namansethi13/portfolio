import Navbar from "./Navbar";
import {
  faLinkedinIn,
  faXTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CTA from "./CTA";

function Hero() {
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
    <div id="hero" className="relative bg-gradient-to-r w-full h-full flex flex-col min-w-screen min-h-[30vh] justify-center items-center overflow-hidden">
      <Navbar />
      <div
        className="flex flex-col items-center justify-center w-full md:mt-20 max-w-[1920px] mt-4 lg:mt-28 mb-10 md:px-12"

      >
        <div className="text-light w-full flex lg:flex-row flex-col-reverse items-center justify-end gap-12">
          <div className="flex flex-col justify-center h-full p-4 md:w-3/5">
            <h1 className="text-5xl font-bold md:text-6xl mb-16 text-center md:text-left">
              Hello👋, I'm <span className="text-highlight">Naman Sethi</span>
            </h1>
            <h2 className="text-2xl  md:text-4xl text-gray-300 md:text-left text-center ">
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
            <div className="w-full flex justify-center items-center mt-10 lg:justify-start lg:mr-16">
              <CTA text={text} onClick={onClick} />
            </div>
          </div>
          <div className="mt-8 w-2/5 h-full md:w-1/3 flex justify-center items-center">
            <img
              src="/profilex.png"
              alt="profile"
              className="h-full object-cover rounded-full w-full"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Hero;

import {
  faLinkedinIn,
  faXTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CTA from "./CTA";
import { useState, useEffect, useRef } from "react";
import { fetchProfile } from "../services/service";

interface Profile {
  name: string;
  tagline: string;
  email: string;
  linkedin_url: string;
  github_url: string;
  twitter_url: string;
  resume_url: string;
}

function Hero() {
  const text = "Contact Me!";
  const rotateCount = useRef(0);
  const [flipped, setFlipped] = useState(false);
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    fetchProfile<Profile>().then(({ data }) => {
      if (data) setProfile(data);
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (rotateCount.current < 1) {
        setFlipped((prev) => !prev);
        rotateCount.current++;
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [flipped]);

  const onClick = () => {
    if (profile?.email) window.open(`mailto:${profile.email}`);
  };

  const socialLinks = profile
    ? [
        profile.linkedin_url && {
          name: "LinkedIn",
          href: profile.linkedin_url,
          icon: faLinkedinIn,
        },
        profile.github_url && {
          name: "Github",
          href: profile.github_url,
          icon: faGithub,
        },
        profile.twitter_url && {
          name: "Twitter",
          href: profile.twitter_url,
          icon: faXTwitter,
        },
        profile.resume_url && {
          name: "Resume",
          href: profile.resume_url,
          icon: faFilePdf,
        },
      ].filter(Boolean)
    : [];

  return (
    <div id="hero" className="relative bg-gradient-to-r w-full h-full flex flex-col  max-w-screen-xl min-h-[30vh] justify-center items-center overflow-hidden">
      <div
        className="flex flex-col items-center justify-center w-full md:mt-20 mt-4 lg:mt-28 mb-10 md:px-12"
      >
        <div className="text-light w-full flex lg:flex-row flex-col-reverse items-center justify-end gap-12">
          <div className="flex flex-col justify-center h-full p-4 md:w-3/5">
            <h1 className="text-4xl font-bold md:text-6xl mb-4 text-center md:text-left">
              Hello, I'm{" "}
              <span className="text-highlight">
                {profile?.name ?? ""}
              </span>
            </h1>
            <h2 className="text-md  md:text-lg text-gray-300 md:text-left text-center ">
              {profile?.tagline ?? ""}
            </h2>
            <div className="flex gap-2 mt-6">
              {(socialLinks as { name: string; href: string; icon: any }[]).map(({ name, href, icon }) => (
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
          <div className="mt-8 w-2/5 h-full md:w-2/3 flex justify-center items-start relative">
            <div
              className="relative w-40 h-40 lg:w-[30rem] lg:h-[30rem] flex justify-center items-center perspective cursor-pointer"
              onClick={() => setFlipped((prev) => !prev)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-1000 transform-style-3d ${
                  flipped ? "rotate-y-180" : ""
                }`}
              >
                <div className="absolute w-full h-full backface-hidden ">
                  <img
                    src="/profilex.png"
                    alt="profile"
                    className="h-full object-cover rounded-full w-full"
                  />
                </div>
                <div className="absolute w-full h-full backface-hidden rotate-y-180">
                  <img
                    src="/animated-profilex.png"
                    alt="profile"
                    className="h-full object-cover rounded-full w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

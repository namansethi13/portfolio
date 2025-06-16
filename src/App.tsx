import './App.css'
import Hero from './components/Hero'
import TechMarquee from './components/TechMarquee'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Footer from './components/Footer'
import CTA from './components/CTA'
import { useRef, useEffect, useState } from "react";
function App() {
  const text = "Contact Me!";
  const onClick = () => {
    window.open("mailto:namansethi1328@gmail.com");
  }

  let [scrollX, setScrollX] = useState(0);
  let [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollX(window.scrollX);
      setScrollY(window.scrollY);
      //create a custom event
      const event = new CustomEvent("scrollX", { detail: window.scrollX });
      window.dispatchEvent(event);
      const eventY = new CustomEvent("scrollY", { detail: window.scrollY });
      window.dispatchEvent(eventY);

    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        const mouseX = e.clientX + window.scrollX + scrollX;
        const mouseY = e.clientY + window.scrollY + scrollY;
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
  return (
    <div className='flex relative flex-col items-center justify-center overflow-x-hidden bg-linear-to-r from-zinc-900 via-stone-800 to-zinc-900 pb-20 lg:pb-0'>
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 z-10 pointer-events-none w-full h-full"
      ></canvas>
      <div className="w-full h-full max-w-[2560px] flex justify-center items-center flex-col">
      <Hero/>
      <TechMarquee/>
      <Experience/>
      <Projects/>
      <Education/>
      <CTA text={text} onClick={onClick} />
      <Footer/>

      </div>
    </div>
  )
}

export default App

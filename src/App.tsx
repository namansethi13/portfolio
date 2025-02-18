import './App.css'
import Hero from './components/Hero'
import TechMarquee from './components/TechMarquee'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Footer from './components/Footer'
import CTA from './components/CTA'
function App() {
  const text = "Contact Me!";
  const onClick = () => {
    window.open("mailto:namansethi1328@gmail.com");
  }
  return (
    <div className='flex flex-col items-center justify-center overflow-x-hidden bg-gradient-to-r from-[#212121] via-[#212121] to-[#333333] pb-20 lg:pb-0'>
      <div className="w-full h-full">
      <Hero/>
      <TechMarquee/>
      </div>
      <Experience/>
      <Projects/>
      <Education/>
      <CTA text={text} onClick={onClick} />
      <Footer/>
    </div>
  )
}

export default App

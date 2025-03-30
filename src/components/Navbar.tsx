import {FontAwesomeIcon} from  '@fortawesome/react-fontawesome'
import { faHouse, faBriefcase, faKeyboard, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { useState , useEffect, useRef } from 'react'
    
function Navbar(){
    let navLinks = [{name: "About me", href: "#hero" , icon: faHouse}, {name: "Experience", href: "#experience", icon: faBriefcase}, {name: "Projects", href: "#projects", icon: faKeyboard }, {name: "Education", href: "#education", icon: faGraduationCap}]
    let [selected , setSelected] = useState(0)

    const navElement = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const triggerPoint = 100;
            const maxOpacity = 0.8;
            const minOpacity = 0.2;

            let newOpacity = 0;

            if(scrollPosition > triggerPoint){
                newOpacity = Math.min((scrollPosition - triggerPoint) / triggerPoint, maxOpacity)
                newOpacity = Math.max(newOpacity, minOpacity)
            }
            else{
                newOpacity = 0.2
            }

            navElement.current?.style.setProperty("background-color", `rgba(0,0,0,${newOpacity})`)
        }
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
    
    } , [])

        






  
    return(
        <nav className="flex justify-between lg:bg-slate-100 bg-dark text-light p-4 fixed  w-full lg:top-0 z-50 h-20 bottom-0 max-w-[2650px]" ref={navElement}>
            <img src="/profilex.png" alt="" className="lg:ml-32 hidden lg:block" />


            <ul className="justify-between w-5/7 gap-4 items-center text-lg hidden lg:flex">
                {navLinks.map(({name , href}, index) => (
                    <a href={href} onClick={() => setSelected(index)}
                    className=
                    { `rounded-full p-4 relative text-2xl md:text-xl ${
                        selected === index 
                        ? "text-black bg-white border-4"
                        : ""
                    }`} key={index}>
                    <li className="inline-block mx-4" key={name}>{name}</li>
                    </a>
                ))}
            </ul>

            <div className="lg:hidden flex items-center w-full">
                <ul className="flex items-center gap-4 justify-between w-full">
                    {navLinks.map(({name , href, icon} , index) => (
                        <div className='flex flex-col items-center gap-1' key={`mobile-${index}`}>

                        <a href={href} onClick={() => setSelected(index)} className=
                        { `rounded-full p-4 relative transition-all duration-100 ${
                            selected === index 
                            ? "text-black bg-white border-4 bottom-8 mix-blend-difference"
                            : ""
                        }`} key={`mobile-${index}`}>
                        <FontAwesomeIcon icon={icon} className="text-2xl" />
                        </a>
                        {selected === index ? <p className="absolute bottom-0 text-center w-full">{name}</p> : null}
                        </div>
                        
                        
                    ))}
                </ul>
                
                
            </div>

            <div className="absolute h-40 "> 
                
            </div>

        </nav>

    )

}

export default Navbar;
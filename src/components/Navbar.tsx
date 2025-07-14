import {FontAwesomeIcon} from  '@fortawesome/react-fontawesome'
import { faHouse, faBriefcase, faKeyboard, faGraduationCap, faPen } from '@fortawesome/free-solid-svg-icons'
import { useState , useEffect, useRef } from 'react'
    
function Navbar(){
    let navLinks = [{name: "About me", href: "/#hero" , icon: faHouse},
        {name: "Experience", href: "/#experience", icon: faBriefcase},
        {name: "Projects", href: "/#projects", icon: faKeyboard },
        {name: "Education", href: "/#education", icon: faGraduationCap},
        {name: "Blog", href: "/blog", icon: faPen}
    ]
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
       <nav className="flex justify-between lg:bg-slate-100 bg-dark text-light p-4 fixed w-full max-w-screen-xl mx-auto lg:top-0 z-50 h-20 bottom-0 rounded-b-2xl" ref={navElement}>
            <img src="/profilex.png" alt="" className="lg:ml-32 hidden xl:block" />


            <ul className="justify-between gap-4 items-center text-lg hidden lg:flex">
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
                        <div className='flex flex-col items-center sm:gap-1 xs:gap-0' key={`mobile-${index}`}>

                        <a href={href} onClick={() => setSelected(index)} className=
                        { `rounded-full p-4 relative transition-all duration-100 ${
                            selected === index 
                            ? "text-black bg-white border-4 bottom-8 mix-blend-difference"
                            : ""
                        }`} key={`mobile-${index}`}>
                        <FontAwesomeIcon icon={icon} className="text-[0.8rem] sm:text-xl" />
                        </a>
                        {selected === index ? <p className="absolute bottom-0 text-center w-full">{name}</p> : null}
                        </div>
                        
                        
                    ))}
                </ul>
                
                
            </div>


        </nav>

    )

}

export default Navbar;
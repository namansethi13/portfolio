import {FontAwesomeIcon} from  '@fortawesome/react-fontawesome'
import { faHouse, faBriefcase, faKeyboard, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
    
function Navbar(){
    let navLinks = [{name: "About me", href: "#hero" , icon: faHouse}, {name: "Experience", href: "#experience", icon: faBriefcase}, {name: "Projects", href: "#projects", icon: faKeyboard }, {name: "Education", href: "#education", icon: faGraduationCap}]
    let [selected , setSelected] = useState(0)

  
    return(
        <nav className="flex justify-between lg:bg-slate-100/20 bg-dark text-light p-4 fixed  w-full lg:top-0 z-50 h-20 bottom-0">
            <img src="/xprofile.jpg" alt="" className="lg:ml-32 hidden lg:block" />


            <ul className="justify-between w-5/7 gap-4 items-center text-lg hidden lg:flex">
                {navLinks.map(({name , href}, index) => (
                    <a href={href} onClick={() => setSelected(index)}
                    className=
                    { `rounded-full p-4 relative ${
                        selected === index 
                        ? "text-black bg-white border-4 top-8 "
                        : ""
                    }`} key={name}>
                    <li className="inline-block mx-4" key={name}>{name}</li>
                    </a>
                ))}
            </ul>

            <div className="lg:hidden flex items-center w-full">
                <ul className="flex items-center gap-4 justify-between w-full">
                    {navLinks.map(({name , href, icon} , index) => (
                        <div className='flex flex-col items-center gap-1'>

                        <a href={href} onClick={() => setSelected(index)} className=
                        { `rounded-full p-4 relative transition-all duration-100 ${
                            selected === index 
                            ? "text-black bg-white border-4 bottom-8 mix-blend-difference"
                            : ""
                        }`} key={name}>
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
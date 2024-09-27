import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { useLocation } from 'react-router'
import { Typewriter } from 'react-simple-typewriter'
import About from './About'
import Services from './services'
import { Timeline } from 'gsap/gsap-core'

const Banner = ({activeSection}) => {
  const [toggle, setToggle] = useState(false)
  const [scroll, setScroll] = useState(0);

 

const controlScroll=()=>{
  setScroll(window.scrollY);
  
}


useEffect(() => {
window.addEventListener("scroll", controlScroll);

return()=>{
window.removeEventListener("scroll", controlScroll);

}
  
}, [])
// console.log(scroll )


  
  useGSAP(()=>{
    window.addEventListener("mousemove",(e)=>{
      // console.log(e.clientX)
      // gsap.set(".cursor", { xPercent: -50, yPercent: -50 })
      let targets = gsap.utils.toArray(".cursor");
      gsap.to(targets,
        {
        x:e.clientX-20,
        y:e.clientY-20,
        duration:1.2,
        ease: "power1.out",
        overwrite: "auto",
        stagger: 0.02,
        // scale:1.2,
       
      })

    })
    const tl=gsap.timeline();

    tl.from('.nav h1',{
      opacity:0,
      y:-40,
      delay:1,
      duration:.6
    })
    tl.from('.nav .links a',{
      opacity:0,
      y:-20,
      delay:.6,
      duration:.8,
      stagger:.09
    })
     tl.from('.mid-heading h1',{
     scale:0,
      // delay:.6,
      duration:.8,
      // stagger:.3
    })
    tl.from('.mid-heading p',{
      scale:0,
       // delay:.6,
       duration:.8,
       // stagger:.3
     })
  })
  return (
    <>
      <div className="parent absolute flex gap-4 z-8">
    <div className="cursor"></div>
      <div className="cursor"></div>
      <div className="cursor"></div>
      <div className="cursor"></div>
      <div className="cursor"></div>
    </div>
    <div className='home relative w-[100vw] ' >
      
    <video autoPlay muted loop className='w-screen h-full md:h-screen absolute top-0 left-0 z-0 object-cover'>
        <source src="../images/bgvid.mp4" type="video/mp4"/>
        Your browser does not support the video tag.``
      </video>
      <div className="shadow overlay absolute top-0 left-0 w-full h-screen bg-black/50 z-1"></div>
      <div className={`nav w-screen absolute top-8   ${scroll > 20 ? "md:fixed top-[0px] bg-white text-black" : "md:absolute top-20 bg-transparent text-white"} flex justify-between px-8 md:justify-around  items-center py-6  md:py-2 z-10 `}>
        <h1 className=' text-[3rem] md:text-[2.8rem] font-bold capitalize '>web developer</h1>
    <div className={`links flex flex-col justify-start px-2 py-4  gap-2  bg-gray-400 md:bg-transparent w-screen md:w-auto   absolute left-0 ${toggle ?"top-full"  : "top-[-500%]" } md:relative md:block transition-all ease-in-out duration-1000 `}>
          <a href="#home" className={` text-capitalize text-[1.8rem] md:text-[1.7rem] mx-8 hover:text-yellow-500 ${activeSection === "home" && scroll > 20 ? "active text-yellow-500 underline" : "no-underline"} `}>home</a>
          <a href="#about" className={` text-capitalize text-[1.8rem] md:text-[1.7rem] mx-8 hover:text-yellow-500 ${activeSection === "about" ? "active text-yellow-500 underline" : "no-underline"} `}>about</a>
          <a href="#services" className={` text-capitalize text-[1.8rem] md:text-[1.7rem] mx-8 hover:text-yellow-500 ${activeSection === "services" ? "active text-yellow-500 underline" : "no-underline"} `}>services</a>
          <a href="#skills" className={` text-capitalize text-[1.8rem] md:text-[1.7rem] mx-8 hover:text-yellow-500 ${activeSection === "skills" ? "active text-yellow-500 underline" : "no-underline"} `}>skills</a>
          <a href="#education" className={` text-capitalize text-[1.8rem] md:text-[1.7rem] mx-8 hover:text-yellow-500 ${activeSection === "portfolio" ? "active text-yellow-500 underline" : "no-underline"} `}>portfolio</a>
          <a href="#testimonials" className={` text-capitalize text-[1.8rem] md:text-[1.7rem] mx-8 hover:text-yellow-500 ${activeSection === "testimonials" ? "active text-yellow-500 underline" : "no-underline"} `}>testimonials</a>
          <a href="#contact" className={` text-capitalize text-[1.8rem] md:text-[1.7rem] mx-8 hover:text-yellow-500 ${activeSection === "contact" ? "active text-yellow-500 underline" : "no-underline"} `}>contact us</a>

        </div>
        <FaBars className='text-[2.3rem]  mr-8 inline-block md:hidden' onClick={()=>{setToggle(!toggle)}}/>


      </div>
      <div className="mid-heading text-center z-2 relative">
        <h1 className='capitalize text-white text-[5rem] md:text-[7.5rem] '>I'm abudurrahman ansari</h1>
        <p className='capitalize text-white text-[2.5rem]    text-center'><Typewriter words={['front-end developer','backend developer','designer','MERN stack developer','full stack developer']}
        loop={0}
        cursor='|'
         
        

        
        /></p>
      </div>
      
      
    
    </div>
   
    </>
  )
}

export default Banner
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {
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
    <div className='home relative w-[100vw]'>
      
    <video autoPlay muted loop className='w-screen h-screen absolute top-0 left-0 z-0 object-cover'>
        <source src="../images/bgvid.mp4" type="video/mp4"/>
        Your browser does not support the video tag.``
      </video>
      <div className="shadow overlay absolute top-0 left-0 w-full h-screen bg-black/50 z-1"></div>
      <div className={`nav w-screen absolute top-0   ${scroll > 20 ? "md:fixed top-[0px] bg-white text-black" : "md:absolute top-20 bg-transparent text-white"} flex justify-between px-8 md:justify-around  items-center py-6  md:py-2 z-10 `}>
        <h1 className=' text-[3rem] md:text-[2.8rem] font-bold capitalize '>web developer</h1>
    <div className={`links flex flex-col justify-start px-2 py-4  gap-2  bg-gray-400 md:bg-transparent w-screen md:w-auto  capitalize absolute left-0 ${toggle ?"top-full"  : "top-[-500%]" } md:relative md:block transition-all ease-in-out duration-1000 `}>
          <a href="" className='no-underline text-[1.8rem] md:text-[1.7rem] mx-8 '>home</a>
          <a href="" className='no-underline text-[1.8rem] md:text-[1.7rem] mx-8 '>about</a>
          <a href="" className='no-underline text-[1.8rem] md:text-[1.7rem] mx-8 '>services</a>
          <a href="" className='no-underline text-[1.8rem] md:text-[1.7rem] mx-8 '>skills</a>
          <a href="" className='no-underline text-[1.8rem] md:text-[1.7rem] mx-8 '>contact us</a>

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
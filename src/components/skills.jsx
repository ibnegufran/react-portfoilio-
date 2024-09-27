import React from 'react'
import './skill.css'
import Sphere from './sphere'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  useGSAP(()=>{
    gsap.from('#skills',{
       scale:0,
       delay:1,
       duration:.4,
       scrollTrigger:{
         trigger:"#skills",
         scrub:2,
         start:"top 100%",
         end:'top 80%',
         markers:true
 
       }
     })

})

  return (
    <div className="banner" id='skills'>

      <h2 className='mt-[4rem] text-[4.5rem] text-center w-full capitalize font-bold text-yellow-500'>my tech stack</h2>
        <div className="slider flex items-center" style={{"--quantity":11}}>
            <div className="item" style={{"--position":1}}><img src="../images/html.png" alt="" /></div>
            {/* <Sphere /> */}
            <div className="item" style={{"--position":2}}><img src="../images/css.webp" alt="" /></div>
            <div className="item" style={{"--position":3}}><img src="../images/js.webp" alt="" /></div>
            <div className="item" style={{"--position":4}}><img src="../images/react.webp" alt="" /></div>
            <div className="item" style={{"--position":5}}><img src="../images/node js.png" alt="" /></div>
            <div className="item" style={{"--position":6}}><img src="../images/php.webp" alt="" /></div>
            <div className="item" style={{"--position":7}}><img src="../images/bootstrap.webp" alt="" /></div>
            <div className="item" style={{"--position":8}}><img src="../images/tailwind.webp" alt="" /></div>
            <div className="item" style={{"--position":9}}><img src="../images/mysql.webp" alt="" /></div>
            <div className="item" style={{"--position":10}}><img src="../images/mongodb.webp" alt="" /></div>
            <div className="item rounded-lg" style={{"--position":11}}><img src="../images/gsap.jpg" alt="" /></div>





        </div>
    </div>
  )
}

export default Skills
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { BsEnvelope } from 'react-icons/bs'
import { CiMobile1 } from 'react-icons/ci'
import { IoHomeOutline } from 'react-icons/io5'
import { PiEnvelopeLight } from 'react-icons/pi'
import { TfiHome } from 'react-icons/tfi'
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
const Contact = () => {
useGSAP(()=>{
  gsap.from('.div1 input',{
    x:-1000, 
   delay:1,
   duration:1.2,
   stagger:1,
   scrollTrigger:{
    trigger:".div1 input",
    scrub:2,
  start: "top 75%", // When the top of image reaches 75% of viewport
      end: "top 25%", // When the top reaches 25%
      toggleActions: "play reverse play reverse",// 
    markers:true

  }

 })
})




  return (
   <div className="" id='contact'>
    <div className="container w-screen py-[8rem] px-16">
    <div className="header text-center capitalize ">
        <h5 className="text-yellow-500 text-[2rem] font-bold">have question ?</h5>
        <h5 className={` text-[4.5rem] fw-200 mt-4`}>contact me now</h5>
      </div>
      <div className="form-con my-16 w-full md:w-[60vw] mx-auto md:min-h-auto    flex flex-col justify-center items-center">
       <form action="" className='w-full  h-full '>
      <div className="w-full h-full flex flex-col md:flex-row gap-[4rem] justify-center items-center">
      <div className="div1 w-full md:w-[50%] gap-12 md:gap-12 h-full flex flex-col justify-between items-center">
        <input placeholder='please enter your text' type="text" name="text" id="" className='w-[100%] block  outline-none shadow-md p-4 text-[1.5rem] rounded-lg border-0 border-gray-200  bg-gray-100'/>
        <input placeholder='please enter your email' type="email" name="email" id="" className='w-[100%] block  outline-none shadow-md p-4 text-[1.5rem] rounded-lg border-0 border-gray-200  bg-gray-100'/>
        <input placeholder='please enter your number' type="number" name="number" id="" className='w-[100%] block  outline-none shadow-md p-4 text-[1.5rem] rounded-lg border-0 border-gray-200  bg-gray-100'/>
        </div>
        <div className="div2 w-full md:w-[50%] h-[28vh] ">
        <textarea placeholder='please enter your message'  name="message" id="" className='h-full w-full text-[1.5rem] rounded-lg border-0 border-gray-200  bg-gray-100 p-4 inline-block  outline-none shadow-md resize-none'></textarea>

        </div>
      </div>
        <input value={"submit form"} type="submit" className='py-3 px-8 bg-gray-900 text-white capitalize block  mx-auto mt-16 rounded-md text-[1.5rem] cursor-pointer hover:bg-yellow-500 transition-all'/>
       
       </form>

      </div>
      <div className="info my-16 w-full md:w-[60vw] mx-auto gap-12   flex flex-col md:flex-row  justify-between items-center px-8">
        <div className="con1 text-center flex flex-col justify-between items-center ">
        <CiMobile1 className='text-yellow-500 text-[4.5rem] text-center '/>
        <p className="mt-4 mb-1 capitalize text-[1.5rem] ">call us</p>
        <p className="my-0 text-[1.5rem] ">8291653492</p>

        </div>
        <div className="con2 text-center flex flex-col justify-between items-center">
        <TfiHome className='text-yellow-500 text-[4.5rem] text-center '/>
        <p className="mt-4 mb-1 capitalize text-[1.5rem] ">address</p>
        <p className="my-0 text-[1.5rem] capitalize">bhiwandi,thane,maharashtra</p>
        </div>
        <div className="con3 text-center flex flex-col justify-between items-center">
        <PiEnvelopeLight className='text-yellow-500 text-[4.5rem] text-center '/>
        <p className="mt-4 mb-1 capitalize text-[1.5rem] ">email</p>
        <p className="my-0 text-[1.5rem] ">ibnegufran75074@gmail.com</p>

        </div>

      </div>
    </div>
   </div>
  )
}

export default Contact
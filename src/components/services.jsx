import React from 'react'
import { CiDatabase } from 'react-icons/ci'
import { FaRegLightbulb } from 'react-icons/fa'
import { HiMiniCodeBracket } from 'react-icons/hi2'

const Services = () => {
  return (
    <>
    <div className="services flex justify-center items-center pb-[4rem] relative pt-[4rem]">
        <div className="w-full">
            <div className="header text-center relative">
                <h2 className='text-yellow-500 text-[2rem] my-2 capitalize font-bold'>my services</h2>
                <h1 className='text-white text-[4rem] my-4 capitalize '>i'm available for hire</h1>
            </div>
        <div className="card-con con">
        <div className="card flex flex-col justify-center items-center py-12 rounded-md px-6">
            <div className="img"><FaRegLightbulb className="text-[6rem] text-yellow-500" /></div>
            <div className="text text-center">
                <h2 className='text-white text-[2.5rem] my-4 capitalize font-bold'>design</h2>
                <p className='text-white text-[1.5rem] my-1'>I craft visually compelling and user-friendly designs that prioritize both aesthetics and functionality. My approach ensures that the user experience is seamless, with intuitive interfaces that enhance engagement and usability</p>
            </div>
        </div>
        <div className="card flex flex-col justify-center items-center py-4 rounded-md">
            <div className="img"><HiMiniCodeBracket  className="text-[6rem] text-yellow-500" /></div>
            <div className="text text-center">
                <h2 className='text-white text-[2.5rem] my-4 capitalize font-bold'>front-end development</h2>
                <p className='text-white text-[1.5rem] my-1'>I create dynamic, responsive frontends that provide users with smooth, interactive experiences. Using the latest web technologies, I bring designs to life with clean, maintainable code that works flawlessly across devices</p>
            </div>
        </div>
        <div className="card flex flex-col justify-center items-center py-4 rounded-md">
            <div className="img"><CiDatabase className="text-[6rem] text-yellow-500" /></div>
            <div className="text text-center">
                <h2 className='text-white text-[2.5rem] my-4 capitalize font-bold'>backend development</h2>
                <p className='text-white text-[1.5rem] my-1'>With a focus on robust backend development, I build scalable, secure, and efficient server-side architectures. From databases to APIs, I ensure your systems run smoothly, handling complex data and ensuring high performance</p>
            </div>
        </div>

        </div>
        </div>
      
       
    </div>




    </>


  )
}

export default Services
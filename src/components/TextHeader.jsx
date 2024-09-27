import React, { useContext, useEffect } from 'react'
import { Color, Title1, Title2 } from '../../context/context'

const TextHeader = () => {
   const {titel1,setTitle1}= useContext(Title1);
   const {titel2,setTitle2}= useContext(Title2);
   const {color,setColor}= useContext(Color);


   useEffect(()=>{

       setTitle1("portfolio")
       setTitle2("i love what i do")

   },[])
  return (
    <div className="header text-center capitalize">
        <h5 className="text-yellow-500 text-[2rem] font-bold">{titel1}</h5>
        <h5 className={`${color} text-[4.5rem] fw-200 mt-4`}>{titel2}</h5>
      </div>
  )
}

export default TextHeader
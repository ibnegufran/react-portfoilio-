import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Testimonials = () => {

  useGSAP(()=>{
    gsap.from('.testimo-con .slide',{
       opacity:0,
       y:-500,
       delay:1,
       duration:1.5,
      //  stagger:1,
       scrollTrigger:{
         trigger:".testimo-con .slide",
         scrub:2,
         start:"top 10%",
         end:'top 60%',
                  markers:true
 
       }
     })

},[])
const cardCon=useRef()
const [currentIndex, setCurrentIndex] = useState(0);
const [toggel, setToggel] = useState("first");

// const [maxIndex, setMaxIndex] = useState(1);

const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
const totalSlides = 4; // Total number of slides

  // Number of slides visible per view based on screen size
  const slidesVisible = isMobile ? 1 : 3; // 1 for mobile, 2 for desktop
  const maxIndex = totalSlides - slidesVisible;








const second=()=>{
  // if(cardCon.current){

  //   cardCon.current.style.transform="translateX(-23vw)";
  // }
  
  console.log(maxIndex)
  setCurrentIndex((prevIndex) =>
    prevIndex < maxIndex ? prevIndex + 1 : maxIndex // Adjust index based on the number of slides
  );
  setToggel("second")
}
const first=()=>{
  // if(cardCon.current){

  //   cardCon.current.style.transform="translateX(0vw)";
  // }
  setCurrentIndex((prevIndex) =>
    prevIndex > 0 ? prevIndex - 1 : 0 // Adjust index based on the number of slides
  );
  setToggel("first")

}


  let cardData=[
    {
      image:"../images/t1.jpg",
      name:"john doe",
      desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repellendus aspernatur libero dicta veritatis est provident magni  possimus quia placeat"
    },
    {
      image:"../images/t2.jpg",
      name:"john doe",
      desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repellendus aspernatur libero dicta veritatis est provident magni  possimus quia placeat"
    },
    {
      image:"../images/t3.jpg",
      name:"john doe",
      desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repellendus aspernatur libero dicta veritatis est provident magni  possimus quia placeat"
    },
    {
      image:"../images/t4.jpg",
      name:"john doe",
      desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repellendus aspernatur libero dicta veritatis est provident magni  possimus quia placeat"
    },
  ]

  
useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); 
    
    // Set mobile if window width <= 768px
    
  };

  window.addEventListener("resize", handleResize);
  return () => {
    window.removeEventListener("resize", handleResize); // Cleanup event listener
  };
}, []);
  return (
    <div className="testi h-[80vh]  md:min-h-[100vh] mb-0" id="testimonials">
      <div className="block header text-center capitalize pt-[4rem] ">
        <h5 className="text-yellow-500 text-[2rem] font-bold">testimonials</h5>
        <h5 className="text-white text-[4.5rem] fw-200 mt-4">what they says</h5>
      </div>

      <div  className="testimo-con ml-4 md:ml-0  w-[95vw] md:w-[70vw] relative overflow-hidden mt-32 py-8 px-0 mx-auto md:px-4">
        <div ref={cardCon} className="carousel  relative flex space-x-4  md:space-x-4 w-full  md:w-[100%] transition-all" style={{ transform: isMobile
            ? `translateX(-${currentIndex * 100}%)` // Mobile: 1 slide per view
            : `translateX(-${currentIndex * 34}%)`, }}>
        {cardData.map((ele,index)=>{
          return(
            <div key={index} className={`slide ${index === 3 ? "outside" : ""} md:m-[1rem]  text-start bg-transparent p-12 rounded-xl border-1 border-gray-400/50 `}>
            <img
              src={ele.image}
              alt=""
              className="h-[10vh] rounded-full text-start"
            />
            <div className="text">
              <p className="name text-yellow-500 text-[1.5rem] mt-4">{ele.name}</p>
              <p className="para text-white text-[1.5rem] mt-4">
              {ele.desc}
              </p>
            </div>
          </div>
          )

        })}
      
      </div>
      </div>
      <div className="buttons w-full  text-center flex justify-center h-auto py-2  items-center">
        <button className={`previous ${toggel == "first" ? " border-2 border-white  bg-transparent p-2 mb-[2px]" :"bg-white"}  w-[10px] rounded-full mx-4 h-[10px]`} onClick={()=>first()}></button>
        <button className={`previous ${toggel == "second" ? " border-2 border-white  bg-transparent p-2" :"bg-white"} bg-white w-[10px] rounded-full mx-0 h-[10px]`} onClick={()=>second()}></button>

      </div>
    </div>
  );
};

export default Testimonials;

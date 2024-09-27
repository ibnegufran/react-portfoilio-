import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useContext, useEffect } from "react";
import TextHeader from "./TextHeader";
import { Color, Title1, Title2 } from "../../context/context";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  useGSAP(()=>{
    gsap.from('.portfolio .portfolio-con .card',{
        x:-2000, 
       delay:5,
       duration:1,
       stagger:.7,
       scrollTrigger:{
         trigger:".portfolio .portfolio-con .card",
         scrub:2,
         start:"top 50%",
         end:'top 80%',
         
         markers:true
 
       }
     })

},[])
    let boxData=[
        {
            image:'../images/e-book.webp',
            title:"E-Book website",
            desc:"i create this website using html ,css ,js , php and mysql as database",
            link:"https://booksnaps.000webhostapp.com"
        },
        {
            image:'../images/expense.jpg',
            title:"expense managemet system",
            desc:"i create this website using react js , node js ,tailwind css and mongodb as database",
            link:"https://abexpense.netlify.app/"
        },
        {
            image:'../images/e-comm.jfif',
            title:"E-commerece website",
            desc:"a e-commerce website ceated using react js and prime react library",
            link:"https://alkahf.netlify.app/"
        },
        {
            image:'../images/business.jpg',
            title:"business website",
            desc:"i create this website using html ,css ,js , php for a real hardware store",
            link:"https://ithyd.netlify.app"
        },
        {
            image:'../images/tic.jpg',
            title:"tic-tac-toe",
            desc:"i create this website for enhancing my logical baility in javasvript and it has lot of fun",
            link:"https://tictoy.netlify.app"
        },
        {
            image:'../images/mind.jpg',
            title:"mind reading game",
            desc:"this is the first project since i started learning js , this is a mind game you never played anywhere",
            link:"https://thinkgame.netlify.app"
        }
    ];
  
  
    
  return (
    <div className="portfolio my-16 " >
     <div className="header text-center capitalize">
        <h5 className="text-yellow-500 text-[2rem] font-bold">portfolio</h5>
        <h5 className={` text-[4.5rem] fw-200 mt-4`}>i love what i do</h5>
      </div>
      <div className="con portfolio-con max-w-[80vw] ">
        {boxData.map((ele,index)=>{
            return(
                <div className="card  h-[20rem] " key={index}>
                <div className="card-inner h-full w-full  relative ">
                  <div className="back flex flex-col justify-center items-center h-full w-full capitalize bg-gray-900 p-4 rounded-md">
                    <h6 className="name text-[2rem] text-white">{ele.title}</h6>
                    <p className="text-[1.2rem] text-gray-300 text-center my-2">
                    {ele.desc}
                    </p>
                    <a
                      href={ele.link}
                      className=" text-white text-[1.4rem] px-6 py-3 bg-yellow-500 inline-block rounded-md mt-4 capitalize"
                    >
                      live preview
                    </a>
                  </div>
                  <div className="front">
                    <div className="img-shadow absolute h-full w-full bg-gray-900/25 z-0"></div>
                    <img
                      src={ele.image}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            )

        })}
        
      
        
      </div>
    </div>
  );
};

export default Portfolio;

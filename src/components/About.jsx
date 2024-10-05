import { useGSAP } from "@gsap/react";
import ProgressBar from "@ramonak/react-progress-bar";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import React from "react";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(()=>{
    
    // const tl=gsap.timeline();
    const mm=gsap.matchMedia()

    
      mm.add("(min-width: 800px)", function() {
        gsap.from('.image', {
          x: -1000, 
          delay: 1,
          duration: 1.2,
          scrollTrigger: {
            trigger: ".image",
            scrub: 2,
            start: "top 50%",
            end: "top 60%",
            // markers: true,
            toggleActions: "play reverse play reverse" // Controls behavior
          }
        });
  
        gsap.from('.about .text', {
          x: 1000,
          delay: 1,
          duration: 1.2,
          scrollTrigger: {
            trigger: ".text",
            scrub: 2,
            start: "top 50%",
            end: "top 60%",
            // markers: true,
            toggleActions: "play reverse play reverse" // Add toggleActions
          }
        });
  
      
     
   gsap.from('.levels',{
  scale:0,
  //  delay:1,
   duration:.2,
   scrollTrigger:{
    trigger:".levels",
    scrub:1,
    start: "top 80%", // Appears when levels reach 80% of viewport
    end: "top 50%",
  //  marker:true

  }

 })
})
  })




  return (
    <>
      <div className="about w-[80vw] mx-auto my-[5rem] flex justify-center flex-wrap" >
        <div className="image md:mr-16">
          <img
            src="../images/about2.jfif"
            alt=""
            className="h-[50vh] rounded-md object-cover w-full"
          />
        </div>
        <div className="text capitalize md:w-[40vw]">
          <h2 className="text-[2.2rem] md:text-[1.8rem] text-yellow-500 font-bold mt-8 md:mt-0">about me </h2>
          <h2 className="text-[3.5rem]">a quick bio</h2>
          <p className="text-[1.5rem] my-2 text-gray-900 text-justify leading-loose">
            I am a Full-stack website developer, with a strong focus in UI/UX
            design. I love to get new experiences and always learn from my
            surroundings. I've done more than 285 projects. You can check it
            through portfolio section on this website. I looking forward to any
            opportunities and challenges.
          </p>
          <br />
          <p className="text-[1.5rem] text-gray-900 text-justify leading-loose">
            I’m A Software Developer Specializing In Responsive Web Design, MERN
            ,html, cSS And Javascript. Experience in Creating Complete Web
            Applications From Scratch. I Have A Hunger For Learning New Things
            And Am Always Trying To Stretch My Abilities.
          </p>

          <a
            href="abdurrahman ansari 2024.pdf"
            target="_blank"
            className="inline-block text-[1.8rem] font-bold bg-yellow-500 px-6 py-4 mt-[2rem] text-center text-white capitalize rounded-md cursor-pointer hover:bg-gray-900 transition-all"
          >
            download CV
          </a>
        </div>
      </div>
      <div className="levels  con w-[80vw]  px-0">
        <div className="">
          <div className="flex w-full justify-between">
            {" "}
            <p className="text-[1.8rem] font-bold capitalize">react js </p>
            <p className="text-[1.4rem]  capitalize">75%</p>
          </div>
          <div className="progress " style={{ height: ".5rem" }}>
            <div
              className="progress-bar bg-yellow-500 "
              role="progressbar"
              style={{ width: "75%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div className="">
          <div className="flex w-full justify-between">
            {" "}
            <p className="text-[1.8rem] font-bold capitalize">node js </p>
            <p className="text-[1.4rem]  capitalize">70%</p>
          </div>
          <div className="progress " style={{ height: ".5rem" }}>
            <div
              className="progress-bar bg-yellow-500 "
              role="progressbar"
              style={{ width: "70%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div className="">
          <div className="flex w-full justify-between">
            {" "}
            <p className="text-[1.8rem] font-bold capitalize">mongodb </p>
            <p className="text-[1.4rem]  capitalize">80%</p>
          </div>
          <div className="progress " style={{ height: ".5rem" }}>
            <div
              className="progress-bar bg-yellow-500 "
              role="progressbar"
              style={{ width: "80%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div className="">
          <div className="flex w-full justify-between">
            {" "}
            <p className="text-[1.8rem] font-bold capitalize">html </p>
            <p className="text-[1.4rem]  capitalize">90%</p>
          </div>
          <div className="progress " style={{ height: ".5rem" }}>
            <div
              className="progress-bar bg-yellow-500 "
              role="progressbar"
              style={{ width: "90%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div className="">
          <div className="flex w-full justify-between">
            {" "}
            <p className="text-[1.8rem] font-bold capitalize">css</p>
            <p className="text-[1.4rem]  capitalize">85%</p>
          </div>
          <div className="progress " style={{ height: ".5rem" }}>
            <div
              className="progress-bar bg-yellow-500 "
              role="progressbar"
              style={{ width: "85%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div className="">
          <div className="flex w-full justify-between">
            {" "}
            <p className="text-[1.8rem] font-bold capitalize">javascript </p>
            <p className="text-[1.4rem]  capitalize">80%</p>
          </div>
          <div className="progress " style={{ height: ".5rem" }}>
            <div
              className="progress-bar bg-yellow-500 "
              role="progressbar"
              style={{ width: "80%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div className="">
          <div className="flex w-full justify-between">
            {" "}
            <p className="text-[1.8rem] font-bold capitalize">bootstrap</p>
            <p className="text-[1.4rem]  capitalize">85%</p>
          </div>
          <div className="progress " style={{ height: ".5rem" }}>
            <div
              className="progress-bar bg-yellow-500 "
              role="progressbar"
              style={{ width: "85%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div className="">
          <div className="flex w-full justify-between">
            {" "}
            <p className="text-[1.8rem] font-bold capitalize">tailwind CSS</p>
            <p className="text-[1.4rem]  capitalize">80%</p>
          </div>
          <div className="progress " style={{ height: ".5rem" }}>
            <div
              className="progress-bar bg-yellow-500 "
              role="progressbar"
              style={{ width: "80%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div className="">
          <div className="flex w-full justify-between">
            {" "}
            <p className="text-[1.8rem] font-bold capitalize">PHP</p>
            <p className="text-[1.4rem]  capitalize">85%</p>
          </div>
          <div className="progress " style={{ height: ".5rem" }}>
            <div
              className="progress-bar bg-yellow-500 "
              role="progressbar"
              style={{ width: "85%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

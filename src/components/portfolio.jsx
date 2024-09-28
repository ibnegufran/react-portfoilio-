import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const portfolioRef = useRef(null);

  let boxData = [
    {
      image: "../images/e-book.webp",
      title: "E-Book website",
      desc: "I created this website using HTML, CSS, JS, PHP, and MySQL as the database",
      link: "https://booksnaps.000webhostapp.com",
    },
    {
      image: "../images/expense.jpg",
      title: "Expense Management System",
      desc: "I created this website using React.js, Node.js, Tailwind CSS, and MongoDB as the database",
      link: "https://abexpense.netlify.app/",
    },
    {
      image: "../images/e-comm.jfif",
      title: "E-commerce website",
      desc: "An e-commerce website created using React.js and PrimeReact library",
      link: "https://alkahf.netlify.app/",
    },
    {
      image: "../images/business.jpg",
      title: "Business website",
      desc: "I created this website using HTML, CSS, JS, and PHP for a real hardware store",
      link: "https://ithyd.netlify.app",
    },
    {
      image: "../images/tic.jpg",
      title: "Tic-Tac-Toe",
      desc: "I created this website for enhancing my logical ability in JavaScript and it has a lot of fun",
      link: "https://tictoy.netlify.app",
    },
    {
      image: "../images/mind.jpg",
      title: "Mind Reading Game",
      desc: "This is the first project since I started learning JS, this is a mind game you never played anywhere",
      link: "https://thinkgame.netlify.app",
    },
  ];

  useGSAP(() => {
    let tl= gsap.timeline();
    tl.from('#portfolio', {
      scale: 0,
      delay: 1,
      duration: 0.4,
      scrollTrigger: {
        trigger: "#portfolio",
        scrub: 2,
        start: "top 0%",  // When the animation starts (adjust as needed)
        end: 'top 100%',  
        // pin: true,           // Pins the portfolio component in place
        // pinSpacing: false,   // Disables the extra spacing after unpinning
        // markers: true,     // Enable markers to debug ScrollTrigger behavior
        // You can adjust this further depending on how you want the animation to trigger in sync with the image sequence
      }
    });
  });

  return (
    <div className="portfolio my-16 " id="portfolio" ref={portfolioRef}>
      <div className="header text-center capitalize">
        <h5 className="text-yellow-500 text-[2rem] font-bold">portfolio</h5>
        <h5 className={` text-[4.5rem] fw-200 mt-4`}>I love what I do</h5>
      </div>
      <div className="con portfolio-con max-w-[80vw] ">
        {boxData.map((ele, index) => {
          return (
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
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;

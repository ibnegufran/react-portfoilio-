import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  const imageRef = useRef(null);
  const [images, setImages] = useState([]);
  const [context, setContext] = useState(null);

  const frames = {
    currentIndex: 0,
    maxIndex: 200,
  };

  let loadedImg = 0;
  let imageArray = [];

  // Preload images
  const preLoadImages = () => {
    for (let i = 1; i <= frames.maxIndex; i++) {
      const imgUrl = `${import.meta.env.BASE_URL}images/video-10/ezgif-frame-${i
        .toString()
        .padStart(3, "0")}.jpg`;
      const img = new Image();
      img.src = imgUrl;
      img.onload = () => {
        loadedImg++;
        imageArray.push(img);
        if (loadedImg === frames.maxIndex) {
          setImages(imageArray);
          loadImgFunction(frames.currentIndex);
        }
      };
      img.onerror = (e) => {
        console.error(`Failed to load image at ${imgUrl}`, e);
      };
    }
  };

  // Function to draw the image on canvas
  const loadImgFunction = (index) => {
    if (images.length > 0 && index < frames.maxIndex && index >= 0) {
      const img = images[index];
      if (!img) {
        console.error("Image is undefined at index:", index);
        return;
      }
  
      const canvas = imageRef.current;
      canvas.width = window.innerWidth;  
      canvas.height = window.innerHeight;
      const scaleX = canvas.width / img.width;
      const scaleY = canvas.height / img.height;
      const scale = Math.max(scaleX, scaleY);

      const newWidth = img.width * scale;
      const newHeight = img.height * scale;

      const offsetX = (canvas.width - newWidth) / 2;
      const offsetY = (canvas.height - newHeight) / 2;

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = 'high';
      context.drawImage(img, offsetX, offsetY, newWidth, newHeight);
      frames.currentIndex = index;
    }
  };

  // Set the canvas context after component mounts
  useEffect(() => {
    const canvas = imageRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      setContext(ctx); // Store the context
    }
  }, []);

  // Start preloading images once context is available
  useEffect(() => {
    if (context) {
      preLoadImages();
    }
  }, [context]);

  // GSAP scroll-triggered animation
  useGSAP(() => {
    if (images.length > 0) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".works", // The container that triggers the scroll animation
          start: "top 0%", // Start when the top of the container hits the top of the viewport
          end: "bottom 0%", // End when the bottom of the container hits the bottom of the viewport
          scrub: 2, // Smoothly "scrub" the timeline as you scroll
          pin: true, // Pin the container during the scroll
          pinSpacing:true,
          markers: true,
          onLeaveBack: () => {
            // If you need to handle going back
            console.log("Leaving works section");
          },
          
         // Enable markers for debugging (optional)
        },
      });

      // Animate the frames based on scroll
      tl.to(frames, {
        currentIndex: frames.maxIndex,
        duration:1.2,
        onUpdate: () => {
          loadImgFunction(Math.floor(frames.currentIndex));
        },
        ease: "none", // Disable easing for smooth animation
      });
      return () => {
        // Clean up the ScrollTrigger on component unmount
        tl.kill();
      };
    }
  }, [images]);
 
  return (
    <div className="works pb-[4rem]  py-[7rem] w-screen min-h-[190vh] md:min-h-[100vh] relative mt-[8rem] overflow-auto" id="works" >
      <div className="frames w-screen  h-full md:h-[100vh] absolute top-0 left-0 z-0">
        <canvas ref={imageRef} className="w-full h-full md:h-[100vh] canvas text-center"></canvas>
      </div>

      <div className="shadow overlay absolute top-0 left-0 w-full h-full bg-black/50 z-1"></div>
   
      <div className="container px-[4rem] w-full text-center h-full bg-transparent absolute top-0 left-0 z-20 flex justify-center items-center">
        <div className=" sub-con md:w-[70vw] flex justify-center items-center gap-[4rem]  xl:flex-nowrap md:flex-row ">
      <div className="live-projects">
        <h3 className="text-white text-[3.5rem] capitalize font-bold text-start mb-8">live projects</h3>

        <div className="box md:h-[27vh] mt-4 text-start bg-gray-600/10 p-8 rounded-md">
          <span className="year text-white text-[1.5rem] capitalize font-bold border-2 border-yellow-500 px-4 py-2">apr-2024 - may-2024</span>
          <div className="title text-white text-[2rem] capitalize my-4">E-book store</div>
          <p className="desc text-gray-300 text-[1.2rem] capitalize ">i created this website using HTML , CSS ,JS ,PHP and used MYSQL as database . 
           also it has admin panel so that admin can manage whole website 
          </p>
          <a href="https://booksnaps.000webhostapp.com" className="desc text-white text-[1.4rem] px-4 py-2 bg-yellow-500 inline-block rounded-md mt-4 capitalize cursor-pointer hover:bg-gray-900 transition-all">live preview</a>
        </div>
        <div className="box md:h-[27vh] mt-4 text-start bg-gray-600/10 p-8 rounded-md">
          <span className="year text-white text-[1.5rem] capitalize font-bold border-2 border-yellow-500 px-4 py-2">july-2024 - aug-2024</span>
          <div className="title text-white text-[2rem] capitalize my-4">expense managment system</div>
          <p className="desc text-gray-300 text-[1.2rem] capitalize ">i created this website using REACT JS ,PRIME REACT, EXPRESS JS , TAILWIND CSS , NODE JS  and used MONGODB as database . 
          in this website user can store their transactions data and can analyze it periodically</p>
          <a href="https://abexpense.netlify.app/"  className="desc text-white text-[1.4rem] px-4 py-2 bg-yellow-500 inline-block rounded-md mt-4 capitalize cursor-pointer hover:bg-gray-900 transition-all">live preview</a>
        </div>
        <div className="box md:h-[27vh] mt-4 text-start bg-gray-600/10 p-8 rounded-md">
          <span className="year text-white text-[1.5rem] capitalize font-bold border-2 border-yellow-500 px-4 py-2">jan-2024 - jan-2024</span>
          <div className="title text-white text-[2rem] capitalize my-4">E-commerce gadget website</div>
          <p className="desc text-gray-300 text-[1.2rem] capitalize ">i created this website using REACT JS , PRIME REACT, TAILWIND CSS .
          this website is just like amazon , flipkart . user can buy different home gadgets </p>
          <a href="https://alkahf.netlify.app/"  className="desc text-white text-[1.4rem] px-4 py-2 bg-yellow-500 inline-block rounded-md mt-4 capitalize cursor-pointer hover:bg-gray-900 transition-all">live preview</a>
        </div>
       
      </div>
      <div className="education ">
      <h3 className="text-white text-[3.5rem] capitalize font-bold text-start mb-8">education</h3>

<div className="box md:h-[27vh] mt-4 text-start bg-gray-600/10 p-8 rounded-md">
  <span className="year text-white text-[1.5rem] capitalize font-bold border-2 border-yellow-500 px-4 py-2">apr-2022 - may-2025</span>
  <div className="title text-white text-[2rem] capitalize my-4">bachelor's of computer application</div>
  <p className="desc text-gray-300 text-[1.2rem] capitalize">I am currently pursuing a Bachelor of Computer Applications (BCA) in my 3rd year at <b>Yashwantrao Chavan Maharashtra Open University (YCMOU) </b>, where I am developing strong foundational skills in computer science and software development</p>
</div> 
<div className="box md:h-[27vh] mt-4 text-start bg-gray-600/10 p-8 rounded-md">
  <span className="year text-white text-[1.5rem] capitalize font-bold border-2 border-yellow-500 px-4 py-2">apr-2022 - may-2025</span>
  <div className="title text-white text-[2rem] capitalize my-4">Higher Secondary School Certificate (HSC)</div>
  <p className="desc text-gray-300 text-[1.2rem] capitalize">I completed my Higher Secondary Education (HSC) in the Science stream with a focus on Mathematics, achieving 80% from <b>S.H.A. Rais high school and jr college</b>, which helped build a strong foundation in analytical thinking.</p>
</div> 
<div className="box md:h-[27vh] mt-4 text-start bg-gray-600/10 p-8 rounded-md">
  <span className="year text-white text-[1.5rem] capitalize font-bold border-2 border-yellow-500 px-4 py-2">apr-2022 - may-2025</span>
  <div className="title text-white text-[2rem] capitalize my-4">bachelor's of computer application</div>
  <p className="desc text-gray-300 text-[1.2rem] capitalize">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aperiam quasi reprehenderit harum at a vitae quam. Libero unde voluptatem tempora hic distinctio veniam cumque obcaecati, quae labore quibusdam iusto.</p>
</div> 

      </div>
      </div>
      </div>
    </div>
  );
};

export default Works;

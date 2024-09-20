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
    maxIndex: 71,
  };

  let loadedImg = 0;
  let imageArray = [];

  // Preload images
  const preLoadImages = () => {
    for (let i = 1; i <= frames.maxIndex; i++) {
      const imgUrl = `${import.meta.env.BASE_URL}images/video/ezgif-frame-${i
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
          trigger: ".main", // The container that triggers the scroll animation
          start: "top 20%", // Start when the top of the container hits the top of the viewport
          end: "bottom 0%", // End when the bottom of the container hits the bottom of the viewport
          scrub: 2, // Smoothly "scrub" the timeline as you scroll
          pin: true, // Pin the container during the scroll
          markers: true,
          scroller:"body" // Enable markers for debugging (optional)
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
    }
  }, [images]);
 
  return (
    <div className="main py-[6rem] w-screen h-[100vh] relative ">
      <div className="frames w-screen  h-[100vh] absolute top-0 left-0">
        <canvas ref={imageRef} className="w-full h-screen canvas text-center"></canvas>
      </div>
   
      <div className="header w-full text-center h-screen bg-transparent absolute top-0 left-0 z-20 flex flex-col justify-center items-center">
        <h2 className="text-[2rem] text-yellow-500">Portfolio</h2>
        <h3 className="text-[4.5rem] text-white">I love what I do</h3>
      </div>
    </div>
  );
};

export default Works;

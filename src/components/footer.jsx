import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-gray-900 px-12 mt-8 text-center pt-10 pb-4">
      <div className="icons text-center w-full mt-16 block ">
        <a target="_blank" href="https://wa.me/8291653492" className="p-3  border-1 border-gray-600 rounded-full  inline-block mx-8 hover:border-yellow-500 cursor-pointer  hover:text-yellow-500 "><FaWhatsapp className="text-[2.6rem]   " /></a>
        <a target="_blank" href=": https://www.linkedin.com/in/abdurrahman-ansari-876b39240/" className="p-3 border-1 border-gray-600 rounded-full  inline-block mx-8   hover:text-yellow-500 cursor-pointer hover:border-yellow-500"><FaLinkedin className="text-[2.6rem] " /></a>
        <a target="_blank" href="https://github.com/ibnegufran" className="p-3 border-1 border-gray-600 rounded-full  inline-block mx-8   hover:text-yellow-500 cursor-pointer hover:border-yellow-500"><FaGithub className="text-[2.6rem] " /></a>
        <a target="_blank" className="p-3 border-1 border-gray-600 rounded-full  inline-block mx-8   hover:text-yellow-500 cursor-pointer hover:border-yellow-500"><RiTwitterXLine className="text-[2.6rem] " /></a>

        <div className="copyright mt-[8rem] ">
          <p className="text-[1.4rem] text-gray-300 text-center ">© Copyright 2024 - created by abdurrahman nasari</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";

import {
  AiOutlineGithub,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full overflow-x-hidden	">
      <div className="container  mx-auto flex flex-col items-start md:flex-row md:items-center justify-between py-8 md:py-12 text-white">
        <p data-aos="fade-left" data-aos-duration="1500">
          &copy; All rights reserved. Mark Kemm Asdilla - 2023
        </p>
        <div className="flex mt-5 md:mt-0 space-x-5">
          <a
            href="https://github.com/MKemmx"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-offset="0"
            className="bg-white hover:bg-[#FBAE3C] transition ease-in-out rounded-full p-1 cursor-pointer"
          >
            <AiOutlineGithub color="#002233" size="25" />
          </a>
          <a
            href="https://www.linkedin.com/in/mkemmx"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-right"
            data-aos-duration="1300"
            data-aos-offset="0"
            className="bg-white hover:bg-[#FBAE3C] transition ease-in-out rounded-full p-1 cursor-pointer"
          >
            <AiFillLinkedin color="#002233" size="25" />
          </a>
          <a
            href="https://www.facebook.com/mkemmx/"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-right"
            data-aos-duration="1100"
            data-aos-offset="0"
            className="bg-white hover:bg-[#FBAE3C] transition ease-in-out rounded-full p-1 cursor-pointer"
          >
            <AiFillFacebook color="#002233" size="25" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

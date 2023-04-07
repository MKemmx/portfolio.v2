import React from "react";

// Images
import HomeImage from "../assets/home/HomeImage";
import {
  AiOutlineGithub,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="container flex flex-col justify-start py-12 md:py-0 space-y-4 md:space-y-0 md:flex-row md:items-center md:justify-between mx-auto h-auto min-h-[92vh]">
        <div
          data-aos="fade-down"
          data-aos-duration="1500"
          className="w-full text-center md:text-start"
        >
          <div className="flex flex-col text-white">
            <div className="mb-5 text-sm md:text-lg flex items-center">
              <span className="h-2 w-2 rounded-full bg-[#FBAE3C] mr-2"></span>
              Hello, I'm
              <span className="text-[#FBAE3C] ml-2 font-bold">Kemm </span>
            </div>
            <div className="mb-3">
              <h3 className="text-4xl md:text-5xl font-bold text-[#FBAE3C] mb-1">
                Web Developer
              </h3>
              <p className="text-sm md:text-base pt-1">
                who loves turning ideas into reality. Let's collaborate to
                create something amazing.
              </p>
            </div>
            <div className="pb-3 flex justify-center md:justify-start space-x-5">
              <a
                href="https://github.com/MKemmx"
                target="_blank"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="500"
                className="bg-white hover:bg-[#FBAE3C] transition ease-in-out rounded-full p-2 cursor-pointer"
              >
                <AiOutlineGithub
                  color="#002233"
                  className="text-2xl md:text-3xl"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/mkemmx"
                target="_blank"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="300"
                className="bg-white hover:bg-[#FBAE3C] transition ease-in-out rounded-full p-2 cursor-pointer"
              >
                <AiFillLinkedin
                  color="#002233"
                  className="text-2xl md:text-3xl"
                />
              </a>
              <a
                href="https://www.facebook.com/mkemmx"
                target="_blank"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="100"
                className="bg-white hover:bg-[#FBAE3C] transition ease-in-out rounded-full p-2 cursor-pointer"
              >
                <AiFillFacebook
                  color="#002233"
                  className="text-2xl md:text-3xl"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full">
          <HomeImage />
        </div>
      </div>
    </div>
  );
};

export default Home;

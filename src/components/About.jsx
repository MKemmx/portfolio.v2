import React from "react";

import AboutMe from "../assets/about/AboutImage";
import { AiOutlineDownload } from "react-icons/ai";

// Resume link
import { resumeLink } from "../utils/links";

const About = () => {
  return (
    <section id="about" className="w-full text-white overflow-x-hidden">
      <div className=" container flex items-center flex-col justify-center mx-auto h-auto py-10 min-h-[90vh]">
        <h1 className="pt-5 md:pt-0 text-3xl font-bold text-[#FBAE3C] mb-10 mr-auto">
          About
        </h1>
        <div className="w-full h-full flex flex-col md:flex-row justify-between items-center">
          <div
            data-aos="fade-right"
            data-aos-duration="1500"
            className="w-full"
          >
            <AboutMe />
          </div>
          <div data-aos="fade-left" data-aos-duration="1500" className="w-full">
            {/* About */}
            <div>
              <h2 className="text-2xl font-bold text-[#FBAE3C] mb-5">
                More About Me
              </h2>
              <p className="text-justify">
                I am currently exploring opportunities that allow me to continue
                my journey of learning and growth in web development. The
                process of coding and creating websites brings me immense
                satisfaction and fulfillment. I am committed to keeping up with
                the latest trends and technologies in the field.
              </p>
              <div className="bg-[#1F7A8C] mt-3 flex px-3 items-center md:px-4 py-2 rounded-md w-fit text-white cursor-pointer transition-opacity ease-in-out duration-300 hover:bg-opacity-70">
                <AiOutlineDownload
                  color="#FFF"
                  className="text-lg md:text-2xl mr-1.5"
                />
                <a
                  href={resumeLink}
                  target="_blank"
                  className="text-sm md:text-base"
                >
                  Resume
                </a>
              </div>
            </div>
            {/* Tech Skills */}
            <div className="mt-10">
              <h2 className="text-lg font-bold text-[#FBAE3C] mb-10">
                Tech Stack
              </h2>
              <div>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-y-3.5">
                  <div className="flex items-center gap-x-2 justify-center text-base">
                    <i className="devicon-html5-plain colored"></i>
                    <p> HTML </p>
                  </div>

                  <div className="flex items-center gap-x-2 justify-center text-base">
                    <i className="devicon-css3-plain colored"></i>
                    <p> CSS </p>
                  </div>

                  <div className="flex items-center gap-x-2 justify-center text-base">
                    <i className="devicon-javascript-plain colored"></i>
                    <p> JavaScript </p>
                  </div>

                  <div className="flex items-center gap-x-2 justify-center text-base">
                    <i className="devicon-react-original colored"></i>
                    <p> React JS </p>
                  </div>

                  <div className="flex items-center gap-x-2 justify-center text-base">
                    <i className="devicon-sass-original colored"></i>
                    <p> SCSS </p>
                  </div>

                  <div className="flex items-center gap-x-2 justify-center text-base">
                    <i className="devicon-bootstrap-plain colored"></i>
                    <p> Bootstrap </p>
                  </div>

                  <div className="flex items-center gap-x-2 justify-center text-base">
                    <i className="devicon-tailwindcss-plain colored"></i>
                    <p> Tailwind </p>
                  </div>

                  <div className="flex items-center gap-x-2 justify-center text-base">
                    <i className="devicon-materialui-plain colored"></i>
                    <p> Material UI </p>
                  </div>

                  <div className="flex items-center gap-x-2 justify-center text-base">
                    <i className="devicon-nodejs-plain colored"></i>
                    <p> Node JS </p>
                  </div>

                  <div className="flex items-center gap-x-2 justify-center text-base">
                    <i className="devicon-express-original "></i>
                    <p> Express JS </p>
                  </div>

                  <div className="flex items-center gap-x-2 justify-center text-base">
                    <i className="devicon-mongodb-plain colored"></i>
                    <p> Mongo DB </p>
                  </div>

                  <div className="flex items-center gap-x-2 justify-center text-base">
                    <i className="devicon-git-plain colored"></i>
                    <p> Git </p>
                  </div>

                  <div className="flex items-center gap-x-2 justify-center text-base">
                    <i className="devicon-github-original"></i>
                    <p> Github </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

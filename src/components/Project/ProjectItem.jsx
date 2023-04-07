import React from "react";

import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import "./projectCss.css";

const ProjectItem = ({ item, isOdd }) => {
  const aarangeMent = isOdd ? " lg:flex-row-reverse" : " lg:flex-row";

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      className={`flex flex-col ${aarangeMent} gap-y-5 md:gap-y-10 lg:gap-y-0 lg:gap-x-10 text-white`}
    >
      <div className="w-full flex items-center">
        <Splide className="w-full" aria-label="Project Images">
          {item.images?.map((image) => (
            <SplideSlide>
              <div className="bg-[#103D46] flex justify-center items-center rounded-md py-5 px-3">
                <img
                  className="h-[230px] md:max-h-[400px] md:h-auto object-contain"
                  src={image}
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <div className="w-full projectDetailCard flex flex-col justify-center px-4 py-4 md:p-10 rounded-md space-y-7">
        <h2 className="text-2xl text-center md:text-start md:text-4xl">
          {item.title}
        </h2>
        <p className="text-sm text-gray-300 md:text-base text-justify">
          {item.description}
        </p>

        <div>
          <p className="text-gray-200 flex items-center font-semibold text-base mb-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FBAE3C] mr-2"></span>
            Tech used
          </p>
          <div className="flex gap-x-2 gap-y-3 flex-wrap">
            {item?.techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-[#103D46] text-xs md:text-base py-1.5 w-fit px-3 rounded-md text-center"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-x-4 pt-3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={item.github}
            className="bg-[#1F7A8C] transition-opacity ease-in-out duration-300 hover:bg-opacity-70 w-fit flex items-center gap-x-1.5 px-4 py-2.5 rounded-md text-sm md:text-base"
          >
            <AiOutlineGithub />
            Github Link
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={item.liveSite}
            className={`${
              item.liveSite === "#" && "pointer-events-none	"
            } bg-[#1F7A8C] transition-opacity ease-in-out duration-300 hover:bg-opacity-70 w-fit flex items-center gap-x-1.5 px-4 py-2.5 rounded-md text-sm md:text-base`}
          >
            <AiOutlineLink />
            Live Site
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;

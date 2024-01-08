import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

// Telmo Data
import { telmoData, pwData } from "../data/data";

const Timeline = () => {
  const handleChangeLink = (link) => {
    window.open(link);
  };

  return (
    <section id="timeline">
      <div className="w-full text-white ">
        <div className="container flex items-center flex-col justify-center mx-auto h-auto">
          <h1 className="pt-5 md:pt-12 text-3xl font-bold text-[#FBAE3C] mr-auto mb-10">
            Work Experience
          </h1>
          <div className="space-y-6 md:space-y-24 container">
            <div className="relative wrap overflow-hidden h-full">
              <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border hidden md:block md:left-1/2"></div>

              <div className="mb-4 md:mb-8 flex justify-between items-center w-full right-timeline py-5 flex-col md:flex-row space-y-4 md:space-y-0">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-[#1F7A8C] shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-[#FBAE3C]">
                    1
                  </h1>
                </div>

                <div
                  className="order-1 bg-[#103D46] drop-shadow-sm rounded-lg shadow-xl w-full md:w-5/12 px-8 py-6"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
                  <h3 className="w-fit mx-auto md:w-full text-lg text-center relative md:text-start md:text-xl">
                    <i className="h-2 w-2 rounded-full bg-[#FBAE3C] absolute top-[10px] left-[25px] md:left-[-15px]"></i>
                    Proweaver, Inc.
                    <span className="block text-base text-gray-100">
                      June 2023 - December 2023
                    </span>
                  </h3>
                  <p className="block text-base text-gray-300 mb-5">
                    Associated with Proweaver Inc.
                  </p>

                  <Splide className="w-full pb-10" aria-label="Project Images">
                    {pwData?.map((data) => {
                      return (
                        <SplideSlide>
                          {data?.images.map((img) => (
                            <>
                              <h3 className="mb-3 text-center text-base border-b-2 border-[#103d46] w-fit mx-auto md:text-lg">
                                {data?.name}
                              </h3>

                              <div className="bg-[#103D46] flex justify-center items-center rounded-md flex-col">
                                <img
                                  className="h-[180px] md:max-h-[300px] md:h-auto object-cover w-full rounded-md"
                                  src={img}
                                />
                              </div>

                              <button
                                onClick={() => {
                                  handleChangeLink(data.link);
                                }}
                                className="self-start mt-5 bg-[#1F7A8C] flex px-3 items-center md:px-4 py-2 rounded-md w-fit text-white cursor-pointer transition-opacity ease-in-out duration-300 hover:bg-opacity-70"
                              >
                                Visit Site
                              </button>
                            </>
                          ))}
                        </SplideSlide>
                      );
                    })}
                  </Splide>
                </div>
              </div>

              <div className="mb-8 flex justify-between items-center w-full left-timelin py-5 flex-col md:flex-row-reverse space-y-4 md:space-y-0">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-[#1F7A8C] shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-[#FBAE3C]">
                    2
                  </h1>
                </div>
                <div
                  className="order-1 bg-[#103D46] drop-shadow-sm rounded-lg shadow-xl w-full md:w-5/12 px-8 py-6"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  <h3 className="w-fit mx-auto md:w-full text-lg text-center relative md:text-start md:text-xl">
                    <i className="h-2 w-2 rounded-full bg-[#FBAE3C] absolute top-[10px] left-[8px] md:left-[-15px]"></i>
                    Telmo Solutions
                    <span className="block text-base text-gray-100">
                      June 2022 - March 2023
                    </span>
                  </h3>
                  <p className="block text-base text-gray-300 mb-5">
                    Associated with Telmo Solutions
                  </p>

                  <Splide className="w-full pb-10" aria-label="Project Images">
                    {telmoData?.map((data) => {
                      return (
                        <SplideSlide>
                          {data?.images.map((img) => (
                            <>
                              <h3 className="mb-3 text-center text-base border-b-2 border-[#103d46] w-fit mx-auto md:text-lg">
                                {data?.name}
                              </h3>

                              <div className="bg-[#103D46] flex justify-center items-center rounded-md flex-col">
                                <img
                                  className="h-[180px] md:max-h-[300px] md:h-auto object-cover w-full rounded-md"
                                  src={img}
                                />
                              </div>

                              <button
                                onClick={() => {
                                  handleChangeLink(data.link);
                                }}
                                className="self-start mt-5 bg-[#1F7A8C] flex px-3 items-center md:px-4 py-2 rounded-md w-fit text-white cursor-pointer transition-opacity ease-in-out duration-300 hover:bg-opacity-70"
                              >
                                Visit Site
                              </button>
                            </>
                          ))}
                        </SplideSlide>
                      );
                    })}
                  </Splide>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

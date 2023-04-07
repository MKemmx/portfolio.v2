import React from "react";

import { AiOutlineSend } from "react-icons/ai";

const Contact = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      id="contact"
      className="w-full h-[80vh] flex items-center justify-center flex-col text-white overflow-x-hidden	"
    >
      <h2 className="text-4xl sm:text-6xl font-bold mb-5"> Get In Touch </h2>
      <p className="max-w-lg  text-base md:text-lg leading-7 mx-auto mb-5 text-gray-300 text-center">
        Thank you for taking the time to visit my website. I welcome any
        feedback, inquiries or opportunities that come my way. Don't hesitate to
        reach out to me using the contact details provided or fill out the form
        below. I look forward to hearing from you!
      </p>

      <a href="mailto:kimasdilla@gmail.com">
        <div className="bg-[#1F7A8C] text-white transition-opacity ease-in-out duration-300 hover:bg-opacity-70 w-fit flex items-center gap-x-1.5 px-5 py-3 rounded-md">
          <AiOutlineSend />
          <p className="text-base">Send</p>
        </div>
      </a>
    </div>
  );
};

export default Contact;

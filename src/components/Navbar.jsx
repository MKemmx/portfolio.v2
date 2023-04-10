import React, { useState, useEffect } from "react";

import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineGithub,
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineDownload,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { FaArrowUp } from "react-icons/fa";

// Logo
import logo from "../assets/logo/my-logo.png";

// Resume link
import { resumeLink } from "../utils/links";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const handleToogleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const [showBackToTop, setShowBackToTop] = useState(false);
  const menus = ["Home", "About", "Projects", "Contact"];
  const [currentMenu, setCurrentMenu] = useState(menus[0]);

  const handleChangePage = (selectedMenu) => {
    setCurrentMenu(selectedMenu);
  };

  let scrollingTimer = null;
  const handleScroll = () => {
    // Back to top
    const screenPosition = window.scrollY;
    if (screenPosition >= 700) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }

    clearTimeout(scrollingTimer);
    const sections = document.querySelectorAll("section");
    scrollingTimer = setTimeout(function () {
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop - 210;
        const sectionHeight = section.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;
        const currentPos = window.scrollY;
        if (currentPos >= sectionTop && currentPos <= sectionBottom) {
          setCurrentMenu((prev) => {
            return menus[index];
          });
        }
      });
    }, 500);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="overflow-x-hidden	 w-full sticky top-0 z-10 px-8 md:px-10 shadow-md bg-[#002233]">
        <div className="container flex justify-between items-center mx-auto h-[8vh]">
          <div className="logo">
            <img className="rounded-full h-12 w-12" src={logo} alt="my-logo" />
          </div>

          <div onClick={handleToogleMenu} className="cursor-pointer md:hidden">
            <AiOutlineMenu size={24} color="#FFF" />
          </div>

          <ul className="space-x-7 text-white hidden md:flex items-center">
            {menus?.map((menu) => (
              <a
                onClick={() => {
                  handleChangePage(menu);
                }}
                href={`#${menu.toLowerCase()}`}
              >
                <li
                  key={menu}
                  className={`font-medium cursor-pointer hover:text-[#FBAE3C] transition ease-in-out ${
                    currentMenu === menu && "text-[#FBAE3C]"
                  } `}
                >
                  {menu}
                </li>
              </a>
            ))}

            <a
              href={resumeLink}
              target="_blank"
              className="bg-[#1F7A8C] shadow-lg flex items-center px-3 py-1.5 rounded-md w-fit mx-auto md:mx-0 text-white cursor-pointer transition-opacity ease-in-out duration-300 hover:bg-opacity-70"
            >
              <FaArrowUp color="#FFF" className="text-base md:text-lg mr-1.5" />
              <p className="text-sm md:text-base">Resume</p>
            </a>
          </ul>
        </div>
      </div>

      <div
        id="backdrop"
        onClick={(e) => {
          const id = e.target.id;
          id === "backdrop" ? handleToogleMenu() : "";
        }}
        className={`w-[100%] fixed top-0 z-20 h-full ${
          isOpenMenu
            ? "bg-black pointer-events-auto"
            : "bg-none pointer-events-none"
        }  bg-opacity-70 md:hidden flex justify-end`}
      >
        <ul
          className={`${
            isOpenMenu ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out bg-white w-[70%] h-full flex flex-col items-center space-y-6 pt-24 relative`}
        >
          {menus.map((menu) => (
            <li
              onClick={() => {
                handleChangePage(menu);
              }}
              className={`flex items-center mr-5`}
              key={menu}
            >
              <span
                className={`h-2 w-2 rounded-full bg-[#FBAE3C] mr-2 ${
                  currentMenu === menu ? "opacity-100" : "opacity-0"
                }`}
              ></span>
              <a href={`#${menu.toLowerCase()}`}> {menu} </a>
            </li>
          ))}

          <div className="bg-[#1F7A8C] mt-3 flex px-7 items-center md:px-4 py-2 rounded-md w-fit mx-auto text-white cursor-pointer transition-opacity ease-in-out duration-300 hover:bg-opacity-70">
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

          <div className="flex justify-center space-x-5">
            <a
              href="https://github.com/MKemmx"
              target="_blank"
              className="bg-[#002233] hover:bg-[#FBAE3C] transition ease-in-out rounded-full p-2 cursor-pointer"
            >
              <AiOutlineGithub color="#FFF" size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/mkemmx"
              target="_blank"
              className="bg-[#002233] hover:bg-[#FBAE3C] transition ease-in-out rounded-full p-2 cursor-pointer"
            >
              <AiFillLinkedin color="#FFF" size={24} />
            </a>
            <a
              href="https://www.facebook.com/mkemmx"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#002233] hover:bg-[#FBAE3C] transition ease-in-out rounded-full p-2 cursor-pointer"
            >
              <AiFillFacebook color="#FFF" size={24} />
            </a>
          </div>

          <div
            onClick={handleToogleMenu}
            className="absolute -top-3 right-3 bg-[#002233] hover:bg-[#FBAE3C] p-2 rounded-full cursor-pointer"
          >
            <AiOutlineClose size={22} color="#FFF" />
          </div>
        </ul>
      </div>

      {/* Arrow top */}
      {showBackToTop && (
        <a
          href={`#home`}
          onClick={() => {
            handleChangePage(menus[0]);
          }}
          className="w-10 h-10 bg-[#1F7A8C] shadow-2xl rounded-full fixed right-4 md:right-12 bottom-16 z-30 flex items-center justify-center transition-opacity ease-in-out duration-300 hover:bg-opacity-70"
        >
          <AiOutlineArrowUp color="#FBAE3C" size={28} />
        </a>
      )}
    </>
  );
};

export default Navbar;

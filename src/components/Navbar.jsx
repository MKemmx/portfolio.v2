import React, { useState } from "react";

import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineGithub,
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineDownload,
} from "react-icons/ai";

// Logo
import logo from "../assets/logo/my-logo.png";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const handleToogleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const menus = ["Home", "About", "Projects", "Contact"];
  const [currentMenu, setCurrentMenu] = useState(menus[0]);

  const handleChangePage = (selectedMenu) => {
    setCurrentMenu(selectedMenu);
  };

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

            <div className="bg-[#1F7A8C] flex items-center px-3 py-1.5 rounded-md w-fit mx-auto md:mx-0 text-white cursor-pointer transition-opacity ease-in-out duration-300 hover:bg-opacity-70">
              <AiOutlineDownload
                color="#FFF"
                className="text-base md:text-lg mr-1.5"
              />
              <p className="text-sm md:text-base">Resume</p>
            </div>
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
            <p className="text-sm md:text-base">Resume</p>
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
    </>
  );
};

export default Navbar;

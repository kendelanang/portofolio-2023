import React, { useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About Me", link: "/about" },
    { name: "Project", link: "/project" },
    { name: "Contact", link: "/contact" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex fixed justify-center w-full z-50">
        <div className="w-full max-w-[1920px] items-center justify-between md:flex sm:px-[24px] md:px-[32px] lg:px-[98px] px-[24px] pt-[15px]">
          <a
            href="#"
            className="text-white text-sm font-black font-montserrat ipon5:text-[12px] realme:text-[14px] xl:text-lg"
          >
            RAFAEL PORTOFOLIO
          </a>

          <div
            onClick={() => setOpen(!open)}
            className="text-white text-2xl absolute right-0 pr-[20px] top-[18px] md:hidden cursor-pointer"
          >
            {open ? <IoIosClose className="text-3xl" /> : <HiOutlineMenuAlt2 />}
          </div>

          <ul
            className={` md:flex md:items-center absolute text-white gap-[12px] ipon5:bg-black ipad:bg-none ipon5:bg-opacity-75 ipon5:w-full ipad:w-auto font-montserrat md:pb-0 md:static md:z-auto ipon5:z-[101] transition-all duration-1000 ease-in-out ipon5:border-none ipon5:rounded-xl ipon5:pl-2 ipon5:pb-1 ipad:p-0 ${
              open
                ? "top-[48px] opacity-100 duration-500"
                : "top-[-490px] opacity-0 duration-500"
            } md:opacity-100`}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:my-0 my-7">
                <a href={link.link} className="hover:text-red-400 duration-500">
                  {link.name}
                </a>
              </li>
            ))}
            <a
              href="#_"
              class="relative inline-block text-lg group font-montserrat"
            >
              <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-[#0d0d0d] transition-colors duration-300 ease-out group-hover:border-white group-hover:text-red-500">
                <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-white"></span>
                <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#0d0d0d] group-hover:-rotate-180 ease"></span>
                <span class="relative">Download CV</span>
              </span>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

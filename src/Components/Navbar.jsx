import React, { useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 1,
      link: "about",
    },
    {
      id: 1,
      link: "serivces",
    },
    {
      id: 1,
      link: "testimonals",
    },
    {
      id: 1,
      link: "team",
    },
    {
      id: 1,
      link: "contact",
    },
  ];
  return (
    <nav className="w-full flex z-50 justify-evenly items-center bg-transparent fixed top-0">
      <div className="logo">
        <img src="/logo.svg" alt="" className="w-28 h-20" />
      </div>
      <ul className="md:flex gap-8 hidden">
        {links.map((e) => {
          return (
            <li key={e.id}>
              <a
                href={`#${e.link}`}
                className="text-blue-500 uppercase text-xl"
              >
                {e.link}
              </a>
            </li>
          );
        })}
      </ul>
      {toggle ? (
        <IoMdClose
          className="block text-4xl md:hidden text-white"
          onClick={() => setToggle((prev) => !prev)}
        />
      ) : (
        <RiMenu4Line
          className="block text-4xl md:hidden text-white"
          onClick={() => setToggle((prev) => !prev)}
        />
      )}
      <ul
        className={`md:hidden absolute ${
          toggle
            ? "flex right-[100px] duration-300 flex-col top-16 gap-5"
            : "top-16 right-[-100%] duration-200"
        }`}
      >
        {links.map((e) => {
          return (
            <li key={e.id}>
              <a
                href={`#${e.link}`}
                className="text-blue-500 uppercase text-xl"
              >
                {e.link}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;

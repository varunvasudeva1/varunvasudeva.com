import React, { useState } from "react";
import { BsX } from "react-icons/bs";
import {
  RiHome2Line,
  RiCodeSSlashFill,
  RiVoiceprintFill,
  RiQuillPenLine,
} from "react-icons/ri";

export const HeaderMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="sm:hidden flex items-center text-white text-xl lg:text-2xl p-1 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#fff"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {isOpen && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-zinc-900 opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
      {isOpen && <HeaderSidebar closeSidebar={toggleSidebar} />}
    </>
  );
};

const HeaderSidebar = ({ closeSidebar }: { closeSidebar: () => void }) => {
  const items = [
    {
      link: "/",
      title: "Home",
      icon: "RiHome2Line",
    },
    {
      link: "/code",
      title: "Code",
      icon: "RiCodeSSlashFill",
    },
    {
      link: "/music",
      title: "Music",
      icon: "RiVoiceprintFill",
    },
    {
      link: "/articles",
      title: "Articles",
      icon: "RiQuillPenLine",
    },
  ];

  return (
    <div className="fixed top-0 right-0 h-screen w-56 bg-slate-950 z-50 shadow-lg overflow-y-auto">
      <button
        onClick={closeSidebar}
        className="flex justify-end p-2 text-2xl text-white"
      >
        <BsX />
      </button>
      <div className="flex flex-col space-y-4 p-4">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.link}
            onClick={closeSidebar}
            className="flex flex-row items-center justify-between text-lg lg:text-xl font-semibold text-gray-700 dark:text-gray-300 hover:opacity-40 transition-opacity ease-in-out duration-500"
          >
            <span className="flex flex-row items-center space-x-2">
              {item.icon === "RiHome2Line" && <RiHome2Line />}
              {item.icon === "RiCodeSSlashFill" && <RiCodeSSlashFill />}
              {item.icon === "RiVoiceprintFill" && <RiVoiceprintFill />}
              {item.icon === "RiQuillPenLine" && <RiQuillPenLine />}
              <span>{item.title}</span>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

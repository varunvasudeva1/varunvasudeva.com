import React, { useState } from "react";
import { BsX } from "react-icons/bs";
import {
  RiHome2Line,
  RiCodeSSlashFill,
  RiVoiceprintFill,
  RiQuillPenLine,
  RiMenu5Fill,
} from "react-icons/ri";
import { Transition } from "@headlessui/react";

export const HeaderMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

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
    <>
      <button
        onClick={toggleSidebar}
        className="sm:hidden flex items-center text-white text-xl lg:text-2xl p-1"
      >
        <RiMenu5Fill />
      </button>

      {isOpen && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-slate-900 opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}

      <Transition
        className="fixed top-0 right-0 h-screen w-56 lg:w-64 bg-slate-950 z-50 shadow-lg overflow-y-auto"
        show={isOpen}
        enter="transition ease-in-out duration-300 transform"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
      >
        <nav
          id="default-sidebar"
          className={`fixed flex flex-col justify-start items-start top-0 right-0 w-56 p-4 h-screen bg-white dark:bg-slate-950 z-50 shadow-lg overflow-y-auto ${
            isOpen
              ? "transform translate-x-0 ease-in"
              : "transform -translate-x-full ease-out"
          }`}
          aria-label="Sidebar"
        >
          <button
            onClick={toggleSidebar}
            className="flex self-end text-white text-2xl lg:text-3xl p-1"
          >
            <BsX />
          </button>
          <div className="flex flex-col space-y-4 p-4">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.link}
                onClick={toggleSidebar}
                className="flex flex-row items-center justify-between text-xl lg:text-2xl font-semibold text-gray-700 dark:text-gray-300 hover:opacity-40 transition-opacity ease-in-out duration-500"
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
        </nav>
      </Transition>
    </>
  );
};

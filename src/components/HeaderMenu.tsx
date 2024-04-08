import { useState } from "react";
import { BsX } from "react-icons/bs";
import {
  RiHome2Line,
  RiCodeSSlashFill,
  RiVoiceprintFill,
  RiQuillPenLine,
  RiMenu5Fill,
} from "react-icons/ri";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
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
        className="lg:hidden flex items-center text-stone-800 hover:text-stone-700 hover:opacity-90 text-xl lg:text-2xl p-1"
      >
        <RiMenu5Fill />
      </button>

      {isOpen && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-stone-900 opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}

      <Transition
        className="fixed flex items-center top-0 right-0 h-screen w-56 lg:w-64 bg-stone-200 border-l-4 border-black z-50 shadow-lg overflow-y-auto"
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
          className={`fixed flex flex-col justify-start items-start top-0 right-0 w-56 lg:w-64 p-4 h-screen overflow-y-auto ${
            isOpen
              ? "transform translate-x-0 ease-in"
              : "transform -translate-x-full ease-out"
          }`}
          aria-label="Sidebar"
        >
          <button
            onClick={toggleSidebar}
            className="flex self-end text-stone-800 hover:text-stone-700 hover:opacity-90 p-1"
          >
            <BsX className="size-8 lg:size-10" />
          </button>
          <div className="flex flex-col space-y-4 p-4">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.link}
                onClick={toggleSidebar}
                className="flex flex-row items-center justify-between text-lg lg:text-xl font-mono font-semibold pl-2 pr-10 py-1 text-stone-800 hover:text-stone-700 border-b-2 border-black hover:border-2 hover:bg-opacity-80 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:scale-105 transition-all duration-100 ease-in-out transform"
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
          <div className="flex flex-row items-center justify-end mx-4 p-3 space-x-2 bg-stone-800">
            <a
              href="https://github.com/varunvasudeva1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-white hover:text-opacity-70 text-2xl lg:text-3xl mx-1 lg:mx-2" />
            </a>
            <a
              href="https://www.linkedin.com/in/varunvasudeva1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-white hover:text-opacity-70 text-2xl lg:text-3xl mx-1 lg:mx-2" />
            </a>
            <IoMdMail className="text-white hover:text-opacity-70 text-2xl lg:text-3xl mx-1 lg:mx-2" />
          </div>
        </nav>
      </Transition>
    </>
  );
};

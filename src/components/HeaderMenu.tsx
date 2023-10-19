import { useState } from "react";
import { BsX } from "react-icons/bs/index";
import {
  RiHome2Line,
  RiCodeSSlashFill,
  RiVoiceprintFill,
  RiQuillPenLine,
  RiMenu5Fill,
} from "react-icons/ri/index";
import { FaGithub, FaLinkedin } from "react-icons/fa/index";
import { IoMdMail } from "react-icons/io/index";
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
        className="lg:hidden flex items-center text-white text-xl lg:text-2xl p-1"
      >
        <RiMenu5Fill />
      </button>

      {isOpen && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-zinc-900 opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}

      <Transition
        className="fixed flex items-center top-0 right-0 h-screen w-56 lg:w-64 backdrop-blur-lg bg-zinc-800 bg-opacity-60 z-50 shadow-lg overflow-y-auto"
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
          <div class="flex flex-row items-center justify-end mx-4 p-3 space-x-2 bg-zinc-600 rounded-full">
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

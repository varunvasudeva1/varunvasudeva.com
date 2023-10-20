import { FaGithub, FaLinkedin } from "react-icons/fa/index";
import { IoMdMail } from "react-icons/io/index";
import HeaderLink from "./HeaderLink.tsx";
import { HeaderMenu } from "./HeaderMenu";
import { useEffect } from "react";

export default function NavBar({ activePage }: { activePage?: string }) {
  const bgColor =
    activePage === "/"
      ? "transparent"
      : activePage === "/code"
      ? "bg-orange-800"
      : activePage === "/music"
      ? "bg-pink-800"
      : activePage === "/articles"
      ? "bg-teal-800"
      : "transparent";

  useEffect(() => {
    const header = document.querySelector("header");
    if (!header) return;
    const handleScroll = () => {
      if (window.scrollY > 0) {
        header.classList.add("shadow-lg");
        header.classList.add("bg-opacity-50");
        header.classList.add("bg-zinc-800");
        header.classList.remove("bg-opacity-0");
      } else {
        header.classList.remove("shadow-lg");
        header.classList.remove("bg-opacity-50");
        header.classList.remove("bg-zinc-800");
        header.classList.add("bg-opacity-0");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 flex flex-row items-center justify-between p-4 z-50 backdrop-blur-3xl transition-all ease-in-out duration-500">
      <h1 className="text-xl lg:text-2xl font-bold flex-grow">
        <a href="/" className="text-white">
          Varun Vasudeva
        </a>
      </h1>

      <HeaderMenu />

      <nav className="hidden lg:flex flex-row items-center justify-center mr-2 max-w-sm">
        <HeaderLink href="/" activePage={activePage} bgColor={bgColor} />
        <HeaderLink href="/code" activePage={activePage} bgColor={bgColor} />
        <HeaderLink href="/music" activePage={activePage} bgColor={bgColor} />
        <HeaderLink
          href="/articles"
          activePage={activePage}
          bgColor={bgColor}
        />
      </nav>

      <div
        className={`hidden lg:flex flex-row items-center justify-end p-1 rounded-full ${bgColor}`}
      >
        <a
          href="https://github.com/varunvasudeva1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-white hover:text-opacity-70 text-xl lg:text-2xl mx-1 lg:mx-2" />
        </a>
        <a
          href="https://www.linkedin.com/in/varunvasudeva1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-white hover:text-opacity-70 text-xl lg:text-2xl mx-1 lg:mx-2" />
        </a>
        <IoMdMail className="text-white hover:text-opacity-70 text-xl lg:text-2xl mx-1 lg:mx-2" />
      </div>
    </header>
  );
}

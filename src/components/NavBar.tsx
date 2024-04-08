import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import HeaderLink from "./HeaderLink.tsx";
import { HeaderMenu } from "./HeaderMenu";
import { useEffect } from "react";
import { removeTrailingSlash } from "../../utils.ts";

export default function NavBar({ activePage }: { activePage?: string }) {
  const cleanActivePage = removeTrailingSlash(activePage);

  useEffect(() => {
    const header = document.querySelector("header");
    if (!header) return;
    const handleScroll = () => {
      if (window.scrollY > 0) {
        header.classList.add("shadow-xl");
      } else {
        header.classList.remove("shadow-xl");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 flex flex-row items-center justify-between p-2 bg-stone-200 border-4 border-black z-50 transition-all ease-in-out duration-500`}
    >
      <a
        href="/"
        className="text-stone-800 hover:text-stone-700 hover:opacity-90 text-xl lg:text-2xl font-bold"
      >
        Varun Vasudeva
      </a>

      <HeaderMenu />

      <nav className="hidden lg:flex flex-row items-center justify-center mr-2 max-w-sm">
        <HeaderLink href="/" activePage={cleanActivePage} />
        <HeaderLink href="/code" activePage={cleanActivePage} />
        <HeaderLink href="/music" activePage={cleanActivePage} />
        <HeaderLink href="/articles" activePage={cleanActivePage} />
      </nav>

      <div className="hidden lg:flex flex-row items-center justify-end p-2 space-x-2 bg-stone-800">
        <a
          href="https://github.com/varunvasudeva1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-stone-200 hover:text-opacity-70 text-xl lg:text-2xl mx-1 lg:mx-2 transition-all ease-in-out duration-300" />
        </a>
        <a
          href="https://www.linkedin.com/in/varunvasudeva1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-stone-200 hover:text-opacity-70 text-xl lg:text-2xl mx-1 lg:mx-2 transition-all ease-in-out duration-300" />
        </a>
        <a href="mailto:varunvasudeva1@gmail.com">
          <IoMdMail className="text-stone-200 hover:text-opacity-70 text-xl lg:text-2xl mx-1 lg:mx-2 transition-all ease-in-out duration-300" />
        </a>
      </div>
    </header>
  );
}

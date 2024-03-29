import { FaGithub, FaLinkedin } from "react-icons/fa/index";
import { IoMdMail } from "react-icons/io/index";
import HeaderLink from "./HeaderLink.tsx";
import { HeaderMenu } from "./HeaderMenu";
import { useEffect } from "react";
import { removeTrailingSlash } from "../../utils.ts";

export default function NavBar({ activePage }: { activePage?: string }) {
  const cleanActivePage = removeTrailingSlash(activePage);
  const background =
    cleanActivePage === "/"
      ? "transparent"
      : cleanActivePage === "/code"
      ? "bg-red-900 from-red-900 to-amber-700"
      : cleanActivePage === "/music"
      ? "bg-fuchsia-900 from-fuchsia-900 to-rose-700"
      : cleanActivePage === "/articles"
      ? "bg-emerald-900 from-emerald-900 to-cyan-700"
      : "transparent";

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
      className={`fixed top-0 left-0 right-0 flex flex-row items-center justify-between p-4 z-50 ${background} transition-all ease-in-out duration-500`}
    >
      <h1 className="text-xl lg:text-2xl font-bold flex-grow">
        <a href="/" className="text-white">
          Varun Vasudeva
        </a>
      </h1>

      <HeaderMenu />

      <nav className="hidden lg:flex flex-row items-center justify-center mr-2 max-w-sm">
        <HeaderLink href="/" activePage={cleanActivePage} />
        <HeaderLink href="/code" activePage={cleanActivePage} />
        <HeaderLink href="/music" activePage={cleanActivePage} />
        <HeaderLink href="/articles" activePage={cleanActivePage} />
      </nav>

      <div className="hidden lg:flex flex-row items-center justify-end p-1 rounded-full">
        <a
          href="https://github.com/varunvasudeva1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-white hover:text-opacity-70 text-xl lg:text-2xl mx-1 lg:mx-2 transition-all ease-in-out duration-300" />
        </a>
        <a
          href="https://www.linkedin.com/in/varunvasudeva1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-white hover:text-opacity-70 text-xl lg:text-2xl mx-1 lg:mx-2 transition-all ease-in-out duration-300" />
        </a>
        <a href="mailto:varunvasudeva1@gmail.com">
          <IoMdMail className="text-white hover:text-opacity-70 text-xl lg:text-2xl mx-1 lg:mx-2 transition-all ease-in-out duration-300" />
        </a>
      </div>
    </header>
  );
}

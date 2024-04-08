import { removeTrailingSlash } from "../../utils";

const HeaderLink = ({
  href,
  activePage,
}: {
  href: string;
  activePage?: string;
}) => {
  const cleanHref = removeTrailingSlash(href);
  const cleanActivePage = removeTrailingSlash(activePage);
  return (
    <a
      href={cleanHref}
      className={`font-mono text-md font-semibold py-1 px-2 mx-2 hover:text-opacity-60 hover:scale-105 transition-all ease-in-out duration-300 ${
        cleanHref === cleanActivePage
          ? "bg-stone-800 text-stone-200"
          : "bg-stone-200 text-stone-800"
      }`}
    >
      {cleanHref === "/"
        ? "Home"
        : cleanHref.substring(1, 2).toUpperCase() + cleanHref.substring(2)}
    </a>
  );
};

export default HeaderLink;

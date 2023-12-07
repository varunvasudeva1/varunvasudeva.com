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
      className={`font-sans text-sm lg:text-md font-semibold p-2 m-1 rounded-md text-gray-200 hover:text-opacity-60 hover:scale-110 bg-zinc-300 hover:bg-opacity-10 transition-all ease-in-out duration-300 ${
        cleanHref === cleanActivePage ? "bg-opacity-30" : "bg-opacity-0"
      }`}
    >
      {cleanHref === "/"
        ? "Home"
        : cleanHref.substring(1, 2).toUpperCase() + cleanHref.substring(2)}
    </a>
  );
};

export default HeaderLink;

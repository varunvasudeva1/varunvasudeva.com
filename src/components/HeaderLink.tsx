const HeaderLink = ({
  href,
  activePage,
}: {
  href: string;
  activePage?: string;
}) => {
  return (
    <a
      href={href}
      className={`font-sans text-sm lg:text-md font-semibold p-2 m-1 rounded-md text-gray-200 hover:text-opacity-60 hover:scale-110 bg-zinc-300 hover:bg-opacity-10 transition-all ease-in-out duration-300 ${
        href === activePage ? "bg-opacity-30" : "bg-opacity-0"
      }`}
    >
      {href === "/"
        ? "Home"
        : href.substring(1, 2).toUpperCase() + href.substring(2)}
    </a>
  );
};

export default HeaderLink;

const HeaderLink = ({
  href = "/",
  activePage = "/",
  bgColor = "bg-opacity-0",
}: {
  href: string;
  activePage?: string;
  bgColor?: string;
}) => {
  return (
    <a
      href={href}
      className={`font-sans text-sm lg:text-md font-semibold py-1 px-2 lg:px-3 rounded-lg text-gray-200 hover:text-opacity-60 ${bgColor} ${
        href === activePage ? "bg-opacity-100" : "bg-opacity-0"
      }`}
    >
      {href === "/"
        ? "Home"
        : href.substring(1, 2).toUpperCase() + href.substring(2)}
    </a>
  );
};

export default HeaderLink;

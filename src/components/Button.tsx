export default function Button({
  children,
  onClick,
  href,
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}) {
  if (href) {
    return (
      <a
        className={`flex flex-row border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:cursor-pointer hover:bg-opacity-80 transition-all duration-300 ease-in-out transform p-2 ${className} ${
          className ?? "items-center justify-between"
        }`}
        href={href}
      >
        {children}
      </a>
    );
  } else {
    return (
      <button
        className={`flex flex-row border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:cursor-pointer hover:bg-opacity-80 transition-all duration-300 ease-in-out transform p-2
        ${className} ${className ?? "items-center justify-between"}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}

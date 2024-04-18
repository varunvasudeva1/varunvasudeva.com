export default function Marquee({
  items,
}: {
  items: { source: string; alt: string; style?: string }[];
}) {
  return (
    <div className="relative flex w-full overflow-x-hidden mt-8 mb-4 border-b-2 border-t-2 border-black">
      <div className="flex flex-row animate-marquee whitespace-nowrap py-12">
        {items.map((item) => {
          return (
            <img
              key={item.source}
              src={item.source}
              alt={item.alt}
              className={[
                "size-14 sm:size-18 lg:size-24 m-1",
                item.style ?? "",
              ].join(" ")}
            />
          );
        })}
      </div>

      <div className="absolute top-0 flex flex-row animate-marquee2 whitespace-nowrap py-12">
        {items.map((item) => {
          return (
            <img
              key={item.source}
              src={item.source}
              alt={item.alt}
              className={[
                "size-14 sm:size-18 lg:size-24 m-1",
                item.style ?? "",
              ].join(" ")}
            />
          );
        })}
      </div>
    </div>
  );
}

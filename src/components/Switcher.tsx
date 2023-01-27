/**
 * Switcher
 * This component is what the user first sees when they visit the site.
 * It contains my name and a description switcher which toggles between
 * three sub-pages in index.astro.
 *
 * Sub-pages:
 * 1. Code
 * 2. Music
 * 3. Write
 *
 * Code:
 * This sub-page contains a list of my projects and a link to my GitHub.
 *
 * Music:
 * This sub-page contains a list of my songs.
 *
 * Write:
 * This sub-page contains a list of my articles.
 */
import {
  RiCodeSSlashFill,
  RiVoiceprintFill,
  RiQuillPenLine,
} from "react-icons/ri";

const Switcher = () => {
  const choiceList: {
    index: number;
    text: string;
    icon: JSX.Element;
    page: "code" | "music" | "articles";
    className: string;
  }[] = [
    {
      index: 0,
      text: "build software.",
      icon: <RiCodeSSlashFill />,
      page: "code",
      className:
        "font-sans text-4xl font-bold bg-gradient-to-r from-cyan-400 to-lime-400 bg-clip-text text-transparent",
    },
    {
      index: 1,
      text: "make music.",
      icon: <RiVoiceprintFill />,
      page: "music",
      className:
        "font-sans text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent",
    },
    {
      index: 2,
      text: "write.",
      icon: <RiQuillPenLine />,
      page: "articles",
      className:
        "font-sans text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent",
    },
  ];

  return (
    <section className="flex flex-col items-start justify-center space-y-20">
      <div>
        <h1 className="font-sans text-6xl font-bold text-white">
          Hi, I'm Varun.
        </h1>
        <div className="mt-5">
          <div className="flex flex-col items-start">
            {choiceList.map((choice) => (
              <a
                key={choice.index}
                className="flex flex-row w-full items-center justify-start space-x-2 hover:cursor-pointer hover:opacity-60"
                href={`/${choice.page}`}
              >
                <h1 className="font-sans font-bold text-4xl text-white">I</h1>
                <div className="flex flex-row w-full items-center justify-between space-x-10">
                  <h1 key={choice.index} className={choice.className}>
                    {choice.text}
                  </h1>
                  <div className="text-4xl text-white">{choice.icon}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Switcher;

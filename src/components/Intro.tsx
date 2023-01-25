/**
 * Intro
 * This component is what the user first sees when they visit the site.
 * It contains my name and a description switcher which toggles between
 * two different sub-pages.
 *
 * Sub-pages:
 * 1. Code
 * 2. Music
 *
 * Code:
 * This sub-page contains a list of my projects and a link to my GitHub.
 *
 * Music:
 * This sub-page contains a list of my songs.
 */
import { useState } from "react";
import { RiCodeSSlashFill, RiVoiceprintFill } from "react-icons/ri";

const Intro = () => {
  const [page, setPage] = useState<"code" | "music">("code");

  const choiceList: {
    index: number;
    text: string;
    icon: JSX.Element;
    page: "code" | "music";
    className: string;
  }[] = [
    {
      index: 0,
      text: "build software.",
      icon: <RiCodeSSlashFill />,
      page: "code",
      className: `font-sans text-6xl font-bold bg-gradient-to-r from-cyan-400 to-lime-400 bg-clip-text text-transparent ${
        page === "code" ? "" : ""
      }`,
    },
    {
      index: 1,
      text: "make music.",
      icon: <RiVoiceprintFill />,
      page: "music",
      className: `font-sans text-6xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent ${
        page === "music" ? "" : ""
      }`,
    },
  ];

  return (
    <section className="flex flex-col items-start justify-center my-10">
      <h1 className="font-sans text-8xl font-bold text-white">
        Hi, I'm Varun.
      </h1>
      <div className="mt-5">
        <div className="flex flex-col items-start">
          {choiceList.map((choice) => (
            <div
              className={`flex flex-row w-full items-center justify-start space-x-2 hover:cursor-pointer hover:opacity-60 ${
                page === choice.page ? "opacity-100" : "opacity-80"
              }`}
              onClick={() => {
                setPage(choice.page);
              }}
            >
              <h1
                className={`font-sans font-bold text-6xl ${
                  page === choice.page ? "text-white" : "text-gray-500"
                }`}
              >
                I
              </h1>
              <div className="flex flex-row w-full items-center justify-between space-x-10">
                <h1 key={choice.index} className={choice.className}>
                  {choice.text}
                </h1>
                <div
                  className={`text-6xl ${
                    page === choice.page ? "text-white" : "text-gray-500"
                  }`}
                >
                  {choice.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Intro;

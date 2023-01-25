const Code = () => {
  return (
    <section>
      <p className="font-mono self-end text-lg text-white">NEW!</p>
      <div className="flex flex-row items-center justify-center mb-10 bg-slate-800 rounded-lg p-10 shadow-xl">
        <img className="w-1/3 h-1/3" src="src/images/archive-logo.png" />
        <div className="flex flex-col items-start justify-center mx-5 space-y-3">
          <div className="flex flex-row items-baseline justify-center space-x-3">
            <h1 className="font-sans text-2xl font-bold text-white">Archive</h1>
            <a
              className="text-purple-300 text-base font-mono"
              href="https://archiveapp.io"
            >
              archiveapp.io
            </a>
          </div>
          <p className="font-sans text-base text-white">
            A highly personalizable, AI-powered journaling app that allows users
            to record their thoughts, feelings, and memories. Archive uses
            natural language processing to analyze logs and provide insights on
            their sentiments. It also features full-text search over entries,
            allowing users to access their logs quickly and easily.
          </p>
          <a
            className="font-mono bg-purple-300 text-purple-900 text-sm font-semibold p-4 rounded-full flex text-center items-center justify-center self-center"
            href="https://apps.apple.com/us/app/archive-ai-powered-journaling/id1615879510"
          >
            Download on the App Store
          </a>
        </div>
      </div>
    </section>
  );
};

export default Code;

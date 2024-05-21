import Image from "next/image";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24">

        <div className="relative flex items-center justify-center h-full w-full">
          <div className="absolute h-[300px] w-full sm:w-[480px] -translate-x-1/2 rounded-full bg-gradient-radial from-white to-transparent blur-2xl dark:bg-gradient-to-br dark:from-transparent dark:to-blue-700 dark:opacity-10 lg:h-[360px] z-[-1]"></div>
          <div className="absolute h-[180px] w-full sm:w-[240px] translate-x-1/3 bg-gradient-conic from-sky-200 via-blue-200 blur-2xl dark:from-sky-900 dark:via-[#0141ff] dark:opacity-40"></div>
          <p className="text-4xl font-mono text-gray-800 z-10">Edunify</p>
        </div>

        <div className="mt-64 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
              href="/schools/show"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Schools
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Show me the list of schools.
            </p>
          </a>

          <a
              href="/schools/create"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Add School
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50 text-balance">
              Add your school in the list.
            </p>
          </a>
        </div>
      </main>
  );
}

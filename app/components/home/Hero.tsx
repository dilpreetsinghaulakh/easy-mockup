import localFont from "next/font/local";
import packageJson from "../../../package.json";

const fontSpl = localFont({
  src: "../../../public/fonts/DTGetaiGroteskDisplay-Black.ttf",
});

export default function Hero() {
  return (
    <main className="flex flex-col items-center px-8 sm:py-16 py-8 justify-between w-full h-[80vh]">
      <p className="font-mono text-sm text-text-secondary bg-background-secondary px-4 py-1 rounded-full shadow-lg dark:border border-text-tertiary/10">
        version{" "}
        <span className="font-bold text-text-primary">
          {packageJson.version}
        </span>
      </p>
      <div>
        <h1
          className={`text-5xl font-bold sm:text-center ${fontSpl.className}`}
        >
          The <span className="text-blue-600 dark:text-blue-400">'shadcn'</span>{" "}
          of <span className="text-amber-700 dark:text-amber-400">Mockups</span>
        </h1>
        <p className="mt-8 sm:text-center font-serif text-lg text-text-secondary">
          Copy 'n paste pure vector mockups where ever you want
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-10 font-mono">
          <a
            className="bg-lime-400 text-black border border-transparent hover:border-lime-700 dark:hover:border-black dark:hover:ring-1 ring-white px-6 py-3 rounded-lg transition-colors"
            href="/docs"
          >
            Get Started
          </a>
          <p className="text-text-secondary hidden sm:block">or</p>
          <a className="underline" href="/examples">
            View Examples
          </a>
        </div>
      </div>
      <p className="text-sm text-text-secondary">Scroll to know more ...</p>
    </main>
  );
}

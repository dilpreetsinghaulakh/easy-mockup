import Image from "next/image";
import { ArrowUpRight } from "react-feather";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="bg-background-secondary w-screen p-8 mt-8">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="flex flex-col gap-4 justify-center">
            <div className="flex items-center gap-2">
              <Image
                src="/self-logo.svg"
                className="dark:invert h-16 w-auto"
                alt="Logo"
                width={32}
                height={32}
              />
              <p className="font-mono text-xl text-text-primary">/ Mockup</p>
            </div>
            <p className="font-serif max-w-96 font-light text-xs text-text-tertiary">
              An open-source project by Dilpreet Singh. Built with Next.js and
              Tailwind CSS. Any legal issues? Contact me.
            </p>
          </div>
          <Image loading="lazy" quality={100} className="mx-auto h-48 sm:h-36 lg:h-40 w-auto" src={"/made-in.webp"} alt="Made in Amritsar" width={1000} height={1000} />
          <div className="grid grid-cols-2 gap-8 mt-4 sm:mt-0">
            <div className="flex flex-col gap-2 sm:min-w-32 [&>a]:text-text-secondary [&>a]:transition [&>a:hover]:text-text-primary font-mono">
              <p className="font-bold text-text-primary">Product</p>
              <a href="/terms">Terms</a>
              <a href="/contact">Contact</a>
              <a
                href="https://dsingh.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Developer
                <ArrowUpRight size={14} className="inline h-4 w-auto" />
              </a>
            </div>
            <div className="flex flex-col gap-2 sm:min-w-32 [&>a]:text-text-secondary [&>a]:transition [&>a:hover]:text-text-primary font-mono">
              <p className="font-bold text-text-primary">Social</p>
              <p className="text-text-tertiary disabled:cursor-not-allowed break-after-all">
                Discord
              </p>
              <a
                href="https://github.com/dilpreetsinghaulakh/mockup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/dilpreetsinghaulakh/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <p className="font-serif text-sm text-text-tertiary text-center mt-8">
          © {currentYear} Dilpreet Singh. All rights reserved.
        </p>
      </footer>
    </>
  );
}

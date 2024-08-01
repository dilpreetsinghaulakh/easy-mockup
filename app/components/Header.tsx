"use client";
import Image from "next/image";
import "./header.css";
import { useRef, useState } from "react";

const GithubLogo = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 98 96"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
        fill="currentColor"
      />
    </svg>
  );
};

function Links({
  className,
  numbers,
}: {
  className?: string;
  numbers?: boolean;
}) {
  const linkClasses =
    "text-text-secondary hover:text-text-primary active:text-text-primary transition-colors" +
    " " +
    className;

  function Link({
    href,
    text,
    number,
    printNumber,
  }: {
    href: string;
    text: string;
    number: number;
    printNumber?: boolean;
  }) {
    return (
      <a className={linkClasses} href={href}>
        {printNumber ? (
          <span className="text-text-tertiary">{number}. </span>
        ) : null}
        {text}
      </a>
    );
  }
  return (
    <>
      <Link href="/docs" text="Docs" number={1} printNumber={numbers} />
      <Link href="/examples" text="Examples" number={2} printNumber={numbers} />
      <Link href="/" text="Donate 💸" number={3} printNumber={numbers} /> {/* to be added */}
      <div className="w-[1px] bg-text-tertiary opacity-30"></div>
      <a
        href="https://github.com/dilpreetsinghaulakh/mockup"
        target="_black"
        rel="noopener noreferrer"
        className="text-text-secondary opacity-50 hover:text-text-primary active:text-text-primary transition-colors"
      >
        <GithubLogo className="w-6" />
      </a>
    </>
  );
}

const MenuIconOpen = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 31L45 31" stroke="currentColor" strokeWidth="3" />
      <path d="M5 16L45 16" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
};

const MenuIconClose = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.8579 39.1421L39.1422 10.8579"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M10.8579 10.8579L39.1422 39.1421"
        stroke="currentColor"
        strokeWidth="3"
      />
    </svg>
  );
};

function MenuContent() {
  return (
    <div className="flex flex-col gap-8 items- text-3xl font-semibold w-full px-8">
      <Links className="" numbers={true} />
    </div>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const menuBtnClasses = "w-8 h-8";

  function handleMenuBtnClick() {
    if (menuBtnRef.current) {
      menuBtnRef.current.classList.add("opacity-0");

      setTimeout(() => {
        setIsOpen(!isOpen);

        if (menuRef.current) {
          isOpen
            ? setTimeout(() => {
                if (menuRef.current) {
                  menuRef.current.classList.toggle("hidden");
                  menuRef.current.classList.toggle("flex");
                }
              }, 500)
            : (menuRef.current.classList.toggle("hidden"),
              menuRef.current.classList.toggle("flex"));

          setTimeout(() => {
            if (menuRef.current) {
              menuRef.current.classList.toggle("opacity-100");
              menuRef.current.classList.toggle("opacity-0");
            }
          }, 1);
        } // menu visibility toggle

        menuBtnRef.current
          ? menuBtnRef.current.classList.remove("opacity-0")
          : null;
      }, 300);
    }
  }

  return (
    <header className="fixed z-50 w-screen m-0 px-8 py-8 bg-gradient-to-t from-transparent to-background-primary to-95% ">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <a
          className="flex items-center text-sm font-mono hover:ring-gray-500/50 active:ring-gray-500/50 ring-2 ring-transparent transition rounded"
          href="/"
        >
          <Image
            className="w-8 dark:filter dark:invert"
            src={"self-logo.svg"}
            alt="Logo"
            height={100}
            width={100}
          />
          <span className="mx-1 text-xs text-text-secondary">/</span>
          Mockup
        </a>
        <div className="hidden sm:flex gap-8">
          <Links />
        </div>
        <button
          ref={menuBtnRef}
          className="sm:hidden transition duration-300"
          onClick={handleMenuBtnClick}
        >
          {isOpen ? (
            <MenuIconClose className={menuBtnClasses} />
          ) : (
            <MenuIconOpen className={menuBtnClasses} />
          )}
        </button>
      </div>

      <div
        id="menu"
        ref={menuRef}
        className="absolute hidden -z-10 top-0 left-0 w-screen h-screen items-center backdrop-blur opacity-0 transition duration-500"
      >
        <MenuContent />
      </div>
    </header>
  );
}

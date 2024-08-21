"use client";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { ChevronDown } from "react-feather";

function Links({ links }: { links: { [key: string]: string[] } }) {
  return Object.entries(links).map(([section, pages]) => (
    <>
      <p>{section}</p>
      {pages.map((page) => (
        <a
          id={
            usePathname().includes(
              section.toLowerCase().replaceAll(" ", "-") +
                "/" +
                page.toLowerCase().replaceAll(" ", "-")
            )
              ? "current"
              : undefined
          }
          key={page}
          href={`/docs/${
            section.toLocaleLowerCase().replaceAll(" ", "-") +
            "/" +
            page.toLowerCase().replaceAll(" ", "-")
          }`}
        >
          {page}
        </a>
      ))}
    </>
  ));
}

export default function Sidebar({
  links,
}: {
  links: { [key: string]: string[] };
}) {
  const mobileMenuBtnRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  function handleMobileMenuBtnClick() {
    function toggleMobileMenu() {
      mobileMenuRef.current?.classList.toggle("h-[calc(100dvh-10rem)]");
      mobileMenuRef.current?.classList.toggle("h-0");
      mobileMenuRef.current?.classList.toggle("opacity-0");
      mobileMenuRef.current?.classList.toggle("opacity-100");
    }

    toggleMobileMenu();
    mobileMenuBtnRef.current?.classList.toggle("rotate-180");
    document.body.classList.toggle("overflow-hidden");
  }

  const commonLinkContainerClasses =
    " flex-col [&>p]:mt-2 [&>p]:font-medium [&>*]:py-2 [&>a]:transition-colors [&>a]:text-text-tertiary [&>a:hover]:text-text-secondary";

  return (
    <nav className="w-full lg:w-80 py-4 relative lg:sticky lg:top-24 lg:h-[calc(100vh-8rem)] overflow-y-scroll">
      <div
        className={
          "hidden lg:flex text-sm lg:pl-2 xl:pl-0 [&>#current]:font-bold [&>#current]:text-blue-700 [&>#current]:dark:text-blue-500" +
          commonLinkContainerClasses
        }
      >
        <Links links={links} />
      </div>
      <div className="flex items-center justify-center lg:hidden overflow-hidden">
        <p className="capitalize bg-background-secondary/50 border border-text-primary/10 px-4 py-1 rounded-full">
          {usePathname()
            .replaceAll("-", " ")
            .slice(1)
            .split("/")
            .findLast((x) => x)}
        </p>
        <button
          ref={mobileMenuBtnRef}
          onClick={handleMobileMenuBtnClick}
          className="bg-background-secondary/50 border border-text-primary/10 p-1 rounded-full absolute right-0 transition duration-300"
        >
          <ChevronDown />
        </button>
      </div>
      <div
        ref={mobileMenuRef}
        className={
          "flex mt-4 lg:hidden overflow-y-scroll h-0 opacity-0 transition-all duration-300" +
          commonLinkContainerClasses
        }
      >
        <Links links={links} />
      </div>
    </nav>
  );
}

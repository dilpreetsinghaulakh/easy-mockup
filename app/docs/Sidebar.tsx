"use client";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { ChevronDown } from "react-feather";
import packageJson from "../../package.json";

function Links({ links }: { links: { [key: string]: string[] } }) {
  const currentPath = usePathname();
  return (
    <>
      <div>
        <a href={"/docs"} id={currentPath === "/docs" ? "current" : undefined}>
          Introduction
        </a>
      </div>
      {Object.entries(links).map(([section, pages]) => {
        return (
          <div key={section}>
            <p>{section}</p>

            {pages.map((page) => {
              const formattedSection = section.toLowerCase().replace(/ /g, "-");
              const formattedPage = page.toLowerCase().replace(/ /g, "-");
              const path = `/${formattedSection}/${formattedPage}`;

              return (
                <a
                  id={currentPath.includes(path) ? "current" : undefined}
                  key={path}
                  href={`/docs${path}`}
                >
                  {page}
                </a>
              );
            })}
          </div>
        );
      })}
    </>
  );
}

export default function Sidebar({
  links,
}: {
  links: { [key: string]: string[] };
}) {
  const mobileMenuBtnRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const currentPath = usePathname();

  function handleMobileMenuBtnClick() {
    function toggleMobileMenu() {
      mobileMenuRef.current?.classList.toggle("h-[calc(100dvh-10rem)]");
      mobileMenuRef.current?.classList.toggle("h-0");
      mobileMenuRef.current?.classList.toggle("opacity-0");
      mobileMenuRef.current?.classList.toggle("opacity-100");
      mobileMenuBtnRef.current?.classList.toggle("rotate-180");
      document.body.classList.toggle("overflow-hidden");
    }

    toggleMobileMenu();

    const handleResize = () => {
      if (window.innerWidth > 1024) {
        toggleMobileMenu();
        window.removeEventListener("resize", handleResize);
      }
    };

    window.addEventListener("resize", handleResize);
  }

  const commonLinkContainerClasses =
    " flex-col [&>div]:flex [&>div]:flex-col [&>div>p]:mt-2 [&>div>p]:font-medium [&>div>*]:py-2 [&>div>a]:transition-colors [&>div>a]:text-text-tertiary [&>div>a:hover]:text-text-secondary";

  return (
    <nav className="w-full lg:w-64 py-4 relative lg:sticky lg:top-24 lg:h-[calc(100vh-8rem)] overflow-y-scroll">
      <div
        className={
          "hidden lg:flex text-sm [&>div>#current]:font-bold [&>div>#current]:text-blue-700 [&>div>#current]:dark:text-blue-500" +
          commonLinkContainerClasses
        }
      >
        <p className="text-xs text-text-tertiary font-light">DOCS FOR </p>
        <p className="text-l text-text-secondary font-mono mb-4">
          Ver {packageJson.version}
        </p>
        <Links links={links} />
      </div>
      <div className="flex items-center justify-center lg:hidden overflow-hidden">
        <p className="capitalize bg-background-secondary/50 border border-text-primary/10 px-4 py-1 rounded-full">
          {currentPath
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
        <p className="text-xs text-text-tertiary font-light text-right">
          DOCS FOR{" "}
        </p>
        <p className="text-sm text-text-secondary font-mono mb-4 text-right">
          Ver {packageJson.version}
        </p>
        <Links links={links} />
      </div>
    </nav>
  );
}

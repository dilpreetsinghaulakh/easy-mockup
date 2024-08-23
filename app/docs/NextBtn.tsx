"use client";
import { usePathname } from "next/navigation";
import { Check, ChevronRight } from "react-feather";
import { links } from "./sidebarContent";

const toTitleCase = (phrase: string) => {
  return phrase
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ") as string;
};

export default function NextBtn() {
  const firstSection = Object.keys(links)[0];
  const firstPage = links[firstSection as keyof typeof links][0];

  let [section, page] = usePathname()
    .replaceAll("-", " ")
    .slice(1)
    .split("/")
    .slice(1);

  if (section === undefined) {
    section = firstSection;
    page = firstPage;
  } else {
    section = toTitleCase(section);
    page = toTitleCase(page);

    let sectionIndex = Object.keys(links).indexOf(section);
    let pageIndex = links[section as keyof typeof links].indexOf(page);

    if (links[section as keyof typeof links].length === pageIndex + 1) {
      if (Object.keys(links).length === sectionIndex + 1) {
        return (
          <div className="flex w-full justify-end items-center">
            <div className="flex flex-col">
              <span className="text-text-secondary text-xs">FINISH</span>
              <p className="m-0 flex w-full items-center justify-between">
                <span className="text-sm font-light text-text-tertiary mr-1">
                  Docs Complete
                </span>
                <Check className="h-6 w-auto" />
              </p>
            </div>
          </div>
        );
      } else section = Object.keys(links)[sectionIndex + 1];
      pageIndex = 0;
      page = links[section as keyof typeof links][pageIndex];
    } else {
      page = links[section as keyof typeof links][pageIndex + 1];
    }
  }

  const nextPage = `/docs/${section
    .toLocaleLowerCase()
    .replaceAll(" ", "-")}/${page.toLowerCase().replaceAll(" ", "-")}`;

  return (
    <div className="flex w-full justify-end items-center">
      <a
        className=" no-underline border border-transparent hover:border-text-primary/20 active:border-text-primary/20 p-1 rounded-lg transition-colors"
        href={nextPage}
      >
        <div className="flex flex-col">
          <span className="text-text-secondary text-xs">NEXT</span>
          <p className="m-0 flex w-full items-center justify-between">
            <span className="flex items-center gap-1">
              <span className="text-xs font-light text-text-tertiary">
                {section}/
              </span>
              {page}
            </span>
            <ChevronRight className="h-6 w-auto" />
          </p>
        </div>
      </a>
    </div>
  );
}

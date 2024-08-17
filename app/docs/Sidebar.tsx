"use client";
import { usePathname } from "next/navigation";

export default function Sidebar({
  links,
}: {
  links: { [key: string]: string[] };
}) {
  return (
    <nav className="w-80 py-4 sticky top-24 lg:h-[calc(100vh-8rem)] overflow-y-scroll">
      <div className="hidden lg:flex flex-col text-sm lg:pl-2 xl:pl-0 [&>p]:mt-2 [&>p]:font-medium [&>*]:py-2 [&>a]:transition-colors [&>a]:text-text-tertiary [&>a:hover]:text-text-secondary">
        {Object.entries(links).map(([section, pages]) => (
          <>
            <p>{section}</p>
            {pages.map((page) => (
              <a
                className={
                  usePathname().includes(
                    page.toLowerCase().replaceAll(" ", "-")
                  )
                    ? "!text-blue-700 dark:!text-blue-500 font-bold"
                    : ""
                }
                key={page}
                href={`/docs/${
                  section.toLocaleLowerCase().replaceAll(" ", "-") +
                  "-" +
                  page.toLowerCase().replaceAll(" ", "-")
                }`}
              >
                {page}
              </a>
            ))}
          </>
        ))}
      </div>
    </nav>
  );
}

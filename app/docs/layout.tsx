import Sidebar from "./Sidebar";
import { Inter } from "next/font/google";
import { links } from "./sidebarContent";
import NextBtn from "./NextBtn";

const fontInter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={"mx-8 " + fontInter.className}>
      <div className="max-w-5xl w-full mx-auto flex gap-2 flex-col lg:flex-row">
        <Sidebar links={links} />

        <section
          className={
            "w-auto lg:w-full max-w-none overflow-hidden h-full p-4 pt-8 bg-background-secondary/20 border border-text-primary/5 rounded-2xl lg:rounded-3xl " + // layout styles
            "prose prose-base prose-h1:text-3xl prose-hr:my-12 prose-hr:border-text-primary/5 prose-neutral dark:prose-invert" // prose styles
          }
        >
          {children}
          <NextBtn />
        </section>
      </div>
    </section>
  );
}

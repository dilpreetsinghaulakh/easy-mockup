"use client";
import Image from "next/image";
import { useRef } from "react";
import "./features.css";

function Breakdown() {
  return (
    <>
      <div className="flex flex-col w-full sm:flex-row gap-4 relative">
        <div className="flex flex-col gap-2 items-center sm:w-1/2">
          <div
            className="flex justify-center bg-background-secondary/50 border border-text-tertiary/50 p-4 rounded-2xl"
            style={{
              aspectRatio: "1376/895",
            }}
          >
            <Image
              src="/home-mackbook-composition-base.svg"
              alt="Macbook composition"
              width={1376}
              height={895}
            />
          </div>
          <p className="text-center mt-2">Base</p>
          <ul className="font-mono text-text-secondary text-center">
            <li>100% Vector</li>
            <li>Scalable</li>
            <li>Accurate depiction</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 items-center sm:w-1/2">
          <div
            className="flex justify-center items-center w-full relative sm:h-full bg-background-secondary/50 border border-text-tertiary/50 p-4 rounded-2xl"
            style={{
              aspectRatio: "1.53/1",
            }}
          >
            <embed
              className="absolute h-full w-auto z-10"
              src="/home-mackbook-composition-screen.svg"
            />
          </div>
          <p className="text-center mt-2">Screen</p>
          <ul className="font-mono text-text-secondary text-center">
            <li>True screen mask</li>
            <li>No overlaying elements</li>
            <li>Accurate depiction</li>
          </ul>
        </div>
      </div>
    </>
  );
}

function Code({ code, emphasize }: { code: string; emphasize?: number }) {
  return (
    <div className="bg-background-secondary/50 border border-text-tertiary/50 p-4 rounded-2xl">
      <div className="font-mono text-sm text-text-tertiary whitespace-pre-wrap">
        {code.split("\n").map((line, index) => (
          <p
            key={index}
            className={
              "mb-1" +
              (index == emphasize
                ? " text-blue-700 dark:text-blue-400 font-bold"
                : "")
            }
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

function Execution() {
  const testCode = `
function Mockup(children) {
  return (
    <svg>
    ...
      <foreignObject>
        <div style={...}>
          {children}
        </div>
      </foreignObject>
    ...
    <svg>
  );
}`;
  return (
    <>
      <Code code={testCode} emphasize={7} />
      <p className="font-serif text-text-secondary mt-4">
        Thats it, just a{" "}
        <span className="bg-background-secondary/50 border border-text-tertiary/50 px-2 rounded font-mono">
          foreignObject
        </span>{" "}
        with a div inside. This is the most basic way to use the mockup. It
        provides a lot of flexibility and control over the content. Please note
        that the there are some limitations to this approach especially when it
        comes to transitions and animations.
      </p>
    </>
  );
}

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main ref={containerRef} className="max-w-5xl mx-auto px-8 lg:px-0 mt-16">
      <h1 className="font-serif text-5xl text-center text-purple-800 dark:text-purple-200 mb-8">
        Composition
      </h1>
      <Breakdown />
      <h1 className="font-serif text-5xl text-center text-teal-700 dark:text-teal-200 my-8">
        Execution
      </h1>
      <Execution />
    </main>
  );
}

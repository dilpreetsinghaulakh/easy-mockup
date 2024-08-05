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
            className="flex justify-center rounded-2xl bg-background-secondary"
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
          <p className="text-center">Base</p>
          <ul className="font-mono text-center">
            <li>100% Vector</li>
            <li>Scalable</li>
            <li>Accurate depiction</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 items-center sm:w-1/2">
          <div
            className="flex justify-center w-full relative sm:h-full rounded-2xl bg-background-secondary"
            style={{
              aspectRatio: "1376/895",
            }}
          >
            <embed
              className="absolute h-full w-auto z-10"
              src="/home-mackbook-composition-screen.svg"
            />
          </div>
          <p className="text-center">Screen</p>
          <ul className="font-mono text-center">
            <li>True screen mask</li>
            <li>No overlaying elements</li>
            <li>Accurate depiction</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main
      ref={containerRef}
      className="max-w-5xl mx-auto px-8 lg:px-0 mt-16 mb-96"
    >
      <h1 className="font-serif text-5xl text-center text-purple-800 dark:text-purple-200 mb-8">
        Composition
      </h1>
      <Breakdown />
    </main>
  );
}

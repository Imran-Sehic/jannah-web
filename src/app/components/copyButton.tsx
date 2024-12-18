"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function CopyButton({
  text,
  quote,
  index,
}: Readonly<{
  text: string;
  quote: { quote: string; author: string };
  index: number;
}>) {
  const [hoverIndex, setHoverIndex] = useState<number | undefined>(undefined);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        `${window.location.href.split("#")[0]}#quote-${index}`
      );
    } catch (error) {
      console.error("Failed to copy text: ", error);
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <a
      className={`relative flex cursor-default pointer-events-none flex-col text-center bg-gray-300 text-gray-800 rounded-lg shadow-md max-w-2xl ${
        window.location.hash == `#quote-${index}`
          ? "shadow-[0_0_20px_20px_rgba(255,255,255,1)]"
          : ""
      }`}
      href={`#${index}`}
      id={`quote-${index}`}
    >
      <p className="text-xl italic p-4 flex-1">{`"${quote.quote}"`}</p>
      <div className="bg-slate-400 p-4 py-2 flex items-center justify-center font-semibold rounded-b-lg">
        <div className="relative">
          <button
            className="rounded-full p-2 hover:bg-slate-500 mr-4 pointer-events-auto"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(undefined)}
            onClick={(e) => {
              e.preventDefault();
              handleCopy();
            }}
          >
            <Image src={`/copy.svg`} alt="Copy Icon" width={20} height={20} />
          </button>
          {hoverIndex == index && (
            <div className="absolute rounded bg-black bottom-[-5px] px-1 text-white translate-y-[100%] translate-x-[-15%]">
              {text}
            </div>
          )}
        </div>
        {quote.author}
      </div>
      <div className="absolute bottom-[-15px] left-[50%] translate-x-[-50%] w-0 h-0 border-t-slate-400 border-t-[15px] border-l-transparent border-l-[15px] border-r-transparent border-r-[15px]" />
    </a>
  );
}

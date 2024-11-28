"use client";

import AppStoreButton from "@/app/components/appStoreButton";
import PlayStoreButton from "@/app/components/playStoreButton";
import useTailwindBreakpoint from "@/utils/useTailwindBreakpoint";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Popup({
  buttonText,
}: Readonly<{ buttonText: string }>) {
  const screenSize = useTailwindBreakpoint();
  const isMobile =
    screenSize == "xs" ||
    screenSize == "sm" ||
    screenSize == "md" ||
    screenSize == "lg";

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div
      className={`fixed bottom-[-150px] m-0 sm:m-2 left-0 right-0 mx-auto sm:mx-auto w-[100%] sm:w-[50%] md:w-[55%] bg-black opacity-80 p-4 text-center rounded shadow-lg transition-transform duration-500 ${
        isVisible ? "translate-y-[-150px]" : "translate-y-0"
      }`}
    >
      <button
        onClick={handleClose}
        className="absolute top-2 right-2 text-white w-6 h-6 flex items-center justify-center hover:text-gray-300"
        aria-label="Close"
      >
        ✕
      </button>
      <div className="flex justify-center items-center pt-6 gap-2">
        {isMobile ? (
          <>
            <a
              href="https://play.google.com/store/apps/details?id=com.jannahadhan.adhan"
              target="_blank_"
            >
              <div className="w-[160px] h-[50px] flex gap-4 justify-center items-center p-2 bg-black rounded border-2 border-white">
                <Image
                  src={"/play_logo.svg"}
                  alt="Google Play Icon"
                  width={25}
                  height={25}
                  priority
                />
                <p className="text-white font-bold">{buttonText}</p>
              </div>
            </a>
            <p className="text-white font-bold">OR</p>
            <a
              href="https://apps.apple.com/us/app/jannah-prayer-times/id6503667491"
              target="_blank_"
            >
              <div className="w-[160px] h-[50px] flex gap-4 justify-center items-center p-2 bg-black rounded border-2 border-white">
                <Image
                  src={"/apple_logo.svg"}
                  alt="App Store Icon"
                  width={25}
                  height={25}
                  priority
                />
                <p className="text-white font-bold">{buttonText}</p>
              </div>
            </a>
          </>
        ) : (
          <>
            <PlayStoreButton text={buttonText} />
            <div className="w-4" />
            <AppStoreButton text={buttonText} />
          </>
        )}
      </div>
    </div>
  );
}

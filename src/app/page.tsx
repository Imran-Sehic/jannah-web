import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import AppStoreButton from "./components/appStoreButton";
import PlayStoreButton from "./components/playStoreButton";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_100px] h-full font-[family-name:var(--font-montserrat)]">
      <div
        className="w-full flex flex-col gap-5 px-[5%] sm:px-[20%] py-10 items-center relative bg-cover bg-center"
        style={{
          backgroundImage: "url('/background.png')",
        }}
      >
        <Link href={"/"}>
          <Image
            className="dark:invert"
            src="/jannah_logo.png"
            alt="Jannah logo"
            width={100}
            height={100}
          />
        </Link>
        <div className="flex flex-col text-center items-center">
          <p
            className="text-[40px] sm:text-[80px] text-white font-bold"
            style={{
              textShadow: `
          -1px -1px 0 gray,
          1px -1px 0 gray,
          -1px 1px 0 gray,
          1px 1px 0 gray
        `,
            }}
          >
            Welcome to{" "}
            <span
              className="text-yellow-500 text-[50px] sm:text-[90px]"
              style={{
                textShadow: `
          -1px -1px 0 gray,
          1px -1px 0 gray,
          -1px 1px 0 gray,
          1px 1px 0 gray
        `,
              }}
            >
              Jannah
            </span>
          </p>
          <p className="text-[20px] sm:text-[25px] text-slate-600 font-semibold">
            Your daily reminder to be a better muslim!
          </p>
        </div>
        <div className="mt-10">
          <p className="text-center">
            Download the mobile app from below or scan the QR code
          </p>
          <div className="flex flex-col items-center gap-5 mt-4">
            <PlayStoreButton />
            <div className="w-full h-2 bg-gradient-to-r from-transparent via-white to-transparent" />
            <AppStoreButton />
          </div>
        </div>
        <p className="w-full text-center mt-20 py-3 text-slate-600 font-bold bg-gradient-to-r from-transparent via-white to-transparent">
          See wise quotes{" "}
          <Link
            href={"/quotes"}
            className="text-yellow-600 text-xl underline underline-offset-4"
          >
            here
          </Link>
        </p>
      </div>
      <footer className="flex justify-center gap-10 bg-slate-100 px-[20%] py-10">
        <a href="https://www.facebook.com/islamske.slike" target="_blank_">
          <FaFacebook className="text-blue-500" size={30} />
        </a>
        <a href="https://www.instagram.com/jannah__bh/" target="_blank_">
          <FaInstagram className="text-red-400" size={30} />
        </a>
        <a href="https://www.tiktok.com/@jannah__bh?lang=en" target="_blank_">
          <FaTiktok size={30} />
        </a>
      </footer>
    </div>
  );
}

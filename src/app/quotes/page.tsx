import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jannah - Quotes",
  description: "Take a look at some of the wise quotes from well known daees!",
};

export default function Quotes() {
  return (
    <div
      className="w-full flex flex-col gap-5 px-[5%] sm:px-[20%] py-10 items-center relative bg-cover bg-center h-full font-[family-name:var(--font-montserrat)]"
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
      <div className="flex flex-col gap-10 my-20">
        <p>Quotes here!</p>
        <p>Quotes here!</p>
        <p>Quotes here!</p>
        <p>Quotes here!</p>
        <p>Quotes here!</p>
      </div>
    </div>
  );
}

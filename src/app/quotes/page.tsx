import { citati, quotes } from "@/data/quotes";
import { balkanCountries } from "@/utils";
import { Metadata } from "next";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jannah - Quotes",
  description: "Take a look at some of the wise quotes from well known daees!",
};

export default async function Quotes() {
  const requestHeaders = headers();
  const country = (await requestHeaders).get("x-detected-country") || "Unknown";

  const data = balkanCountries.includes(country) ? citati : quotes;

  return (
    <div
      className="w-full overflow-auto flex flex-col gap-5 px-[5%] sm:px-[20%] py-10 items-center relative bg-cover bg-center h-full font-[family-name:var(--font-montserrat)]"
      style={{
        backgroundImage: "url('/background.png')",
        backgroundAttachment: "fixed",
        backgroundColor: "black",
      }}
    >
      <Link href={"/"}>
        <Image
          className="dark:invert"
          src="/jannah_logo.png"
          alt="Jannah logo"
          width={100}
          height={100}
          priority
        />
      </Link>
      <div className="flex flex-col gap-20 my-20">
        {data.map((quote) => (
          <>
            <div className="relative text-center bg-gray-300 text-gray-800 rounded-lg shadow-md max-w-2xl">
              <p className="text-xl italic p-4">{`"${quote.quote}"`}</p>
              <p className="bg-slate-400 p-4 py-2 font-semibold rounded-b-lg">
                {quote.author}
              </p>
              <div className="absolute bottom-[-15px] left-[50%] translate-x-[-50%] w-0 h-0 border-t-slate-400 border-t-[15px] border-l-transparent border-l-[15px] border-r-transparent border-r-[15px]" />
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

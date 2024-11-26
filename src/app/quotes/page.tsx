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
  const ip = (await requestHeaders).get("x-forwarded-for") || "8.8.8.8";

  const geoResponse = await fetch(`https://ipapi.co/${ip}/json/`);
  const geoData = await geoResponse.json();

  const country = geoData.country || "Unknown";

  const data = balkanCountries.includes(country) ? citati : quotes;

  return (
    <div
      className="w-full overflow-auto flex flex-col gap-5 px-[5%] sm:px-[20%] py-10 items-center relative bg-cover bg-center h-full font-[family-name:var(--font-montserrat)]"
      style={{
        backgroundImage: "url('/background.png')",
        backgroundAttachment: "fixed",
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
        {data.map((quote, index) => (
          <>
            <div className="flex flex-col items-center text-center">
              <p className="text-xl italic font-semibold">{`"${quote.quote}"`}</p>
              <p>{quote.author}</p>
            </div>
            {index != quotes.length - 1 && (
              <div className="w-full h-2 bg-gradient-to-r from-transparent via-white to-transparent" />
            )}
          </>
        ))}
      </div>
    </div>
  );
}

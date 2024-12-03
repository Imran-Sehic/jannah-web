import { citati, quotes } from "@/data/quotes";
import { balkanCountries } from "@/utils";
import { Metadata } from "next";
import Head from "next/head";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import Popup from "./components/popup";

export const metadata: Metadata = {
  title: "Jannah - Quotes",
  description: "Take a look at some of the wise quotes from well known daees!",
};

export default async function Quotes() {
  const requestHeaders = headers();
  const country = (await requestHeaders).get("x-detected-country") || "Unknown";

  const data = balkanCountries.includes(country) ? citati : quotes;

  const buttonText = balkanCountries.includes(country) ? "Preuzmi" : "Download";

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Quotes Collection",
    description: metadata.description,
    author: "Jannah",
    mainEntity: data.map((quote) => ({
      "@type": "Quotation",
      text: quote.quote,
      author: quote.author,
    })),
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Head>
      <Image
        className="fixed w-full h-full bg-black top-0 right-0 -z-10"
        src="/background.webp"
        alt="Jannah logo"
        layout="fill"
        objectFit="cover"
        priority
        quality={90}
      />
      <div
        className="relative w-full overflow-auto flex flex-col gap-5 px-[5%] sm:px-[10%] xl:px-[15%] py-10 items-center relative bg-cover bg-center h-full font-[family-name:var(--font-montserrat)]"
        // style={{
        //   backgroundImage: "url('/background.png')",
        //   backgroundAttachment: "fixed",
        //   backgroundColor: "black",
        // }}
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
        <div className="grid grid-cols[1fr] sm:grid-cols-[1fr_1fr] 2xl:grid-cols-[1fr_1fr_1fr] gap-20 my-20">
          {data.map((quote) => (
            <>
              <div className="relative flex flex-col text-center bg-gray-300 text-gray-800 rounded-lg shadow-md max-w-2xl">
                <p className="text-xl italic p-4 flex-1">{`"${quote.quote}"`}</p>
                <p className="bg-slate-400 p-4 py-2 font-semibold rounded-b-lg">
                  {quote.author}
                </p>
                <div className="absolute bottom-[-15px] left-[50%] translate-x-[-50%] w-0 h-0 border-t-slate-400 border-t-[15px] border-l-transparent border-l-[15px] border-r-transparent border-r-[15px]" />
              </div>
            </>
          ))}
        </div>
      </div>
      <Popup buttonText={buttonText} />
    </>
  );
}

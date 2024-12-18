import { citati, quotes } from "@/data/quotes";
import { balkanCountries } from "@/utils";
import { Metadata } from "next";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import CopyButton from "../components/copyButton";
import Popup from "./components/popup";

export const metadata: Metadata = {
  title: "Jannah - Quotes",
  description: "Take a look at some of the wise quotes from well known daees!",
};

export default async function Quotes() {
  const requestHeaders = await headers();
  const country = requestHeaders.get("x-detected-country") || "Unknown";

  const data = balkanCountries.includes(country) ? citati : quotes;

  const buttonText = balkanCountries.includes(country) ? "Preuzmi" : "Download";
  const copyButtonText = balkanCountries.includes(country) ? "Kopiraj" : "Copy";

  const protocol = requestHeaders.get("x-forwarded-proto") || "http";
  const host = requestHeaders.get("host");

  const fullUrl = `${protocol}://${host}/quotes`;

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Quotes",
    name: "Quotes Collection",
    description: metadata.description,
    author: "Jannah",
    mainEntity: data.map((quote, index) => ({
      "@type": "Quotation",
      text: quote.quote,
      author: quote.author,
      url: `${fullUrl}#quote-${index}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      <Image
        className="fixed w-full h-full bg-black top-0 right-0 -z-10"
        src="/background.webp"
        alt="Jannah logo"
        layout="fill"
        objectFit="cover"
        priority
        quality={90}
      />
      <div className="relative w-full overflow-auto flex flex-col gap-5 px-[5%] sm:px-[10%] xl:px-[15%] py-10 items-center relative bg-cover bg-center h-full font-[family-name:var(--font-montserrat)]">
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
          {data.map((quote, index) => (
            <CopyButton quote={quote} index={index} text={copyButtonText} />
          ))}
        </div>
      </div>
      <Popup buttonText={buttonText} />
    </>
  );
}

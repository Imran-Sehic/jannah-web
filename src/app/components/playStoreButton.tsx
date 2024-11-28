import Image from "next/image";
import QRGenerator from "./qrGenerator";

export default function PlayStoreButton({ text }: Readonly<{ text: string }>) {
  return (
    <div className="flex gap-2 items-center">
      <a
        href="https://play.google.com/store/apps/details?id=com.jannahadhan.adhan"
        target="_blank_"
      >
        <div className="w-[230px] h-[70px] flex gap-4 items-center p-2 px-4 bg-black rounded border-2 border-white">
          <Image
            src={"/play_logo.svg"}
            alt="Google Play Icon"
            width={40}
            height={40}
            priority
          />
          <div className="text-white text-left">
            <p>{text}</p>
            <p className="font-bold text-xl">Google Play</p>
          </div>
        </div>
      </a>
      <p className="text-white">OR</p>
      <QRGenerator
        url="https://play.google.com/store/apps/details?id=com.jannahadhan.adhan"
        altText="Jannah - Android"
      />
    </div>
  );
}

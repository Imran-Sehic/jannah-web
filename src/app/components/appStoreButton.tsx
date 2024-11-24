import Image from "next/image";
import QRGenerator from "./qrGenerator";

export default function AppStoreButton() {
  return (
    <div className="flex gap-2 items-center">
      <a
        href="https://apps.apple.com/us/app/jannah-prayer-times/id6503667491"
        target="_blank_"
      >
        <div className="w-[230px] h-[70px] flex gap-4 items-center p-2 px-4 bg-black rounded border-2 border-white">
          <Image
            src={"/apple_logo.svg"}
            alt="App Store Icon"
            width={40}
            height={40}
          />
          <div className="text-white">
            <p>Get it on</p>
            <p className="font-bold text-xl">App Store</p>
          </div>
        </div>
      </a>
      <p>OR</p>
      <QRGenerator
        url="https://apps.apple.com/us/app/jannah-prayer-times/id6503667491"
        altText="Jannah - iOS"
      />
    </div>
  );
}

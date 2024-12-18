"use client";

import Image from "next/image";
import QRCode from "qrcode";
import { useEffect, useState } from "react";

export default function QRGenerator({
  url,
  altText,
}: Readonly<{ url: string; altText: string }>) {
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  useEffect(() => {
    QRCode.toDataURL(url)
      .then((url: string) => setQrCodeUrl(url))
      .catch((err: string) => console.error(err));
  }, [url]);

  return (
    <div>
      <Image src={qrCodeUrl || ""} alt={altText} width={70} height={70} />
    </div>
  );
}

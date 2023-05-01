import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="max-h-20 max-w-full flex flex-row justify-center items-center gap-6 font-semibold text-black">
        <span className="w-34 text-center">Watery Water © 2023</span>
        <Link href={"/Agb"} className="w-28 text-center">AGB</Link>
        <Link href={"/Impressum"} className="w-28 text-center">Impresssum</Link>
        <span className="w-28 text-center">Modul 133</span>
      </div>
    </>
  )
}

export default Footer;
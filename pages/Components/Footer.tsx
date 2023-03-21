import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <>
            <div className="h-20 w-full flex justify-center items-center gap-10 font-semibold">
                <p>Watery Water © 2023</p>
                <Link href={"/Agb"}>AGB</Link>
                <Link href={"/Impressum"}>Impresssum</Link>
                <p>Modul 133</p>
            </div>
        </>
    )
}

export default Footer;
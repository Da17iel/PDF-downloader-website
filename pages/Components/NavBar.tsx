import React from "react";
import Link from "next/link";

const NavBar = () => {
    return (
        <>
            <nav className="fixed h-20 w-full flex justify-center items-center gap-10 text-white font-bold">
                <Link className="w-24 text-center " href={"/Shop"}>Shop</Link>
                <Link className="w-24 text-center" href={"/AboutUs"}>About us</Link>
                <Link className="w-24 text-center" href={"https://github.com/Da17iel/watery-website/"} target="_blank">Our GitHub</Link>
            </nav>

            <nav className="fixed h-20 w-48 top-0 right-0 flex justify-center items-center gap-10 text-white font-bold">
                <Link className="w-24" href={"/Login"}>Login</Link>
                <Link className="w-24" href={"/Register"}>Register</Link>
            </nav>
        </>
    )
}

export default NavBar;
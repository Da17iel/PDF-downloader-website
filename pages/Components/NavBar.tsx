import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <nav className="fixed h-20 w-full text-white flex justify-center items-center gap-1 font-bold">
        <Link className="w-24 text-center " href={"/Components/ShopHub/Shop"}>Shop</Link>
        <Link className="w-24 text-center" href={"/AboutUs"}>About us</Link>
        <Link className="w-24 text-center" href={"https://github.com/Da17iel/watery-website/"} target="_blank">Our GitHub</Link>
      </nav>

      <nav className="fixed h-20 w-48 top-0 right-0 text-white flex justify-center items-center gap-1 font-bold">
        <a className="w-24 text-center" href="/api/auth/login">Login</a>
        <a className="w-24 text-center" href="/api/auth/logout">Logout</a>
        <Link className="w-24 text-center" href={"/Register"}>Register</Link>
      </nav>
    </>
  )
}

export default NavBar;
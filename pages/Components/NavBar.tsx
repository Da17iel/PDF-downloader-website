import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <nav className="fixed top-0 h-16 w-full bg-gradient-to-r from-blue-500 to-cyan-300 text-white grid grid-cols-8 grid-rows-1">
        <div className="col-span-1"></div>
        <div className="w-inherit font-bold col-span-6 flex justify-center items-center gap-4">
          <Link className="w-24 text-center " href={"/Components/ShopHub/Shop"}>Shop</Link>
          <Link className="w-24 text-center" href={"/AboutUs"}>About us</Link>
          <Link className="w-24 text-center" href={"https://github.com/Da17iel/watery-website/"} target="_blank">Our GitHub</Link>
        </div>
        <div className="w-inherit font-bold col-span-1 flex justify-end items-center">
          <a className="w-24 text-center" href="/api/auth/login">Login</a>
          <a className="w-24 text-center" href="/api/auth/logout">Logout</a>
        </div>
      </nav>
    </>
  )
}

export default NavBar;
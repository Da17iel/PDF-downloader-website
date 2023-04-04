import React from "react";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

export default function Login() {
  return (
    <>
      <NavBar />
      <div className="grid grid-cols-4 grid-rows-6 h-screen">
        <div className="row-start-2 col-start-2 col-span-2 row-span-5 bg-gray-800 rounded-t-lg">
          <div className="p-4 text-white">

            <h1>Login</h1>
            <form action="./editForm.tsx" method="post">
              <label htmlFor="email">Email:</label><br />
              <input 
                type="text"
                name="email"
                id="email"
                className="w-3/4"
                placeholder="max-muster@gmail.com"
                required/><br />
                        
              <label htmlFor="password">Password:</label><br />
              <input type="password" name="password" id="password" /><br />
              <input type="submit" value="Submit" />
            </form>
            <p>Login now!</p>
          </div>
        </div>
      </div>
    </>
  )
}
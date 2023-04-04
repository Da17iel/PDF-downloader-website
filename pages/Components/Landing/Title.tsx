import Image from "next/image";
import React from "react";

const Title = () => {
  return (
    <>
      <div 
        className="bg-cover flex justify-center items-center flex-wrap min-h-screen max-h-screen text-white"
        style={{ backgroundImage: "url('/images/water3.jpg')"}}
      >
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-300">Watery Water</h1>
          <p className="text-medium font-medium text-center">Das reinste Nass für jede Stunde</p>
        </div>
      </div>
    </>
  )
}

export default Title
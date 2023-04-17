import React from "react";
import Footer from "../Footer";
import Image from "next/image";

const SubSection = () => (
  <>
    <div className="bg-cyan-100">
      <div className="min-h-screen max-h-screen flex justify-center items-center">
        <div className="h-[35rem] w-[70rem] overflow-hidden relative">
          <Image height={560} width={2000} src={"/images/water-sub.jpg"} alt="Water drop"/>
          <div className="absolute inset-0 bg-gradient-to-l from-blue-800"></div>
        </div>
      </div>
      <div className="bg-inherit pb-7">
        <Footer />
      </div>
    </div>
  </>
)

export default SubSection;
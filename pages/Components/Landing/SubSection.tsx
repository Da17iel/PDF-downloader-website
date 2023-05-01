import React from "react";
import Footer from "../Footer";
import Image from "next/image";

const SubSection = () => (
  <>
    <div className="bg-cyan-100">
      <div className="min-h-screen max-h-screen flex justify-center items-center">
        <div className="h-[35rem] w-[70rem] overflow-hidden grid grid-cols-5 grid-rows-3 bg-cover">
          <div className="bg-cover col-span-2 row-span-3" 
            style={{ backgroundImage: "url('/images/sub-image.jpg')" }}></div>
          <div className="bg-gradient-to-l from-blue-600 to-sky-400  col-span-3 row-span-3 flex justify-center items-end flex-col pr-7 gap-5">
            <h2 className="text-end text-white text-3xl font-bold">Das neue Premium Wasser</h2>
            <p className="text-end text-white font-light pl-2">
              Wir bieten Ihnen das beste Wasser, dass Sie in Ihrem Leben je getrunken haben.
              Entdecken Sie jetzt unsere neuen Geschmacksrichtungen richtung Wasser und jetzt ganz exklusiv sogar Wasser.
              Unser Service wird Sie bestimmt nicht entäuschen :D
            </p>
          </div>
        </div>
      </div>
      <div className="bg-inherit pb-7">
        <Footer />
      </div>
    </div>
  </>
)

export default SubSection;
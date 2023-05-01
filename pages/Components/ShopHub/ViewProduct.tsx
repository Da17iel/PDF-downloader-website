import { Product } from "@/types/product-types";
import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";

interface Props {
  product: Product[]
}

const ViewProduct = ({ product }: Props) => {
  const prod = product[0];
  return (
    <>
      <NavBar />
      <div className="container mx-auto h-[95vh] grid grid-cols-4 grid-rows-8 gap-4 mt-2">
        <div className="col-span-3 row-span-5 flex justify-center items-center shadow-lg rounded-lg">
          <div className="h-3/4 w-3/4 bg-gray-200"></div>
        </div>
        <div className="col-span-1 row-span-5 shadow-lg rounded-lg">
          <div className="h-1/2 flex items-center">
            <div className=" ml-[1rem]">
              <span key={prod.product_id} className="text-red-500 font-semibold text-2xl ">{`${prod.product_price}.-`}</span>
              <h1 key={prod.product_id} className="font-bold text-4xl">{prod.product_name}</h1>
              <p key={prod.product_id} className="h-55 w-2/3 break-words">
                {prod.product_description}
              </p>
            </div>
          </div>
          <span></span>
          <div className="h-1/2 flex justify-center items-end pb-20">
            <button type="button" className=" h-12 w-11/12 rounded-lg text-white bg-gradient-to-r from-blue-500 to-cyan-300">Add to Cart</button>
          </div>
        </div>
        <div className="col-span-4 row-span-3 shadow-lg rounded-lg mb-2"></div>
      </div>
      <Footer />
    </>
  )
}



export async function getServerSideProps(context: any) {
  const { id } = context.query;
  if (!id){
    return console.log("No Item was selected")
  }

  const res = await fetch(`http://localhost:3000/api/product/${id}`)
  const data = await res.json();

  return {
    props: {
      product: data,
    },
  }
}

export default ViewProduct;
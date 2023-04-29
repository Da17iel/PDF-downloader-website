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
      <div className="container mx-auto h-screen grid grid-cols-4 grid-rows-8">
        <div className="col-span-3 row-span-5 bg-red-500"></div>
        <div className="col-span-1 row-span-5 bg-green-500 flex justify-center items-center flex-col">
          <h1 key={prod.product_id} className="font-bold text-3xl">{prod.product_name}</h1>
          <p key={prod.product_id} className="font-semibold text-3xl text-red-500">{`${prod.product_price}.-`}</p>
        </div>
        <div className="col-span-4 row-span-3 bg-blue-500"></div>
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
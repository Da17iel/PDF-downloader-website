import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { Product } from "@/types/product-types";

interface Props {
  data: Product;
}

const Shop = ({ data }: Props) => {

  return (
    <>
      <div className="h-screen bg-red-500
      ">
        <NavBar />
          <ul>
            <li key={data.product_id} className="h-20 w-36 text-white">{data.product_name}</li>
          </ul>
        <Footer />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/products');
  const data = await res.json();

  return {
    props: {
      data,
    },
  }
}

export default Shop;
import React, { useEffect } from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import ItemDisplay from "./ItemDisplay";
import { Product } from "@/types/product-types";
import { useRouter } from "next/router";

// defines the product prop as type Porduct[]
// meaning it's an array with elements of type Product
interface Props {
  product: Product[];
}

const Shop = ({ product }: Props) => {

  const router = useRouter();

  const myStyle = {
    backgroundColor: 'red',
    color: 'white',
    fontSize: '24px',
  };

  return (
    <>
      <NavBar />
      <div className="h-[95vh] flex flex-col justify-center items-center">
        <div className="h-2/4 w-1/2 flex justify-center items-center flex-wrap gap-4">
          {/* For every item in the product prop array create a new element*/}
          {product.map((item) => (
            <button type={"button"} onClick={() => {router.push(`/Components/ShopHub/ViewProduct?id=${item.product_id}`)}}>
              <ItemDisplay id={item.product_id} name={item.product_name} price={item.product_price} />
            </button>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}


// Gets executed before the page is loaded
export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/getProducts');

  // saves the response as JSON in data variable
  const data = await res.json();

  // returns the fetched data from the API URL
  // --> returns: Array<JSON: Product>
  return {
    props: {
      product: data,
    },
  }
}

export default Shop;
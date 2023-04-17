import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import prisma from "@/prismaClient";

const Shop = async () => {
  const product = await prisma.product.findUnique({
    where: {
      product_id: 1,
    },
  })

  const readableProduct = JSON.stringify(product)

  return (
    <>
      <NavBar />
        <ul>
          <li>{readableProduct}</li>
        </ul>
      <Footer />
    </>
  )
}

export default Shop;
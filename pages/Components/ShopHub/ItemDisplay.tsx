import React from "react";

interface Props {
  id: number,
  name: string,
  price: number
}

const ItemDisplay = ({ id, name, price }: Props) => {
  return (
    <>
      <div key={id} className=" h-48 w-64 bg-slate-300 shadow-md flex flex-col justify-center gap-0.5 border rounded-xl">
        <div key={id} className=" w-56 h-28 bg-blue-500 ml-3.5"></div>
        <p key={id} className="ml-3.5 font-semibold text-base">{name}</p>
        <p key={id} className="ml-3.5 text-sm">{`${price}.-`}</p>
      </div>
    </>
  )
}

export default ItemDisplay;
import React, { useState } from "react";

const Test = (): JSX.Element => {

  //useState, used for getting current state and update it
  const [count, setCount] = useState(0)

  // When clicked it will update the current count + 1
  function handleClick(): void {
    setCount(count + 1)
  }

  return (
    <>
      <div className="flex justify-center items-center h-80 w-80">
        <button onClick={handleClick} className="bg-blue-500 w-12 h-10 rounded-md border-sm">{count}</button>
      </div>
    </>
  )
}

export default Test; 
import React, { useContext } from "react";
import { Context } from "../Context";

export default function Home() {
  const { count, changeCount } = useContext(Context);
  return (
    <>
      <button onClick={() => changeCount(1)}>+</button>
      {count}
      <button onClick={() => changeCount(-1)}>-</button>
    </>
  );
}

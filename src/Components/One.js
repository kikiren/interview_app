import React, { useContext } from "react";
import { Context } from "../Context";

export default function One() {
  const { count } = useContext(Context);
  return <div>{count}</div>;
}

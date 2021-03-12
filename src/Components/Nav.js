import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        fontWeight: 700,
        textDecoration: "none",
      }}
    >
      <NavLink to="/">Home</NavLink>
      <NavLink to="/one">One</NavLink>
    </div>
  );
}

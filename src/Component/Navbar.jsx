import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
export default function Navbar() {
  return (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/params"}>Params</Link>
      </li>
    </>
  );
}

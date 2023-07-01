import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function Params() {

  return (
    <>
      <h1>Params page</h1>
      

      <li>
        <Link to={'/user'}>Got yo user page</Link>
      </li>

    </>
  );
}

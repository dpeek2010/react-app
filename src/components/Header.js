import React from "react";
import Image from "../logo192.png";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img src={Image} className="nav-logo" alt="" />
        <h3 className="logo-text">ReactFacts</h3>
        <h4 className="nav-title">React Course - Project 1</h4>
      </nav>
    </header>
  );
}

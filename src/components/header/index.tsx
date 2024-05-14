"use client";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import { Heart } from "@phosphor-icons/react";
import { useState } from "react";
import Favorites from "../favorites";

export default function Header() {
  const [toggleFav, setToggleFav] = useState(false);
  function toggleFavorites() {
    setToggleFav(toggleFav ? false : true);
  }
  return (
    <header className="flex justify-around items-center h-24 relative">
      <Image src={logo} alt={"Logo da página"} />
      <ul className="flex gap-16 text-black ">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Shop</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
      <ul className="flex gap-12">
        <button onClick={toggleFavorites}>
          <Heart size={23} color="#000" weight="bold" />
        </button>
      </ul>
      {toggleFav ? <Favorites /> : ""}
    </header>
  );
}

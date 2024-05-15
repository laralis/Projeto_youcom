"use client";
import { Heart } from "@phosphor-icons/react";
import { useState } from "react";
interface ProductCartProps {
  id: number;
  name: string;
  salePrice: number;
  listPrice: number;
  urlImage: string;
  favorited: boolean;
}
export default function ProductCart({
  id,
  name,
  salePrice,
  listPrice,
  urlImage,
  favorited,
}: ProductCartProps) {
  async function handleFavorites(newFavoritedValue: boolean) {
    await fetch(`http://localhost:3000/moveis/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ favorited: newFavoritedValue }),
    });
  }
  return (
    <div>
      <img src={urlImage} alt={""} className="w-48 h-40" />

      <div className="p-4 flex flex-col gap-2 bg-gray-300">
        <div className="flex items-center justify-between">
          <h3 className=" font-semibold text-xl leading-tight">{name}</h3>
          <button
            onClick={() => {
              handleFavorites(!favorited);
            }}
          >
            {favorited ? (
              <Heart size={20} color="#a53b3b" weight="fill" />
            ) : (
              <Heart size={20} color="#a53b3b" weight="bold" />
            )}
          </button>
        </div>
        <div className="flex justify-between">
          <strong className=" leading-snug font-semibold text-gray-800 text-lg">
            $ {salePrice}
          </strong>
          <span className=" leading-snug  text-gray-400 line-through">
            $ {listPrice}
          </span>
        </div>
      </div>
    </div>
  );
}

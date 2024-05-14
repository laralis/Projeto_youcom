import FavoritedProduct from "../favoritedProduct";
import { product } from "@/types/product";

export default async function Favorites() {
  const response = await fetch("http://localhost:3000/moveis", {
    next: {
      revalidate: 5,
    },
  });
  const products = await response.json();

  return (
    <aside className="absolute right-0 top-20 bg-white p-4 w-60">
      <h3 className="font-semibold text-xl mb-4">Favorites</h3>
      <FavoritedProduct />
      {products.map((product: product) => {
        if (product.favorited == true) {
          <FavoritedProduct />;
        }
      })}
    </aside>
  );
}

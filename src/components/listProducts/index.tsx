import ProductCart from "../productCard";
import { product } from "@/types/product";
export async function ListProducts() {
  const response = await fetch("http://localhost:3000/moveis", {
    next: { revalidate: 30 },
  });
  const products = await response.json();
  return (
    <section className="flex flex-col justify-center items-center mt-10">
      <h2 className="font-bold text-3xl text-gray-800 mb-4">Our Products</h2>
      <div className="grid grid-cols-3 gap-4 mb-4">
        {products.map((product: product) => (
          <ProductCart
            key={product.id}
            id={product.id}
            name={product.name}
            salePrice={product.salePrice}
            listPrice={product.listPrice}
            urlImage={product.imageURL}
          />
        ))}
      </div>
    </section>
  );
}

import img3 from "@/assets/Image3.png";
import Image from "next/image";
export default function FavoritedProduct() {
  return (
    <div className="flex gap-4">
      <Image src={img3} alt={"Imagem do produto"} className="w-16 rounded-md" />
      <div>
        <h4 className="text-base">Produto</h4>
        <div className="text-sm flex gap-4">
          <span className="text-gray-500">$ 1000</span>
          <span>$ 900</span>
        </div>
      </div>
    </div>
  );
}

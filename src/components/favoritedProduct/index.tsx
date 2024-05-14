interface FavoriteProductProps {
  name: string;
  salePrice: number;
  listPrice: number;
  image: string;
}
export default function FavoritedProduct({
  name,
  salePrice,
  listPrice,
  image,
}: FavoriteProductProps) {
  return (
    <div className="flex gap-4 mb-4">
      <img src={image} alt={"Imagem do produto"} className="w-16 rounded-md" />
      <div>
        <h4 className="text-base">{name}</h4>
        <div className="text-sm flex gap-4">
          <span>$ {salePrice}</span>
          <span className="text-gray-500 line-through">$ {listPrice}</span>
        </div>
      </div>
    </div>
  );
}

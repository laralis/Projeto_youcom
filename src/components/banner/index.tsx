import Image from "next/image";
import img1 from "@/assets/Image1.png";
import img2 from "@/assets/Image2.png";
import img3 from "@/assets/Image3.png";

export default function Banner() {
  return (
    <main className=" w-full flex flex-col items-center font-poppins gap-2 bg-gray-300 py-4">
      <h1 className="font-bold text-3xl">Browse The Range</h1>
      <span className="text-xl text-gray-500 mb-14">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </span>
      <div className="flex items-center gap-4 max-w-[700px]">
        <div className="flex flex-col items-center gap-8">
          <Image src={img1} alt={""} />
          <h2 className="font-semibold text-xl">Dining</h2>
        </div>
        <div className="flex flex-col items-center gap-8">
          <Image src={img2} alt={""} />
          <h2 className="font-semibold text-xl">Living</h2>
        </div>
        <div className="flex flex-col items-center gap-8">
          <Image src={img3} alt={""} />
          <h2 className="font-semibold text-xl">Bedroom</h2>
        </div>
      </div>
    </main>
  );
}

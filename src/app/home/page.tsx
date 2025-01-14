import Image from "next/image";
import fashion1 from "../../../public/images/fashion1.jpg";
import fashion10 from "../../../public/images/fashion10.jpeg"
import fashion3 from "../../../public/images/fashion3.jpg";
import fashion4 from "../../../public/images/fashion4.webp";
import fashion from "../../../public/images/fashion.jpg";
import Link from "next/link";

export default function Main() {
  return (
    <div className="bg-amber-300 font-sans px-6 py-12">
      <div className="container mx-auto flex justify-between items-center text-left">
        {/* Left side: Text and Button */}
        <div className="text-white sm:w-1/2 w-full">
        <h1 className="sm:text-6xl text-3xl text-black font-extrabold mb-4"> FASHION STORE</h1>
          <h2 className="sm:text-4xl text-3xl text-black font-bold mb-4">
            Discover Our New Collection
          </h2>
          <p className="text-base text-black mb-8">
            Elevate your style with our latest arrivals. Shop now and enjoy
            exclusive discounts!
          </p>
          <Link href={"/products"}>
          <button
            type="button"
            className="bg-black text-sm text-white-600 font-semibold py-3 px-6 rounded-lg hover:bg-slate-100"
          >
            Get Started
          </button></Link>
        </div>

        {/* Right side: Large Banner Image */}
        <div className="sm:w-1/2 w-full">
          <Image
            src={fashion}
            alt="Banner Image"
            className="object-cover w-full h-full rounded-lg shadow-lg"
            height={500} // Adjust the height as per your need
            width={500}  // Adjust the width as per your need
          />
        </div>
      </div>

      {/* Categories Section */}
      <div className="flex justify-center space-x-4 py-10">
        {/* Category 1: Clothes */}
        <div className="relative w-1/5">
          <Image
            src={fashion1}
            alt="Clothes"
            className="object-cover w-full h-full rounded-lg shadow-lg"
            height={250}
            width={250}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
            <p className="text-white text-xl font-bold">Clothes</p>
          </div>
        </div>

        {/* Category 2: Bags */}
        <div className="relative w-1/5">
          <Image
            src={fashion10}
            alt="Bags"
            className="object-cover w-full h-full rounded-lg shadow-lg"
            height={250}
            width={250}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
            <p className="text-white text-xl font-bold">Bags</p>
          </div>
        </div>

        {/* Category 3: Shoes */}
        <div className="relative w-1/5">
          <Image
            src={fashion3}
            alt="Shoes"
            className="object-cover w-full h-full rounded-lg shadow-lg"
            height={250}
            width={250}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
            <p className="text-white text-xl font-bold">Shoes</p>
          </div>
        </div>

        {/* Category 4: Accessories */}
        <div className="relative w-1/5">
          <Image
            src={fashion4}
            alt="Accessories"
            className="object-cover w-full h-full rounded-lg shadow-lg"
            height={250}
            width={250}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
            <p className="text-white text-xl font-bold">Accessories</p>
          </div>
        </div>
      </div>
    </div>
  );
}
